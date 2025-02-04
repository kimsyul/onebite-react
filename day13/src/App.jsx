import './App.css';
import CurrencyInput from './components/CurrencyInput';
import { useState } from 'react';

const EXCHANGE_RATE = 1300;

function App() {
  const [currency, setCurrency] = useState({
    krw: 0,
    usd: 0,
  });

  const onChange = (currency, value) => {
    if (currency === 'krw') {
      setCurrency({ krw: value, usd: value / EXCHANGE_RATE });
    } else {
      setCurrency({ krw: value * EXCHANGE_RATE, usd: value });
    }
  };

  return (
    <>
      <h1>환율 변환기 (KRW-USD)</h1>
      <section>
        <CurrencyInput currency={'krw'} value={currency.krw} onChange={onChange} />
      </section>
      <section>
        <CurrencyInput currency={'usd'} value={currency.usd} onChange={onChange} />
      </section>
    </>
  );
}

export default App;
