import React from 'react';
import './App.css';
import NewGame from './Components/NewGame/NewGame';
import Game from './Components/Game/Game';
import { Route, Routes } from "react-router-dom"


const App = () => {
    return (
      <section className='App'>
        <Routes>
          <Route path='/' element={<NewGame/>} />
          <Route path='/newGame' element={<Game/>} />
        </Routes>
      </section>
    );
}

export default App;
