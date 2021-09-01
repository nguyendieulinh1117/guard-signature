import React from "react";
import "../css/Business.css";
function Business() {
  return (
    <section className="business black__color">
      <div className="container">
        <h1 className="business__title Text__Style__2">
          5분 만에 끝내는 계약 업무
        </h1>
        <p className="business__content Text__Style__2">
          계약서 파일을 업로드하여 서명을 요청해 보세요. <br />
          상대방은 회원가입 없이 이메일, 카카오톡 링크를 통해 서명할 수
          있습니다. <br />
          언제 어디서든 5분만에 계약을 체결해 보세요.
        </p>
        <div className="row">
          <div className="business__item col-3 col-m-6 col-xs-12">
            <img src="./images/shape1.png" alt="" />
            <h3>업로드하기</h3>
            <p>필요한 계약서 파일을 업로드합니다.</p>
          </div>
          <div className="business__item col-3 col-m-6 col-xs-12">
            <img src="./images/shape2.png" alt="" />
            <h3>서명 요청하기</h3>
            <p>업로드한 계약서 파일에 서명 요청을 하세요.</p>
          </div>
          <div className="business__item col-3 col-m-6 col-xs-12">
            <img src="./images/shape3.png" alt="" />
            <h3>서명 입력하기</h3>
            <p>상대방이 간단한 절차를 통해 서명할 수 있습니다.</p>
          </div>
          <div className="business__item col-3 col-m-6 col-xs-12">
            <img src="./images/shape4.png" alt="" />
            <h3>계약 완료</h3>
            <p>
              언제 어디서든 <br />
              5분 만에 계약 완료!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Business;
