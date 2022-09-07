import React from 'react';

function ReviewHeader() {
    return (
        <div className="mndtl_modal_head" style={{}}>
          <div className="mndtl_modal_top">
            <a
              href="#"
              className="mndtl_btn_back modal-close-btn modal-iframe-close">
              <i className="mndtl_ic_arrback"></i>
              <span className="blind">이전 페이지</span>
            </a>
            <div className="mndtl_cont_tit">
              <h2>고객리뷰</h2>
            </div>
          </div>
        </div>
    );
}

export default ReviewHeader;