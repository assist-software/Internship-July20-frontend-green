import React, { Component } from "react";
import "./CoachTable.css";
import EditCoach from "../EditCoach/EditCoach";
import ConfirmDeleteModal from "../../Common/ConfirmDeleteModal/ConfirmDeleteModal";
// import { render } from '@testing-library/react';

class Row extends Component {
  state = {
    openEditCoach: false,
    title: "Edit Coach",
    openDeleteModal: false,
  };
  openEditModal = () => {
    this.setState({ openEditCoach: true });
    console.log("...");
  };
  closeEditModal = () => {
    this.setState({ openEditCoach: false });
  };
  openDeleteModal = () => {
    this.setState({ openDeleteModal: true });
  };
  closeDeleteModal = () => {
    this.setState({ openDeleteModal: false });
  };
  render() {
    return (
      <tbody>
        <tr className="Row">
          <td>
            <input type="checkbox" />
          </td>
          <td>
            {this.props.first_name} {this.props.last_name}
          </td>
          <td>{this.props.email}</td>
          <td>{this.props.club}</td>
          {/* <td>{this.props.club ? this.props.club.join(", ") : null}</td> */}
          <td>
            <button className="btn-edit" onClick={this.openEditModal}></button>
            <button
              className="btn-delete"
              onClick={this.openDeleteModal}
            ></button>
          </td>
        </tr>
        <EditCoach
          title={this.state.title}
          open={this.state.openEditCoach}
          openClick={this.openEditModal}
          closeClick={this.closeEditModal}
          first_name={this.props.first_name}
          last_name={this.props.last_name}
          email={this.props.email}
          club={this.props.club}
          id={this.props.id}
        />
        <ConfirmDeleteModal
          open={this.state.openDeleteModal}
          openClick={this.openDeleteModal}
          closeClick={this.closeDeleteModal}
          id={this.props.id}
          first_name={this.props.first_name}
          last_name={this.props.last_name}
        />
      </tbody>
    );
  }
}

export default Row;
