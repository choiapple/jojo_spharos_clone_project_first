import React from "react";

function SubSignUpSimple() {
  return (
    <div className="cmem_cont">
      <ul className="cmem_sns_login">
        <li>
          <a href="/m/member/join/formEmail.ssg">
            <span className="ico_area">
              <span className="sp_cmem_sns cmem_ico_email"></span>
            </span>
            <span className="cmem_sns_name">이메일</span>
          </a>
        </li>
        <li>
          <a
            href=""
            
            className="snsLogin"
            name="snsLogin"
          >
            <span className="ico_area">
              <span className="sp_cmem_sns cmem_ico_naver"></span>
            </span>
            <span className="cmem_sns_name">네이버</span>
          </a>
        </li>
        <li>
          <a
            href=""
            
            className="snsLogin"
            name="snsLogin"
          >
            <span className="ico_area">
              <span className="sp_cmem_sns cmem_ico_kakao"></span>
            </span>
            <span className="cmem_sns_name">카카오</span>
          </a>
        </li>
        <li>
          <a
            href=""
            
            className="snsLogin"
            name="snsLogin"
          >
            <span className="ico_area">
              <span className="sp_cmem_sns cmem_ico_apple"></span>
            </span>
            <span className="cmem_sns_name">애플</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SubSignUpSimple;
