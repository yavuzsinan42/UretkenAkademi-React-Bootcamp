
import { ListGroup, ListGroupItem } from "reactstrap";
import React, { Component } from 'react'

export default class Kategori extends Component {
  constructor(props){
    super(props)
    this.state = {
      kategoriler: [],
      
    }
  }
  
  kategoriGetir(){
    fetch("http://localhost:3000/categories")
    .then(result => result.json())
    .then(data => this.setState({kategoriler:data}))
    
  }
componentDidMount(){
  this.kategoriGetir()
  
}
  render() {
    return (
      <div>
        <h3>Kategoriler</h3>
        
        <ListGroup>
          {this.state.kategoriler.map(kategori => (
            <ListGroupItem key={kategori.id} 
            active={kategori.categoryName==this.props.seciliKategori?true:false}
            onClick={()=>this.props.kategoriDegistir(kategori)}>
              {kategori.categoryName}
            </ListGroupItem>
          ))}
        
      </ListGroup>
      <h4>{this.props.seciliKategori}</h4>
    </div>
    )
  }
}
