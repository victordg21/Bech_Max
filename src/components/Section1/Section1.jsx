import { useState, useEffect } from 'react'
import './Section1.css'



function Section1 (){

    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
    'https://via.placeholder.com/500x300?text=Image+1',
    'https://via.placeholder.com/500x300?text=Image+2',
    'https://via.placeholder.com/500x300?text=Image+3',
    ];

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
    
        return () => clearInterval(interval);
      }, [images.length]);
    
      const goToImage = (index) => {
        setCurrentIndex(index);
      };


    return(
        <>
           <div className='Section1'>
                <div className='text'>
                    <h2 className='title'>COMPRE NOS EUA, RECEBA EM CASA</h2>
                    <h3 className='subtitle'>Sua compra internacional entregue no conforto do seu lar, com total segurança e rapidez garantida!</h3>
                </div>
                <div className="carousel-container">
                    <img src={images[currentIndex]} alt="" className="image" />
                    <div className="indicator-container">
                    {images.map((_, index) => (
                        <div
                        key={index}
                        className={`indicator ${currentIndex === index ? 'active' : ''}`}
                        onClick={() => goToImage(index)}
                        ></div>
                    ))}
                    </div>
                </div>
                <div className='buttondiv-section1'>
                    <button className='button-section1'>Faça sua compra</button>
                </div>
            </div> 
        </>
    )
}


export default Section1