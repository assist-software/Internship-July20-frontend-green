import React from 'react';
import './App.css';
import './Buttons.css';

import AddCoach from './Components/AddCoach/AddCoach';
import AddEvent from './Components/AddEvent/AddEvent';
import AddClub from './Components/AddClub/AddClub';
import AddAthlete from './Components/AddAthlete/AddAthlete';
import ClubMembers from './Components/ClubMembers/ClubMembers';
import ConfirmDeleteModal from './Common/ConfirmDeleteModal/ConfirmDeleteModal'
import ConfirmSuccessModal from './Common/ConfirmSuccessModal/ConfirmSuccessModal'

function App() {
  return (
    <div className="App">
      <AddCoach />    <hr />
      <AddEvent />  <hr />
      <AddClub />  <hr />
      <ClubMembers />  <hr />
      <AddAthlete />  <hr />
      <ConfirmDeleteModal />   <hr />
      <ConfirmSuccessModal />   <hr />


    </div>
  );
}

export default App;
