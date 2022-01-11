import React from "react";
import { useEffect } from "react/cjs/react.development";
import { Link } from "react-router-dom";
import style from './Produtos.module.css';
import Head from "./Head";
import Produto from "./Produto";

// 'https://ranekapi.origamid.dev/json/api/produto'

const Produtos = ()=> {
 const [produtos, setProdutos] = React.useState(null);

 React.useEffect(()=>{
   fetch('https://ranekapi.origamid.dev/json/api/produto')
   .then((r)=> r.json()).then((json)=> setProdutos(json));
 }, []);

 console.log(produtos)
 if(produtos === null) return null;

  return (
    <div className={style.produtos}>
      {produtos.map((produto)=>(
        <Link to={'/Produto/' + produto.id} key={produto.id}>
          <img src={produto.fotos[0].src} />
          <h1 className={style.nome}>{produto.nome}</h1>
        </Link>
      ))}
    </div>
  );
}

export default Produtos;
