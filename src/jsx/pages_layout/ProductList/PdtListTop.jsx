import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import queryString from 'query-string';

function PdtListTop() {
        
    const location = useLocation();
    const query = queryString.parse(location.search);
  

    return ( 
        <div className="mcom_tit_renew react-area">
        <h2 className="mcom_tit_txt clickable">

            <a>'{query.keyword}' 검색결과</a>
        </h2>
        <div className="mcom_tit_lft">
            <a className="btn_back clickable"><span

                    className="sp_ctg_icon ctg_icon_back"><span className="blind">이전 페이지</span></span></a>
        </div>
        <div className="mcom_tit_rgt">
            <div className="btn_cate btn_clip">
                <span className="cmlike _js_cmlike interestIt">

                    

                    <button className="cmlike_btn _js_cmlike_btn clickable"
                        data-react-tarea="기획전 상세|상세 헤더|기획전 클립|6000443341,[S]쓱-신 품질보장제 더위타파 보양식모음">
                        <span className="cmlike_ico">
                            <i className="cmlike_primary_m"></i>
                            <span className="sr_off"><span className="blind">관심상품 취소</span></span>
                            <span className="sr_on"><span className="blind">관심상품 등록</span></span>
                        </span>
                    </button>
                </span>
            </div>
            <div className="btn_cate btn_share">
                <button type="button" className="cm_bt_share clickable" data-morph-target=".mcom_ly_share">
                    <span className="sp_ctg_icon ctg_icon_share"><span className="blind">공유</span></span>
                </button>
            </div>
        </div>
    </div>
     );
}

export default PdtListTop;