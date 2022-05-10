import React, { Component } from "react";
import { Button, Table } from "reactstrap";
export default class SepetListesi extends Component {
  renderSepet() {
    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Kategori ID</th>
            <th>Ürün İsmi</th>
            <th>Birim Fiyat</th>
            <th>Unit in Stock</th>
            <th>Adet</th>
          </tr>
        </thead>
        <tbody>
          {this.props.sepet.map((sepetUrun) => (
            <tr key={sepetUrun.urun.id} >
              <td>{sepetUrun.urun.id}</td>
              <td>{sepetUrun.urun.categoryId}</td>
              <td>{sepetUrun.urun.productName}</td>
              <td>{sepetUrun.urun.unitPrice}</td>
              <td>{sepetUrun.urun.unitsInStock}</td>
              <td>{sepetUrun.quantity}</td>
              <Button
                color="danger"
                outline
                onClick={() => this.props.sepettenCikar(sepetUrun.urun)}
              >
                Sil
              </Button>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
  render() {
    return <div>{this.renderSepet()}</div>;
  }
}
