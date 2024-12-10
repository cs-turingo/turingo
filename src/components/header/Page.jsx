import Navbar from "../navbar/Page.jsx"; // importação do navbar
import styles from "./Page.module.css"; // importação da estilização
import { Link } from "react-router-dom"; // importação do componente link 
import logo from "../../images/app_logos/expanded_logo.png"; // importação da logo

// importação dos ícones
import { useState } from "react";
import { TbMenu } from "react-icons/tb";
import { LuCircleUser } from "react-icons/lu";

export default function Header () {
  // controle do estado do menu
  const [navBarStatus, setNavBarStatus] = useState(false);

  return (
    <header>
        <TbMenu
          onClick={() => {setNavBarStatus(!navBarStatus)}}
          className={`${styles.icon} ${styles.navBarIcon}`}
        />
      <Link to='/'><img className={styles.logo} src={logo} alt="turingo.com" /></Link>
      <LuCircleUser className={`${styles.icon} ${styles.userIcon}`}/>
      
      <Navbar navBarStatus={navBarStatus} setNavBarStatus={setNavBarStatus} className={styles.navBar}/>
    </header>
  );
}
