import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import '../../Common/Styles.css';

const AddCoach = () =>  (
        <Modal trigger={<Button>Add / Edit Coach Modal</Button>} closeIcon>
        <Header content='Add / Edit Coach' />
        <hr/>
        <Modal.Content>
          <form className="form-inputs">
            <label for="first-name">First Name</label>
                <input name="first-name" type="text" placeholder="First Name" required/>

            <label for="last-name">Last Name</label>
                <input name="last-name" type="text" placeholder="Last name" required/>

            <label for="email">Email Address</label>
                <input name="email" type="email" placeholder="Enter Your Email" required/>
                      
            <label for="club">Club Assign </label>
                  <select name="club" type="select" placeholder="Club Assign" required>
                      <option value="clubX">Club X</option>
                      <option value="clubY">Club Y</option>
                  </select>

          </form>
        </Modal.Content>
        <hr/>
        <Modal.Actions>
          <Button color='red'>
             Cancel
          </Button>
          <Button color='green'>
             Add
          </Button>
        </Modal.Actions>
      </Modal>
    );

export default AddCoach;