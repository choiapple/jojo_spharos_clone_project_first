import React, { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import {Link} from 'react-router-dom';

import loginContext from '../../../context/login.context';


function FooterMid02() {
        const auth = useContext(loginContext);
        const handleOnclick = ()=>{
                auth.onLogOut();
        }
        useEffect(()=>{
        },[auth])
    return ( 
        <>
        
        <div className="mcom_btnbx_warp">
                    <ul className="mcom_btnbx_list">
                      <li id="footer_loginBtn" className={auth.auth ? "hideCom":"viewCom"}><Link to="/login"  className="clickable"
                                data-react-tarea="푸터|로그인">로그인</Link></li> 
                        <li id="footer_logoutBtn" className={auth.auth ? "viewCom":"hideCom"} onClick={handleOnclick}><Link to
                                className="clickable" data-react-tarea="푸터|로그아웃">로그아웃</Link></li>
                        <li id="footer_joinMemberBtn" className={auth.auth ? "hideCom":""}><Link to="/subsignup" className="clickable">회원가입</Link>
                        </li> 
                      <li><a href="https://m-shinsegaemall.ssg.com/comm/app/appLink.ssg?mobilAppSvcNo=2"
                                className="clickable" data-react-tarea="푸터|앱다운로드">앱다운로드</a></li>
                         <li><a href="#" className="clickable" data-react-tarea="푸터|PC버전">PC버전</a>
                        </li>
                    </ul>
                </div> 
        </>
     );
}

export default FooterMid02;