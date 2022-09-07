import React from 'react';
import { Link } from 'react-router-dom';

function CategoryChange() {
    return (
        <div className="ly_change">
              <div className="tit_change">
                <h3>대체 상품</h3>
                <Link to="#" className="btn_close">
                  <span className="blind">닫기</span>
                </Link>
              </div>
              <div
                className="cont_change"
                style={{ height: "0px; touch-action: pan-x pinch-zoom" }}
              >
                <div
                  className="mcom_scroll"
                  style={{
                    transitionTimingFunction: "cubic-bezier(0.1, 0.57, 0.1, 1)",
                    transitionDuration: "0ms",
                    transform: "translate(0px, 0px) translateZ(0px)",
                  }}
                ></div>
              </div>
            </div>
    );
}

export default CategoryChange;