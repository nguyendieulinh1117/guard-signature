import React from "react";
import "../css/Banner.css";
function Banner() {
  return (
    <section className="banner">
      <div className="container">
        <h2 className="banner__title white Text__Style__2">
          가드시그니처로
          <br />
          온라인 계약 하세요.
        </h2>
        <p className="banner__content white Text__Style__2">
          비즈니스 성공을 위한 첫 걸음을 가드 시그니처와 함께 시작하세요. 모든
          계약을 쉽고 간단하게 처리할 수 있고, 온
        </p>
        <div className="banner__link">
          <p className="white Text__Style__2">지금 확인하기</p>
          <div className="banner__link__img">
            <img src="./images/arrow-right.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
