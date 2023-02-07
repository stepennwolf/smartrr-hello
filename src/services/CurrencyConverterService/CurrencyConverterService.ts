export interface ICurrencyConverterServiceOptions {
    endpoint: string;
    apiKey: string;
    currencyFrom: string;
    currencyTo: string;
}


/**
 * Service encapsulates integration with Currency Converter API
 * https://rapidapi.com/natkapral/api/currency-converter5
 */
export class CurrencyConverterService {

    private static apiHost: string = 'currency-converter5.p.rapidapi.com';

    private _apiEndpoint: string;
    private _apiKey: string;
    private _currencyFrom: string;
    private _currencyTo: string;
    private _lastFetch:  number | null;
    private _timer: any;

    constructor(options: ICurrencyConverterServiceOptions) {
        this._lastFetch = null;

        this._apiEndpoint = options.endpoint;
        this._apiKey = options.apiKey;
        this._currencyFrom = options.currencyFrom;
        this._currencyTo = options.currencyTo;
    }

    public fetchCurrencyRate(): Promise<number> {
        return fetch(`${this._apiEndpoint}?format=json&from=${this._currencyFrom}&to=${this._currencyTo}`, {
            headers: {
                'X-RapidAPI-Key': this._apiKey,
                'X-RapidAPI-Host': CurrencyConverterService.apiHost,
            }
        })
          .then(res => res.json())
          .then((data: any) => {
              try {
                  return data.rates[this._currencyTo].rate as number;
              } catch (err) {
                  return Promise.reject(new Error('Invalid response has been received from API server'));
              }
          })
    }

    /**
     * Make API call once per supplied interval and invoke callback with received data
     * @param {Number} interval - in seconds
     * @param {Function} callback
     */
    public fetchConversionRatePerInterval(interval: number, callback: (rate: number) => void) {
        if (this._timer) {
            clearTimeout(this._timer);
        }

        const timerIteration = () => {
            if (! this._lastFetch || Date.now() >= this._lastFetch) {
                this
                  .fetchCurrencyRate()
                  .then((rate) => callback(rate))
                  .finally(() => {
                      this._lastFetch = Date.now() + interval * 1000;
                      this._timer = setTimeout(timerIteration, 1000);
                  })
            } else {
                setTimeout(timerIteration, 1000);
            }
        };

        timerIteration();
    }

    public dispose() {
        if (this._timer) {
            clearTimeout(this._timer);
        }
    }
}

export default CurrencyConverterService;
