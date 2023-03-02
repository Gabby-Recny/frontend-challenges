import React from 'react';
import './App.css';
import NewGame from './Components/NewGame/NewGame';
import { Route, Routes } from "react-router-dom"


const App = () => {
    return (
      <section className='App'>
        <Routes>
          <Route path='/' element={<NewGame/>} />
        </Routes>
      </section>
    );
}

export default App;
