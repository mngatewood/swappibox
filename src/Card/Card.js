import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className="Card">
      <div className="title">
        <h3 className='card-title'>{props.name}</h3>
      </div>
      <main>
        <h4 className='stat-title'>{Object.keys(props)[1].toUpperCase()}: </h4>
        <p className='stat'>{props.species}</p>
        <h4 className='stat-title'>{Object.keys(props)[2].toUpperCase()}: </h4>
        <p className='stat'>{props.homeWorld}</p>
        <h4 className='stat-title'>{Object.keys(props)[3].toUpperCase()}: </h4>
        <p className='stat'>{props.population }</p>
        <button className="add-to-favorites">Add to Favorites</button>
      </main>
    </div>
  )
}

export default Card;