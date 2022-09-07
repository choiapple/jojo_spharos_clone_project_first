import React from 'react';
import { Link } from 'react-router-dom';

function PdtTool02({goBuyBtn,openBuyBtn}) {
    return ( 
        
           <div className={`btm_bgn_in dps2 ${goBuyBtn}`}>
             <ul className="btm_bgn_bx" id="dps2_gift" style={{ display: "none" }}>
               <li>
                 <a className="mndtl_btn type01 clickable" target="_parent">
                   <span className="btn_tx">선물하기</span>
                 </a>
               </li>
             </ul>
             <ul className="btm_bgn_bx" id="dps2_buy">
               <li>
                 <a className="mndtl_btn type02 clickable" target="_parent">
                   <span className="btn_tx">장바구니</span>
                 </a>
               </li>
               <li>
                 <Link to='/buyPage' className="mndtl_btn type01 clickable" onClick={openBuyBtn}>
                 <span className="btn_tx ssgpay">
                   <i className="ico_txt_ssgpay_btm">
                     <span className="blind">SSGPAY.</span>
                   </i>
                   바로구매
                 </span>
                 </Link>
               </li>
             </ul>
           </div>
      
     );
}

export default PdtTool02;