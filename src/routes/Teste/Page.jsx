import OpinionCarousel from "../../components/reviews/OpinionCarousel/Page.jsx";

export default function Test () {
  return (
    <>
      <OpinionCarousel reviews={[
        {
          username: "Maria",
          location: "Lisboa, Portugal",
          review: "Ótimo serviço e produtos de qualidade! Voltarei a comprar.",
          rating: 5,
          date: "10 de Dezembro de 2024",
        },
        {
          username: "João",
          location: "Porto, Portugal",
          review: "Entrega rápida e atendimento excelente. Recomendo!",
          rating: 4,
          date: "9 de Dezembro de 2024",
        },
        {
          username: "Ana",
          location: "Faro, Portugal",
          review: "Muito satisfeita com a experiência. Superou minhas expectativas!",
          rating: 5,
          date: "8 de Dezembro de 2024",
        },
      ]} />
    </>
  );
}