import React, { Component } from 'react';
import './CoachTable.css';
import AddCoach from '../AddCoach/AddCoach';
// import { render } from '@testing-library/react';

class Row extends Component  {
    state = {
        openAddCoach: false,
        title: 'Edit Coach'
    }
    openModal = () => {
        this.setState({openAddCoach: true})
        console.log("...")
    }
    closeModal = () => {
        this.setState({openAddCoach: false})
    }
    render () {
        return (
            <tbody>
            <tr className="Row">
                <td><input type="checkbox" /></td>
                <td>{this.props.firstName} {this.props.lastName}</td>
                <td>{this.props.email}</td>
                <td>{this.props.club}</td>
                <td>
                    <button className="btn-edit" onClick={this.openModal} ></button>
                    <button className="btn-delete" ></button>
                </td>
            </tr>
            <AddCoach 
                title={this.state.title}
                open={this.state.openAddCoach} 
                openClick={this.openModal}
                closeClick={this.closeModal}
                firstName={this.props.firstName}
                lastName={this.props.lastName}
                email={this.props.email}
                club={this.props.club} />
            </tbody>
        )
    }
  
};

export default Row;