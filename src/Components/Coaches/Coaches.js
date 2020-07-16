import React, {Component} from 'react';
import CoachTable from './CoachesTable/CoachTable';
import Header from '../Header/Header'

class Coaches extends Component {

    state = {
        headers: ['Coaches', 'Events', 'Clubs', 'Athletes'],
        coaches: [
          { firstName: 'Bessie', lastName:'Robertson', email: 'ken.wright@example.com', club: 'Biking Club, Running Club,.. +20' },
          { firstName: 'Jorge ', lastName:'Edwards', email: 'penny.nichols@example.com', club: 'Biking Club, Running Club,.. +6' },
          { firstName: 'Judith ', lastName:'Steward', email: 'scott.gilbert@example.com', club: 'Biking Club, Running Club,.. +8' },
        ]
    
      }

    
    render () {
        return (
            <div>
                <Header title={this.state.headers[0]} />
                <CoachTable 
                  coaches={this.state.coaches}/>
            </div>
        );
    }

}

export default Coaches;