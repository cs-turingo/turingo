
import React, {useRef} from "react";
import styles from "./page.module.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import img1 from "../../../images/img1.jpg";
import img2 from "../../../images/img2.jpg";
import img3 from "../../../images/img3.jpg";
import img4 from "../../../images/img4.jpg";
import img5 from "../../../images/img5.jpg";
import img6 from "../../../images/img6.jpg";

export default function Slider () {

   let carousel= useRef(null);

   const slides =[img1,img2,img3,img4,img5,img6];

 
   function rightCLick() {
    carousel.current.scrollLeft += carousel.current.offsetWidth;
}
function leftCLick() {
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
}

      return (
        <div className={styles.sectionSlide}>
          
          <button onClick={leftCLick} className={styles.arrowLeft}>
          <FaArrowLeft />
          </button>
        
          <div className= {styles.slider} ref={carousel}>
          {
            slides.map((img, id)=> {
              return(
                <img src={img} alt="imgSLider" key={id} />
              );
            })
          }
          </div>

          <button onClick={rightCLick} className={styles.arrowRigth}>
          <FaArrowRight />
          </button>

        </div>
      );
}

