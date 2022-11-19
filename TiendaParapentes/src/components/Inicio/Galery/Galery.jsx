import Carousel from "react-bootstrap/Carousel";
import Galeria1 from "../../../img/Galeria/Galeria1.jpg";
import Galeria2 from "../../../img/Galeria/Galeria2.jpg";
import Galeria3 from "../../../img/Galeria/Galeria3.jpg";
import Galeria4 from "../../../img/Galeria/Galeria4.jpg";
import Galeria5 from "../../../img/Galeria/Galeria5.jpg";
import Galeria6 from "../../../img/Galeria/Galeria6.jpg";
import Galeria7 from "../../../img/Galeria/Galeria7.jpg";

import "./Galery.css";

function Galery() {
   return (
      <div className="containerGaleriaPrincipal">
         <Carousel>
            <Carousel.Item interval={2000}>
               <img className="w-100" src={Galeria1} alt="First slide" />
               <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
               <img className="w-100" src={Galeria2} alt="First slide" />
               <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>{" "}
            <Carousel.Item interval={2000}>
               <img className="w-100" src={Galeria3} alt="Second slide" />
               <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
               <img className="w-100" src={Galeria4} alt="Third slide" />

               <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
               <img className="w-100" src={Galeria5} alt="First slide" />
               <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
               <img className="w-100" src={Galeria6} alt="First slide" />
               <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>{" "}
            <Carousel.Item interval={2000}>
               <img className="w-100" src={Galeria7} alt="Second slide" />
               <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
         </Carousel>
      </div>
   );
}

export default Galery;
