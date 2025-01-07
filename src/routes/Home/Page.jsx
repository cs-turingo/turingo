import Recommendation from '../../components/recommendation/Page';
import SearchSection from '../../components/search/searchSection/Page';
import img from "../../images/img1.jpg";

export default function Home () {
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
        {
            id: 5,
            infoImg: "Luanda",
            src: img
        },
        {
            id: 6,
            infoImg: "Luanda",
            src: img
        },
    ];
    
    return(
       <>
        <h2>Seção de Pesquisa</h2>
        <SearchSection />
        <h2>Slideshow</h2>
        <Recommendation titulo={"Províncias para visitar"} paragrafo={"Mais coisas para fazer em Angola"} data={data} />
        <Recommendation titulo={"Espaços para diversão"} paragrafo={"Mais coisas para fazer em Angola"} data={data} />
        <Recommendation titulo={"Espaços para alimentação"} paragrafo={"Mais coisas para fazer em Angola"} data={data} />
        <h2>Pré Visualização do Blogue</h2>
        <Recommendation titulo={"Destinos para as próximas férias"} paragrafo={"Mais coisas para fazer em Angola"} data={data} />
        <Recommendation titulo={"Guias Turísticos"} paragrafo={"Mais coisas para fazer em Angola"} data={data} />
        <h2>Patrocínios (imagens)</h2>
       </>
    );
}