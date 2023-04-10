import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import React from 'react';


function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer texto='Alvarito'/>
    <ItemDetailContainer />
    </>
  );
}

export default App;
