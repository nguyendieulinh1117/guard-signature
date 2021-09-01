import React from "react";
import Slider from "react-slick";
import "../css/Procedure.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function Procedure() {
  const settings = {
    dots: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,
    // autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="procedure black__color">
      <h1 className="procedure__title Text__Style__2">
        짧고 간단한 절차
        <br /> 지금 직접 확인해보세요
      </h1>
      <div className="procedure__sliders">
        <div className="procedure__view">
          <div className="produre__view__shape"></div>
          {/* <img src="./images/view.png" alt="" /> */}
        </div>
        <Slider {...settings}>
          <div className="procedure__slider">
            <img src="./images/slide3.jpg" alt="" />
          </div>
          <div className="procedure__slider">
            <img src="./images/slide1.jpg" alt="" />
          </div>
          <div className="procedure__slider">
            <img src="./images/slide2.jpg" alt="" />
          </div>
          <div className="procedure__slider">
            <img src="./images/slide3.jpg" alt="" />
          </div>
          <div className="procedure__slider">
            <img src="./images/slide1.jpg" alt="" />
          </div>
          <div className="procedure__slider">
            <img src="./images/slide2.jpg" alt="" />
          </div>
        </Slider>
      </div>

      <div className="procedure__button align-items-center">
        <p className=" white Text__Style__2">더 살펴보기</p>
        <img src="./images/arrow-right-small.png" alt="" />
      </div>
    </section>
  );
}

export default Procedure;
