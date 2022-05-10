import React, { Component } from "react";
import { Table } from "reactstrap";

export default class Users extends Component {
  render() {
    return (
      <div>
        <Table dark hover striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {Array.from(this.props.userList).map((user) => (
              <tr key={user.id}>
                <td scope="row">{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
