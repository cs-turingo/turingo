import React, { useState } from "react";
import styles from "./Page.module.css";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

const reviews = [
  {
    username: "Maria",
    location: "Lisboa, Portugal",
    profileImage: "https://via.placeholder.com/50",
    reviewTitle: "Incrível!",
    reviewText: "Foi uma experiência maravilhosa, superou todas as expectativas!",
    rating: 5,
    travelDate: "Setembro de 2023",
    travelType: "Viagem com a família",
    publishedDate: "3 de Janeiro de 2024",
  },
  {
    username: "João",
    location: "Porto, Portugal",
    profileImage: "https://via.placeholder.com/50",
    reviewTitle: "Muito bom",
    reviewText: "Gostei bastante, recomendo para quem procura qualidade e conforto.",
    rating: 4,
    travelDate: "Agosto de 2023",
    travelType: "Viagem sozinho",
    publishedDate: "5 de Janeiro de 2024",
  },
  {
    username: "Ana",
    location: "Faro, Portugal",
    profileImage: "https://via.placeholder.com/50",
    reviewTitle: "Excelente!",
    reviewText: "Adorei o atendimento e os produtos, voltarei com certeza.",
    rating: 5,
    travelDate: "Julho de 2023",
    travelType: "Viagem com namorado/a",
    publishedDate: "10 de Janeiro de 2024",
  },
  {
    username: "Carlos",
    location: "Braga, Portugal",
    profileImage: "https://via.placeholder.com/50",
    reviewTitle: "Bom custo-benefício",
    reviewText: "Boa qualidade pelo preço, apenas alguns detalhes a melhorar.",
    rating: 4,
    travelDate: "Junho de 2023",
    travelType: "Viagem com amigos",
    publishedDate: "12 de Janeiro de 2024",
  },
  {
    username: "Fernanda",
    location: "Coimbra, Portugal",
    profileImage: "https://via.placeholder.com/50",
    reviewTitle: "Fantástico",
    reviewText: "Tudo perfeito, com certeza recomendarei para amigos e familiares!",
    rating: 5,
    travelDate: "Maio de 2023",
    travelType: "Viagem com colegas",
    publishedDate: "15 de Janeiro de 2024",
  },
];

export default function OpinionCarousel({ handleCase }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 3;

  const nextReviews = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + cardsPerPage >= reviews.length ? 0 : prevIndex + cardsPerPage
    );
  };

  const prevReviews = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - cardsPerPage : prevIndex - cardsPerPage
    );
  };

  const visibleReviews = reviews.slice(currentIndex, currentIndex + cardsPerPage);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Veja o que os visitantes estão dizendo</h2>
      <div className={styles.carouselContainer}>
        {visibleReviews.map((review, index) => (
          <div key={index} className={styles.reviewCard}>
            <div className={styles.header}>
              <img
                src={review.profileImage}
                alt={`${review.username} profile`}
                className={styles.profileImage}
              />
              <div>
                <p className={styles.username}>{review.username}</p>
                <p className={styles.location}>{review.location}</p>
              </div>
            </div>
            <div className={styles.body}>
              <p className={styles.reviewTitle}>{review.reviewTitle}</p>
              <p className={styles.reviewText}>{review.reviewText}</p>
              <div className={styles.rating}>{"⭐".repeat(review.rating)}</div>
            </div>
            <div className={styles.footer}>
              <p className={styles.travelInfo}>{review.travelDate} - {review.travelType}</p>
              <p className={styles.publishedDate}>Escrito em: {review.publishedDate}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.buttons}>
        <button onClick={prevReviews} className={styles.button}><FaArrowLeft /></button>
        <button onClick={nextReviews} className={styles.button}><FaArrowRight /></button>
      </div>
      <button onClick={() => handleCase(currentIndex)} className={styles.actionButton}>
        Saber mais
      </button>
    </div>
  )
}
