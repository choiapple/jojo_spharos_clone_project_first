import React from 'react';

function TopNav() {
    return ( 
        <>
              <div id="m_topnav" className="mcom_topnav react-area">
                    <h2 className="blind">서비스 매장 바로가기</h2>
                    <ul className="topnav_menu" role="navigation">
                        <li className="topnav_item"><a href="/page/home.ssg" className="topnav_lnk on clickable"
                                data-react-tarea="스와이프|매장클릭|홈"><span className="topnav_txt">홈</span></a></li>
                        <li className="topnav_item"><a href="/page/giftshop.ssg" className="topnav_lnk new clickable"
                                data-react-tarea="스와이프|매장클릭|추석"><span className="topnav_txt">추석</span></a></li>
                        <li className="topnav_item"><a href="/page/ssgluxury.ssg" className="topnav_lnk clickable"
                                data-react-tarea="스와이프|매장클릭|명품관"><span className="topnav_txt">명품관</span></a></li>
                        <li className="topnav_item"><a href="/page/happybuy.ssg" className="topnav_lnk clickable"
                                data-react-tarea="스와이프|매장클릭|해피라운지"><span className="topnav_txt">해피라운지</span></a></li>
                        <li className="topnav_item"><a href="/page/best.ssg" className="topnav_lnk clickable"
                                data-react-tarea="스와이프|매장클릭|베스트"><span className="topnav_txt">베스트</span></a></li>
                        <li className="topnav_item"><a href="/page/ssgdept.ssg" className="topnav_lnk clickable"
                                data-react-tarea="스와이프|매장클릭|백화점"><span className="topnav_txt">백화점</span></a></li>
                        <li className="topnav_item"><a href="/page/brand.ssg" className="topnav_lnk clickable"
                                data-react-tarea="스와이프|매장클릭|브랜드"><span className="topnav_txt">브랜드</span></a></li>
                    </ul>
                </div>  
        </>
     );
}

export default TopNav;