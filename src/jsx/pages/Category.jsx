import React from "react";
import { Link } from "react-router-dom";
import CategoryChange from "../pages_layout/Category/CategoryChange";
import CategoryContent from "../pages_layout/Category/CategoryContent";
import CategorySection from "../pages_layout/Category/CategorySection";


function Category() {
  return (
    <>
      <div className="body_sm body_and">
        <div id="m_wrap" className="mcom_wrap sm_v3">
          <div
            id="m_container"
            className="mcom_container"
            data-iframe-height=""
          >
            <CategoryChange />
            <CategoryContent />
          </div>
        </div>

        <button
          type="button"
          id="_layerLikeCouponBtn"
          className="store-modal-alert-open blind"
          data-layer-target="#_layerLikeCoupon"
          data-no-click-outside=""
        >
          스토어 좋아요
        </button>
        <CategorySection />
        <div
          className="ly_app react-area"
          id="lyApp"
          style={{ display: "none" }}
        ></div>

        <div
          className="ly_app ty2"
          id="lyVvip"
          style={{ display: "none" }}
        ></div>
      </div>
    </>
  );
}

export default Category;
