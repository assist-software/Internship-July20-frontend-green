import React, { Component } from 'react';
import Athletes from './Athletes';
import { Redirect } from 'react-router-dom';
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

    filterHandler = (filter) => {
        // const filterArr = event.target.value;
        const members = this.state.members;
        const newMembersList = members.filter(member => member.name.includes(filter));
        console.log(newMembersList);
        return newMembersList;
    }

    render() {

        let members = this.state.members;

        if (localStorage.getItem("token")) {
            console.log("Already logged in!");

            return (
                <div className='ClubPage' id="AthletesWrapper" >

                    <p className="club-title">Atheletes</p>

                    <div className="filterAdd">
                        <input type="text" placeholder="Input Placeholder (Case sensitive!!)" onChange={e => this.filterHandler(e.target.value)} />
                        <button className="addBtn">Add new</button>
                    </div>

                    <div className="clubMembers">
                        <Athletes members={members} />
                    </div>

                    <Pagination></Pagination>

                </div>
            );
        } else {
            console.log("Please log in!");
            return <Redirect to={{ pathname: "/login" }} />;

        }
    };
};

export default athletesComponent;