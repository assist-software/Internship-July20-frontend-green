import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import '../../Common/Styles.css';
import './ConfirmSuccessModal.css';

const ConfirmDeleteModal = () =>  (
        <Modal trigger={<Button>Confirm Success Modal</Button>} closeIcon>
        <Header icon='check circle outline' content='Delete Coach' />
        <hr/>
        <Modal.Content>
          <p>
           Athlete “Wade Steward” was added on “ASSIST Biking Club”
          </p>
        </Modal.Content>
        <hr/>
        <Modal.Actions>
          <Button color='green'>
             Close
          </Button>
        </Modal.Actions>
      </Modal>
    );

export default ConfirmDeleteModal;