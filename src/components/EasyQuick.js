import React from "react";
import "../css/EasyQuick.css";
function EasyQuick() {
  return (
    <section className="easy__quick black__color">
      <div className="container">
        <div className="row align-items-center">
          <div className="easy__quick__title col-3 col-m-6 col-xs-12">
            <h1 className="Text__Style">Easy and quick</h1>
          </div>
          <div className="easy__quick__content col-9 col-m-6 col-xs-12">
            <p className="Text__Style__2">
              가드 시그니처에서는 복잡한 절차를 거치지 않고 수월하게 계약을
              진행할 수 있습니다. 준비해둔 계약 문서를 곧바로 업로드하고, 서명을
              요청하세요. 상대방도 별도의 회원가입이나 복잡한 인증 과정없이
              서명이 가능합니다. 계약이 진행되는 모든 과정을 효과적으로 체크할
              수 있고, 언제 어디서든 5분이면 계약이 완료됩니다.
              <br />
              <br />
              가드 시그니처와 함께 빠르고 신속하게 상대방과의 계약을 체결하고
              관리하세요.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EasyQuick;
