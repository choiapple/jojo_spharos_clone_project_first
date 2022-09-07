import React from "react";
import { Link } from "react-router-dom";

function CategoryFooter() {
  return (
    <div className="clnb_footer">
      <div className="clnb_renew_help">
        <Link
          to=""
          
          className="clnb_help_link clickable"
          data-react-tarea="카테고리_LNB|기타|고객센터_N"
        >
          <span>고객센터</span>
        </Link>
        <Link
          to=""
          className="clnb_help_link clickable"
          data-react-tarea="카테고리_LNB|기타|제안해봐쓱_N"
        >
          <span>제안해봐쓱</span>
        </Link>
        <Link
          to="http://m.ssg.com/customer/noticeList.ssg?_mpop=new&amp;siteNo=6005"
          className="clnb_help_link"
        >
          <span>공지사항</span>
        </Link>
        <Link to="https://partners.ssgadm.com/m/" className="clnb_help_link">
          <span>입점상담</span>
        </Link>
        <Link
          to="/login"
          className="clnb_help_link"
          
          id="lnb_loginBtn"
          style={{}}
        >
          <span>로그인</span>
        </Link>
        <Link
          to=""
          className="clnb_help_link"
          
          id="lnb_logoutBtn"
          style={{ display: "none" }}
        >
          <span>로그아웃</span>
        </Link>
      </div>
      <div className="clnb_renew_lang">
        <Link
          to=""
          
          className="clnb_lang_btn on"
        >
          <span className="clnb_lang_tx ic_lang_kr">한국어 / KR</span>
        </Link>
        <Link
          to=""
          
          className="clnb_lang_btn"
        >
          <span className="clnb_lang_tx ic_lang_en">English / EN</span>
        </Link>
        <Link
          to=""
          
          className="clnb_lang_btn"
        >
          <span className="clnb_lang_tx ic_lang_chn">简体中文 / CN</span>
        </Link>
      </div>
    </div>
  );
}

export default CategoryFooter;
