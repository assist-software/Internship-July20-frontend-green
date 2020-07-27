import React, { Component } from 'react';
import './EventPage.css';

class Participant extends Component {

    state = {
        compare: false,
        checked: false,
        img_url: './img/checkbox.png'
    }

    componentDidMount() {
        console.log(this.props.compare);
        this.setState({ compare: this.props.compare });
    }

    checkingBoxes() {
        this.setState({ checked: !this.state.checked });
        if (this.state.checked) {
            this.setState({ img_url: './img/checkbox.png' });
            this.props.showGraphic(!this.state.checked, this.props.id);
        } else {
            this.setState({ img_url: './img/checked.png' });
            this.props.showGraphic(!this.state.checked, this.props.id);
        }
    }


    render() {

        // if (!this.props.compare) {
        //     this.setState({ checked: null })
        // }

        return (

            <div className="Participant">
                <img src={require('./img/avatar.png')} alt="" />
                {this.props.compare ? (<img src={require(`${this.state.img_url}`)} onClick={() => this.checkingBoxes()} alt="" />) : null}
                {/* {this.props.compare ? console.log('poti compara') : console.log('nu mai poti')} */}
                <p className="p-name">{this.props.name}</p>
                <p className='p-details'>
                    {this.props.gender} <span>&#183;</span> {this.props.age} YEARS
                </p>

            </div>
        )
    }
}

export default Participant;