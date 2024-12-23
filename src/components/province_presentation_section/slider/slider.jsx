
import React, { useState, useEffect } from "react";
import styles from "./slider.module.css";
import img1 from "../../../images/img1.jpg";
import img2 from "../../../images/img2.jpg";
import img3 from "../../../images/img3.jpg";
import img4 from "../../../images/img4.jpg";
import img5 from "../../../images/img5.jpg";
import img6 from "../../../images/img6.jpg";
import img7 from "../../../images/img7.jpg";

const AutoSlider = () => {
  const slides = [img1,img2, img3, img4, img5, img6, img7];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar
  }, []);

  return (
    <div className={styles.slider}>
      <div className={styles.slide}><img src={slides[currentIndex]} alt="autoSlider" /></div>
    </div>
  );
};

export default AutoSlider;

