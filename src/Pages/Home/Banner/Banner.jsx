import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../../assets/Slider Image/image-1.png'
import img2 from '../../../assets/Slider Image/image-2.png'
import img3 from '../../../assets/Slider Image/image-3.png'
import img4 from '../../../assets/Slider Image/image-4.png'
import img5 from '../../../assets/Slider Image/image-5.png'
import img6 from '../../../assets/Slider Image/image-6.jpg'
import img7 from '../../../assets/Slider Image/image-7.png'

const Banner = () => {
    return (
        <Carousel className=''>
            <div>
                <img className='rounded-md' src={img1} />
            </div>
            <div>
                <img className='rounded-md' src={img2} />
            </div>
            <div>
                <img className='rounded-md' src={img3} />
            </div>
            <div>
                <img className='rounded-md' src={img4} />
            </div>
            <div>
                <img className='rounded-md' src={img5} />
            </div>
            <div>
                <img className='rounded-md' src={img6} />
            </div>
            <div>
                <img className='rounded-md' src={img7} />
            </div>
        </Carousel>

    );
};

export default Banner;