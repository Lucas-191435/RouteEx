import React from "react";
import Home from "./Home";
import Produto from './Produto';
import Sobre from "./Sobre";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Header';

const App = ()=> {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sobre" element={<Sobre />} />
        <Route path="/Produto/:id/*" element={<Produto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
