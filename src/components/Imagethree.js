import { Parallax } from 'react-parallax';
import img3 from "../img/img3.jpg"




const Imagethree = () => (
    <Parallax className='image' bgImage={img3}strength={800}>
        <div className="content">
            <span className='img-txt'>A trip to Space</span>
        </div>
    </Parallax>
);


export default Imagethree