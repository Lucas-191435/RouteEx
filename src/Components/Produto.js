import React from "react";
import style from './Produto.module.css';
import Head from "./Head";
import { useParams } from "react-router-dom";

// fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);

const Produto = ()=> {
  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const {id} = useParams();

  React.useEffect(()=>{
    async function fetchProduto(url){
      try{
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduto(json);
      }catch(erro){
        setLoading('Aconteceu algum erro');
      }finally{
        setLoading(false)
      }
    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);


  if(produto === null) return null;
  if(loading) return <p className="loading"></p>
  if(error) return <p>{error}</p>
  // console.log(produto.nome);
  return (
    <section className={style.produto + ' animeLeft'}>
      <Head title={produto.id}
      description={'Produto ' + produto.nome}></Head>
      
      <div>
        {produto.fotos.map((foto)=>(
          <img src={foto.src} key={foto.src} />
        ))}
      </div>
      <div>
        <h1>{produto.nome}</h1>
        <span className={style.preco}>{produto.preco}</span>
        <p className={style.descricao}>{produto.descricao}</p>
      </div>
    </section>
  );
}

export default Produto;
