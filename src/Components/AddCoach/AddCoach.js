import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import '../../Common/Styles.css';

const AddCoach = () =>  (
        <Modal trigger={<Button>Show Modal</Button>} closeIcon>
        <Header content='Add Coach' />
        <Modal.Content>
          <input />
        </Modal.Content>
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