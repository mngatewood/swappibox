import React, { Component } from 'react';
import PeopleImage from './assets/images/people.svg';
import PlanetsImage from './assets/images/planets.svg';
import VehiclesImage from './assets/images/vehicles.svg';


export default class Button extends Component {
  constructor({ fetchPeople }) {
    super();
  }

  categoryClick = (title) => {
    if(title === "People") {
      this.props.fetchPeople();
    }
  }

  render () {

    return (
      <button id={this.props.title} 
        onClick={() => this.categoryClick(this.props.title)}>
        <img src={this.props.image} alt={this.props.image} />
        {this.props.title}
      </button>
    )
  }
} 
