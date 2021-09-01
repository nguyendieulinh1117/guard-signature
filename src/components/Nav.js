import React, { useEffect, useState } from "react";
import "../css/Nav.css";
function Nav() {
  const [sideBar, setSideBar] = useState(false);
  useEffect(() => {
    document.body.style.overflowY = sideBar ? "hidden" : "scroll";
  }, [sideBar]);

  return (
    <nav>
      <div className="logo">
        <h2 className="Text__Style main__color">
          Guard <br />
          Signature
        </h2>
      </div>
      <div
        className={`hamburger ${sideBar && "open"}`}
        onClick={() => setSideBar(!sideBar)}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <ul className={`nav-links Text__Style__2  ${sideBar && "open"}`}>
        <li className={`action__menu ${sideBar && "fade"}`}>
          <a href="# " className="gray__color__6">
            로그인
          </a>
          <a href="# " className="gray__color__6">
            회원가입
          </a>
        </li>
        <li className={`${sideBar && "fade"}`}>
          <a className="black__color active" href="# ">
            서비스 소개
          </a>
        </li>
        <li className={`${sideBar && "fade"}`}>
          <a className="black__color" href="# ">
            법적효력·보안
          </a>
        </li>
        <li className={`${sideBar && "fade"}`}>
          <a className="black__color" href="# ">
            활용 분야
          </a>
        </li>
        <li className={`${sideBar && "fade"}`}>
          <a className="black__color" href="# ">
            이용 혜택
          </a>
        </li>
        <li className={`${sideBar && "fade"}`}>
          <a className="black__color" href="# ">
            요금 안내
          </a>
        </li>
        <li className={`${sideBar && "fade"}`}>
          <a className="black__color" href="# ">
            고객센터
          </a>
        </li>
      </ul>
      <ul className="action Text__Style__2">
        <li>
          <a href="# " className="black__color">
            로그인
          </a>
        </li>
        <li>
          <a href=" #" className="black__color">
            회원가입
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
