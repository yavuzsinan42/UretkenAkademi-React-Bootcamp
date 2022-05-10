import {Button, Table} from "reactstrap";
import React, { Component } from 'react'

export default class UrunListesi extends Component {
    
  render() {
    return (
      <div>
        <h3>{this.props.seciliKategori}</h3>
      <h2>UrunListesi</h2>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Stock</th>
            <th></th>

          </tr>
        </thead>
        <tbody>
          

          {this.props.urunler.filter(urun=>urun.categoryId==this.props.categoryId).map((urun,index)=>{
            return <tr key={index}>
            <td scope="row">{index}</td>
            <td>{urun.productName}</td>
            <td>{urun.unitPrice}</td>
            <td>{urun.quantityPerUnit}</td>
            <td>{urun.unitsInStock}</td>
            <td><Button outline color="success"
                  onClick={()=>this.props.sepeteEkle(urun)}> Ekle</Button></td>


          </tr> 
          }
          )}

          
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          
        </tbody>
      </Table>
    </div>
    )
  }
}
