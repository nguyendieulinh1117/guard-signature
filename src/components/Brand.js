import React from "react";
import Slider from "react-slick";
import "../css/Brand.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Brand() {
  const settings = {
    arrows: false,
    dots: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 610,
        settings: {
          slidesToShow: 3,
          autoplay: false,
        },
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <section className="brand black__color">
      <div className="container">
        <h1 className="brand__title Text__Style__2">
          많은 우수 기업과 함께 하고 있습니다.
        </h1>
        <p className="brand__content Text__Style__2">
          가드 시그니처를 믿고 신뢰하는 고객사들이 있습니다.
        </p>
        <div className="brand__slider">
          <Slider {...settings}>
            <div className="brand__slider__img">
              <img src="./images/logo1.jpg" alt="" />
            </div>
            <div className="brand__slider__img">
              <img src="./images/logo2.jpg" alt="" />
            </div>
            <div className="brand__slider__img">
              <img src="./images/logo3.jpg" alt="" />
            </div>
            <div className="brand__slider__img">
              <img src="./images/logo4.jpg" alt="" />
            </div>
            <div className="brand__slider__img">
              <img src="./images/logo5.jpg" alt="" />
            </div>
            <div className="brand__slider__img">
              <img src="./images/logo6.jpg" alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Brand;
