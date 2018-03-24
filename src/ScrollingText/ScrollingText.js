import React from 'react';
import './ScrollingText.css';

export const ScrollingText = ({film}) => {
  const year = film.date;
  return(
    <div className="scrolling-text">
      <p>{film.text}</p>
      <p>{film.title}</p>
      <p>{year}</p>
    </div>
  )
} 
