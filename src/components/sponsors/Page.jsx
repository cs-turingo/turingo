import styles from './page.module.css';
import img1 from '../../images/apple.avif';
import img2 from '../../images/coca-cola.webp';
import img3 from '../../images/fedEx.jpg';
import img4 from '../../images/jaguar.png';
import img5 from '../../images/mcdonalds.webp';
import img6 from '../../images/nike.webp';
import img7 from '../../images/starbucks.jpg';

export default function Sponsors() {
    const sponsors = [img1, img2, img3, img4, img5, img6, img7];
    return(
        <div className={styles.sectionSponsors}>
           
           <img src={img1} alt="sponsors"/>
           <img src={img2} alt="sponsors"/>
           <img src={img3} alt="sponsors"/>
           <img src={img4} alt="sponsors"/>
           <img src={img5} alt="sponsors"/>
           <img src={img6} alt="sponsors"/>
           <img src={img7} alt="sponsors"/>
           <img src={img2} alt="sponsors"/>
           <img src={img4} alt="sponsors"/>
        </div>
    );
}