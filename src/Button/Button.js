import React, { Component } from 'react';

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
        {this.props.title}
      </button>
    )
  }
} 
