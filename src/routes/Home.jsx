import Recommendation from "../components/recommendation/Recommendation";
import Footer from "../components/footer/Footer";
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import img5 from '../images/img5.jpg'
import img6 from '../images/img6.jpg'
import img7 from '../images/img7.jpg'
import arrowLeft from '../icons/arrowLeft.svg';
import arrowRigth from '../icons/arrowRigth.svg';
import Sponsors from "../components/sponsors/Page.jsx";
import ProvincePresentation from "../components/province_presentation_section/Page.jsx";

export default function Home() {

  // Informações dos cards 
   const data = [
      {
          id: 1,
          src: img1,
          infoImg: "Huila"
      },
      {
          id: 2,
          src: img2,
          infoImg: "Luanda"
      },
      {
          id: 3,
          src: img3,
          infoImg: "Benguela"
      },
      {
          id: 4,
          src: img4,
          infoImg: "Namibe"
      },
      {
          id: 5,
          src: img5,
          infoImg: "Malange"
      },
      {
          id: 6,
          src: img6,
          infoImg: "Huambo"
      },
      {
          id: 7,
          src: img7,
          infoImg: "Uíge"
      }
  ]

    return(
       <>
       <ProvincePresentation nameOfProvince={"Benguela"}/>
       <Sponsors/>
       </>
    );
}