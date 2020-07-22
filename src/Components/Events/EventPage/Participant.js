import React, { Component } from 'react';
import './EventPage.css';

class Participant extends Component {

    state = {
        checkboxState: ['checkbox', 'checked'],
        checked: false
    }

    // toggleCheck = (e) => {
    //     if(!checked)
    // }

    render() {
        return (

            <div className="Participant">
                <img src={require('./img/avatar.png')} alt="" />
                <img onClick={this.toggleCheck} src={require(`./img/checkbox.png`)} alt="" />
                <p className="p-name">{this.props.name}</p>
                <p className='p-details'>
                    {this.props.gender} <span>&#183;</span> {this.props.age} YEARS
                </p>

            </div>
        )
    }
}

export default Participant;