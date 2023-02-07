import { useEffect, useState, useRef } from "react";
import { LastCurrencyConversionRates, ConversionRatesProp } from '../LastCurrencyConversionRates';
import { CurrencyConverterService } from '../../services/CurrencyConverterService';

/**
 * Component encapsulates data fetching for Currency Conversion Rates and render underlying LastCurrencyConversionRates
 * with appropriate data. Sort of HOC for LastCurrencyConversionRates
 *
 * @param config
 * @constructor
 */
export function LastCurrencyConversionRatesWithData({ config }: LastCurrencyConversionRatesWithDataProps) {
  const [conversionRates, setConversionRates] = useState<ConversionRatesProp[]>([]);
  const conversionRatesRef = useRef(conversionRates);

  conversionRatesRef.current = conversionRates;

  useEffect(() => {
    const currencyService = new CurrencyConverterService(config);

    currencyService
      .fetchConversionRatePerInterval(3600,(rate: number) => {
        const newConversionRates = conversionRatesRef.current.length >= 24
          ? conversionRatesRef.current.slice(1)
          : conversionRatesRef.current;

        setConversionRates([...newConversionRates, { date: new Date(), rate}])
      })

    return () => {
      currencyService.dispose();
    }
  }, [config]);

  return (
    <LastCurrencyConversionRates
      currencies={`${config.currencyFrom}/${config.currencyTo}`}
      conversionRates={conversionRates}
    />
  )
}

type LastCurrencyConversionRatesWithDataProps = {
  config: ConversionRatesConfig;
}


type ConversionRatesConfig = {
  endpoint: string;
  apiKey: string;
  currencyFrom: string;
  currencyTo: string;
}


export default LastCurrencyConversionRates;
