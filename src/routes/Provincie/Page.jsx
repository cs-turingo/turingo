import Recommendation from '../../components/recommendation/Page';
import img from "../../images/img1.jpg";

export default function Provincie ({ id }) {
  const data = [
      {
          id: 1,
          infoImg: "Luanda",
          src: img
      },
      {
          id: 2,
          infoImg: "Luanda",
          src: img
      },
      {
          id: 3,
          infoImg: "Luanda",
          src: img
      },
      {
          id: 4,
          infoImg: "Luanda",
          src: img
      },
  ];

  return (
    <>
      <h2>Seção de Apresentação</h2>
      <Recommendation titulo={"Províncias para visitar"} paragrafo={"Mais coisas para fazer em Angola"} data={data} />
      <Recommendation titulo={"Províncias para visitar"} paragrafo={"Mais coisas para fazer em Angola"} data={data} />
      <Recommendation titulo={"Províncias para visitar"} paragrafo={"Mais coisas para fazer em Angola"} data={data} />
      <h2>Reviews da província</h2>
      <Recommendation titulo={"Províncias para visitar"} paragrafo={"Mais coisas para fazer em Angola"} data={data} />
    </>
  );
}
