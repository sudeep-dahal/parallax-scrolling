import { Parallax } from 'react-parallax';
import img1 from '../img/img1.jpg'



const Imageone = () => (
    
    <Parallax className='image relative' bgImage={img1}strength={800}>
        <div className="content">
            <span className='img-txt'>A trip to Space</span>
        

        <div className='absolute top-0 left-0 right-0 h-[50px] bg-red-500'>
                    <h1>Hrllo ia m bavlksd</h1>
        </div>
        </div>
    </Parallax>

    
);

export default Imageone