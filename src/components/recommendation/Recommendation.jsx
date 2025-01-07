import styles from "./Recommendation.module.css"
import { FaRegHeart } from "react-icons/fa";
import heart from '../../icons/heart.svg';
import { useRef } from "react";
export default function Recommendation({titulo, paragrafo,data, arrowLeft, arrowRigth}) {

    let carousel= useRef(null);
  
    function rightCLick(e) {
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }
    function leftCLick(e) {
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
    return(
        <section className={styles.recomendacaoDestino}>
        <h2 className={styles.title}>
            {titulo}
        </h2>
        <p className={styles.paragrafo}>
        {paragrafo}
        </p>
        <div className={styles.carousel}>
            {/* seta esquerda */}
            <span className={styles.left} onClick={leftCLick}><img src={arrowLeft} alt="arrow left" /></span>

            <div className={styles.containerCarousel} ref={carousel}>
                    {  /* Renderização dos cards */
                    data.map(({id,label, src})=> {
                        return (

                            <div className={styles.containerDestino} key={id}>

                            <div className={styles.imgCard}>
                                <img src={src} alt="imgFundo" className={styles.imgCard} />
                                <FaRegHeart 
                                className={styles.icon}/>
                            </div>

                            <p className={styles.infoDestino}>
                                {label}
                            </p>
                            </div>
                        )})
                    }
            </div>

            {/* seta direita */}
            <span className={styles.rigth} onClick={rightCLick}><img src={arrowRigth} alt="arrow rigth" /></span>

        </div>
        </section>
    );
}