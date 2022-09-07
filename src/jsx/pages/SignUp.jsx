import React from "react";
import SignUpAdv from "../pages_layout/SignUp/SignUpAdv";
import SignUpFooter from "../pages_layout/SignUp/SignUpFooter";
import SignUpHeader from "../pages_layout/SignUp/SignUpHeader";
import SignUpMain from "../pages_layout/SignUp/SignUpMain";
import SignUpZipcode from "../pages_layout/SignUp/SignUpZipcode";

function SignUp({inputData}) {
  
  return (
    <>
      <div className="body_ssg body_etc">
        <div id="m_wrap" className="mcom_wrap ssg">
          <div
            id="m_container"
            className="mcom_container"
          >
            <SignUpHeader />
            <SignUpMain inputData={inputData}/>
    
            <div id="m_content" style={{ display: "none" }}>
              <span className="dimmed">&nbsp;</span>
            </div>
          
        
          </div>
        </div>


      </div>
    </>
  );
}

export default SignUp;
