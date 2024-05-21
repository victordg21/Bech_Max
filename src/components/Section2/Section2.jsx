import { useState, useEffect } from 'react'
import './Section2.css'

function Section2 (){

    const images = [
        '/Section2/AmazonApple.png',
        '/Section2/SephoraVersace.png',
        '/Section2/CarterStanley.png',
        '/Section2/MacySony.png',
        '/Section2/WalmartEbay.png',
        ];

        const [currentIndex, setCurrentIndex] = useState(0);
        const [numImages, setNumImages] = useState(window.innerWidth < 676 ? 1 : 4);
      
        const updateNumImages = () => {
          setNumImages(window.innerWidth < 676 ? 1 : 4);
        };
      
        useEffect(() => {
          window.addEventListener('resize', updateNumImages);
          return () => window.removeEventListener('resize', updateNumImages);
        }, []);
      
        const nextSlide = () => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        };
      
        const prevSlide = () => {
          setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        };
      
        useEffect(() => {
          const interval = setInterval(nextSlide, 3000);
          return () => clearInterval(interval);
        }, []);
      
        const displayedImages = images.slice(currentIndex, currentIndex + numImages).concat(
          images.slice(0, (currentIndex + numImages) % images.length)
        ).slice(0, numImages);


    return(
        <>
            <div className='Section2'>
                <div className='Section2-Container'>
                    <h2 className='title'>ONDE COMPRAR</h2>
                </div>
                    <div className="carousel">
                        <div className="images-line">
                            {displayedImages.map((image, index) => (
                            <img className='image-carousel' key={index} src={image} alt={`Slide ${index}`} />
                            ))}
                        </div>
                        <button onClick={prevSlide} className="carousel-button prev">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                            </svg>
                        </button>
                        <button onClick={nextSlide} className="carousel-button next">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                            </svg>
                        </button>
                    </div>
            </div>
        </>
    )
}

export default Section2