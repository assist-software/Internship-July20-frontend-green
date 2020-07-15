import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import '../../Common/Styles.css';

const AddClub = () =>  (
        <Modal trigger={<Button>Add / Edit Club</Button>} closeIcon>
        <Header content='Add / Edit Club' />
        
        <Modal.Content>
          <form className="form-inputs">
            <label for="name">Name</label>
                <input name="name" type="text" placeholder="Name" required/>

            <label for="coach">Assign a Coach </label>
                  <select name="coach" type="select" placeholder="Coach" required>
                      <option value="coachX">Coach X</option>
                      <option value="coachY">Coach Y</option>
                  </select>
            
            <div className="invite-members">
            <Button color='blue'>
                        invite members
                    </Button>
            <p>(Optional)</p>
            </div>
        </form>
        </Modal.Content>
        
        <Modal.Actions className="form-btns">
        <Button color='black'>
             delete
          </Button>
          <Button color='red'>
             Cancel
          </Button>
          <Button color='green'>
             Add
          </Button>
        </Modal.Actions>
      </Modal>
    );

export default AddClub;