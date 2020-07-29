import React, { Component } from 'react';
import Members from './Members';
import './ClubPage.css';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const token = localStorage.getItem("token");

console.log("on page of the club")

class ClubPage extends Component {

    state = {
        club: null,
        clubTitle: null,
        pageID: null,
        showMembers: [true, "active-btn"],
        showRequests: [false, ""]
    }

    componentDidMount() {

        const pageID = parseInt(this.props.match.params.id);
        const clubTitle = this.props.match.params.title;

        console.log(pageID)


        this.setState({ pageID: pageID, clubTitle: clubTitle });



        console.log(this.state.club);
    }

    callRequest = (type) => {
        axios.post(`http://192.168.149.51:8001/api/clubs/members/`,
            {
                clubId: this.props.match.params.id,
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
        console.log(this.state.club);

    }

    showingMembers = (event) => {
        this.setState({ showMembers: [true, "active-btn"], showRequests: [false, ""] });
        console.log('this classname> ', event.target.className);
        event.target.className = this.state.showMembers[1];

        this.callRequest(1);
    }

    showingRequests = (event) => {
        this.setState({ showMembers: [false, ""], showRequests: [true, "active-btn"] });
        console.log('this classname> ', event.target.className);
        event.target.className = this.state.showRequests[1];

        this.callRequest(0);
    }

    accept = (id) => {
        console.log('accepted id> _', id);
        console.log('accepted club> _', this.state.pageID);
        axios.get(`http://192.168.149.51:8001/api/clubs/members_request/${this.state.pageID}/${id}/`,
            {
                headers: {
                    Authorization: `token ${token}`,
                },
            }).then((response) => {
                console.log(response);
            });
    }

    reject = (id) => {
        console.log('rejected id> _', id)
        console.log('rejected club> _', this.state.pageID)
        axios.delete(`http://192.168.149.51:8001/api/clubs/members_request/${this.state.pageID}/${id}/`,
            {
                headers: {
                    Authorization: `token ${token}`,
                },
            }).then((response) => {
                console.log(response);
            });
    }

    render() {

        if (localStorage.getItem("token")) {
            const iD = this.props.match.params.id;


            return (
                <div className='ClubPage' style={{ padding: '60px 40px' }}>

                    {/* <p className="club-title">{iD ? this.state.clubs[iD - 1].title : null}</p> */}
                    <p className="club-title">{iD ? (console.log(this.state.clubTitle), this.state.clubTitle) : null}</p>
                    <img className="club-edit" src={require('./img/edit.png')} />

                    <div className="club-coach">
                        <p>Coach</p>
                        {/* <p>{iD ? this.props.match.params.coach : null}</p> */}
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
                        <p className={this.state.showMembers[1]}
                            onClick={(event) => this.showingMembers(event)}>
                            Members
                            {/* (<span>{this.state.showMembers[1] ? this.state.club.length : null}</span>) */}
                        </p>
                        <p className={this.state.showRequests[1]}
                            onClick={(event) => this.showingRequests(event)}>
                            Requests
                            {/* (<span>{this.state.showRequests[1] ? this.state.club.length : null}</span>) */}
                        </p>
                    </div>

                    <div className="filterAdd">
                        <input type="text" placeholder="Input Placeholder" />
                        <button className="addBtn">Add new</button>
                    </div>

                    {
                        this.state.club ? (
                            <div className="clubMembers">
                                {this.state.club ? <Members display={this.state.showRequests[0]} rejectEvent={this.reject} acceptEvent={this.accept} members={iD ? this.state.club : null} /> : null}
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