import React from 'react';
import PropTypes from 'prop-types';

const randomQuote = ({ quote, character }) => {

  return (
    <div>
      <figure>
        <p>{character}</p>
        <figcaption>{quote}</figcaption>
      </figure>
    </div>
  );
};

randomQuote.propTypes = {
  quote: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired
};

export default randomQuote;

