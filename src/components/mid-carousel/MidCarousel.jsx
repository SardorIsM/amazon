import c from "./MidCarousel.module.css";
// import images from '../../dummy-data.json';
import { v4 as uuidv4 } from 'uuid';


const MidCarousel = () => {

  const images = [
    "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/GW/DesktopShoveler/Shoveler_CML_1x._CB608464074_.jpg",
    "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/GW/DesktopShoveler/Shoveler_StockingStuffers_1x._CB606658764_.jpg",
    "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/GW/DesktopShoveler/Shoveler_Fashion_1x._CB608464074_.jpg",
    "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/GW/DesktopShoveler/Shoveler_Home-Gifts_1x._CB608464069_.jpg",
    "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/GW/DesktopShoveler/Shoveler_Toys-gifts_1x._CB608464069_.jpg",
    "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/GW/DesktopShoveler/Shoveler_Electronics_1x._CB608464074_.jpg",
    "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/GW/DesktopShoveler/Shoveler_HolidayEssentials_1x._CB608159058_.jpg",
    "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/GW/DesktopShoveler/Shoveler_Beauty_1x._CB608464074_.jpg",
    "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/GW/DesktopShoveler/Shoveler_GiftsCards_1x._CB608464069_.jpg",
    "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/GW/DesktopShoveler/Shoveler_HomePrep_1x._CB608159058_.jpg"
  ]
  return (
    
      <div className={c.banner}>
        {
          images.map(img => 
            <div key={uuidv4()}>
              <img  className={c.banner__image} src={img} alt=""/>
            </div>
          )
        }
      </div>
    
  );

};

export default MidCarousel;