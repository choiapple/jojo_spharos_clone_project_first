import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import CartEmptyAreaList from "./CartEmptyAreaList";

function CartEmptyarea({ userData }) {
  return (
    
    <>
      <div className="mnodr_nodata">
          <p className="mnodr_tx_tit">장바구니에 담긴 상품이 없습니다.</p>
          <div className="mnodr_btn_area ty_mgtop"></div>
        </div>
        <div className="mnodr_thickhr"></div>
        <div className="mnodr_buyoften v2" id="emptyArea">

          <div id="emptyItem" className="mnodr_unit">
            <input type="hidden" id="emptyBtnText" />
            <div className="cmgrid_full_box">
              <div className="cmtit_heading">
                <div className="cmtit_txtbx">
                  <h3 className="cmtit_maintxt">인기 상품</h3>
                  <p className="cmtit_subtxt">인기있는 상품을 둘러보세요!</p>
                </div>
              </div>
            </div>
            <CartEmptyAreaList />
          </div>
          <div className="mnodr_recomm_morebtn">
            <Link
              to="/"
              className="mnodr_more layer_filter cartTracking"
              data-type="rec"
              id="emptyBtn"
              data-tracking-cd="00044_000000198_t00060"
            >
              상품 더보기
            </Link>
            <Link
              to="/"
              className="modal-fix-open"
              data-layer-target="#_layerRec_empty"
            ></Link>
          </div>
          <div
            className="mnodr_modal ty_full"
            role="dialog"
            aria-hidden="true"
            id="_layerRec_empty"
          >
            <div className="mnodr_modal_wrap" role="document">
              <div className="mnodr_modal_head">
                <h3 className="mnodr_modal_tit">추천상품</h3>
                <button
                  type="button"
                  className="mnodr_modal_close modal-close-btn"
                >
                  <i className="mnodr_ic ic_close">
                    <span className="blind">팝업닫기</span>
                  </i>
                </button>
              </div>
              <div className="mnodr_modal_cont">
                <div className="mnodr_modal_scroll">
                  <div className="mnodr_unit"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
    
    </>
    
  );
}

export default CartEmptyarea;
