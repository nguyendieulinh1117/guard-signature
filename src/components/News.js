import React from "react";
import "../css/News.css";
function News() {
  return (
    <section className="news black__color">
      <div className="container">
        <h1 className="news__title Text__Style__2">안전한 안심 제도</h1>
        <p className="news__content Text__Style__2">
          가드 시그니처는 [전자문서및전자거래기본법 제4조 제1항]과
          <br />
          [전자서명법 제3조 제3항]에 따라 확실한 법적효력을
        </p>
        <div className="row">
          <div className="col-4 col-sm-12 col-xs-12">
            <div className="news__item">
              <div className="news__item__img">
                <img src="./images/new1.jpg" alt="" />
              </div>
              <div className="news__item__info">
                <h3 className="Text__Style__2">
                  법적 효력
                  <br />
                  자세히 알아보기
                </h3>
                <p className="Text__Style">more view</p>
              </div>
            </div>
          </div>
          <div className="col-4 col-sm-12 col-xs-12">
            <div className="news__item">
              <div className="news__item__img">
                <img src="./images/new2.jpg" alt="" />
              </div>
              <div className="news__item__info">
                <h3 className="Text__Style__2">
                  서비스 보안
                  <br />
                  자세히 알아보기
                </h3>
                <p className="Text__Style">more view</p>
              </div>
            </div>
          </div>
          <div className="col-4 col-sm-12 col-xs-12">
            <div className="news__item">
              <div className="news__item__img">
                <img src="./images/new3.jpg" alt="" />
              </div>
              <div className="news__item__info">
                <h3 className="Text__Style__2">
                  위변조 검증 <br />
                  자세히 알아보기
                </h3>
                <p className="Text__Style">more view</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default News;
