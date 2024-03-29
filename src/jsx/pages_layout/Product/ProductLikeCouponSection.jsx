import React from "react";

function ProductLikeCouponSection() {
  return (
    <section
      className="store_modal ty_alert"
      id="_layerLikeCoupon"
    >
      <div className="store_modal_wrap">
        <div className="store_modal_cont">
          <h3 className="store_modal_tit">좋아하는 스토어로 등록되었습니다.</h3>
          <div className="store_modal_coupon"></div>
          <div className="store_modal_desc">
            <p className="store_modal_tx ty_gray">
              발급된 쿠폰은 MY SSG &gt; 쿠폰함에서 확인하실 수 있습니다.
            </p>
          </div>
        </div>
        <footer className="store_modal_foot">
          <div className="mnodr_btn_area">
            <button
              className="mnodr_btn ty_gray ty_sm modal-close-btn"
              type="button"
            >
              닫기
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default ProductLikeCouponSection;
