import React, { Component } from 'react';
import Athletes from './Athletes';
import Axios from '../../../axios';
import Pagination from '../../Common/Pagination/Pagination'

import './AthletesPage.css';

class athletesComponent extends Component {
    state = {
        members: [
            { img: '', name: 'Dianne Robertson', gender: 'male', age: '26', primary: '12d2ca', secondary: 'a qfas' },
            { img: '', name: 'Wendy Watson', gender: 'male', age: '15', primary: 'avew s', secondary: 'a qfas' },
            { img: '', name: 'Bessie Richards', gender: 'male', age: '26', primary: 'csacas', secondary: 'a qfas' },
            { img: '', name: 'Wendy Watson', gender: 'male', age: '37', primary: '12d2ca', secondary: 'a qfas' },
            { img: '', name: 'Bessie Richards', gender: 'male', age: '58', primary: '12d2ca', secondary: 'a qfas' },
            { img: '', name: 'Dianne Robertson', gender: 'male', age: '53', primary: '12d2ca', secondary: 'a qfas' },
            { img: '', name: 'Wendy Watson', gender: 'male', age: '36', primary: '12d2ca', secondary: 'a qfas' },
            { img: '', name: 'Bessie Richards', gender: 'male', age: '26', primary: 'zxcasc', secondary: 'a qfas' },
            { img: '', name: 'Dianne Robertson', gender: 'male', age: '26', primary: '12d2ca', secondary: 'a qfas' },
            { img: '', name: 'Bessie Richards', gender: 'male', age: '26', primary: '12d2ca', secondary: 'a qfas' },
            { img: '', name: 'Wendy Watson', gender: 'male', age: '26', primary: '12d2ca', secondary: 'a qfas' },
            { img: '', name: 'Dianne Robertson', gender: 'male', age: '26', primary: '12d2ca', secondary: 'a qfas' }
        ]
    };

    componentDidMount() {
        Axios.get('/athletes')
            .then(response => {
                this.setState({ members: response.data });
                console.log(response);
            }
            );
    }

    render() {
        return (
            <div className='ClubPage' id="AthletesWrapper" >

                <p className="club-title">Atheletes</p>

                <div className="filterAdd">
                    <input type="text" placeholder="Input Placeholder" />
                    <button className="addBtn">Add new</button>
                </div>

                <div className="clubMembers">
                    <Athletes members={this.state.members} />
                </div>

                <Pagination></Pagination>

            </div>
        );
    };
};

export default athletesComponent;