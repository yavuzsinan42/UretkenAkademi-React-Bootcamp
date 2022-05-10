import React, { Component } from 'react'

export default class fahrenheit extends Component {
  render() {
    return (
      <div><h3>Fahrenheit:</h3> {this.props.fahrenheitTemperature}</div>
    )
  }
}
