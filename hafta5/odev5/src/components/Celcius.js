

import React, { Component } from 'react'

export default class celcius extends Component {
  render() {
    return (
      <div><h3>Celcius:</h3> {this.props.currentTemperature}</div>
    )
  }
}
