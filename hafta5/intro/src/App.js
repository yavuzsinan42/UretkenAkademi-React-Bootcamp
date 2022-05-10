import Kategori from "./components/Kategori";
import Navigate from "./components/Navigate";
import UrunListesi from "./components/UrunListesi";
import { Container, Row, Col } from "reactstrap";

import React, { Component } from "react";

class App extends Component {
  state = { seciliKategori: "" };
  kategoriDegistir = (kategori) => {
    this.setState({
      seciliKategori: kategori.kategoriIsim,
    })
  };


  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Navigate />
          </Row>
          <Row>
            <Col
              md="3"
              xs="5"
             
            >
              <Kategori  kategoriDegistir={this.kategoriDegistir}
              seciliKategori={this.state.seciliKategori}/>
            </Col>
            <Col md="9" xs="7">
              <UrunListesi />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
