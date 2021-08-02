import React, { useState } from 'react';
import Load from '../components/quote/Load';
import Quote from '../components/quote/Quote';
import { fetchQuotes } from '../services/officeApi';


const OfficeQuote = () => {

  const [quote, setQuote] = useState({});
  const handleClick = async () => {
    const quote = await fetchQuotes();
    setQuote(quote);
  };

  return (
    <div>
      <Load onClick={handleClick} />
      <Quote
        character={quote.character}
        content={quote.content}
      />
    </div>
  );
};

export default OfficeQuote;