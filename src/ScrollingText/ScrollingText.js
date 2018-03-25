import React from 'react';
import PropTypes from 'prop-types';
import './ScrollingText.css';

export const ScrollingText = ({film}) => {
  const year = film.date;
  if (year) {
    return(
      <div className="scrolling-text">
        <p>{film.text}</p>
        <p>{film.title}</p>
        <p>{year}</p>
      </div>
    )
  }
} 
