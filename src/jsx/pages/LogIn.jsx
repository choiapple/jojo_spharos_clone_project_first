import React from "react";
import Footer from "../layout/Footer";
import MpContent from "../pages_layout/LogIn/LiContent";
import MpHeader from "../pages_layout/LogIn/LiHeader";

function LogIn() {
  return (
    <>
      <div id="m_wrap" className="mcom_wrap ssg">
        <div id="m_container" className="mcom_container" data-iframe-height="">
          <MpHeader />
          <div className="ly_change ly_narae">
           
            <div className="cont_change">
              <div className="mcom_scroll"></div>
            </div>
          </div>
          <MpContent />
        </div>
      </div>

     
    </>
  );
}

export default LogIn;
