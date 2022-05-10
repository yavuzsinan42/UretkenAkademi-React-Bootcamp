import alertify from "alertifyjs";
import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

export default class FormDemo2 extends Component {
  state = { email: "", password: "", city: "", description: "" };
  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    alertify.success(this.state.email + " veritabanını eklendi");
    alertify.success(this.state.password + " veritabanını eklendi");
    alertify.success(this.state.city + " veritabanını eklendi");
    alertify.success(this.state.description + " veritabanını eklendi");
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="email">E Posta Adresi</Label>
            <Input
              type="email"
              name="email"
              id="email"
              onChange={this.handleChange}
              placeholder="E posta adresini giriniz"
            />
            <Label for="password">Şifre</Label>
            <Input
              type="password"
              name="password"
              id="password"
              onChange={this.handleChange}
              placeholder="Şifrenizi giriniz"
            />
            <Label for="description">Açıklama</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              onChange={this.handleChange}
              placeholder="Açıklama giriniz"
            />
          </FormGroup>
          <FormGroup>
            <Label for="city">Şehir</Label>
            <Input type="select" name="city" id="city" onChange={this.handleChange}>
                <option>İstanbul</option>
                <option>Ankara</option>
                <option>İzmir</option>
                <option>Bursa</option>
                <option>Kocaeli</option>
            </Input>
          </FormGroup>
            <Button type="submit">Gönder</Button>
        </Form>
      </div>
    );
  }
}
