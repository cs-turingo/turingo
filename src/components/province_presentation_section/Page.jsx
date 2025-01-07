import styles from './page.module.css';
import Rating from './rating/Page.jsx';
import publicidade from '../../images/advertising.png'
import heart from '../../images/heart.png';
import boxOut from '../../images/inbox_out.png';
import Slider from "./slider/Page.jsx";

export default function ProvincePresentation(props) {

    return (
        <section className={styles.sectionMain}>
            <section className= {styles.nameProvince}>
                <div className={styles.containerClassification}>
                    <h2>{props.nameOfProvince}</h2>
                    <div className={styles.containerRating}>
                        <Rating/> 
                        <span>1200 avaliações</span> 
                        <span> #5 de 150 coisas ppara fazer em {props.nameOfProvince} </span> 
                        <span>Escreve uma avaliação</span>
                    </div>
                </div>
            
                <div className={styles.containerBtn}>
                    <img src={boxOut} alt="boxOut" />
                    
                    <div className={styles.containerSave}>
                        <img src={heart} className={styles.icon} alt="heart" />
                    </div>
                </div>
            </section>
            <section className={styles.infoProvince}>
                <div className={styles.containerSlide}>
                <Slider/>
                </div>

                <div className={styles.aboutUs}>
                    <h2>
                        Sobre {props.nameOfProvince}
                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus a similique soluta quod! Odio minus totam aut at accusamus atque laudantium libero natus sapiente, ipsa ipsum laborum ea. Ut, accusamus.</p>
                </div>

                <div className={styles.advertising}>
                    <img src={publicidade} alt="publicidade" />
                </div>
            </section>
        </section>
    );
}