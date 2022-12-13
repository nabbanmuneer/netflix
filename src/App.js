import './App.css';
import {Orginals,action } from './url.js';
 import React from 'react'
import NavBar from './components/NavBar/NavBar';
import Banner from './components/banner/Banner';
import Rowpost from './components/RowPost/Rowpost';

 

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
      <Rowpost title='Netflix Orginals' url={Orginals} />
      <Rowpost title='Action' url={action} isSmall/>
    </div>
  );
}

export default App;
