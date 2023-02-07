import React from 'react';
import { render, screen } from '@testing-library/react';
import {LastCurrencyConversionRatesWithData} from './LastCurrencyConversionRatesWithData';

describe('<LastCurrencyConversionRatesWithData/>', () => {
  beforeEach(() => {
    // Simple mock of fetch API
    // @ts-ignore
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({
          "rates": {
            "BRL": {
              "currency_name": "Brazilian real",
              "rate": "5.1760",
              "rate_for_amount": "1.0000"
            }
          },
        }),
      })
    );
  })

  afterAll(() => {
    // @ts-ignore
    global.fetch = undefined;
  })

  test('Wait until component fetches the data and renders it', async () => {
    const testProps = {
      config: {
        endpoint: 'http:/example.com',
        apiKey: 'some-key',
        currencyFrom: 'USD',
        currencyTo: 'BRL',
      }
    }

    render(<LastCurrencyConversionRatesWithData {...testProps} />);
    const element = await screen.findByText(/5.1760/i);
    expect(element).toBeInTheDocument();
  });
})
