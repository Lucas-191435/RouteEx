import React from "react";

import {Link, NavLink, useNavigate} from 'react-router-dom';

const Header = ()=>{
  
  return(
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/Sobre'>Sobre</Link></li>
        <li><Link to='/Produto/notebook'>Notebook</Link></li>
        <li><Link to='/Produto/smartphone'>smartphone</Link></li>
      </ul>
    </div>
  )
}

export default Header;