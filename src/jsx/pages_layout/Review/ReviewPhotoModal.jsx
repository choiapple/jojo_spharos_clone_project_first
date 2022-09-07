import React from "react";

function ReviewPhotoModal() {
  return (
    <div
      id="modal_photo_review"
      className="mndtl_modal_wrap ty_full modal_photo_review"
    >
      <div className="mndtl_modal_inr">
        <header className="mndtl_modal_head">
          <div className="mndtl_modal_top">
            <h2 className="blind">리뷰 크게보기</h2>
            <div className="mndtl_review_pagination v2 swiper-pagination-fraction swiper-pagination-custom">
              <span className="blind">현재 슬라이드번호</span>
              <span className="mndtl_review_current">01</span>
              <span className="mndtl_review_separator">/</span>
              <span className="blind">전체 슬라이드 개수</span>
              <span className="mndtl_review_total">02</span>
            </div>
            <a href="#" className="mndtl_btn_close modal-close-btn">
              <span className="blind">레이어팝업 닫기</span>
            </a>
          </div>
        </header>
        <div className="mndtl_modal_cont">
          <div className="mndtl_modal_scroll"></div>
        </div>
      </div>
    </div>
  );
}

export default ReviewPhotoModal;
