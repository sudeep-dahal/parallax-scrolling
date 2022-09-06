import { Parallax } from 'react-parallax';
import galaxy from "../img/galaxy.jpg"




const Imagetwo = () => (
    <Parallax className='image' bgImage={galaxy}strength={800}>
        <div className="content">
            <span className='img-txt'>A trip to Space</span>
        </div>
    </Parallax>
);


export default Imagetwo