import React from 'react';

import './App.css';
import {Container} from './components/Container'; 
import {Text} from './components/Text' //importando os childrens
import {Title} from './components/Title'

function App() {
  return (
    <div className="App">
      <Container children={<Text/>}/>
      <Container children={<Title/>}/>
    </div>
  );
}

export default App;
