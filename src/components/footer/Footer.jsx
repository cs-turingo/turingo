import styles from './Footer.module.css';
import logo from '../../images/turingo_Logo.jpg'
import { useState } from 'react';

export default function Footer() {

    let [isActive, setIsActive] = useState(false);
    let [isActive1, setIsActive1] = useState(false);
    let [isActive2, setIsActive2] = useState(false);
    let [isActive3, setIsActive3] = useState(false);
    let plusLess= "+";

    const handleClick = () => {
        setIsActive(!isActive);
         // Alterna entre true e false
    };
    const handleClick1 = () => {
        setIsActive1(!isActive1); 
        // Alterna entre true e false
    };
    const handleClick2 = () => {
        setIsActive2(!isActive2);
        // Alterna entre true e false
    };
    const handleClick3 = () => {
        setIsActive3(!isActive3); 
        // Alterna entre true e false
    };

    return(
        <footer>
            <section className={styles.section1}>
                <div className={styles.sobreTuringo}>
                    <label className={styles.titleUl} onClick={handleClick}><i>{!isActive ? plusLess= "+" : plusLess="-"} </i>Sobre o Turingo</label>
                    <ul className={isActive ? styles.containerInfoAble : styles.containerInfo}>
                        <li>ALguma coisa</li>
                        <li>ALguma coisa</li>
                        <li>ALguma coisa</li>
                        <li>ALguma coisa</li>
                        <li>ALguma coisa</li>
                        <li>ALguma coisa</li>
                        <li>ALguma coisa</li>
                    </ul>
                </div>

                <div className={styles.explorar}>
                    <label className={styles.titleUl} onClick={handleClick1}><i>{!isActive1 ? plusLess= "+" : plusLess="-"} </i>Explorar</label>
                    <ul className={isActive1 ? styles.containerInfoAble : styles.containerInfo}>
                        <li>ALguma coisa</li>
                        <li>ALguma coisa</li>
                        <li>ALguma coisa</li>
                        <li>ALguma coisa</li>
                        <li>ALguma coisa</li>
                        <li>ALguma coisa</li>
                        <li>ALguma coisa</li>
                    </ul>
                </div>

                <div className={styles.facaNegocios}>
                    <label className={styles.titleUl} onClick={handleClick2}><i>{!isActive2 ? plusLess= "+" : plusLess="-"} </i>Faça negócios connosco</label>
                    <ul className={isActive2 ? styles.containerInfoAble : styles.containerInfo}>
                        <li>ALguma coisa</li>
                        <li>ALguma coisa</li>
                        <li>ALguma coisa</li>
                        <li>ALguma coisa</li>
                        <li>ALguma coisa</li>
                        <li>ALguma coisa</li>
                        <li>ALguma coisa</li>
                    </ul>
                </div>

                <div className={styles.sitesTuringo}>
                    <label className={styles.titleUl} onClick={handleClick3}><i>{!isActive3 ? plusLess= "+" : plusLess="-"} </i>Sites da Turingo</label>
                    <ul className={isActive3 ? styles.containerInfoAble : styles.containerInfo}>
                        <li>ALguma coisa</li>
                        <li>ALguma coisa</li>
                        <li>ALguma coisa</li>
                        <li>ALguma coisa</li>
                        <li>ALguma coisa</li>
                        <li>ALguma coisa</li>
                        <li>ALguma coisa</li>
                    </ul>
                </div>

            </section>
            <section className={styles.hidden}>

                    <div className={styles.sobreTuringo}>
                        <label className={styles.titleUl} >Sobre o Turingo</label>
                        <ul className={styles.containerInfoAble}>
                            <li>ALguma coisa</li>
                            <li>ALguma coisa</li>
                            <li>ALguma coisa</li>
                            <li>ALguma coisa</li>
                            <li>ALguma coisa</li>
                            <li>ALguma coisa</li>
                            <li>ALguma coisa</li>
                        </ul>
                    </div>

                    <div className={styles.explorar}>
                        <label className={styles.titleUl}>Explorar</label>
                        <ul className={styles.containerInfoAble}>
                            <li>ALguma coisa</li>
                            <li>ALguma coisa</li>
                            <li>ALguma coisa</li>
                            <li>ALguma coisa</li>
                            <li>ALguma coisa</li>
                            <li>ALguma coisa</li>
                            <li>ALguma coisa</li>
                        </ul>
                    </div>

                    <div className={styles.facaNegocios}>
                        <label className={styles.titleUl}>Faça negócios connosco</label>
                        <ul className={styles.containerInfoAble}>
                            <li>ALguma coisa</li>
                            <li>ALguma coisa</li>
                            <li>ALguma coisa</li>
                            <li>ALguma coisa</li>
                        </ul>
                        <label className={styles.titleUl}>Obter Aplicação</label>
                        <ul className={styles.containerInfoAble}>
                            <li>ALguma coisa</li>
                            <li>ALguma coisa</li>
                        </ul>
                    </div>

                    <div className={styles.sitesTuringo}>
                        <label className={styles.titleUl}>Sites da Turingo</label>
                        <ul className={styles.containerInfoAble}>
                            <li>ALguma coisa Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                            <li>ALguma coisa Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nostrum ipsa</li>
                        </ul>
                    </div>
            </section>

            <section className={styles.section2}>

                <div className={styles.containerSelect}>
                    <select>
                        <option value="1">$ dólares americanos</option>
                        <option value="2">Kz Kwanzas</option>
                        <option value="3">€ euros</option>
                        <option value="4">£ libras</option>

                    </select>
                    <select>
                        <option value="1">Estados Unidos</option>
                        <option value="2">Angola</option>
                        <option value="3">Portugal</option>
                        <option value="4">Inglaterra</option>
                        <option value="5">Espanha</option>
                        <option value="6">Bélgica</option>
                    </select>
                </div>

                <div className={styles.containerTermosUso}>

                    <img src={logo} alt="Logo Turingo" />

                    <div className={styles.containerTermos}>
                       
                        <small>© 2024 Turingo LLC All rights reserved.</small>
                       
                        <div className={styles.containerLinks}>
                            <span className={styles.links}>Terms of Use</span>
                            <span className={styles.links}>Privacy and Cookies Statement</span>
                            <span className={styles.links}>Cookie consent</span>
                            <span className={styles.links}>Site Map</span>
                            <span className={styles.links}>How the site works</span>
                            <span className={styles.links}>Contact us</span>
                        </div>

                    </div>
                    
                    <small>Esta versão do nosso Web site é dirigida a falantes de Português em Angola. Se for residente de outro país ou região, selecione a versão apropriada do Turingo para o seu país ou região no menu pendente.</small>

                </div>
            </section>

        </footer>
    )
}