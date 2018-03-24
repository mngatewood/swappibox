import React from 'react';
import './CardContainer.css';
import { Card } from '../Card/Card'

export const CardContainer = ({ people, fetchSpecies }) => {
  console.log(people)
  const cardData = people.map((person, index) => {
    const species = fetchSpecies(person);
    console.log(species)
    return <Card
              key={index} 
              name={person.name}
              species={species}
            />
  }) 
  const promptClass = people ? "hidden" : "default-prompt";
  return (
    <div>
      <div className={promptClass}>
        <h1>Select a Category</h1>
      </div>
      <div className="CardContainer">
        {cardData}
      </div>
    </div>
  )
} 

// export default CardContainer;