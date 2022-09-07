import React from "react";

function ReviewOption() {
  return (
    <div className="mndtl_opt_sel v2">
      <select
        data-template="#_dropopt"
        className="_dropopt"
        title="옵션별 선택"
        id="sel_uitem"
       
        style={{display: "none"}}
      >
        <option value="0" selected="selected">
          전체 선택
        </option>
        <option value="00001">색상:ANTHRACITE / 사이즈:XS</option>
        <option value="00002">색상:ANTHRACITE / 사이즈:S</option>
        <option value="00003">색상:ANTHRACITE / 사이즈:M</option>
        <option value="00004">색상:ANTHRACITE / 사이즈:L</option>
        <option value="00005">색상:ANTHRACITE / 사이즈:XL</option>
        <option value="00006">색상:LATTE / 사이즈:XS</option>
        <option value="00007">색상:LATTE / 사이즈:S</option>
        <option value="00008">색상:LATTE / 사이즈:M</option>
        <option value="00009">색상:LATTE / 사이즈:L</option>
        <option value="00010">색상:LATTE / 사이즈:XL</option>
        <option value="00012">색상:네이비멜란지 / 사이즈:S</option>
      </select>
      <div className="mndtl_select_scroll">
        <div className="mndtl_opt_sel_tit">
          <span className="mndtl_tit_tx">상품 옵션별</span>
        </div>
        <div className="mcom_scroll">
          <ul className="mndtl_select_lst _drop_list">
            <li className="selected" data-index="0">
              <a href="#" className="mndtl_select_link">
                <span className="mndtl_select_txt">
                  <span className="sel_txt">전체 선택</span>
                </span>
              </a>
            </li>
            <li data-index="1">
              <a href="#" className="mndtl_select_link">
                <span className="mndtl_select_txt">
                  <span className="sel_txt">색상:ANTHRACITE / 사이즈:XS</span>
                </span>
              </a>
            </li>
            <li data-index="2">
              <a href="#" className="mndtl_select_link">
                <span className="mndtl_select_txt">
                  <span className="sel_txt">색상:ANTHRACITE / 사이즈:S</span>
                </span>
              </a>
            </li>
            <li data-index="3">
              <a href="#" className="mndtl_select_link">
                <span className="mndtl_select_txt">
                  <span className="sel_txt">색상:ANTHRACITE / 사이즈:M</span>
                </span>
              </a>
            </li>
            <li data-index="4">
              <a href="#" className="mndtl_select_link">
                <span className="mndtl_select_txt">
                  <span className="sel_txt">색상:ANTHRACITE / 사이즈:L</span>
                </span>
              </a>
            </li>
            <li data-index="5">
              <a href="#" className="mndtl_select_link">
                <span className="mndtl_select_txt">
                  <span className="sel_txt">색상:ANTHRACITE / 사이즈:XL</span>
                </span>
              </a>
            </li>
            <li data-index="6">
              <a href="#" className="mndtl_select_link">
                <span className="mndtl_select_txt">
                  <span className="sel_txt">색상:LATTE / 사이즈:XS</span>
                </span>
              </a>
            </li>
            <li data-index="7">
              <a href="#" className="mndtl_select_link">
                <span className="mndtl_select_txt">
                  <span className="sel_txt">색상:LATTE / 사이즈:S</span>
                </span>
              </a>
            </li>
            <li data-index="8">
              <a href="#" className="mndtl_select_link">
                <span className="mndtl_select_txt">
                  <span className="sel_txt">색상:LATTE / 사이즈:M</span>
                </span>
              </a>
            </li>
            <li data-index="9">
              <a href="#" className="mndtl_select_link">
                <span className="mndtl_select_txt">
                  <span className="sel_txt">색상:LATTE / 사이즈:L</span>
                </span>
              </a>
            </li>
            <li data-index="10">
              <a href="#" className="mndtl_select_link">
                <span className="mndtl_select_txt">
                  <span className="sel_txt">색상:LATTE / 사이즈:XL</span>
                </span>
              </a>
            </li>
            <li data-index="11">
              <a href="#" className="mndtl_select_link">
                <span className="mndtl_select_txt">
                  <span className="sel_txt">색상:네이비멜란지 / 사이즈:S</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="mndtl_opt_sel_close">
          <button type="button" className="btn_opt_sel_close">
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReviewOption;
