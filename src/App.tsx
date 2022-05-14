import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './page/Home';
import Login from './page/Login';
import View from './page/View';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/view' element={<View />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
