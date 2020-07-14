import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import '../../Common/Styles.css';

const ConfirmDeleteModal = () =>  (
        <Modal trigger={<Button>Confirm Delete Modal</Button>} closeIcon>
        <Header content='Delete Coach' />
        <hr/>
        <Modal.Content>
          <p>
          Are you sure you want to delete Aubrey Miles coach? 
          If you delete coach’s account, all data associated with this 
          profile will permanently deleted.
          </p>
        </Modal.Content>
        <hr/>
        <Modal.Actions>
          <Button color='red'>
             cancel
          </Button>
          <Button color='green'>
             Delete
          </Button>
        </Modal.Actions>
      </Modal>
    );

export default ConfirmDeleteModal;