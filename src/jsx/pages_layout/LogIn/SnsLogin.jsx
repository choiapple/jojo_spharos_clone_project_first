import React from 'react';
import { Link } from 'react-router-dom';
function SnsLogin() {
    return ( 
        <>
         <ul className="cmem_sns_login">
            <li>
                <Link to=""
                
                    name="snsLogin">
                    <span className="ico_area">
                        <span className="sp_cmem_sns cmem_ico_naver"></span>
                    </span>
                    <span className="cmem_sns_name">네이버</span>
                </Link>
            </li>
            <li>
                <a href="https://accounts.kakao.com/login?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fresponse_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Fmember.ssg.com%252Fm%252Fsns%252Fkakao%252Fcallback.ssg%26state%3DlinkType%253Dlogin%2526tokenYn%253DN%2526dvicMdlNm%253DnoDvicNm%2526retURL%253Dhttps%25253A%25252F%25252Fm.ssg.com%25252Fmyssg%25252Fmain.ssg%26through_account%3Dtrue%26client_id%3Db16cd9ceca519dcff9b52f868dc15f1c"
              
                    name="snsLogin">
                    <span className="ico_area">
                        <span className="sp_cmem_sns cmem_ico_kakao"></span>
                    </span>
                    <span className="cmem_sns_name">카카오</span>
                </a>
            </li>
            <li>
                <Link to=""
                  
                    name="snsLogin">
                    <span className="ico_area">
                        <span className="sp_cmem_sns cmem_ico_apple"></span>
                    </span>
                    <span className="cmem_sns_name">애플</span>
                </Link>
            </li>
            <li>
                <Link to="">
                    <span className="ico_area">
                        <span className="sp_cmem_sns cmem_ico_phone"></span>
                    </span>
                    <span className="cmem_sns_name">휴대폰</span>
                </Link>
            </li>
        </ul>
        </>
     );
}

export default SnsLogin;