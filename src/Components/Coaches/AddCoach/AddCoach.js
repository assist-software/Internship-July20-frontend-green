import React, { Component } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import '../../Common/Styles.css';

class AddCoach extends Component  {
      onOpen = () => {
        this.props.openClick();
      }
      onClose =() => {
        this.props.closeClick();
      }
     
      handleChange(event) {
        // this.setState{(value: event.target.value)};
        console.log(event.target.value)
       }
    render () {
      return   (
        <Modal  closeIcon 
        open={this.props.open}
        onOpen={this.onOpen}
        onClose={this.onClose}
        dimmer={true}>
        <Header content={this.props.title} />
        
        <Modal.Content>
          <form className="form-inputs">
            <label>First Name
                <input name="first_name" id="first_name" value={this.props.firstName} onChange={this.handleChange}
                type="text" placeholder="First Name" required/>
            </label>
            <label>Last Name
                <input name="last_name" id="last_name" value={this.props.lastName} onChange={this.handleChange}
                type="text" placeholder="Last name" required/>
            </label>
            <label>Email Address
                <input name="email" id="email" value={this.props.email} onChange={this.handleChange}
                type="email" placeholder="Enter Your Email" required/>
            </label>        
            <label>Club Assign
                  <select name="club" id="club" value={this.props.club} onChange={this.handleChange}
                  type="select" placeholder="Club Assign" required>
                      <option value="clubX">Club X</option>
                      <option value="clubY">Club Y</option>
                  </select>
            </label>
          </form>
        </Modal.Content>
        
        <Modal.Actions className="form-btns">
        <Button color='black'>
             delete
          </Button>
          <Button color='red' onClick={this.onClose}>
             Cancel
          </Button>
          <Button color='green'>
             Add
          </Button>
        </Modal.Actions>
      </Modal>
    );
    }
   
  }
export default AddCoach;