import React, { Component } from 'react';
export default class Utility extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: "surprise",
    }
  }
  getStats = () => {
    console.log(this.props)
  }
}

