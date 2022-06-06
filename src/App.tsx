import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import Navbar from './components/navbar/navbar';
import Main from './pages/main/main';

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Main></Main>
    </BrowserRouter>
  );
}

export default App;
