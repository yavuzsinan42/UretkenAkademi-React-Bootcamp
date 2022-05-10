import { Container, Row, Col } from "reactstrap";
import Celcius from "./components/Celcius";
import Kelvin from "./components/Kelvin";
import Fahrenheit from "./components/Fahrenheit";

import React, { Component } from "react";
import { Button } from "reactstrap";

class App extends Component {
  state = { currentTemperature: 0 };
  increaseTemperature = (value) => {
    this.setState({
      currentTemperature: value + 1,
    });
  };

  render() {
    return (
      <div className="App">
        <Container>
          <Row style={{ textAlign: "center" }}>
            <h1>Hava Nasıl</h1>
          </Row>
          <Row style={{ textAlign: "center" }}>
            <Col xs="4"></Col>
            <Col xs="4">
              <h3>Şu An Sıcaklık: {this.state.currentTemperature} Derece</h3>
              <Button
                color="primary"
                onClick={() =>
                  this.increaseTemperature(this.state.currentTemperature)
                }
                style={{ margin: "20px" }}
              >
                Sıcaklık Artır
              </Button>
              <h4>3 Birimde Sıcaklık Ölçümü</h4>
            </Col>
            <Col xs="4"></Col>
          </Row>
          <Row style={{ textAlign: "center", paddingTop: "20px" }}>
            <Col md="4" xs="4">
              <Celcius currentTemperature={this.state.currentTemperature} />
            </Col>
            <Col md="4" xs="4">
              <Fahrenheit
                fahrenheitTemperature={this.state.currentTemperature * 1.8 + 32}
              />
            </Col>
            <Col md="4" xs="4">
              <Kelvin
                kelvinTemperature={this.state.currentTemperature + 273.15}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
