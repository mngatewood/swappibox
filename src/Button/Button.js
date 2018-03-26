import React from 'react';
import './Button.css';

const Button = () => {

  return (
    <button id={this.props.title} 
      onClick={() => this.categoryClick(this.props.title)}>
      <img src={this.props.image} alt={this.props.image} />
      {this.props.title}
    </button>
  );
};

export default Button;
