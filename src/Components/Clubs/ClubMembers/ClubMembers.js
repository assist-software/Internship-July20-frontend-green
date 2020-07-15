import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import '../../Common/Styles.css';
import './ClubMembers.css';
import member from '../../Images/member.png'

const ClubMembers = () =>  (
    
         <Modal  trigger={<Button>Club Members Modal</Button>} closeIcon>
         <div id="member-modal">
         <img class ="round-img" src={member} />
         <Header id="member-header" 
          content='Lily Jones' />
   
         <p className="member-info">female, 26 years</p>
            
        <Modal.Content id="member-content">
          <div className="member-item one">
              <p className="member-info">primary sport</p>
              <p className="member-sport">Biking</p>
          </div>
          <div className="middle-line"></div>
          <div className="member-item two">
              <p className="member-info">secondary sport</p>
              <p className="member-sport">Running</p>
          </div>
        </Modal.Content>
        
      
        <Modal.Actions>
          <Button color='green'>
             Close
          </Button>
        </Modal.Actions>
        </div>
      </Modal>
    
       
    );

export default ClubMembers;