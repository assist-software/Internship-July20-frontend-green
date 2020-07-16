import React, { Component } from 'react';
import './Header.css';
import '../Common/Styles.css'
import { Button } from 'semantic-ui-react';
import AddCoach from '../Coaches/AddCoach/AddCoach';

class Header extends Component {
    state = {
        openAddCoach: false,
        title: 'Add Coach'
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
            <div className="Header">
                <h1 className="title">{this.props.title}</h1>
    
                <div className="addNew">
                    <input type="text" placeholder="Input Placeholder" />
                    <Button color='green' onClick={this.openModal}>
                        Add new
                    </Button>
                </div>
                <AddCoach 
                            title={this.state.title}
                            open={this.state.openAddCoach} 
                            openClick={this.openModal}
                          closeClick={this.closeModal}/>
            </div>
        );
    }
   
}


export default Header;