import renderer from 'react-test-renderer';
import LastCurrencyConversionRates from './LastCurrencyConversionRates';

describe('<LastCurrencyConversionRates/>', () => {
  test('renders with empty data', () => {
    const testProps = {
      currencies: 'USD/BRL',
      conversionRates: []
    };

    const tree = renderer
      .create(<LastCurrencyConversionRates {...testProps} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });


  test('renders with supplied data', () => {
    const testProps = {
      currencies: 'USD/BRL',
      conversionRates: [
        {rate: 5.0123, date: new Date(1675786531551)},
        {rate: 7.0453, date: new Date(1675793731551)},
        {rate: 4.1432, date: new Date(1675800931551)},
      ]
    };

    const tree = renderer
      .create(<LastCurrencyConversionRates {...testProps} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
