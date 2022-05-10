import React, { Component } from "react";
import { Badge, Button, DropdownItem, DropdownMenu, DropdownToggle, NavItem, NavLink, UncontrolledDropdown } from "reactstrap";

export default class SepetOzeti extends Component {
    sepetOzeti(){
        return <UncontrolledDropdown nav inNavbar>
    <DropdownToggle nav caret>
      Sepet
    </DropdownToggle>
    <DropdownMenu end>
        {this.props.sepet.map((currentItem) => (
            <DropdownItem key={currentItem.urun.id}>
                <Badge color="danger" onClick={()=>this.props.sepettenCikar(currentItem.urun)}>X</Badge>
                {currentItem.urun.productName}
               <Badge color="success" style={{marginLeft:"5px"}}>{currentItem.quantity}</Badge> 
               {console.log(currentItem)}
            </DropdownItem>
            
        ))}
      
      <DropdownItem divider />
      <DropdownItem >
        Reset
      </DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>;
    }
    bosSepet(){
        return(
            <NavItem>
                <NavLink>
                    Sepetiniz Boş
                </NavLink>
            </NavItem>
        )
    }
    render() {
    return(
        <div>{this.props.sepet.length>0?this.sepetOzeti():this.bosSepet()}</div>
    )
  }
}
