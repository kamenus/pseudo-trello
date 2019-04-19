import React from 'react';
import './App.css';
import ColumnContainer from './components/ColumnContainer';

function App() {
  return (
    <div className="container">
      <div className="container__header">

      </div>
      <div className="container__content">
        <ColumnContainer />
      </div>
    </div>
  );
}

export default App;
