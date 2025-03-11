import { useState, useEffect } from "react";
import "../assets/HomePage.css";
import banner1 from "../assets/img/slide1.jpg";
import banner2 from "../assets/img/slide2.jpg";
import banner3 from "../assets/img/slide3.jpg";
import menu1 from "../assets/img/menu-01.jpg";
import menu2 from "../assets/img/menu-02.jpg";
import menu3 from "../assets/img/menu-03.jpg";
import menu4 from "../assets/img/menu-04.jpg";
import menu5 from "../assets/img/menu-05.jpg";
import menu6 from "../assets/img/menu-06.jpg";

const banners = [banner1, banner2, banner3];
const menus = [menu1, menu2, menu3, menu4, menu5, menu6];

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Tự động chuyển slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? banners.length - 1 : prevSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div>
      <div className="slider">
        <img src={banners[currentSlide]} alt={`Slide ${currentSlide + 1}`} />

        <button className="arrow left-arrow" onClick={prevSlide}>
          &#10094;
        </button>

        <button className="arrow right-arrow" onClick={nextSlide}>
          &#10095;
        </button>

        {/* Thanh dấu chấm */}
        <div className="dots">
          {banners.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentSlide === index ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
      <div className="best-sellers">
        <h2>Home Page</h2>
        <div className="products">
          {menus.map((menu, index) => (
            <div key={index} className="product">
              <img src={menu} alt={`Menu ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
