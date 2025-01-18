import { React, useState ,useEffect} from 'react'
import "../Style/slideshow1.css";
import img1 from '../Images/GraniteFlooring.jpeg';
import img2 from '../Images/TileFlooring.jpg';
import img3 from '../Images/image3show.jpg';

import img4 from '../Images/Bathroom_Tiles.png'
import img5 from '../Images/Floor_tiles.png'
const images = [img1, img2, img3, img4, img5];

function Slideshow1() {

      const [currentIndex, setCurrentIndex] = useState(0);

      // Function to navigate to the next slide
      const nextSlide = () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      };

      // Function to navigate to the previous slide
      const prevSlide = () => {
            setCurrentIndex((prevIndex) =>
                  prevIndex === 0 ? images.length - 1 : prevIndex - 1
            );
      };

      useEffect(() => {
            const slideInterval = setInterval(() => {
              nextSlide();
            }, 3000); // Change slide every 3 seconds
        
            return () => clearInterval(slideInterval); // Cleanup interval on component unmount
          }, []);
        
      return (
            <>
                  <div className="slideshow-container">
                        {/* Image Display */}
                        <div className="slideshow-image-wrapper">
                              <img
                                    className="slideshow-image"
                                    src={images[currentIndex]}
                                    alt={`Slide ${currentIndex + 1}`}
                              />
                        </div>

                        {/* Navigation Buttons */}
                        <button className="slideshow-button prev-button" onClick={prevSlide}>
                              &#8249; {/* Left arrow */}
                        </button>
                        <button className="slideshow-button next-button" onClick={nextSlide}>
                              &#8250; {/* Right arrow */}
                        </button>

                        {/* Indicators */}
                        <div className="slideshow-indicators">
                              {images.map((_, index) => (
                                    <span
                                          key={index}
                                          className={`indicator ${currentIndex === index ? 'active' : ''}`}
                                          onClick={() => setCurrentIndex(index)}
                                    ></span>
                              ))}
                        </div>
                  </div>
            </>
      )
}

export default Slideshow1
