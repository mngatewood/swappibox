import React, { Component } from 'react';
import Stats from '../Utility/Stats'
import Card from '../Card/Card'

const People = (people, fetchPeople) => {
  const cardData = people.people.map((person, index) => {
    return <Card
      key={"person" + index}
      name={person.name}
      species={person.species}
      homeWorld={person.homeWorld}
      population={person.population}      
    />
  })
    return (
      <div className="card-container">
        {cardData}
      </div>
    )
}

export default People;
