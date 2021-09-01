import React from "react";
import "../css/Reason.css";
function Reason() {
  return (
    <section className="reason gray__color__3">
      <div className="container">
        <h1 className="reason__title Text__Style__2">
          가드 시그니처를 선택하는 이유
        </h1>
        <p className="reason__content Text__Style__2">
          많은 기업들이 가드 시그니처를 선택하는 이유,
          <br />
          아래 버튼을 눌러 상세한 정보를 알아보세요.
        </p>
        <div className="row align-items-center">
          <div className="reason__img__large col-m-12">
            <div className="reason__img">
              <img src="./images/e-reason_img.jpg" alt="" />
              <div className="reason__buttons">
                <button className="reason__button">
                  <img src="./images/e-left.png" alt="" />
                </button>
                <button className="reason__button">
                  <img src="./images/e-right.png" alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="col-3 col-m-6 col-xs-12">
            <div className="reason__item__left reason__active">
              <img src="./images/e-reason_icon_1.png" alt="" />
              <h3 className="Text__Style__2">쉽고 편리하게</h3>
              <p className="Text__Style__2">
                번거로운 절차 없이 누구나
                <br />
                빠르게 계약을 체결할 수 있습니다.
              </p>
            </div>
            <div className="reason__item__left">
              <img src="./images/e-reason_icon_2.png" alt="" />
              <h3 className="Text__Style__2">안전한 보안</h3>
              <p className="Text__Style__2">
                데이터는 암호화되어 전송되고
                <br />
                안전한 곳에 저장됩니다.
              </p>
            </div>
            <div className="reason__item__left">
              <img src="./images/e-reason_icon_3.png" alt="" />
              <h3 className="Text__Style__2">다양한 파일형식</h3>
              <p className="Text__Style__2">
                한글, 오피스부터 PDF, JPG와 <br />
                같은 이미지 파일도 변환없이 지원
              </p>
            </div>
          </div>
          <div className="reason__img__medium col-6">
            <div className="reason__img">
              <img src="./images/e-reason_img.jpg" alt="" />
              <div className="reason__buttons">
                <button className="reason__button">
                  <img src="./images/e-left.png" alt="" />
                </button>
                <button className="reason__button">
                  <img src="./images/e-right.png" alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="col-3 col-m-6 col-xs-12">
            <div className="reason__item__right">
              <img src="./images/e-reason_icon_4.png" alt="" />
              <h3 className="Text__Style__2">간단한 본인인증</h3>
              <p className="Text__Style__2">
                공인인증서와 ActiveX없이도
                <br />
                본인인증을 할 수 있습니다.
              </p>
            </div>
            <div className="reason__item__right">
              <img src="./images/e-reason_icon_5.png" alt="" />
              <h3 className="Text__Style__2">효율적인 작업</h3>
              <p className="Text__Style__2">
                자주 사용하는 문서들을 저장하고
                <br />
                불러와 작업할 수 있습니다.
              </p>
            </div>
            <div className="reason__item__right">
              <img src="./images/e-reason_icon_6.png" alt="" />
              <h3 className="Text__Style__2">계약서 관리</h3>
              <p className="Text__Style__2">
                관리가 필요한 문서를 한 눈에 보고
                <br />
                체계적으로 관리할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
        <div className="contract__button align-items-center">
          <p className="Text__Style__2">더 살펴보기</p>
          <img src="./images/arrow-right-small.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Reason;
