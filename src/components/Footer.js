import React from "react";
import "../css/Footer.css";
function Footer() {
  return (
    <section className="footer black__color">
      <div className="container">
        <div className="row">
          <div className="col-9 col-xs-12">
            <div className="footer__info">
              <ul className="row Text__Style__2">
                <li>이용약관</li>
                <li>개인정보처리방침</li>
                <li>고객센터</li>
              </ul>
              <p className="Text__Style__2 gray__color__3">
                (주) 가드시그니처 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 :
                356-00-00000
                <br />
                이메일 : test0101@guardsignature.co.kr｜ FAX : 070-0000-0000
                <br />
                서울특별시 강남구 도산대로 8길 17 2층
                <br />
                <br />
                Copyright© GUARDSIGNATURE All rights reserved.
              </p>
            </div>
          </div>
          <div className="col-3 col-xs-12">
            <div className="footer__icons">
              <div className="row">
                <img src="./images/e-sns_icon_1.png" alt="" />
                <img src="./images/e-sns_icon_2.png" alt="" />
                <img src="./images/e-sns_icon_3.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
