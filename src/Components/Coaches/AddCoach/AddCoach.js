import React, { Component } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import '../../Common/Styles.css';
import axios from '../../../axios'

class AddCoach extends Component  {
      constructor(props){
        super(props);
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
        this.addCoachHandler= this.addCoachHandler.bind(this);
      }

      onOpen = () => {
        this.props.openClick();
      }
      onClose =() => {
        this.props.closeClick();
      }
     
      handleChange(event) {
        let obj ={[event.target.name]:event.target.value} ;
       this.setState({...this.state,[event.target.name]: event.target.value})
        console.log(obj, this.state)

        // this.setState({addCoach : obj});
        // console.log(this.state.addCoach)
       }

        addCoachHandler() {
      
          axios.post('/coaches', this.state)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
         }
       
       
    render () {
      console.log(this.props, 'asdas')
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
                <input name="first_name" id="first_name" value={this.props.first_name} onChange={this.handleChange}
                type="text" placeholder="First Name" required/>
            </label>
            <label>Last Name
                <input name="last_name" id="last_name" value={this.props.last_name} onChange={this.handleChange}
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
          <Button color='green' onClick={this.addCoachHandler}>
             Add
          </Button>
        </Modal.Actions>
      </Modal>
    );
    }
   
  }
export default AddCoach;