import React from "react";
import "../css/Start.css";
function Start() {
  return (
    <div className="start">
      <p className="start__title Text__Style__2">지금 바로 시작하세요!</p>
      <p className="start__content Text__Style__2">
        설명이 필요 없는 간단한 계약 과정, <br />
        직접 경험해보세요!
      </p>
      <div className="start__button align-items-center">
        <p className="Text__Style__2">더 살펴보기</p>
        <img src="./images/arrow-right-small.png" alt="" />
      </div>
    </div>
  );
}

export default Start;
