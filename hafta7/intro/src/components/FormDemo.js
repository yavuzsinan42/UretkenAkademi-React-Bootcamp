import React, { Component } from 'react'

export default class FormDemo extends Component {
    state = {kullaniciAdi: "", sehirAdi: ""};
    onChangeHandle =(event) =>{
        //this.setState({kullaniciAdi: event.target.value})
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value});
    }
    onSubmitHandler =(event) =>{
        event.preventDefault()
        alert(this.state.kullaniciAdi)
    }
    render() {
    return (
      <div>
          <form onSubmit={this.onSubmitHandler}>
              <h3>Kullanici Adi</h3>
              <input name='kullaniciAdi' type="text" onChange={this.onChangeHandle}/>
              <h2>Kullanıcının Adı: {this.state.kullaniciAdi}</h2>

               <h3>Şehir </h3>
              <input  name='sehirAdi' type="text" onChange={this.onChangeHandle}/>
              <h2>Şehir Adı: {this.state.sehirAdi}</h2>  
              <input type="submit" value="Gönder"/>
          </form>
      </div>
    )
  }
}
