
import { ListGroup, ListGroupItem } from "reactstrap";
import React, { Component } from 'react'

export default class Kategori extends Component {
  constructor(props){
    super(props)
    this.state = {
      kategoriler: [
        { kategoriId: 1, kategoriIsim: "Bilgisayar" },
        { kategoriId: 2, kategoriIsim: "Kozmetik" },
        { kategoriId: 3, kategoriIsim: "Elektronik" },
        { kategoriId: 4, kategoriIsim: "Beyaz Eşya" },
      ],
      
    }
  }
  
  render() {
    return (
      <div>
        <h3>Kategoriler</h3>
        <ListGroup>
          {this.state.kategoriler.map(kategori => (
            <ListGroupItem key={kategori.kategoriId} onClick={()=>this.props.kategoriDegistir(kategori)}>
              {kategori.kategoriIsim}
            </ListGroupItem>
          ))}
        
      </ListGroup>
      <h4>{this.props.seciliKategori}</h4>
    </div>
    )
  }
}
