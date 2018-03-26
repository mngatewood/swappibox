import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Button.css';
import PeopleImage from './assets/images/people.svg';
import PlanetsImage from './assets/images/planets.svg';
import VehiclesImage from './assets/images/vehicles.svg';

const Button = () {

  return (
    <button id={this.props.title} 
      onClick={() => this.categoryClick(this.props.title)}>
      <img src={this.props.image} alt={this.props.image} />
      {this.props.title}
    </button>
  )
} 

export default Button;
