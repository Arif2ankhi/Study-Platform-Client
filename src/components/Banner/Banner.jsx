import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpeg';
import img3 from '../../assets/img3.png';
import img4 from '../../assets/img4.jpeg';
import img5 from '../../assets/banner5.jpg';
import img6 from '../../assets/banner6.png';


const Banner = () => {
    return (
        <Carousel>
             <div>
            <img src={img1} />
         </div>
             <div>
                 <img src={img2} />
             </div>
             <div>
                 <img src={img3} />
             </div>
         <div>
                 <img src={img4} />
             </div>
         <div>
                 <img src={img5} />
             </div>
         <div>
                 <img src={img6} />
             </div>
            
        </Carousel>
    );    
};

export default Banner;
