import React from 'react';
import BackBtn from '../../common/ui/button/BackBtn';

function SignUpHeader() {
    return (
      <div className="mcom_tit_renew react-area">
      <h2 className="mcom_tit_txt clickable">
        <a href="">신세계포인트 통합회원 가입</a>
      </h2>

      <BackBtn />

      <div className="mcom_tit_rgt"></div>
    </div>
    );
}

export default SignUpHeader;