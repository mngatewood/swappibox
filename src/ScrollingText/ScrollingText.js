import React from 'react';
import './ScrollingText.css';

export const ScrollingText = ({film}) => {

  return(
    <div className="scrolling-text">
      <p>{film.text}</p>
      <p>{film.title}</p>
      <p>{film.date}</p>
    </div>
  )
} 

// export default ScrollingText;