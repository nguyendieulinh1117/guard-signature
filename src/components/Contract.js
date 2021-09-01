import React from "react";
import "../css/Contract.css";
function Contract() {
  return (
    <section className="contract black__color">
      <div className="container">
        <h1 className="contract__title Text__Style__2">
          다양한 계약서에 필수적 사용
        </h1>
        <p className="contract__content Text__Style__2">
          근로 계약서, 각종 동의서, 입점 계약서, 가맹 계약서,
          <br />
          용역 계약서, 공급 계약서 이외에도
          <br />
          사용 가능한 계약서를 가드 시그니처와 함께 확인해보세요.
        </p>
        <div className="row">
          <div className="col-6 col-xs-12">
            <div className="contract__item">
              <div className="row align-items-center">
                <div className="col-3 col-m-12">
                  <div className="contract__item__icon">
                    <img src="./images/icon1.png" alt="" />
                  </div>
                </div>
                <div className="col-9 col-m-12">
                  <div className="contract__item__content">
                    <h3 className="Text__Style__2">근로 계약서</h3>
                    <p className="Text__Style__2">
                      근로자가 취업 후 필요로 하는 <br />
                      근로 계약서, 연봉 계약서 등
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-xs-12">
            <div className="contract__item">
              <div className="row align-items-center">
                <div className="col-3 col-m-12">
                  <div className="contract__item__icon">
                    <img src="./images/icon4.png" alt="" />
                  </div>
                </div>
                <div className="col-9 col-m-12">
                  <div className="contract__item__content">
                    <h3 className="Text__Style__2">각종 동의서</h3>
                    <p className="Text__Style__2">
                      용도에 따라 필요한 <br />
                      동의서, 확인서, 신청서 등
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-xs-12">
            <div className="contract__item">
              <div className="row align-items-center">
                <div className="col-3 col-m-12">
                  <div className="contract__item__icon">
                    <img src="./images/icon2.png" alt="" />
                  </div>
                </div>
                <div className="col-9 col-m-12">
                  <div className="contract__item__content">
                    <h3 className="Text__Style__2">입점 계약서</h3>
                    <p className="Text__Style__2">
                      입점 등을 위한 계약 내용을 적은
                      <br />
                      쇼핑몰, 사무실 입점 계약서 등
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-xs-12">
            <div className="contract__item">
              <div className="row align-items-center">
                <div className="col-3 col-m-12">
                  <div className="contract__item__icon">
                    <img src="./images/icon5.png" alt="" />
                  </div>
                </div>
                <div className="col-9 col-m-12">
                  <div className="contract__item__content">
                    <h3 className="Text__Style__2">가맹 계약서</h3>
                    <p className="Text__Style__2">
                      가맹과 관련된 계약 체결을 위한
                      <br />
                      가맹 [프랜차이즈], 대리점 계약서 등
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-xs-12">
            <div className="contract__item">
              <div className="row align-items-center">
                <div className="col-3 col-m-12">
                  <div className="contract__item__icon">
                    <img src="./images/icon3.png" alt="" />
                  </div>
                </div>
                <div className="col-9 col-m-12">
                  <div className="contract__item__content">
                    <h3 className="Text__Style__2">용역 계약서</h3>
                    <p className="Text__Style__2">
                      용역 계약과 관련된
                      <br />
                      용역, 외주, 위탁, 아웃소싱 계약서 등
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-xs-12">
            <div className="contract__item">
              <div className="row align-items-center">
                <div className="col-3 col-m-12">
                  <div className="contract__item__icon">
                    <img src="./images/icon6.png" alt="" />
                  </div>
                </div>
                <div className="col-9 col-m-12">
                  <div className="contract__item__content">
                    <h3 className="Text__Style__2">공급 계약서</h3>
                    <p className="Text__Style__2">
                      회사의 물품과 관련된 모든 <br />
                      공급, 주문, 발주, 납품 계약서 등
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="contract__contentBottom Text__Style__2">
          그 외 사용가능한 계약서가 궁금하신가요?
        </p>
        <div className="contract__button align-items-center">
          <p className="Text__Style__2">더 살펴보기</p>
          <img src="./images/arrow-right-small.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Contract;
