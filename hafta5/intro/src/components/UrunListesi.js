import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const UrunListesi = () => {
  return (
    <div>
      <h2>UrunListesi</h2>
      <ListGroup numbered>
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Morbi leo risus</ListGroupItem>
        <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>
    </div>
  );
};

export default UrunListesi;
