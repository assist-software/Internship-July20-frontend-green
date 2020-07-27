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
    editMode: false,
  };
  openEditModal = () => {
    this.setState({ openEditCoach: true, editMode: true });
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
    console.log(this.props.coach, "aici e coaach");
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
            <button className="btn-edit" onClick={this.openEditModal}></button>
            <button
              className="btn-delete"
              onClick={this.openDeleteModal}
            ></button>
          </td>
        </tr>
        <AddCoach
          title={this.state.title}
          open={this.state.openEditCoach}
          openClick={this.openEditModal}
          closeClick={this.closeEditModal}
          editMode={this.editMode}
          coach={coach}
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
