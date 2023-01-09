import React, { useState } from "react";
import css from "./Header.module.css";
import Logo from '../../assets/logo.png'
import { SiHiveBlockchain } from 'react-icons/si'
import { GoThreeBars } from 'react-icons/go'

const Header = () => {
  const [ShowMenu, setShowMenu] = useState(true)
  const toggleMenu =  ()=>{
  setShowMenu((ShowMenu)=>!ShowMenu)
  }
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={Logo} />
        <span>$ MoneyMinds $</span>
      </div>
      <div className={css.right}>
        <div className={css.bars} onClick={toggleMenu}>
          <GoThreeBars />
        </div>

      </div>

      <div className={css.right}>
        <ul className={css.menu}
        style={{display: ShowMenu? 'inherit': 'none'}}>
          
            <li>Market</li>
            <li>Exchange</li>
            <li>Tutorial</li>
            <li>Wallet</li>
          
          </ul>
        <button type='text' className={css.search} placeholder="Login">Login</button>
        <SiHiveBlockchain className={css.cart} />
      </div>
    </div>
  );
};

export default Header;
