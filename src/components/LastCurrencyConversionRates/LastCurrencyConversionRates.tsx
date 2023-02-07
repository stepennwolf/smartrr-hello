export function LastCurrencyConversionRates({ conversionRates, currencies}: LastCurrencyConversionRatesProps) {
  if (conversionRates.length < 1) {
      return <p>Currency conversion rates haven't been provided yet</p>
  }

  return (
      <section className="LastCurrencyConversionRates">
        <h2>Last conversion rates for {currencies}</h2>
          <ul>
              {conversionRates.map(({ rate, date }) => {
                const formattedDate = new Intl.DateTimeFormat('en-US', {
                  year: 'numeric',
                  month: 'numeric',
                  day: 'numeric',
                  hour: 'numeric',
                  minute: 'numeric',
                  second: 'numeric',
                }).format(date);

                return <li key={formattedDate}>{formattedDate} - <strong>{rate}</strong></li>
              })}
          </ul>
      </section>
    )
}


export type LastCurrencyConversionRatesProps = {
    currencies: string; // <FROM>/<TO> format
    conversionRates: ConversionRatesProp[];
}

export type ConversionRatesProp = {
    rate: number;
    date: Date;
}

export default LastCurrencyConversionRates;
