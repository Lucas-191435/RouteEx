import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contato from "./Components/Contato";
import Footer from "./Components/Footer";
import Header from './Components/Header';
import Produto from "./Components/Produto";
import Produtos from "./Components/Produtos";
import styles from './App.css';


const App = ()=> {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Produtos/>} />
          <Route path="/Contato" element={<Contato />} />
          <Route path='/Produto/:id' element={<Produto />} />
        </Routes>
      </div>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
