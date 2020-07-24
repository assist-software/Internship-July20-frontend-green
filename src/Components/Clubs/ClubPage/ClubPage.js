import React, { Component } from 'react';
import Members from './Members';
import './ClubPage.css';
import { withRouter } from 'react-router-dom';

class ClubPage extends Component {

    state = {
        pageID: null,
        clubs: [
            {
                title: 'club 1',
                coach: 'Esther Wilson',
                members: [
                    {
                        "img": "",
                        "name": "Dianne Robertson",
                        "gender": "female",
                        "age": "22",
                        "primary": "Running",
                        "secondary": "Biking"
                    },
                    {
                        "img": "",
                        "name": "Eduardo Miles",
                        "gender": "male",
                        "age": "22",
                        "primary": "Biking",
                        "secondary": "Running"
                    },
                    {
                        "img": "",
                        "name": "Lily Jones",
                        "gender": "female",
                        "age": "22",
                        "primary": "Running",
                        "secondary": "Biking"
                    }
                ]
            },
            {
                title: 'club2',
                coach: 'Esther Wilson',
                members: [
                    {
                        "img": "",
                        "name": "Dianne Robertson",
                        "gender": "female",
                        "age": "22",
                        "primary": "Running",
                        "secondary": "Biking"
                    },
                    {
                        "img": "",
                        "name": "Eduardo Miles",
                        "gender": "male",
                        "age": "22",
                        "primary": "Biking",
                        "secondary": "Running"
                    },
                    {
                        "img": "",
                        "name": "Lily Jones",
                        "gender": "female",
                        "age": "22",
                        "primary": "Running",
                        "secondary": "Biking"
                    }
                ]
            },
            {
                title: 'club 3',
                coach: 'Esther Wilson',
                members: [
                    {
                        "img": "",
                        "name": "Dianne Robertson",
                        "gender": "female",
                        "age": "22",
                        "primary": "Running",
                        "secondary": "Biking"
                    },
                    {
                        "img": "",
                        "name": "Eduardo Miles",
                        "gender": "male",
                        "age": "22",
                        "primary": "Biking",
                        "secondary": "Running"
                    },
                    {
                        "img": "",
                        "name": "Lily Jones",
                        "gender": "female",
                        "age": "22",
                        "primary": "Running",
                        "secondary": "Biking"
                    }
                ]
            },
            {
                title: 'club 4',
                coach: 'Esther Wilson',
                members: [
                    {
                        "img": "",
                        "name": "Dianne Robertson",
                        "gender": "female",
                        "age": "22",
                        "primary": "Running",
                        "secondary": "Biking"
                    },
                    {
                        "img": "",
                        "name": "Eduardo Miles",
                        "gender": "male",
                        "age": "22",
                        "primary": "Biking",
                        "secondary": "Running"
                    },
                    {
                        "img": "",
                        "name": "Lily Jones",
                        "gender": "female",
                        "age": "22",
                        "primary": "Running",
                        "secondary": "Biking"
                    }
                ]
            },
            {
                title: 'club 5',
                coach: 'Esther Wilson',
                members: [
                    {
                        "img": "",
                        "name": "Dianne Robertson",
                        "gender": "female",
                        "age": "22",
                        "primary": "Running",
                        "secondary": "Biking"
                    },
                    {
                        "img": "",
                        "name": "Eduardo Miles",
                        "gender": "male",
                        "age": "22",
                        "primary": "Biking",
                        "secondary": "Running"
                    },
                    {
                        "img": "",
                        "name": "Lily Jones",
                        "gender": "female",
                        "age": "22",
                        "primary": "Running",
                        "secondary": "Biking"
                    }
                ]
            }
        ]

    }

    componentDidMount() {
        const pageID = parseInt(this.props.match.params.id);
        this.setState({ pageID: pageID });
        console.log(pageID);
    }

    render() {

        if (localStorage.getItem("token")) {

            const iD = this.state.pageID;


            return (
                <div className='ClubPage' style={{ padding: '60px 40px' }}>

                    <p className="club-title">{iD ? this.state.clubs[iD].title : null}</p>
                    <img className="club-edit" src={require('./img/edit.png')} />

                    <div className="club-coach">
                        <p>Coach</p>
                        <p>{iD ? this.state.clubs[iD].coach : null}</p>
                    </div>

                    <div className='club-btns'>
                        <p className="active-btn">Members (<span>{iD ? this.state.clubs[iD].members.length : null}</span>)</p>
                        <p>Requests</p>
                    </div>

                    <div className="filterAdd">
                        <input type="text" placeholder="Input Placeholder" />
                        <button className="addBtn">Add new</button>
                    </div>

                    <div className="clubMembers">
                        {/* <Members members={iD ? this.state.clubs[iD].members : null} /> */}
                    </div>

                </div>
            );

        } else {
            localStorage.clear();
            console.log("logout Success")
            this.props.history.push(`/login`)
        }
    }
};

export default withRouter(ClubPage);