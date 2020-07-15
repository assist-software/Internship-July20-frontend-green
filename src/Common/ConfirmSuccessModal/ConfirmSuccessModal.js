import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import '../../Common/Styles.css';
import './ConfirmSuccessModal.css';

const ConfirmSuccessModal = () =>  (
    
         <Modal  trigger={<Button>Confirm Success Modal</Button>} closeIcon>
         <div id="delete-modal">
         <Header id="delete-header" icon='check circle outline' content='Delete Coach' />
         
   
            
        <Modal.Content id="delete-content">
          <p>
           Athlete “Wade Steward” was added on “ASSIST Biking Club”
          </p>
        </Modal.Content>
        
      
        <Modal.Actions>
          <Button color='green'>
             Close
          </Button>
        </Modal.Actions>
        </div>
      </Modal>
    
       
    );

export default ConfirmSuccessModal;