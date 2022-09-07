import React from 'react';

function PdtTool01({buyBtn,openBuyBtn ,setBuyBtn}) {
    return ( 
        <>
         <div className={`btm_bgn_in dps1 ${buyBtn}`}>
           <ul className="btm_bgn_bx type_other1">
             <li className="ty_like">
               <span className="cmlike _js_cmlike interestIt clickable">
                 <button className="cmlike_btn _js_cmlike_btn enp_mobon_wish">
                   <span className="cmlike_ico">
                     <i className="cmlike_primary_l"></i>
                     <span className="sr_off">
                       <span className="blind">관심상품 취소</span>
                     </span>
                     <span className="sr_on">
                       <span className="blind">관심상품 등록</span>
                     </span>
                   </span>
                 </button>
               </span>
             </li>
             <li>
               <a className="mndtl_btn type05 line type_gift _js_mndtl_opt_toggle_btn clickable" target="_parent">
                 <span className="btn_tx">
                   <i className="ico_gift_box_btm"></i>선물하기
                 </span>
               </a>
             </li>
             <li>
               <a className="mndtl_btn type01 line _js_mndtl_opt_toggle_btn clickable" target="_parent"
                 onClick={openBuyBtn}>
                 <span className="btn_tx">구매하기</span>
               </a>
             </li>
           </ul>
         </div>
        </>
     );
}

export default PdtTool01;