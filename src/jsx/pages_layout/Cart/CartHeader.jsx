import React from 'react';
import {Route, Link} from "react-router-dom";
import BackBtn from '../../common/ui/button/BackBtn';


function CartHeader(){
    return(
        <>
            <div className="mcom_tit_renew ty_top fixed2">
                <h2 className="mcom_tit_txt">장바구니</h2>
                <BackBtn />

                <div className="mcom_tit_rgt">
                    <div className="btn_cate btn_search">
                        <button type="button">
                            <span className="sp_ctg_icon ctg_icon_search payTracking"><span className="blind">검색</span></span>
                        </button>
                    </div>
                    
                    <div className="btn_cate btn_home">
                        <Link id="headerHomeBtn" to="/">
                            <span className="sp_ctg_icon ctg_icon_home"><span className="blind">홈</span></span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartHeader;