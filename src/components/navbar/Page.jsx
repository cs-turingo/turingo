// importação do componente link para navegar pelas rotas
import { Link } from "react-router-dom";

// importação das rotas
import { routes } from "../../settings/BrowserRouter";

// importação do estilo
import styles from "./Page.module.css";

// importação de ícones
import { IoMdClose } from "react-icons/io";

export default function Navbar ({navBarStatus, setNavBarStatus}) {
  return (
    <div className={`
      ${styles.headerVersion}
      ${!navBarStatus && styles.closed}`}
      onClick={() => {setNavBarStatus(!navBarStatus)}}
    >
      <div className={`
        ${styles.navBar}
        ${!navBarStatus && styles.closed}
      `}>
        <IoMdClose className={`${styles.iconCloseNavBar}`} onClick={() => {setNavBarStatus(!navBarStatus)}}/>
        <ul className={`${styles.navBarBody}`}>
          {
            routes.map((item, index) => {
              return ( 
                <li key={index} onClick={() => {setNavBarStatus(!navBarStatus)}}>
                  <Link to={item.path} className={styles.navBarItem}>
                    {item.name}
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
}
