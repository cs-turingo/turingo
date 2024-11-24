import styles from "./Recommendation.module.css"
import heart from '../../icons/heart.svg';
import { useState, useRef } from "react";
export default function Recommendation({titulo, paragrafo, src1,src2,src3,src4,src5,src6, src7, infoImg1, infoImg2, infoImg3,infoImg4, infoImg5,infoImg6,infoImg7, arrowLeft, arrowRigth}) {

    const data = [
        {
            id: 1,
            src: src1,
            infoImg: infoImg1
        },
        {
            id: 2,
            src: src2,
            infoImg: infoImg2
        },
        {
            id: 3,
            src: src3,
            infoImg: infoImg3
        },
        {
            id: 4,
            src: src4,
            infoImg: infoImg4
        },
        {
            id: 5,
            src: src5,
            infoImg: infoImg5
        },
        {
            id: 6,
            src: src6,
            infoImg: infoImg6
        },
        {
            id: 7,
            src: src7,
            infoImg: infoImg7
        }
    ]
    let carousel= useRef(null);

    const rightCLick = (e)=> {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }

    const leftCLick = (e)=> {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
    return(
        <section className={styles.recomendacaoDestino}>
        <span className={styles.title}>
            {titulo}
        </span>
        <p className={styles.paragrafo}>
        {paragrafo}
        </p>
        <div className={styles.carousel}>

            <span className={styles.left} onClick={leftCLick}><img src={arrowLeft} alt="arrow left" /></span>

            <div className={styles.containerCarousel} ref={carousel}>
            
             {
                data.map((destinos)=> {
            
                    return (
                        <div className={styles.containerDestino} key={destinos.id}>
                        <div className={styles.img+`${destinos.id}`}>
                            <img src={destinos.src} alt="imgFundo" className={styles.imgF} />
                            <img src={heart} alt="icons" className={styles.icon}/>
                        </div>
                        <p className={styles.infoDestino}>
                            {destinos.infoImg}
                        </p>
                        </div>
                    )})
            }
            
            </div>
            <span className={styles.rigth} onClick={rightCLick}><img src={arrowRigth} alt="arrow rigth" /></span>
        </div>
        </section>
    );
}