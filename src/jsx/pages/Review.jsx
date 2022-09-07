import React from "react";
import ReviewHeader from "../pages_layout/Review/ReviewHeader";
import ReviewCategory from "../pages_layout/Review/ReviewCategory";
import ReviewLoader from "../pages_layout/Review/ReviewLoader";
import ReviewPhoto from "../pages_layout/Review/ReviewPhoto";
import ReviewOption from "../pages_layout/Review/ReviewOption";
import ReviewMain from "../pages_layout/Review/ReviewMain";
import ReviewPhotoModal from "../pages_layout/Review/ReviewPhotoModal";

function Review() {
  return (
    <div>
      <div
        id="mndtl_modal_iframein"
        className="mndtl_modal_iframe"
        style={{display: "block"}}
      >
        <ReviewHeader />
        <div className="mndtl_modal_cont">
          <ReviewLoader />
          <div className="body_ssg">
            <div
              id="m_wrap"
              className="mcom_wrap ssg react-area"
              aria-hidden="false">
              <div id="m_container" className="mcom_container">
                <div id="m_content">
                  <div className="mndtl_wrap ty_iframe" data-iframe-height="">
                    <div className="mndtl_sec mndtl_review_detail v2">
                      <div className="mndtl_cmt_rate">
                        <span className="mndtl_star18">
                          <span
                            className="mndtl_star18_per"
                            style={{width: "96%"}}
                          ></span>
                          <span className="blind">
                            별점 5점 중 <em>4.8</em>점
                          </span>
                        </span>
                        <span className="mndtl_rate_score" aria-hidden="true">
                          4.8/5
                        </span>
                        <div className="mndtl_rate_count">
                          <div className="mndtl_rate_total">
                            <span className="mndtl_rate_totalnum">103</span>건
                            리뷰
                          </div>
                        </div>
                      </div>
                      <ReviewPhoto />
                      <ReviewCategory />
                      <ReviewOption />
                      <ReviewMain />
                      <div
                        id="infinite-loader"
                        style={{marginTop: "10px", display: "none"}}>
                        <div className="loader">
                          <span></span> <span></span> <span></span>{" "}
                          <span></span>
                          <span></span> <span></span> <span></span>
                        </div>
                        <p
                          id="infinite-indicator"
                          className="mndtl_loading_tx"
                          style={{display: "none"}}
                        >
                          리뷰를 불러오는 중입니다.
                        </p>
                        <div>
                          <span></span> <span></span> <span></span>{" "}
                          <span></span>
                          <span></span> <span></span> <span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* 0 */}
                  <ReviewPhotoModal />
                  {/* 3 */}
                  <ReviewPhotoModal />
                </div>
              </div>
            </div>
            {/* 2 */}
            <ReviewPhotoModal />
            <div style={{clear: "both", display: "block"}}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Review;
