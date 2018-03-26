import React from 'react';
import './Card.css';
import favoritesIcon from '../assets/images/favorites-icon.svg'

const Card = (props) => {
  if(props.name) {
    return (
      <div className="Card">
        <div className="title">
          <h3 className='card-title'>{props.name}</h3>
        </div>
        <div className='card-main'>
          <h4 className='stat-title'>{Object.keys(props)[1].toUpperCase()}: </h4>
          <p className='stat'>{props.species}</p>
          <h4 className='stat-title'>{Object.keys(props)[2].toUpperCase()}: </h4>
          <p className='stat'>{props.homeWorld}</p>
          <h4 className='stat-title'>{Object.keys(props)[3].toUpperCase()}: </h4>
          <p className='stat'>{props.population }</p>
          </div>
        <div className="footer" onClick={() => { props.toggleFavorite(props) }}>
            <button className="add-to-favorites">Add to Favorites</button>
            <img src={favoritesIcon} alt="favorites icon" />
          </div>
      </div>
    )
  }
}

export default Card;