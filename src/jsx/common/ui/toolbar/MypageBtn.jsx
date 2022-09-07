import React from 'react';
import { Link } from 'react-router-dom';

function MypageBtn() {
    return ( 
        <>
         <li className="toolbar_item" id="bottomOrderInfoLi">
             <Link to="/mypage" className="toolbar_lnk ty_myssg clickable">

             <i className="icon ty_lg icon_person" aria-hidden="true"></i>
             <span className="toolbar_txt">MY</span>
             <span className="cmnoti_push" id="bottomOrderCnt" style={{display:'none'}}><span className="blind"
                     id="bottomOrderCntSpan">새 메세지 수</span></span>

             </Link>
         </li>
      
        </>
     );
}

export default MypageBtn;