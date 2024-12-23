import styles from './provincePresentation.module.css';
import Rating from './rating/rating';
import heartBold from '../../images/heart_bold.png';
import heart from '../../images/heart.png';
import boxOut from '../../images/inbox_out.png';
import AutoSlider from './slider/slider';

export default function ProvincePresentation(props) {

    return (
        <section>
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
            <section className={styles.aboutProvince}>

                <div className={styles.containerSlider}>
                <AutoSlider/>
                </div>

                <div className={styles.provinceInfo}>
                    <h1>Sobre {props.nameOfProvince}</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad suscipit repellendus nobis magnam consectetur voluptate veritatis </p>
                </div>

                <div className={styles.advertisingContainer}>

                </div>

            </section>
        </section>
    );
}