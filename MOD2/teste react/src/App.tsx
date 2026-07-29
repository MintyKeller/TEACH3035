import React from 'react';

import './App.css';
import {Container} from './components/Container'; 
import {Text} from './components/Text' //importando os childrens
import {Title} from './components/Title'

import {BrowserRouter,Routes,Route} from 'react-router-dom'//importando os componentes do react-router-dom
//importando as paginas
import { About } from "./pages/About";
import { Categories } from './pages/Categories'
import { User } from './pages/User'
import { Home } from './pages/Home'
// IMPORTANDO PELO INDEX.TS
import { Login,Profile} from "./pages"


function App() {
  return (
    <div className="App">
      <Container children={<Text/>}/>
      <Container children={<Title/>}/>
////////////////////////////////////////////////////////
<BrowserRouter>
      <Routes>
        <Route path="*" element={<h1>Página não encontrada</h1>} />
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/categorias" element={<Categories />} />
        <Route path="/usuario" element={<User />} />
        ///////////////////////////////////////////////////
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>



    </div>
  );
}

export default App;
