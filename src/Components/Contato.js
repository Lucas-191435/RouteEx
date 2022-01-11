import React from "react";
import styles from './Contato.module.css';
import Head from "./Head";
import foto from "../img/contato.jpg"
import Header from "./Header";

const Contato = ()=> {
  return (
    <div className={styles.contato} >
      <Head title='Contato' description='Página de contato' />
      <img src={foto} />
      <div>
        <h1>Contato</h1>
        <ul className={styles.dados}>
          <li>santos2001@gmail.com</li>
          <li>Numero</li>
          <li>Endereço</li>
        </ul>
      </div>
    </div>
  );
}

export default Contato;
