import React, { Component } from 'react'

export default class kelvin extends Component {
  render() {
    return (
      <div><h3>Kelvin:</h3> {this.props.kelvinTemperature}</div>
    )
  }
}
