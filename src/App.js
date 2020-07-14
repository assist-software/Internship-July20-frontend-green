import React from 'react';
import './App.css';
import './Buttons.css';

import AddCoach from './Components/AddCoach/AddCoach';
import ConfirmDeleteModal from './Common/ConfirmDeleteModal/ConfirmDeleteModal'
import ConfirmSuccessModal from './Common/ConfirmSuccessModal/ConfirmSuccessModal'

function App() {
  return (
    <div className="App">
      <AddCoach />
      <ConfirmDeleteModal />
      <ConfirmSuccessModal />

    </div>
  );
}

export default App;
