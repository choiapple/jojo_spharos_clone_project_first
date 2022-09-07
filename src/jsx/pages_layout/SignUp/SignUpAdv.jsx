import React from 'react';

function SignUpAdv() {
    return (
        <div className="cmem_cont">

          <div className="cmem_row">
            <div className="cmem_terms">
              <div className="cmem_term_tit">
                <h4>SSG.COM</h4>
              </div>
              <div className="cmem_term_box">
                <span className="cmem_inp_chk">
                  <input type="checkbox" id="policySsg" data-type="agree40019"
                    name="ssgInfoRcvAgreeDto.mbrSvcAgreeTypeCd" value="10" />
                  <label for="policySsg">
                    <strong>(선택)</strong> 서비스·이벤트정보 제공을
                    위한 개인정보 수집 및 이용 동의
                  </label>
                </span>
                <a href=""
                  onclick="window.open('/m/member/join/agreePrivacyDetail.ssg?type=privacy_signup_terms_scom02');return false;"
                  className="cmem_btn cmem_btn_gray3" title="새창 열림">
                  내용보기
                </a>
                <ul className="cmem_termlst" id="agree40019">
                  <li>
                    <span className="cmem_inp_chk">
                      <input type="checkbox" id="emailRcvYn" name="ssgInfoRcvAgreeDto.emailRcvYn" value="Y"
                        disabled="" />
                      <label for="emailRcvYn">이메일</label>
                    </span>
                  </li>
                  <li>
                    <span className="cmem_inp_chk">
                      <input type="checkbox" id="smsRcvYn" name="ssgInfoRcvAgreeDto.smsRcvYn" value="Y" disabled="" />
                      <label for="smsRcvYn">문자</label>
                    </span>
                  </li>
                </ul>
                <p className="cmem_noti">
                  <em>
                    광고 정보 수신동의를 하시면 SSG.COM 서비스 및 이벤트
                    정보를 받으실 수 있습니다.
                  </em>
                </p>
              </div>
            </div>
          </div>
          <div className="cmem_row">
            <p className="cmem_noti">
              <strong>
                선택 항목에 동의하지 않더라도 SSG,COM회원가입 및 기본
                서비스를 이용하실 수 있습니다.
              </strong>
            </p>
          </div>
          <div className="cmem_btn_area">
            <a href="#" className="cmem_btn cmem_btn_orange2" onclick="join.insert();return false;">
              가입하기
            </a>
          </div>
        </div>

    );
}

export default SignUpAdv;