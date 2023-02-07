import {CurrencyConverterService} from './CurrencyConverterService';


describe('CurrencyConverterService', () => {

  beforeEach(() => {
    // Simple mock of fetch API
    // @ts-ignore
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({
          "amount": "1.0000",
          "base_currency_code": "AUD",
          "base_currency_name": "Australian Dollar",
          "rates": {
            "BRL": {
              "currency_name": "Brazilian real",
              "rate": 5.1760,
              "rate_for_amount": 1.0000
            }
          },
          "status": "success",
          "updated_date": "2019-07-05"
        }),
      })
    );
  })

  afterAll(() => {
    // @ts-ignore
    global.fetch = undefined;
  })

  it('fetchCurrencyRate() invokes fetch API and returns expected result', () => {
    const testOptions = {
      endpoint: 'http:/example.com',
      apiKey: 'some-key',
      currencyFrom: 'USD',
      currencyTo: 'BRL',
    };

    const service = new CurrencyConverterService(testOptions);

    return service.fetchCurrencyRate().then((rate: number) => {
      expect(rate).toBe(5.1760);
    });
  })


  it('fetchConversionRateEveryHour() invokes fetch API and then invokes the supplied callback', (done) => {
    const testOptions = {
      endpoint: 'http:/example.com',
      apiKey: 'some-key',
      currencyFrom: 'USD',
      currencyTo: 'BRL',
    }

    const service = new CurrencyConverterService(testOptions);

    service.fetchConversionRatePerInterval(1000,(rate) => {
        expect(rate).toBe(5.1760);
        // singe call of current call back is enough let's just finish the test
        service.dispose();
        done();
    });
  });
});
