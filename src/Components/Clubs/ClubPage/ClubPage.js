import React, { Component } from 'react';
import Members from './Members';
import './ClubPage.css';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const token = localStorage.getItem("token");

class ClubPage extends Component {

    state = {


        clubs: [
            {
                title: 'club 1',
                coach: 'Esther Wilson',
                members: [
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
                        "name": "Eduardo Miles",
                        "gender": "male",
                        "age": "22",
                        "primary": "Biking",
                        "secondary": "Running"
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
        ],
        club: null,
        pageID: null,
        showMembers: [true, "active-btn"],
        showRequests: [false, ""]
    }

    componentDidMount() {
        const pageID = parseInt(this.props.match.params.id);
        this.setState({ pageID: pageID });

        axios.post(`http://192.168.149.51:8001/api/clubs/members/`,
            {
                clubId: this.props.match.params.id,
                type: 0,
                pgNumber: 1,
                pgSize: 5
            },
            {
                headers: {
                    Authorization: `token ${token}`,
                },
            }).then((response) => {
                this.setState({ club: response.data });
                console.log(response);
            });

        console.log(this.state.club);
    }

    callRequest = (type) => {
        axios.post(`http://192.168.149.51:8001/api/clubs/members/`,
            {
                clubId: 11,
                type: type,
                pgNumber: 1,
                pgSize: 5
            },
            {
                headers: {
                    Authorization: `token ${token}`,
                },
            }).then((response) => {
                this.setState({ club: response.data });
                console.log(response);
            });
        // console.log(`http://192.168.149.51:8001/api/clubs/members/1/1/5/${type}`)
        console.log(this.state.club);

    }

    showingMembers = (event) => {
        this.setState({ showMembers: [true, "active-btn"], showRequests: [false, ""] });
        console.log('this classname> ', event.target.className);
        event.target.className = this.state.showMembers[1];

        this.callRequest(0);
    }

    showingRequests = (event) => {
        this.setState({ showMembers: [false, ""], showRequests: [true, "active-btn"] });
        console.log('this classname> ', event.target.className);
        event.target.className = this.state.showRequests[1];

        this.callRequest(1);
    }

    render() {

        if (localStorage.getItem("token")) {
            const iD = this.state.pageID;


            return (
                <div className='ClubPage' style={{ padding: '60px 40px' }}>

                    {/* <p className="club-title">{iD ? this.state.clubs[iD - 1].title : null}</p> */}
                    <p className="club-title">{iD ? (console.log(this.props.match.params.title), this.props.match.params.title) : null}</p>
                    <img className="club-edit" src={require('./img/edit.png')} />

                    <div className="club-coach">
                        <p>Coach</p>
                        <p>{iD ? this.props.match.params.coach : null}</p>
                    </div>

                    {/* butoane de membri sau requests ---------------------------------*/}
                    {/* {
                        this.state.club ? (console.log(this.state.club),
                            <div className='club-btns'>
                                <p className={this.state.showMembers[1]}
                                    onClick={(event) => this.showingMembers(event)}>
                                    Members (
                                    <span>
                                        {this.state.club ? this.state.club.length : null}
                                    </span>)</p>

                                <p className={this.state.showRequests[1]}
                                    onClick={(event) => this.showingRequests(event)}>
                                    Requests (
                                    <span>
                                        {this.state.club ? this.state.club.length : null}
                                    </span>)</p>
                            </div>
                        ) : <p>not receiving club members</p>
                    } */}
                    <div className='club-btns'>
                        <p className={this.state.showMembers[1]} onClick={(event) => this.showingMembers(event)}>Members (<span>{this.state.club ? this.state.club.length : null}</span>)</p>
                        <p className={this.state.showRequests[1]} onClick={(event) => this.showingRequests(event)}>Requests (<span>{this.state.club ? this.state.club.length : null}</span>)</p>
                    </div>

                    <div className="filterAdd">
                        <input type="text" placeholder="Input Placeholder" />
                        <button className="addBtn">Add new</button>
                    </div>

                    {
                        this.state.club ? (
                            <div className="clubMembers">
                                {this.state.club ? <Members members={iD ? this.state.club : null} /> : null}
                            </div>
                        ) : (<div className="clubMembers">
                            <p>no members to show</p>
                        </div>)
                    }


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