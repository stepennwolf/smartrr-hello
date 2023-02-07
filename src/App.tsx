import React from 'react';
import './App.css';
import appConfig from './config';
import {LastCurrencyConversionRatesWithData} from './components/LastCurrencyConversionRatesWithData';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Smartrr Hello</h1>
        <LastCurrencyConversionRatesWithData config={appConfig.currencyApi} />
      </header>
    </div>
  );
}



export default App;
