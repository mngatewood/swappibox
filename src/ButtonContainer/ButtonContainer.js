import React from 'react';
import './ButtonContainer.css';
import Button from '../Button/Button'

const ButtonContainer = ({favorites}) => {
  const buttonKeys = ["People", "Planets", "Vehicles"]
  const buttons = buttonKeys.map((button) => {
    return <Button 
      key={button} 
      title={button} 
    />
  })
  return (
    <div className="ButtonContainer">
      {buttons}
    </div>
  )
} 

export default ButtonContainer;