/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import style from './Load.css';

function Load({ onClick }) {

  return (
    <div>
      <h2 className={style.random}>Twin Peaks</h2>
      <button className={style.loadButton} onClick={onClick}>Get a Quote!</button>
    </div>
  );

}

Load.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Load;
