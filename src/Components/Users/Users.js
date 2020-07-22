import React from 'react';
import axios from 'axios';

// const apiUrl = "192.168.149.51:8000/user/signin/";

export default class Users extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response);
                this.setState({ posts: response.data })
            })
            .catch(error => {
                console.log(error)
            })
    };

    render() {
        const { posts } = this.state;
        return (
            <div>
                <p>
                    List of users
                    {
                        // posts.length;
                        posts.map((post, index) => {
                            if (index < 11) {
                                return <li>{posts[index].title}</li>
                            }
                        })
                    }
                </p>
            </div>
        )
    };
};
