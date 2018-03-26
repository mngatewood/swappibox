import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card'

const Favorites = (people) => {
  const cardData = people.people && people.people.map((person, index) => {
    return <Card
      key={"person" + index}
      name={person.name}
      species={person.species}
      homeWorld={person.homeWorld}
      population={person.population}
      toggleFavorite={people.toggleFavorite}

    />
  })
  return (
    <div className="card-container">
      {cardData}
    </div>
  )
}

Favorites.propTypes = {
  people: PropTypes.object
};

export default Favorites;
