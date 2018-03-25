import React from 'react';
import PropTypes from 'prop-types';
import './ButtonContainer.css';

export const ButtonContainer = ({ favorites, fetchPeople }) => {
  const buttonKeys = ["People", "Planets", "Vehicles"]
  const buttons = buttonKeys.map((button) => {
    return (<Button 
      key={button} 
      title={button} 
      fetchPeople={fetchPeople}
    />
  )})
  return (
    <div className="button-container">
      {buttons}
    </div>
  )
} 

// export default ButtonContainer;