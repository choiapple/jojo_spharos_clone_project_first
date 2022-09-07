import React from "react";

function ReviewCategory() {
  return (
    <div className="mndtl_cmt_menu_new">
      <div className="mndtl_filter_wrap_new">
        <div className="mndtl_filter_view lft">
          <div className="mndtl_filter_area">
            <ul className="mndtl_filter_tbl">
              <li className="rank_td">
                <div className="in">
                  <a href="#" className="btn_t">
                    전체(103)
                    <span className="ico_arrow">&nbsp;</span>
                  </a>
                  <ul className="mn_layer">
                    <li
                      id="postng_cls_10"
                      
                    >
                      <a href="">
                        전체<span>(103)</span>
                      </a>
                    </li>
                    <li
                      id="postng_cls_20"
                      
                    >
                      <a href="">
                        포토<span>(8)</span>
                      </a>
                    </li>
                    <li
                      id="postng_cls_30"
                      
                    >
                      <a href="">
                        동영상<span>(0)</span>
                      </a>
                    </li>
                    <li
                      id="postng_cls_50"
                      
                    >
                      <a href="">
                        쓱쉐프<span>(0)</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <div className="mndtl_sel_dim"></div>
          </div>
        </div>
        <div className="mndtl_cmtmn_sort">
          <div className="mndtl_cmt_sel">
            <button
              id="_btn_filter_by_option"
              type="button"
              className="mndtl_cmt_selbtn btn_imgsel"
            >
              옵션별 보기
            </button>
            <div className="mndtl_sel_dim"></div>
          </div>
        </div>

        <div className="mndtl_filter_view rgt">
          <div className="mndtl_filter_area">
            <ul className="mndtl_filter_tbl">
              <li className="rank_td">
                <div className="in">
                  <a
                    href="#"
                    className="btn_t clickable"
                    data-react-tarea="상품상세|상품평|필터_영역|필터_클릭"
                  >
                    추천순
                    <span className="ico_arrow v2">&nbsp;</span>
                  </a>
                  <ul className="mn_layer">
                    <li data-sort-type="05">
                      <a href="#">추천순</a>
                    </li>
                    <li data-sort-type="01">
                      <a href="#">최신순</a>
                    </li>
                    <li data-sort-type="02">
                      <a href="#">평점높은순</a>
                    </li>
                    <li data-sort-type="04">
                      <a href="#">평점낮은순</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <div className="mndtl_sel_dim"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewCategory;
