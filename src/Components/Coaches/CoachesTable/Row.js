import React, { Component } from "react";
import "./CoachTable.css";
import AddCoach from "../AddCoach/AddCoach";
import ConfirmDeleteModal from "../../Common/ConfirmDeleteModal/ConfirmDeleteModal";
// import { render } from '@testing-library/react';

class Row extends Component {
  state = {
    openEditCoach: false,
    title: "Edit Coach",
    openDeleteModal: false,
    editMode: true,
  };
  openEditModal = () => {
    this.setState({ openEditCoach: true });
    this.setState({ editMode: true });
    console.log(this.state.openEditCoach, this.state.editMode, "!!!");
  };
  closeEditModal = () => {
    this.setState({ openEditCoach: false, editMode: false });
  };
  openDeleteModal = () => {
    this.setState({ openDeleteModal: true });
  };
  closeDeleteModal = () => {
    this.setState({ openDeleteModal: false });
  };
  render() {
    const coach = this.props.coach;
    return (
      <tbody>
        <tr className="Row">
          <td>
            <input type="checkbox" />
          </td>
          <td>
            {coach.first_name} {coach.last_name}
          </td>
          <td>{coach.email}</td>
          <td>{coach.clubs}</td>
          {/* <td>{this.props.club ? this.props.club.join(", ") : null}</td> */}
          <td>
            <button
              className="btn-edit"
              onClick={() => this.openEditModal()}
            ></button>
            <button
              className="btn-delete"
              onClick={() => this.openDeleteModal()}
            ></button>
          </td>
        </tr>
        <AddCoach
          title={this.state.title}
          open={this.state.openEditCoach}
          openClick={this.openEditModal}
          closeClick={this.closeEditModal}
          editMode={this.state.editMode}
          coach={coach}
        />
        <ConfirmDeleteModal
          open={this.state.openDeleteModal}
          openClick={this.openDeleteModal}
          closeClick={this.closeDeleteModal}
          coach={coach}
        />
      </tbody>
    );
  }
}

export default Row;
