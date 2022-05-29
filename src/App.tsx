import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AddPost from './page/AddPost';
import Home from './page/Home';
import Login from './page/Login';
import View from './page/View';

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/view' element={<View />}></Route>
          <Route path='/addPost' element={<AddPost />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
