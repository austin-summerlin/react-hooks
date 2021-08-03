/* eslint-disable max-len */
import React, { useState } from 'react';
import Load from '../components/quote/Load';
import RandomQuote from '../components/quote/Quote';
import { fetchQuotes } from '../services/tpAPI';
import style from './TPQuote.css';


export default function TPQuote() {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    const quote = await fetchQuotes();
    setQuote(quote);
    setLoading(false);
  };
  return (
    <div>
      <Load onClick={handleClick} />
      {loading ? <h1 className={style.loading} >Loading...</h1> : <RandomQuote className={style.quote} {...quote} />}
    </div>
  );
}
