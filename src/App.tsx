import React from 'react';
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import PostingList from './components/PostingList/PostingList';

function App() {
  return (
    <div className="App">
      <Header />
      <PostingList />
      <Footer />
    </div>
  );
}

export default App;
