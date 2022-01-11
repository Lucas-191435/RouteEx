import React from "react";


import {Link, NavLink, useNavigate, useParams, Routes, Route} from 'react-router-dom';
import ProdutoAvalicao from "./ProdutoAvalicao";
import ProdutoDescricao from "./ProdutoDescricao";

const Produto = ()=>{
  
  const params = useParams();
  return(
    <div>
      <h1>Produto {params.id}</h1>
      
      <br></br>
      <ul>
        <li><Link to=''>Descricao</Link ></li>
        <li><Link to='Avalicao'>Avalicao</Link ></li>
      </ul>
      <br></br>
      <Routes>
        <Route path='' element={<ProdutoDescricao />}></Route>
        <Route path='Avalicao' element={<ProdutoAvalicao />}></Route>
      </Routes>
    </div>
    
  )
}

export default Produto;