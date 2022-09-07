import React from 'react';
import { useLocation } from 'react-router-dom';

function FooterTop() {

    let location = useLocation();
    if(location.pathname === '/login' ||location.pathname === '/mypage'){
        return null;
    }
    return ( 
        <>
          <div className="footer_notiwrap">
              <div className="footer_noti">
                  <p className="noti_tit">공지</p>
                  <ul className="noti_dsc">
                      <li>
                          <a
                              href="http://m.ssg.com/customer/noticeList.ssg?siteNo=6004&amp;bbsId=1&amp;postngId=1177650441&amp;postTeryIdnfNo=6004">[SSG.COM
                              '스타벅스 서머 캐리백' 구매 고객 대...</a>
                      </li>
                      <li>
                          <a
                              href="http://m.ssg.com/customer/noticeList.ssg?siteNo=6009&amp;bbsId=1&amp;postngId=1177650441&amp;postTeryIdnfNo=6009">[SSG.COM
                              '스타벅스 서머 캐리백' 구매 고객 대...</a>
                      </li>
                      <li>
                          <a
                              href="http://m.ssg.com/customer/noticeList.ssg?siteNo=6009&amp;bbsId=1&amp;postngId=1177655171&amp;postTeryIdnfNo=6009">SSG.COM
                              이용약관 및 전자금융거래이용약관 개정 안...</a>
                      </li>
                  </ul>
              </div>
              <span className="sp_head noti_arrow">&nbsp;</span>
          </div>
        </>
     );
}

export default FooterTop;