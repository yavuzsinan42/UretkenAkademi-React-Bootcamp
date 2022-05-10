import Kategori from "./components/Kategori";
import Navigate from "./components/Navigate";
import UrunListesi from "./components/UrunListesi";
import { Container, Row, Col } from "reactstrap";

import React, { Component } from "react";
import alertify from "alertifyjs";

class App extends Component {
  state = { seciliKategori: "", urunler: [], seciliId: "1", sepet: [] };
  kategoriDegistir = (kategori) => {
    this.setState({
      seciliKategori: kategori.categoryName,
    });
    this.setState({
      seciliId: kategori.id,
    });
  };
  sepeteEkle = (urun) => {
    let yeniUrun = this.state.sepet;
    var urunEklendi = yeniUrun.find((s) => s.urun.id == urun.id);
    if (urunEklendi) {
      urunEklendi.quantity++;
    } else {
      yeniUrun.push({ urun: urun, quantity: 1 });
    }
    this.setState({ sepet: yeniUrun });
    alertify.success(urun.productName + " Sepete Eklendi!");
  };
  sepettenCikar = (urun) => {
    let kalanUrunler = this.state.sepet.filter((s) => s.urun.id != urun.id);
    this.setState({ sepet: kalanUrunler });
    alertify.error(urun.productName + " Sepetten Çıkarıldı!");
  };
  urunGetir() {
    fetch("http://localhost:3000/products")
      .then((result) => result.json())
      .then((data) => this.setState({ urunler: data }));
  }
  componentDidMount() {
    this.urunGetir();
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Navigate
              sepet={this.state.sepet}
              sepettenCikar={this.sepettenCikar}
            />
          </Row>
          <Row>
            <Col md="3" xs="5">
              <Kategori
                kategoriDegistir={this.kategoriDegistir}
                seciliKategori={this.state.seciliKategori}
              />
            </Col>
            <Col md="9" xs="7">
              <UrunListesi
                sepeteEkle={this.sepeteEkle}
                seciliKategori={this.state.seciliKategori}
                urunler={this.state.urunler}
                categoryId={this.state.seciliId}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
