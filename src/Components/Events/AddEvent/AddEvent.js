import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import '../../Common/Styles.css';

const AddEvent = () =>  (
        <Modal trigger={<Button>Add / Edit Event</Button>} closeIcon>
        <Header content='Add / Edit Event' />
        
        <Modal.Content>
          <form className="form-inputs">
            <label for="name">Name</label>
                <input name="name" type="text" placeholder="Name" required/>

            <div className="grid-2-col">
             <div>
               <label for="date">Date</label>
                <input name="date" type="date" placeholder="Pick Date" required/>
             </div> 
             <div>
              <label for="Time">Time</label>
                 <input name="time" type="time" placeholder="Pick Time" required/>
             </div>
            </div>  

            <label for="location">Location </label>
                  <select name="location" type="select" placeholder="Location" required>
                      <option value="clubX">Club X</option>
                      <option value="clubY">Club Y</option>
                  </select>

            <label for="description">Description</label>
                <textarea rows="6"
                name="description" type="textarea" placeholder="Description" required />
            
            <div className="invite-members">
            <Button color='blue'>
                        invite members
                    </Button>
            <p>(Optional)</p>
            </div>
          <label for="upload">Event Cover</label>
                <input name="upload" type="file" placeholder="Upload File" required/>
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

export default AddEvent;