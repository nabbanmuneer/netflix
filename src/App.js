import './App.css';
 import React from 'react'
import NavBar from './components/NavBar/NavBar';
import Banner from './components/banner/Banner';
import Rowpost from './components/RowPost/Rowpost';

 

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
      <Rowpost/>
    </div>
  );
}

export default App;
