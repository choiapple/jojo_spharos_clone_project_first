import React from "react";
import SubSignUpFooter from "../pages_layout/SubSignUp/SubSignUpFooter";
import SubSignUpMain from "../pages_layout/SubSignUp/SubSignUpMain";
import SubSignUpSimple from "../pages_layout/SubSignUp/SubSignUpSimple";

function SubSignUp() {
  return (
    <div className="body_ssg body_and">
      <div id="m_wrap" className="mcom_wrap ssg">
        <div id="m_container" className="mcom_container" data-iframe-height="">
          <div className="mcom_tit_renew react-area">
            <h2 className="mcom_tit_txt clickable">

              <a>회원가입</a>

            </h2>
            <div className="mcom_tit_lft">
              <a
                href=""
                className="btn_back clickable">
                <span className="sp_ctg_icon ctg_icon_back">
                  <span className="blind">이전 페이지</span>
                </span>
              </a>
            </div>
            <div className="mcom_tit_rgt"></div>
          </div>

          <div id="m_content" className="cmem_ct_join">
            <SubSignUpMain />
            <div className="cmem_card">
              <div className="cmem_card_tit">
                <h3>간편회원</h3>
              </div>
              <SubSignUpSimple />
            </div>
          </div>

          {/* <SubSignUpFooter /> */}
        </div>
      </div>

      {/* <div
        className="ly_app react-area"
        id="lyApp"
        style={{ display: "none" }}
      ></div>

      <div className="ly_app ty2" id="lyVvip" style={{ display: "none" }}></div>

      <div
        id="com_channel_ban"
        className="channel_ban _fixed_banner"
        style={{ display: "none" }}
      ></div>
      <div
        id="notice_b2e_pop"
        className="channel_ban _fixed_banner"
        style={{ display: "none" }}
      ></div>

      <div
        id="com_extend_ban"
        className="extend_ban _fixed_banner"
        style={{ display: "none" }}
      ></div>

      <div
        className="ly_mnmorning"
        id="popup_lymnmorning"
        style={{ display: "none" }}
      ></div>

      <div
        className="cmnotipop_wrap v3"
        id="cmNotipopWrap"
        style={{ display: "none" }}
      ></div>

      <div
        className="cmnotipop_wrap v3"
        id="cmPromopopWrap"
        style={{ display: "none" }}
      ></div> */}
    </div>
  );
}

export default SubSignUp;
