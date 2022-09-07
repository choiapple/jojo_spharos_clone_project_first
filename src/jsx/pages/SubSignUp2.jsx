import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import BackBtn from "../common/ui/button/BackBtn";
import SignUp from "./SignUp";



function SubSignUp2() {


    const check = (ctt)=>{
        Swal.fire({
          /* title: '잠깐!', */
          width: 450,
          text: ctt,
          icon: 'warning',
        /*   showClass: {
            popup: 'animate__animated animate__fadeIn',
          }, */
        })
      }



  const navigate = useNavigate();
  const [signUp, setSignUp] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [inputData, setInputData] = useState({
    name: "",
    birth: "",
    gender: "",
    phone: "",
  });

  const [modal, setModal] = useState(false);
  const handleModal = (e) => {
    const modalArr = Array(4).fill(false);
    modalArr[e] = true;
    setModal(modalArr);
  };
  const closeModal = () => {
    setModal(!modal);
  };

  const handleShow = () => {
    setIsShow(!isShow);
  };

  const handleInput = (e) => {
    // console.log(e.target)
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

/*   const [checkedItems , setCheckedItems] = useState(new Set());
  const checkedItemHandler = (id, isChecked) =>{
    if(isChecked){
        checkedItems.add(id);
        setCheckedItems(checkedItems);
    }else if(!isChecked && checkedItems.has(id)){
        checkedItems.delete(id);
        setCheckedItems(checkedItems);
    }
  }
  const [bChecked, setChecked] =useState(false)
  const checkHandler = ({target}) => {
    setChecked(!bChecked);
    checkedItemHandler(issue.id, target.checked);
  } */


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputData.name === "") {
        check("이름을 입력해주세요");
    }   
    else if(inputData.gender === ""){
        check("성별을 선택해주세요");
    }
    else if (inputData.birth === "") {
        check("생년월일을 입력해주세요");
    }
    else if(inputData.phone === ""){
        check("휴대폰 번호를 입력해주세요")
    }
     else if (inputData.name && inputData.birth && inputData.gender && inputData.phone) 
    { 

      console.log(inputData);
      setSignUp(!signUp);
    }
  };

  return (
    <>
      {signUp ? (
        <SignUp inputData={inputData} />
      ) : (
        <>
          <div
            id="m_content"
            className={
              !isShow ? "cmem_ct_join viewCom" : "cmem_ct_join hideCom"
            }
          >
            <div className="mcom_tit_renew  react-area">
              <h2 className="mcom_tit_txt clickable">
                <a>신세계포인트 통합회원 가입</a>
              </h2>
              <BackBtn />
              <div className="mcom_tit_rgt"></div>
            </div>
            <div className="cmem_card_tit">
              <h3>본인인증</h3>
            </div>
            <div className="cmem_certi_area">
              <p className="cmem_certi_tit">
                자주 사용하시는 인증 수단으로 본인인증을 진행해주세요.
              </p>
              <div className="cmem_certi">
                <span className="cmem_certi_item">
                  <a
                    onClick={handleShow}
                    className="cmem_certi_phone"
                    title="새창열림"
                  >
                    휴대폰 인증
                  </a>
                </span>

                <span className="cmem_certi_item">
                  <a className="cmem_certi_card" title="새창열림">
                    신용/체크카드 인증
                  </a>
                </span>
              </div>
              <ul className="cmem_certi_notice">
                <li>
                  법인폰 사용자는 법인폰 개인인증 서비스 신청 후 휴대폰 인증을
                  하실 수 있습니다.
                </li>
                <li>
                  본인인증이 잘 되지 않으시면 본인인증기관 고객센터로 문의
                  해주세요.
                  <br />
                  <em>
                    NICE평가정보(주) 고객센터 : 1600-1522
                    <br />
                    코리아크레딧뷰로(주) 고객센터 : 02-708-1000
                  </em>
                </li>
              </ul>
            </div>
          </div>
          <div id="cert" className={!isShow ? " hideCom" : " viewCom"}>
            <div className="mcom_tit_renew  react-area">
              <h2 className="mcom_tit_txt clickable">
                <a>신세계포인트 통합회원 가입</a>
              </h2>
              <div className="mcom_tit_lft" onClick={handleShow}>
                <a className="btn_back clickable">
                  <span className="sp_ctg_icon ctg_icon_back">
                    <span className="blind">이전 페이지</span>
                  </span>
                </a>
              </div>
              <div className="mcom_tit_rgt"></div>
            </div>

            <form className="m_member_wrap" onSubmit={handleSubmit}>
              <div className="m_auth_section">
                <h2 className="blind">약관 동의</h2>
                <ul className="terms_list">
                  <li className="terms_bx">
                    <span className="custom_chk">
                      <input type="checkbox" id="termPrivacy" />

                      <label htmlFor="termPrivacy">
                        <span>개인정보 이용 및 제공 동의</span>
                      </label>
                    </span>

                    <a
                      className="btn_terms_more modal-open-btn"
                      onClick={() => handleModal(1)}
                    >

                      <span className="sp_member">내용보기</span>
                    </a>
                  </li>

                  <li className="terms_bx">
                    <span className="custom_chk">
                      <input type="checkbox" id="termTelecom" />
                      <label htmlFor="termTelecom">
                        <span>통신사 이용약관 동의</span>
                      </label>
                    </span>
                    <a
                      className="btn_terms_more modal-open-btn"

                      onClick={() => handleModal(2)}

                      data-morph-target=".ly_terms_telecom"
                    >
                      <span className="sp_member">내용보기</span>
                    </a>
                    <a
                      className="btn_terms_more modal-open-btn"
                      data-morph-target=".ly_terms_telecom_nice"
                      style={{ display: "none" }}
                    >
                      <span className="sp_member">내용보기</span>
                    </a>
                  </li>
                  <li className="terms_bx">
                    <span className="custom_chk">
                      <input type="checkbox" id="termUni" />
                      <label htmlFor="termUni">
                        <span>고유식별정보 처리 동의</span>
                      </label>
                    </span>
                    <a
                      className="btn_terms_more modal-open-btn"

                      onClick={() => handleModal(3)}

                      data-morph-target=".ly_term_unique"
                    >
                      <span className="sp_member">내용보기</span>
                    </a>
                    <a
                      className="btn_terms_more modal-open-btn"
                      data-morph-target=".ly_term_unique_nice"
                      style={{ display: "none" }}
                    >
                      <span className="sp_member">내용보기</span>
                    </a>
                  </li>
                  <li className="terms_bx">
                    <span className="custom_chk">
                      <input type="checkbox" id="termService" />
                      <label htmlFor="termService">
                        <span>서비스 이용약관 동의</span>
                      </label>
                    </span>
                    <a
                      className="btn_terms_more modal-open-btn"

                      onClick={() => handleModal(4)}

                      data-morph-target=".ly_term_service"
                    >
                      <span className="sp_member">내용보기</span>
                    </a>
                    <a
                      className="btn_terms_more modal-open-btn"
                      data-morph-target=".ly_term_service_nice"
                      style={{ display: "none" }}
                    >
                      <span className="sp_member">내용보기</span>
                    </a>
                  </li>

                  <li className="terms_bx">
                    <span className="custom_chk">
                      <input type="checkbox" id="chkAll" />
                      <label htmlFor="chkAll">
                        <span className="txt_point">전체 동의</span>
                      </label>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="m_auth_section">
                <h2 className="blind">정보 입력</h2>

                <div className="auth_bx">
                  <div className="row">
                    <div className="column">
                      <span className="inp_txt">
                        <input
                          type="text"
                          id="userName"
                          name="name"
                          maxLength="50"
                          placeholder="이름"
                          onChange={handleInput}
                        />
                        <label htmlFor="userName">이름</label>
                      </span>
                    </div>
                    <div className="column gender">
                      <span className="tag_group">
                        <span className="tag">
                          <input
                            type="radio"
                            name="gender"
                            id="userMale"
                            value="male"
                            onChange={handleInput}
                          />
                          <label htmlFor="userMale">남</label>
                        </span>
                        <span className="tag">
                          <input
                            type="radio"
                            name="gender"
                            id="userFemale"
                            value="female"
                            onChange={handleInput}
                          />
                          <label htmlFor="userFemale">여</label>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="column">
                      <span className="inp_txt">
                        <input
                          name="birth"
                          type="tel"
                          maxLength="8"
                          onChange={handleInput}
                          placeholder="생년월일 8자리(예. 20100101)"
                          value={inputData.birth}
                        />
                        <label htmlFor="userBirth">생년월일</label>
                      </span>
                    </div>
                    <div className="column nation">
                      <div className="custom_sel">
                        <select
                          id="userNation"
                          name="nation"
                          title="내/외국인 선택"
                        >
                          <option value="1" checked="">
                            내국인
                          </option>
                          <option value="2">외국인</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="column telecom">
                      <div className="custom_sel">
                        <select
                          name="telComCd"
                          id="telComCd"
                          title="통신사 선택"
                        >
                          <option value="01">SKT</option>
                          <option value="02">KT</option>
                          <option value="03">LG U+</option>
                          <option value="04">SKT 알뜰폰</option>
                          <option value="05">KT 알뜰폰</option>
                          <option value="06">LG U+ 알뜰폰</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="column">
                      <span className="inp_txt">
                        <input
                          type="tel"
                          id="userMobile"
                          name="phone"
                          maxLength="11"
                          placeholder="-없이 휴대폰번호 입력"
                          numberonly=""
                          onChange={handleInput}
                        />
                        <label htmlFor="userMobile">휴대폰번호</label>
                      </span>
                    </div>
                  </div>

                  <div
                    id="sectionOtp"
                    className="row"
                    style={{ display: "none" }}
                  >
                    <div className="column send_num">
                      <span className="inp_txt">
                        <input
                          type="tel"
                          id="userAuth"
                          name="otpNo"
                          placeholder="인증번호"
                          maxLength="6"
                          numberonly=""
                        />
                        <label htmlFor="userAuth">인증번호</label>
                      </span>
                      <a className="btn_send">재전송</a>
                      <span className="time"></span>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn_base btn_apply"
                  id="btnReqOtp"
                >
                  인증번호 요청
                </button>
                <button
                  type="button"
                  className="btn_base btn_apply"
                  id="btnConfirm"
                  style={{ display: "none" }}
                >
                  확인
                </button>
              </div>

              <div className="m_auth_section">
                <ul className="noti_list">
                  <li>
                    <span className="sp_member bul">&nbsp;</span>본인 명의의
                    휴대폰 정보를 정확히 입력하여 주시기 바랍니다.
                  </li>
                  <li>
                    <span className="sp_member bul">&nbsp;</span>타인의 명의를
                    도용하여 부정인증을 시도한 경우 관련 법령에 따라 처벌(3년
                    이하의 징역형 또는 1천만원 이하의 벌금형) 받을수 있습니다.
                  </li>
                  <li>
                    <span className="sp_member bul">&nbsp;</span>
                    <span id="ven_cs_num">
                      인증문의 : (주)KCB고객센터(02-708-1000)
                    </span>
                  </li>
                </ul>
              </div>


              <div
                className={
                  modal[1]
                    ? "m_lyr_modal ly_terms_privacy show"
                    : "m_lyr_modal ly_terms_privacy"
                }
              >

                <div className="m_lyr_con">
                  <h2 className="t_tit">개인정보 이용 및 제공동의</h2>
                  <div className="m_lyr_scroll">
                    <p>
                      (주)코리아크레딧뷰로(이하 "회사"라고 한다)가 제공하는
                      "본인확인서비스" 의 휴대폰 본인확인과 관련하여
                      본인으로부터 취득한 개인정보는 "정보통신망이용촉진 및
                      정보보호등에 관한 법률" 및 "신용정보의 이용 및 보호에 관한
                      법률"에 따라 본인의 동의를 얻어 다음의 목적을 위해 제공 및
                      이용 됩니다.
                      <br />
                      <br />
                      <strong>[개인정보 이용 및 제공 목적]</strong>
                      <br />
                      <br />
                      "회사"는 생년월일과 휴대폰번호 일치 여부 및 휴대폰 점유
                      확인과 휴대폰 번호보호 서비스를 안내하기 위한 목적으로
                      아래의 회사에 다음의 정보를 이용 및 제공합니다.
                      <br />
                      <br />
                      ① 이용 및 제공 정보
                      <br />
                      - 휴대폰번호, 통신사정보, 생년월일, 성명, 성별, 내외국인
                      정보
                      <br />
                      ② 제공사
                      <br />
                      - SKT, KT, LG U+, 드림시큐리티, 스탠다드네트웍스, 인포뱅크
                      및 본인확인 서비스 요청 사업자
                      <br />
                      <br />
                      <strong>[개인정보 정보 보유 및 이용기간]</strong>
                      <br />
                      <br />
                      "회사"는 이용자의 개인정보를 이용목적이 달성되거나 보유 및
                      보존기간이 종료하면 해당 정보를 지체없이 파기 하며 별도의
                      보관을 하지 않습니다. 단, 관련 법령 및 회사방침에 따라
                      보존하는 목적과 기간은 아래와 같습니다.
                      <br />
                      <br />
                      <strong>[관련법령에 의한 정보보유 사유]</strong>
                      <br />
                      <br />
                      정보통신망 이용촉진 및 정보보호 등에 관한 법률과
                      신용정보의 이용 및 보호에 관한 법률 등 관계법령의 규정에
                      의하여 보존할 필요가 있는 경우 회사는 관계법령에서 정한
                      일정한 기간 동안 회원정보를 보관합니다. 이 경우 회사는
                      보관하는 정보를 그 보관의 목적으로만 이용하며 보존기간은
                      아래와 같습니다.
                      <br />
                      <br />
                      1. 정보통신망 이용촉진 및 정보보호 등에 관한 법률과
                      신용정보의 이용 및 보호의 관한 법률에 의거 정보 보존 기간:
                      3년
                      <br />
                      2. 회사 내부 방침에 의하여 부정이용방지를 위한 정보
                      보존기간: 5년
                      <br />
                      3. 소비자의 불만 또는 분쟁처리에 관한 기록: 3년(전자상거래
                      등에서의 소비자보호에 관한 법률)
                      <br />※ 본 개인정보 수집 이용동의는 거부할 수 있으나, 거부
                      시에는 휴대폰본인확인서비스를 제공받으실 수 없습니다.
                    </p>
                  </div>

                  <a
                    className="modal-close-btn modal-close hover"
                    onClick={closeModal}
                  >

                    <span className="blind">레이어 닫기</span>
                  </a>
                </div>
              </div>

              <div
                className={
                  modal[2]
                    ? "m_lyr_modal ly_terms_telecom show"
                    : "m_lyr_modal ly_terms_telecom"
                }
              >

                <div className="m_lyr_con">
                  <h2 className="t_tit">통신사 이용약관 동의</h2>
                  <ul className="m_lyr_tab">
                    <li className="on">
                      <a href="#cont1">SKT</a>
                    </li>
                    <li>
                      <a href="#cont2">KT</a>
                    </li>
                    <li>
                      <a href="#cont3">LG U+</a>
                    </li>
                  </ul>

                  <div className="tab_cont" id="cont1" style={{display:'block'}}>

                    <div className="m_lyr_scroll">
                      <p>
                        <strong>제1조 (목적)</strong>
                        <br />
                        <br />
                        이 약관은 '본인확인서비스'를 제공하는 에스케이텔레콤
                        주식 '회사'(이하 "회사"라 합니다)와 '본인확인서비스'
                        이용자 (이하 '이용자'라 합니다)간에 '본인확인서비스'
                        이용에 관한 '회사'와 '이용자'의 권리와 의무, 기타 제반
                        사항을 정함을 목적으로 합니다.
                        <br />
                        <br />
                        <strong>제2조 (용어의 정의)</strong>
                        <br />
                        <br />
                        ① '본인확인서비스'라 함은 '이용자'가 유무선 인터넷
                        웹'사이트' 및 스마트폰 Application 등(이하 '사이트'라
                        합니다)에서 본인 명의로 개통한 휴대폰을 이용하여,
                        본인확인정보를 입력하고 인증 절차를 통하여 본인 여부와
                        본인이 등록한 정보의 정확성을 확인하여 주는 서비스를
                        말합니다.
                        <br />
                        ② '본인확인정보'라 함은 본인확인을 위하여 '이용자'가
                        입력한 본인의 생년월일, 성별, 성명, 내/외국인 여부,
                        본인명의로 개통된 이동전화번호, 기타 '회사'와
                        '이용자'간에 별도로 설정한 번호 등 '이용자'에 대한
                        '본인확인서비스' 제공을 위해 필요한 정보를 말합니다.
                        <br />
                        ③ '이용자'라 함은 '사이트'에서 '회사'가 제공하는
                        '본인확인서비스'를 이용하는 자를 말하며, '회사'의
                        이동전화서비스 가입자와 '회사'의 이동전화망을 이용하여
                        개별적으로 이동전화서비스를 제공하는 별정통신사업자의
                        가입자중 '회사'의 '본인확인서비스'를 이용하는 자를
                        말합니다.
                        <br />
                        ④ '중복가입확인정보'라 함은 '이용자'가 '사이트'에
                        가입하거나 '사이트'에서 특정 서비스 이용, 구매 등 어떤
                        행동을 할 때, 해당 '이용자'의 기 가입/이용 여부를
                        확인하기 위하여 생성되는 정보를 말합니다.
                        <br />
                        ⑤ '본인확인기관'이라 함은 정보통신망 이용촉진 및
                        정보보호 등에 관한 법률 등 '본인확인서비스' 관련 법령에
                        따라 주민등록번호를 수집·이용하고, '사이트'에서
                        주민등록번호를 사용하지 아니하고 본인을 확인할 수 있도록
                        해주는 방법(이하 '대체수단'이라 합니다)을
                        개발·제공·관리하는 업무를 담당하는 사업자를 말합니다.
                        <br />
                        ⑥ '연계 식별정보'라 함은 '이용자'가 가입/등록한
                        '사이트'들간의 서비스 또는 Contents, point등의 연계,
                        정산 등의 목적으로 '사이트'에 가입/등록한 '이용자'를
                        식별하기 위하여 생성되는 정보를 말합니다.
                        <br />
                        ⑦ '대행기관'은 '이용자'가 '사이트'에서
                        '본인확인서비스'를 제공받을 수 있도록, '사이트'와
                        '회사'간의 '본인확인서비스'를 중계하고 '이용자'에게
                        '본인확인서비스' 이용방법의 안내와 문의 등 지원업무를
                        담당하는 등, '회사'가 위탁한 업무범위내에서 '회사'를
                        대신하여 '이용자'에게 '본인확인서비스'와 관련된 업무를
                        제공하는 사업자를 말합니다.
                        <br />
                        ⑧ '사이트'라 함은 유무선 인터넷 웹'사이트', 스마트폰
                        Application 등을 통하여 '이용자'에게 상품, 서비스,
                        Contents, Point 등 각종 재화와 용역을 유/무료로 제공하는
                        개인, 법인, 기관, 단체 등을 말합니다.
                        <br />
                        ⑨ '접근매체'란 '본인확인서비스' 이용을 위해 '이용자' 및
                        '이용자'가 입력하는 내용 등의진실성과 정확성을 담보하는
                        수단으로서, '이용자'가 입력하는 제2항의 정보, I-PIN ID
                        및 Password 등 '본인확인기관'에서 발급받은 정보, 기타
                        '이용자'가 '회사' 및 '사이트'에서 설정한 ID 및 Password
                        등의 정보, '이용자' 명의의 이동전화 번호 등을 말합니다.
                        <br />
                        ⑩ '대체수단'이라 함은 '중복가입확인정보' 및
                        연계식별정보를 포함하여, 주민등록정보를 사용하지
                        아니하고 본인여부를 식별 및 확인할 수 있는 수단을
                        말합니다.
                        <br />
                        <br />
                        <strong>제3조 (약관의 명시 및 변경)</strong>
                        <br />
                        <br />
                        ① '회사'는 이 약관을 '회사'가 운영하는 '사이트' 등에
                        게시하거나 '이용자'의 '본인확인서비스' 이용시 공개하여
                        '이용자'가 이 약관의 내용을 확인할 수 있도록 합니다.
                        또한 '이용자'의 요청이 있는 경우 전자문서의 형태로 약관
                        사본을 '이용자'에게 교부합니다.
                        <br />
                        ② '회사'는 필요하다고 인정되는 경우 이 약관을 변경할 수
                        있으며, '회사'가 약관을 변경할 경우에는 적용일자 및
                        변경사유를 명시하여 '회사'가 운영하는 '사이트'에서
                        적용일자 15일 전부터 공지합니다.
                        <br />
                        ③ '회사'가 전항에 따라 변경 약관을 공지 또는 통지하면서
                        '이용자'에게 약관 변경 적용일 까지 거부의사를 표시하지
                        않으면 약관의 변경에 동의한 것으로 간주한다는 내용을
                        명확하게 공지 또는 통지하였음에도 '이용자'가 명시적으로
                        약관 변경에 대한 거부의사를 표시하지 아니하면 '이용자'가
                        변경 약관에 동의한 것으로 간주합니다. '이용자'는 변경된
                        약관 사항에 동의하지 않으면 '본인확인서비스' 이용을
                        중단하고 이용 계약을 해지할 수 있습니다.
                        <br />
                        ④ '이용자' 또는 '사이트'가 이 약관의 내용(약관 변경시
                        변경된 내용 포함)을 알지 못하여 발생하는 손해 및 피해에
                        대해서는 '회사'는 일체 책임을 지지 않습니다.
                        <br />
                        <br />
                        <strong>제4조 (이용 계약의 성립)</strong>
                        <br />
                        <br />
                        '이용자'가 '사이트' 등에 게시되거나 '본인확인서비스'
                        이용시 공개되는 이 약관의 내용에 "동의" 버튼을 누르거나
                        체크하면 약관에 동의하고, '본인확인서비스' 이용을 신청한
                        것으로 간주합니다.
                        <br />
                        <br />
                        <strong>
                          제5조 (본인확인정보 및 '접근매체'의 관리 등)
                        </strong>
                        <br />
                        <br />
                        ① '회사'는 '본인확인서비스' 제공시 '이용자'가 사용한
                        '접근매체'와 입력된 본인확인정보, '사이트'에서 제공하는
                        정보 등을 이용하여, '이용자'의 신원, 권한 및
                        '본인확인서비스'를 요청한 내역 등을 확인 할 수 있습니다.
                        <br />
                        ② '이용자'는 자신의 본인확인 정보 및 '접근매체'를
                        제3자에게 대여하거나 사용을 위임하거나 양도 또는 담보
                        목적으로 제공할 수 없으며, 본인확인정보 및 '접근매체'의
                        도용이나 위조·변조 등을 방지하기 위해 충분한 주의를
                        기울여야 합니다.
                        <br />
                        ③ '이용자'는 자신의 본인확인정보 및 '접근매체'를
                        제3자에게 누설 또는 노출하거나 방치하여서는 안됩니다.
                        <br />
                        ④ '이용자'는 '접근매체'의 분실·도난·유출·위조·변조 등
                        또는 본인확인정보 유출 등의 사실을 인지할 경우 '회사'에
                        즉시 통지하여야 하며, '회사'는 '이용자'의 통지를 받은
                        때부터 즉시 '본인확인서비스'를 중지합니다.
                        <br />
                        <br />
                        <strong>제6조 ('본인확인서비스' 안내)</strong>
                        <br />
                        <br />
                        ① '회사'가 제공하는 '본인확인서비스'는, '이용자'가
                        입력한 본인확인정보에 대해, '이용자'가 본인 명의로
                        개통하고 사용하고 있는 이동전화 서비스 관련 정보 ·
                        '중복가입확인정보' · '연계 식별정보'를 이용하여, 본인
                        식별 또는 본인의 성년 · 미성년 여부, 중복가입여부 등을
                        확인하여주는 서비스 입니다. 단, '회사'의 이동전화망을
                        이용하여 개별적으로 이동전화서비스를 제공하는
                        별정통신사업자의 가입자에 대해서는 개별 별정통신사업자가
                        '회사'에 취급을 위탁한 정보만을 기반으로 본문의 서비스를
                        제공합니다.
                        <br />
                        ② '회사'는 직접 또는 '대행기관'을 통하여 '사이트'에,
                        서비스 화면 또는 Socket형태로 '본인확인서비스'를
                        제공하며, '사이트'는 '사이트' 운영과 관련된 법령과
                        '사이트' 이용약관에 따라 '이용자'에게 '본인확인서비스'
                        이용 수단을 제공합니다.
                        <br />
                        ③ '이용자'는 특정 '사이트'에서 '회사' 및 '대행기관'의
                        이용약관, '사이트'의 이용약관에 동의하는 경우, 해당
                        '사이트'에서 '회사'가 제공하는 '본인확인서비스'를
                        이용하실 수 있습니다.
                        <br />
                        ④ 제3항에 따라 각 이용약관에 동의한 경우, '이용자'가
                        자신의 생년월일, 성명, 성별, 내/외국인, 본인 명의로
                        가입한 이동통신사와 이동전화 번호 등의 정보를 입력하고,
                        입력한 정보가 일치하는 경우에 '이용자'의 이동전화 번호로
                        송신되는 1회성 암호(승인암호)를 정확하게 입력하는 것으로
                        본인 확인이 이루어 집니다. 단, '회사'가 직접 운영하는
                        '사이트' 또는 관련 법령 등에 따라 주민등록번호의
                        수집·이용이 허용되는 '사이트'에서는 생년월일 대신
                        주민등록번호를 받을 수 있습니다.
                        <br />
                        ⑤ 제4항에 따라 본인확인이 완료된 '이용자'에 대해서는
                        해당 '이용자'의 본인확인정보, '중복가입확인정보' 및
                        '연계 식별정보'를 '회사'가 보유하고 있는 경우,
                        '사이트'의 요청에 따라 '사이트'에 제공될 수 있으며,
                        제공된 정보는 각 '사이트'가 '이용자'와 체결한 약관,
                        계약에 따라 운영 · 관리 · 폐기됩니다.
                        <br />
                        <br />
                        <strong>제7조 ('본인확인서비스'의 '부가서비스')</strong>
                        <br />
                        <br />
                        ① '회사'는 '본인확인서비스' 이용과 관련하여, 보다 강화된
                        보안을 필요로 하는 '이용자'가 가입을 신청하는 경우에
                        한하여, 별도의 '부가서비스'를 유료 또는 무료로
                        제공합니다.
                        <br />
                        ② '회사'가 제공하는 '부가서비스'는 다음 각 호와 같으며,
                        상세 서비스 내용 및 이용 조건은 서비스별 이용약관에
                        따릅니다.
                        <br />
                        1. 휴대폰 인증보호 서비스 (월 1천원, 부가가치세 별도)
                        <br />
                        <br />
                        <strong>제8조 ('대체수단'의 생성 및 제공)</strong>
                        <br />
                        <br />
                        ① '회사'는 '이용자'의 이동전화 가입시 수집한
                        주민등록번호를 토대로 '대체수단'을 생성하고 '사이트'에
                        제공할 수 있습니다.
                        <br />
                        ② '회사'의 '대체수단' 생성 및 제공방법은 다음 각 호와
                        같습니다.
                        <br />
                        1. '이용자'의 이동전화 가입시, 제3의 '본인확인기관'에
                        실명 사용여부를 질의하고, 이에 따라 '대체수단'을
                        받아와서 저장하는 방법
                        <br />
                        2. '이용자'의 '본인확인서비스' 이용시, 제3의
                        '본인확인기관'간의 합의를 통하여 비밀번호 등 '대체수단'
                        규격을 정한 후, 이에 따라 '회사'가 생성하거나 제3의
                        '본인확인기관'으로부터 제공받는 방법
                        <br />
                        3. '이용자'의 '본인확인서비스' 이용시, 해당 '이용자'의
                        이동전화가입시 '회사'가 제공받은 주민등록번호와 해당
                        '이용자'가 이용하고 있는 '사이트'의 일련번호를 제3의
                        '본인확인기관'에 제공하고, 이에 해당되는 '대체수단'을
                        받아와서 제공하는 방법
                        <br />
                        ③ 제1항 제3호에 따라 '회사'가 제3의
                        '본인확인기관'으로부터 '대체수단'을 제공받은 경우, 해당
                        '대체수단'의 정확성 유무에 대해서는 '회사'가 책임지지
                        않습니다.
                        <br />
                        <br />
                        <strong>제9조 ('본인확인서비스' 제공시간)</strong>
                        <br />
                        <br />
                        ① '본인확인서비스'의 이용은 연중무휴 1일 24시간을
                        원칙으로 합니다. 다만, 정기 점검 및 기타 기술상의 이유,
                        기타 운영상의 사유와 목적에 따라 '회사'가 정한 기간에
                        일시 중지될 수 있으며, 각 '사이트'의 기술상, 운영상의
                        사유와 목적에 따라 일시 중지될 수 있습니다.
                        <br />
                        ② '회사'는 '본인확인서비스' 중지에 따라 '이용자'에게
                        별도의 보상은 하지 않습니다. 단 '본인확인서비스'를
                        이용기간에 따라 정액제 형태로 유료 판매하는 경우, 정액제
                        유료 '이용자'에게는 중지시간이 24시간을 초과한 경우에
                        한하여, 월 이용금액을 해당월의 날짜 수로 일할 계산하여
                        환불 또는 차감하며, 이용금액의 과금 당사자가 '회사'인
                        경우에는 '회사'가, '대행기관'인 경우에는 '대행기관'이
                        환불 또는 차감하여 드립니다.
                        <br />
                        <br />
                        <strong>제10조 ('회사'의 권리와 의무)</strong>
                        <br />
                        <br />
                        ① '회사'가 '접근매체'의 발급주체가 아닌 경우에는
                        '접근매체'의 위조·변조·누설 등으로 인해 '이용자'에게
                        발생한 손해에 대하여 배상책임이 없습니다.
                        <br />
                        ② '이용자'가 제5조 제2항 내지 제4항의 내용을 준수하지
                        아니하거나, '회사'가 부정사용 여부를 확인할 수 없는
                        '접근매체' 또는 본인확인정보의 이용으로 인해 발생한
                        '이용자'의 손해에 대하여 '회사'는 배상책임이 없습니다.
                        <br />
                        ③ '회사'는 '본인확인서비스' 제공과 관련하여 인지한
                        '이용자'의 본인확인정보를 본인의 승낙 없이 제3자에게
                        누설하거나 배포하지 않습니다. 단, 국가기관의 요구가 있는
                        경우, 범죄에 대한 수사상의 목적이 있는 경우 등 관계
                        법령에서 정한 절차에 따른 요청이 있는 경우에는 그러하지
                        않습니다.
                        <br />
                        ④ '회사'는 '이용자'에게 안정적인 '본인확인서비스' 제공을
                        위하여 지속적으로 관련 시스템이나 절차, 기능 등의
                        예방점검, 유지보수 등을 이행하며, '본인확인서비스'의
                        장애가 발생하는 경우, 이를 지체 없이 수리 및 복구합니다.
                        <br />
                        ⑤ '회사'는 복제폰, 대포폰, 휴대폰 소액대출(일명
                        휴대폰깡) 등 시장 질서를 교란시키는 불법행위에 의한 피해
                        방지를 위하여 불법행위가 의심되는 '이용자' 또는 회선에
                        대한 '본인확인서비스' 이용을 제한하거나 중지하는 것은
                        물론, 관계 법령에 따라 행정 및 사법기관에 수사를 의뢰할
                        수 있습니다.
                        <br />
                        ⑥ '회사'는 '회사'가 제공하는 이동전화 등 통신역무의
                        요금을 정상적으로 납부하지 않거나 일부 특수 요금제에
                        가입한 '이용자'에 대하여 '본인확인서비스' 이용을 제한할
                        수 있습니다.
                        <br />
                        ⑦ '회사'는 '이용자'가 '회사'의 이동전화 등 통신역무
                        이용을 위해 제출한 가입신청서 또는 이와 관련된 본인확인
                        절차가, 명의도용, 관련 서류 위·변조 등 위법 행위가
                        개입된 사실을 확인하는 즉시 해당 '이용자' 및 회선에 대한
                        '본인확인서비스' 제공을 중지하며, 해당 '이용자'와 회선에
                        대해 관련 법령 및 통신역무 이용약관에 따른 조치를 취할
                        수 있습니다.
                        <br />
                        ⑧ '이용자'중 '회사'의 이동전화망을 이용하여 개별적으로
                        이동전화서비스를 제공하는 별정통신사업자의 가입자에
                        대해서는, 개별 별정통신사업자의 본인확인절차 미비,
                        명의도용, 관련 서류 위·변조, 본인확인정보의 오류 등에
                        대해 '회사'는 일절 책임을 부담하지 않고, 개별
                        별정통신사업자가 일체의 책임을 부담합니다.
                        <br />
                        <br />
                        <strong>제11조 ('이용자'의 권리와 의무)</strong>
                        <br />
                        <br />
                        ① '이용자'는 '본인확인서비스'를 이용함에 있어서 다음 각
                        호에 해당하는 행위를 하여서는 안되며, '회사'는
                        '이용자'의 다음 각 호의 행위에 대해 일체의 법적 책임을
                        지지 않습니다.
                        <br />
                        1. 본인이 아닌 타인의 본인확인정보를 부정하게 사용 및
                        도용하는 행위
                        <br />
                        2. '회사' 및 '대행기관', '사이트'의 저작권, 제3자의
                        저작권 등 기타 권리를 침해하는 행위
                        <br />
                        3. 법령에 규정하는 제반 범죄 및 위법 행위
                        <br />
                        4. 이 약관에 규정된 '이용자'의 의무 또는 준수사항을
                        위반하는 행위
                        <br />
                        ② '이용자'는 이 약관에서 규정하는 사항과
                        '본인확인서비스'에 대한 이용안내 또는 주의사항 등을
                        준수하여야 합니다.
                        <br />
                        ③ '이용자'는 제5조의 의무를 이행하여야 합니다.
                        <br />
                        <br />
                        <strong>제12조 ('이용자' 정보의 제공 범위)</strong>
                        <br />
                        <br />
                        ① '회사'는 '본인확인서비스'를 제공함에 있어 취득한
                        '이용자'의 정보를 '이용자'의 동의 없이 제3자에게 제공,
                        누설하거나 업무상 목적 외에 사용하지 않습니다.
                        <br />
                        ② '이용자'가 개인정보의 수집·이용·제공에 동의하고
                        이용하는 '사이트' 또는 신용카드사 등 제3자가, '이용자'의
                        이동전화 번호 및 해당 '사이트'·신용카드사 등 제3자가
                        보유한 '대체수단'의 진실성 여부를 '회사'에 대해 확인할
                        경우, '회사'는 해당 이동전화 번호 및 '대체수단'의 진실성
                        여부를, 확인을 요청한 '사이트' 또는 신용카드사 등
                        제3자에게 회신할 수 있습니다.
                        <br />
                        <br />
                        <strong>제13조 ('본인확인서비스'의 안정성 확보)</strong>
                        <br />
                        <br />
                        ① '회사'는 '본인확인서비스'의 안전성과 신뢰성, 보안성을
                        확보하기 위하여 해킹방지시스템 및 보안관리 체계 구성,
                        접근제한 등 기술적, 관리적 조치를 취합니다.
                        <br />
                        ② '회사'는 '본인확인서비스' 관련 서버 및 통신기기의
                        정상작동여부 확인을 위하여 정보처리시스템 자원 상태의
                        감시, 경고 및 제어가 가능한 모니터링 체계를 갖춥니다.
                        <br />
                        ③ '회사'는 해킹 침해 방지를 위하여 다음 각 호의 시스템
                        및 프로그램을 설치하여 운영합니다.
                        <br />
                        1. 침입 차단 및 탐지시스템 설치
                        <br />
                        2. 그 밖에 필요한 보호장비 또는 암호프로그램 등
                        정보보호시스템 설치
                        <br />
                        ④ '회사'는 컴퓨터바이러스 감염을 방지하기 위하여
                        바이러스 방지를 위한 방어, 탐색, 복구 절차를 자체적으로
                        운영합니다.
                        <br />
                        <br />
                        <strong>제14조 ('이용자'의 개인정보보호)</strong>
                        <br />
                        <br />
                        ① '이용자'의 개인정보 보호는 '회사'가 관련 법령과
                        '회사'가 수립하여 운영하는 개인정보 취급방침 등에
                        따릅니다. 자세한 '회사'의 개인정보 수집 · 이용 범위 등은
                        이동전화 가입신청서와 '회사' 대표
                        '사이트'(www.sktelecom.com)에서 제공되는 개인정보
                        취급방침을 참조하시기 바랍니다.
                        <br />
                        ② '이용자'중 '회사'의 이동전화망을 이용하여 개별적으로
                        이동전화서비스를 제공하는 별정통신사업자의 가입자에
                        대해서는, 해당 가입자가 속한 개별 별정통신사업자가
                        개인정보보호 및 수집·이용·제공 등에 대한 법적 절차
                        준수와 관련된 일체의 책임을 부담하며, 해당 가입자에 대한
                        개인정보 수집·이용 범위 등은 개별 별정통신사업자의
                        개인정보 취급방침을 참조하시기 바랍니다.
                        <br />
                        ③ 제1항과 제2항의 개인정보 취급방침에서 정한 바 이외에,
                        '회사'는 '본인확인서비스'를 위하여 다음 각 호의 경우에
                        '이용자' 개인정보의 일부를 '회사'가 선정한 사업자에게
                        제공할 수 있습니다.
                        <br />
                        1. '이용자'의 '본인확인서비스' 이용시 '사이트'가 필요로
                        하는 '이용자' 식별정보('중복가입확인정보', '대체수단')의
                        생성 및 관리, 제공을 위하여 '이용자'의 주민등록정보를
                        제3의 '본인확인기관'에게 제공할 수 있습니다.
                        <br />
                        2. '회사'가 수집 또는 제공받은
                        개인정보('중복가입확인정보', '대체수단')는 '회사' 또는
                        '대행기관'을 통해 '사이트'에게 제공합니다.
                        <br />
                        3. '본인확인서비스'를 위한 '회사'의 개인정보의
                        수집·이용·제공범위 및 개인정보의 취급을 위탁하는
                        수탁자와 위탁업무내용 등은 이 약관이 게시되는 화면에
                        별도로 링크하여 제공합니다.
                        <br />
                        <br />
                        <strong>제15조 (약관 외 준칙)</strong>
                        <br />
                        <br />
                        이 약관에 명시되지 아니한 사항에 대해서는 정보통신망
                        이용 촉진 및 정보보호 등에 관한 법률 등 기타 관련 법령
                        또는 상관례에 따릅니다.
                        <br />
                        <br />
                        <strong>제16조 (관할법원)</strong>
                        <br />
                        <br />
                        ① '본인확인서비스' 이용과 관련하여 '회사'와 '이용자'
                        사이에 분쟁이 발생한 경우, '회사'와 '이용자'는 분쟁의
                        해결을 위해 성실히 협의합니다.
                        <br />
                        ② 제1항의 협의에서도 분쟁이 해결되지 않을 경우 양
                        당사자는 민사소송법상의 관할 법원에 소를 제기할 수
                        있습니다.
                        <br />
                        <br />
                        <strong>부칙</strong>
                        <br />
                        <br />
                        (시행일) 이 약관은 공지한 날로부터 시행합니다.
                        <br />
                        <br />
                        <br />
                        <strong>
                          Ⅰ. 본인확인서비스 이용을 위한 개인정보
                          수집/이용/취급위탁 동의
                        </strong>
                        <br />
                        <br />
                        본인은 SK텔레콤㈜(이하 '회사'라 합니다)가 제공하는
                        본인확인서비스(이하 '서비스'라 합니다)를 이용하기 위해,
                        다음과 같이 '회사'가 본인의 개인정보를 수집/이용하고,
                        개인정보의 취급을 위탁하는 것에 동의합니다.
                        <br />
                        <br />
                        1. 수집항목
                        <br />
                        이용자의 성명, 이동전화번호, 가입한 이동전화 회사,
                        생년월일, 성별
                        <br />
                        연계정보(CI), 중복가입확인정보(DI)
                        <br />
                        이용자가 이용하는 웹사이트 또는 Application 정보,
                        이용일시
                        <br />
                        내외국인 여부
                        <br />
                        가입한 이동전화회사 및 이동전화 브랜드
                        <br />
                        <br />
                        2. 이용목적
                        <br />
                        이용자가 웹사이트 또는 Application에 입력한
                        본인확인정보의 정확성 여부 확인(본인확인서비스 제공)
                        <br />
                        해당 웹사이트 또는 Application에
                        연계정보(CI)/중복가입확인정보(DI) 전송
                        <br />
                        서비스 관련 상담 및 불만 처리 등<br />
                        이용 웹사이트/Application 정보 등에 대한 분석 및
                        세분화를 통한, 이용자의 서비스 이용 선호도 분석
                        <br />
                        <br />
                        3. 개인정보의 보유기간 및 이용기간
                        <br />
                        이용자가 서비스를 이용하는 기간에 한하여 보유 및 이용.
                        다만, 아래의 경우는 제외
                        <br />
                        법령에서 정하는 경우 해당 기간까지 보유(상세 사항은
                        회사의 개인정보취급방침에 기재된 바에 따름)
                        <br />
                        <br />
                        4. 본인확인서비스 제공을 위한 개인정보의 취급위탁
                        <br />
                        ① 수탁자
                        <br />
                        ㈜다날, ㈜드림시큐리티, ㈜케이지모빌리언스,
                        ㈜한국사이버결제, 한국모바일인증㈜, 씨앤케이소프트㈜,
                        수미온㈜, SK플래닛㈜, 엠드림커뮤니케이션㈜,
                        NICE평가정보㈜, 서울신용평가정보㈜
                        <br />
                        ② 취급위탁 업무
                        <br />
                        본인확인정보의 정확성 여부 확인(본인확인서비스 제공),
                        연계정보(CI)/중복가입확인정보(DI) 생성 및 전송, 서비스
                        관련 상담 및 불만 처리, 휴대폰인증보호 서비스, 이용자의
                        서비스 이용 선호도 분석정보 제공관련 시스템
                        구축·광고매체 연동 및 위탁영업 등<br />
                        <br />
                        5. 위 개인정보 수집·이용 및 취급위탁에 동의하지 않으실
                        경우, 서비스를 이용하실 수 없습니다.
                        <br />
                        ※ 회사가 제공하는 서비스와 관련된 개인정보의 취급과
                        관련된 사항은, 회사의 개인정보취급방침(회사 홈페이지
                        www.sktelecom.com )에 따릅니다.
                        <br />
                        <br />
                        <br />
                        <strong>
                          Ⅱ. 본인확인서비스 이용을 위한 개인정보제공 동의
                        </strong>
                        <br />
                        <br />
                        본인은 SK텔레콤㈜(이하 '회사'라 합니다)가 제공하는
                        본인확인서비스(이하 '서비스'라 합니다)를 이용하기 위해,
                        다음과 같이 본인의 개인정보를 회사가 아래 기재된
                        제3자에게 제공하는 것에 동의합니다.
                        <br />
                        <br />
                        1. 개인정보를 제공받는 자<br />
                        NICE신용평가정보㈜, 서울신용평가㈜
                        <br />
                        <br />
                        2. 개인정보를 제공받는 자의 개인정보 이용목적
                        <br />
                        연계정보(CI)/중복가입확인정보(DI) 생성 및 회사에 제공
                        <br />
                        <br />
                        3. 제공하는 개인정보 항목
                        <br />
                        회사가 보유하고 있는 이용자의 주민등록번호
                        <br />
                        <br />
                        4. 개인정보를 제공받는 자의 개인정보 보유 및 이용기간
                        <br />
                        연계정보(CI)/중복가입확인정보(DI) 생성 후 즉시 폐기
                        <br />
                        <br />
                        5. 위 개인정보 제공에 동의하지 않으실 경우, 서비스를
                        이용할 수 없습니다.
                        <br />
                        <br />
                        본인은 위 내용을 숙지하였으며 이에 동의합니다.
                      </p>
                    </div>
                  </div>
                  <div className="tab_cont" id="cont2">
                    <div className="m_lyr_scroll">
                      <p>
                        <strong>제1조 (목적)</strong>
                        <br />
                        <br />
                        본 약관은 주민번호 대체 본인확인서비스(이하 "서비스")를
                        제공하는 주식회사 케이티(이하 "회사")와 이용 고객(이하
                        "이용자")간에 서비스 제공에 관한 이용조건 및 절차 등
                        기타 필요한 사항을 규정함을 목적으로 합니다.
                        <br />
                        <br />
                        <strong>제2조 (용어의 정의)</strong>
                        <br />
                        <br />
                        본 약관에서 사용하는 용어의 정의는 다음과 같습니다.
                        <br />
                        <br />
                        1. " 본인확인서비스" 라 함은 이용자가 인터넷상에서
                        휴대폰을 휴대폰을 이용하여 , 주민 등록 번호 입력 없이도
                        본인임을 안전하게 식별 및 확인해 주는 서비스를 말합니다.
                        <br />
                        2. " 이용자 " 라 함은 회사 또는 대행기관에서 제공하는
                        제공하는 서비스의 이용을 위해 자신의 본인확인정보를 회사
                        , 대행 기관 , 본인확인기관 등에게 제공하고 , 본인임을
                        확인 받고자 하는 자를 말합니다 .<br />
                        3. "본인확인정보"라 함은 이용자가 입력한 생년월일, 성별,
                        성명, 내/외국인, 휴대폰번호, 통신사 등 본인 식별에
                        필요한 이용자의 정보를 말합니다.
                        <br />
                        4. "중복가입확인정보"라 함은 웹사이트에 가입하고자 하는
                        이용자의 중복확인을 위해 제공되는 정보를 말합니다.
                        <br />
                        5. "연계정보"라 함은 인터넷사업자의 온 · 오프라인 서비스
                        연계 등의 목적으로 이용자를 식별하기 위해 제공되는
                        정보를 말합니다.
                        <br />
                        6. "본인확인기관"이라 함은 주민등록번호를 사용하지
                        아니하고 본인을 확인하는 방법 또는 서비스를 제공하는
                        자로 방송통신위원회로부터 본인확인기관으로 지정을 받은
                        자를 의미합니다.
                        <br />
                        7. "대행기관"이라 함은 회사를 대신하여 서비스의 제공 및
                        지원 등의 중계 업무를 담당하는 곳으로 회사와 업무지원에
                        대한 계약이 완료되어 인터넷사업자에 서비스를 제공하는
                        사업체를 말합니다.
                        <br />
                        8. "인터넷사업자"라 함은 인터넷을 이용하여 정보를
                        제공하거나, 정보의 제공을 매개하는 일을 업으로 하는자로
                        회사 또는 대행기관과의 서비스 계약을 통해 운영하며,
                        인터넷 웹사이트의 이용자에 대한 본인확인정보를 제공받는
                        사업체를 말합니다.
                        <br />
                        9. "접근매체"라 함은 본인확인을 함에 있어 이용자
                        본인확인의 진실성과 정확성을 확보하기 위하여 사용되는
                        수단 또는 정보로서 회사에 등록된 이용자의 전화번호,
                        이용자의 생체정보, 이상의 수단이나 정보를 사용하는데
                        필요한 비밀번호 등을 말합니다.
                        <br />
                        <br />
                        <strong>제3조 (약관의 명시 및 변경)</strong>
                        <br />
                        <br />
                        1. 회사는 본 약관을 회사가 운영하는 사이트에 게시하거나,
                        본인확인서비스 이용시 이용자가 내용을 확인 할 수 있도록
                        공개합니다.
                        <br />
                        2. 회사는 약관의 규제에 관한 법률 및 기타 관련 법령에
                        위배되지 않는 범위에서 본 약관의 내용을 개정 할 수
                        있으며, 변경된 경우에는 회사가 운영하는 사이트에서
                        공지합니다. 다만 "이용자"의 권리와 의무에 관한 중요한
                        사항은 변경된 내용의 시행 15일 이전에 공지합니다.
                        <br />
                        3. 이용자는 개정된 약관 사항에 동의하지 않을 권리가
                        있으며, 개정된 약관에 동의하지 않는 경우, 본 서비스의
                        이용을 중단하고 이용 계약을 해지할 수 있습니다. 회원이
                        회사의 전항 단서에 따른 약관의 불리한 변경에 대하여
                        적용예정일까지 회사에게 부동의 의사를 표시하지 않거나
                        이용계약을 해지하지 않은 경우 변경된 약관을 승인한
                        것으로 봅니다.
                        <br />
                        4. 이용자가 변경된 약관에 대한 내용을 알지 못하여
                        발생하는 손해 및 피해에 대해서는 회사가 책임을 지지
                        않습니다.
                        <br />
                        <br />
                        <strong>제4조 (접근매체의 관리 등)</strong>
                        <br />
                        <br />
                        1. 회사는 서비스 제공 시 접근매체를 이용하여 이용자의
                        신원, 권한 및 거래지시의 내용 등을 확인 할 수 있습니다.
                        <br />
                        2. 이용자는 접근매체를 제3자에게 대여하거나 사용을
                        위임하거나 양도 또는 담보 목적으로 제공할 수 없습니다.
                        <br />
                        3. 이용자는 자신의 접근매체를 제3자에게 누설 또는
                        노출하거나 방치하여서는 안되며, 접근매체의 도용이나 위조
                        또는 변조를 방지하기 위해 충분한 주의를 기울여야 합니다.
                        <br />
                        4. 회사가 접근매체의 발급주체가 아닌 경우에는 접근매체의
                        위조나 변조로 발생한 사고로 인하여 이용자에게 발생한
                        손해에 대하여 배상책임이 없습니다.
                        <br />
                        <br />
                        <strong>제5조 (서비스 안내)</strong>
                        <br />
                        <br />
                        1. 서비스는 이용자가 주민등록번호의 입력 없이,
                        본인명의로 된 휴대폰정보를 이용하여 본인 식별 또는 본인
                        확인이 가능한 생년월일 기반의 주민등록번호 대체
                        휴대폰인증 서비스 입니다.
                        <br />
                        2. 회사는 인증 대행기관을 통해 인터넷사업자에게 서비스를
                        제공하며, 인터넷사업자는 회원가입, ID/PW찾기, 성인인증,
                        기타 본인확인이 필요한 경우 이용자에게 서비스를 제공
                        합니다.
                        <br />
                        3. 이용자는 자신의 생년월일, 성명, 성별, 내/외국인,
                        휴대폰번호, 통신사 등의 정보를 입력하며, 입력한 정보가
                        일치한 경우에는 해당 휴대폰번호로 수신된 1회성
                        비밀번호(승인번호)를 정확하게 입력하는 것으로 본인 식별
                        또는 본인 확인이 이루어 집니다.
                        <br />
                        4. 서비스는 개인 명의로 개통된 휴대폰 정보로 본인확인이
                        이루어지며 단, 휴대폰 일시정지 또는 이용정지 시 해당
                        정지기간 동안 본인확인서비스도 정지됩니다.
                        <br />
                        5. 본인 확인이 완료 된 이용자에 대해서는 본인확인정보와
                        중복가입확인정보 및 연계정보가 인터넷사업자에게
                        제공되며, 인터넷사업자는 중복가입확인정보 또는 연계정보
                        등을 이용하여 이용자 관리 및 컨텐츠를 제공ㆍ운영 합니다.
                        <br />
                        <br />
                        <strong>제6조 (서비스 제공시간)</strong>
                        <br />
                        <br />
                        1. 서비스의 이용은 연중무휴 1일 24시간을 원칙으로
                        합니다. 다만, 정기 점검 및 기타 기술상의 이유로 서비스가
                        일시 중지될 수 있고 또한, 운영상의 목적으로 회사가 정한
                        기간에도 일시 중지될 수 있습니다.
                        <br />
                        2. 회사는 효율적인 업무 수행을 위하여 필요하다고
                        판단하는 경우 서비스를 일정 범위로 분할 하여 각 범위
                        별로 이용가능 시간을 달리 정할 수 있으며, 이 경우 그
                        내용을 공지 합니다.
                        <br />
                        <br />
                        <strong>제7조 (회사의 권리와 의무)</strong>
                        <br />
                        <br />
                        1. 회사는 이용자가 서비스 이용시 이용약관이나 안내사항
                        등을 확인하지 않아 발생한 손해, 또는 접근매체를 통해 알
                        수 있었음에도 불구하고, 이용자 자신의 접근매체를 누설
                        또는 노출하거나 방치한 손해 등 이용자의 부주의에 기인한
                        손해에 대하여 배상책임이 없습니다.
                        <br />
                        2. 회사는 서비스 제공과 관련하여 인지한 이용자의
                        본인확인정보를 본인의 승낙 없이 제3자에게 누설하거나
                        배포하지 않습니다. 단, 국가기관의 요구가 있는 경우,
                        범죄에 대한 수사상의 목적이 있는 경우 등 기타 관계
                        법령에서 정한 절차에 따른 요청이 있는 경우에는 그러하지
                        않습니다.
                        <br />
                        3. 회사는 이용자에게 안정적인 서비스 제공을 위하여
                        지속적으로 서비스의 예방점검, 유지보수 등을 이행하며,
                        서비스의 장애가 발생하는 경우, 이를 지체 없이 수리 및
                        복구합니다.
                        <br />
                        4. 회사는 아래와 같은 사유가 발생하는 경우 이용자에
                        대하여 서비스를 제한할 수 있습니다.
                        <br />
                        가. 다른 사람의 명의사용 등 이용자 등록 시 허위로
                        신청하는 경우
                        <br />
                        나. 이용자 등록 사항을 누락하거나 오기하여 신청하는 경우
                        <br />
                        다. 대포폰(이동전화 서비스 본래의 목적과는 달리 불법대출
                        등 부정사용을 목적으로 타인 명의 무단 개통 또는 명의자를
                        교사하여 개통하는 휴대전화)을 이용하는 경우
                        <br />
                        라. 타인의 명의를 도용한 사실이 있거나 명의 도용을
                        이유로 처벌받은 경우
                        <br />
                        마. 불법 복제와 관련된 사실이 있거나 처벌 받은 경우
                        <br />
                        바. 기타 시장질서를 교란시키는 불법행위에 해당하는 경우
                        <br />
                        5. 회사는 다음 각 호에 해당하는 경우 서비스의 전부 또는
                        일부를 중지할 수 있습니다. 회사는 회사의 고의 또는
                        과실이 없는 한 이로 인하여 발생한 손해에 대하여
                        배상책임이 없습니다.
                        <br />
                        가. 컴퓨터 등 정보통신설비의 보수점검 교체 및 고장 ,
                        통신의 두절 등의 사유가 발생한 경우
                        <br />
                        나. 서비스를 위한 설비의 보수 등 공사로 인해 부득이한
                        경우
                        <br />
                        다. 서비스 업그레이드 및 시스템 유지보수 등을 위해
                        필요한 경우
                        <br />
                        라. 정전, 제반 설비의 장애 또는 이용량의 폭주 등으로
                        정상적인 서비스 이용에 지장이 있는 경우
                        <br />
                        마. 회원이 회사의 본 서비스 운영을 방해하는 경우
                        <br />
                        바. 기타 천재지변, 국가비상사태 등 불가항력적 사유가
                        있는 경우
                        <br />
                        사. 규제기관이 마련한 본인확인서비스 가이드를 준수하지
                        않고 임의로 변형 적용한 사이트에서 본인확인서비스를
                        요청하는 경우
                        <br />
                        6. 전 항에 의하여 본 서비스를 중하는 경우에은 회사가
                        이를 공지합니다. 다만, 회사가 통제할 수 없는 사유로 인한
                        본 서비스의 중단(회사 또는 운영자의 고의 및 과실이 없는
                        디스크 장애, 시스템 다운 등)으로 인하여 사전 공지가
                        불가능한 경우에는 그러하지 아니합니다.
                        <br />
                        7. 이용자 중 회사의 이동전화망을 이용하여 자체적으로
                        이동전화서비스를 제공하는 별정통신사업자의 개인명의
                        가입자에 대하여는 해당 별정통신사업자의 본인확인절차
                        미비, 명의도용, 관련 서류 위·변조, 본인확인정보의 오류
                        등에 대해 회사는 일체 책임을 부담하지 않고 해당
                        별정통신사업자가 일체의 책임을 부담합니다.
                        <br />
                        <br />
                        <strong>제8조 (이용자의 의무)</strong>
                        <br />
                        <br />
                        1. 이용자는 서비스를 이용함에 있어서 다음 각호에
                        해당하는 행위를 하여서는 안되며, 회사는 위반 행위에
                        따르는 일체의 법적 책임을 지지 않습니다.
                        <br />
                        ① 타 이용자의 본인확인정보를 부정하게 사용 및 도용하는
                        행위
                        <br />
                        ② 회사의 저작권, 제3자의 저작권 등 기타 권리를 침해하는
                        행위
                        <br />
                        ③ 범죄 행위
                        <br />
                        ④ 기타 관련 법령에 위배되는 행위
                        <br />
                        2. 이용자는 본 약관에서 규정하는 사항과 서비스에 대한
                        이용안내 또는 주의사항 등을 준수하여야 합니다.
                        <br />
                        <br />
                        <strong>제9조 (본인인증 정보의 제공금지)</strong>
                        <br />
                        <br />
                        회사는 서비스를 제공함에 있어 취득한 이용자의 정보 또는
                        자료를 이용자의 동의 없이 제3자에게 제공, 누설하거나
                        업무상 목적 외에 사용하지 않습니다.
                        <br />
                        <br />
                        <strong>제10조 (서비스의 안정성 확보)</strong>
                        <br />
                        <br />
                        1. 회사는 서비스의 안전성과 신뢰성을 확보하기 위하여
                        업무처리지침의 제정 및 시행, 정보 처리시스템 및
                        전산자료의 관리 등의 관리적 조치와 모니터링 체계 및
                        해킹방지시스템 구축 및 운영 등의 기술적 조치를 취해야
                        합니다.
                        <br />
                        2. 회사는 서버 및 통신기기의 정상작동여부 확인을 위하여
                        정보처리시스템 자원 상태의 감시, 경고 및 제어가 가능한
                        모니터링 체계를 갖추어야 합니다.
                        <br />
                        3. "회사"는 해킹 침해 방지를 위하여 다음 각 호의 시스템
                        및 프로그램을 설치하여 운영합니다.
                        <br />
                        4. "회사"는 컴퓨터바이러스 감염을 방지하기 위하여 다음
                        각 호를 포함한 대책을 수립, 운영하고 있습니다.
                        <br />
                        ① 출처, 유통경로 및 제작자가 명확하지 아니한
                        응용프로그램은 사용을 자제하고 불가피할 경우에는
                        컴퓨터바이러스 검색프로그램으로 진단 및 치료 후 사용할
                        것<br />
                        ② 컴퓨터바이러스 검색, 치료 프로그램을 설치하고 최신
                        버전을 유지할 것<br />
                        ③ 컴퓨터바이러스 감염에 대비하여 방어, 탐색 및 복구
                        절차를 마련할 것<br />
                        <br />
                        <strong>제11조 (이용자의 개인정보보호)</strong>
                        <br />
                        <br />
                        회사는 관련법령이 정하는 방에 따라서 이용자의 개인정보를
                        보호하기 위하여 노력하며, 이용자의 개인정보에 관한
                        사항은 관련 법령 및 회사가 정하는 개인정보취급방침에
                        정한 바에 따릅니다.
                        <br />
                        <br />
                        <strong>제12조 (개인정보의 처리)</strong>
                        <br />
                        <br />
                        회사는 수집된 개인정보의 취급 및 관리 등의 업무를 스스로
                        수행함을 원칙으로 하나, 필요한 경우 업무의 일부 또는
                        전부를 회사가 선정한 사업자에게 위탁할 수 있습니다.
                        <br />
                        <br />
                        1. 서비스 이용 시 이용자의 동의에 따라 인터넷사업자가
                        필요로 하는 이용자 식별정보(중복가입확인정보,
                        연계정보)의 생성 및 제공을 위하여 관련 정보를 타
                        본인확인기관에게 제공할 수 있으며, 수집된
                        식별정보(중복가입확인정보, 연계정보)는 본인 식별 및 확인
                        위한 목적으로 회사 또는 대행기관을 통해 인터넷사업자에게
                        제공할 수 있습니다.
                        <br />
                        2. 개인정보 처리 및 위탁 등에 관한 사항은 관련법령 및
                        회사가 정하는 개인정보취급방침에 정한 바에 따릅니다.
                        <br />
                        <br />
                        <strong>제13조 (약관 외 준칙)</strong>
                        <br />
                        <br />
                        본 약관에 명시되지 아니한 사항에 대해서는 정보통신망
                        이용 촉진 및 정보보호 등에 관한 법률, 개인정보보호법 등
                        기타 관련법령 또는 상관례에 따릅니다.
                        <br />
                        <br />
                        <strong>부칙</strong>
                        <br />
                        <br />
                        (시행일) 이 약관은 공지한 날로부터 시행합니다.
                      </p>
                    </div>
                  </div>
                  <div className="tab_cont" id="cont3">
                    <div className="m_lyr_scroll">
                      <p>
                        <strong>제 1조 (목적)</strong>
                        <br />
                        <br />
                        본 약관은 주민번호를 대체한 휴대폰 본인확인서비스(이하
                        "서비스")를 제공하는 LG유플러스(이하 "회사")와 이용
                        고객(이하 "이용자")간에 서비스 제공에 관한 이용조건 및
                        절차 등 기타 필요한 사항을 정함을 목적으로 합니다.
                        <br />
                        <br />
                        <strong>제 2조 (용어의 정리)</strong>
                        <br />
                        <br />
                        본 약관에서 사용하는 용어의 정의는 다음과 같습니다.
                        <br />
                        <br />
                        1. "휴대폰 본인확인서비스"라 함은 이용자가 인터넷상에서
                        본인 명의 또는 법인 명의의 휴대폰을 이용하여 주민번호를
                        입력하지 않고 본인임을 안전하게 식별 및 확인하는 방법을
                        제공하는 서비스를 말합니다.
                        <br />
                        2. "이용자"라 함은 서비스의 이용을 위해 자신의
                        본인확인정보를 회사, 인증대행사 및 타 본인확인기관
                        등에게 제공하고, 본인임을 확인 받고자 하는 자를
                        말합니다.
                        <br />
                        3. "본인확인정보"라 함은 이용자가 입력한 생년월일, 성별,
                        성명, 내/외국인, 휴대폰번호, 통신사 등 본인 식별에
                        필요한 이용자의 정보를 말합니다.
                        <br />
                        4. "접근매체"라 함은 모바일 통신 단말기(피쳐폰,
                        스마트폰)를 지칭한다.
                        <br />
                        5. "중복가입확인정보(DI)"라 함은 웹사이트에 가입하고자
                        하는 이용자의 중복확인을 위해 제공되는 정보를 말합니다.
                        <br />
                        6. "연계정보(CI)"라 함은 인터넷사업자의 온ㆍ오프라인
                        서비스 연계 등의 목적으로 이용자를 식별하기 위해
                        제공되는 정보를 말합니다.
                        <br />
                        7. "본인확인기관"이라 함은 주민등록번호를 사용하지
                        아니하고 본인을 확인하는 방법 또는 서비스를 제공하는
                        자로 방송통신위원회로부터 본인확인기관으로 지정을 받은
                        자를 의미합니다.
                        <br />
                        8. "인증대행사"이라 함은 회사를 대신하여 서비스의 제공
                        및 지원 등의 중계 업무를 담당하는 곳으로 회사와
                        업무지원에 대한 계약이 완료되어 인터넷사업자에게
                        서비스를 제공하는 사업자를 말합니다.
                        <br />
                        9. "인터넷사업자"라 함은 인터넷을 이용하여 정보를
                        제공하거나, 정보의 제공을 매개하는 일을 업으로 하는 자로
                        회사 또는 인증 대행사와의 서비스 계약을 통해 운영하며,
                        인터넷 웹사이트의 이용자에 대한 본인확인정보를 제공받는
                        사업자를 말합니다.
                        <br />
                        10. "비밀번호"라 함은 법인 명의로 개통된
                        이동전화서비스를 이용하고 있는 이용자가 법인 명의
                        휴대폰을 통한 본인확인서비스 이용신청 시에 등록한 영문,
                        숫자, 특수문자(8~12자리) 조합으로 설정해 놓은 번호를
                        말합니다.
                        <br />
                        11. "법인폰 관리자"라 함은 본인확인 서비스 이용을 원하는
                        법인 명의 이동전화서비스 이용자를 관리(본인확인서비스
                        이용 승인/해지 등)하는 관리자로 법인고객을 대표하거나
                        대리권이 있는 자를 말합니다.
                        <br />
                        <br />
                        <strong>제 3조 (약관의 효력 및 변경)</strong>
                        <br />
                        <br />
                        1. 본 약관은 이용자에게 서비스 화면에 게시하거나, 회사
                        홈페이지(www.uplus.co.kr)에 게시하여 공지함으로써 효력이
                        발생합니다.
                        <br />
                        2. 회사는 약관의 규제에 관한 법률 및 기타 관련 법령에
                        위배되지 않는 범위에서 본 약관의 내용을 개정할 수
                        있으며, 변경된 경우에는 제1항과 같은 방법으로
                        공지합니다. 다만 "이용자"의 권리와 의무에 관한 중요한
                        사항은 변경된 내용의 시행 15일 이전에 공지합니다.
                        <br />
                        3. 이용자는 변경된 약관에 대한 내용을 알지 못하여
                        발생하는 손해 및 피해에 대해서는 회사가 책임을 지지
                        않습니다.
                        <br />
                        <br />
                        <strong>제 4조 (접근매체의 관리 등)</strong>
                        <br />
                        <br />
                        1. 이용자는 접근매체를 제3자에게 대여하거나 사용을
                        위임하거나 양도 또는 담보 목적으로 제공할 수 없습니다.
                        <br />
                        2. 이용자는 자신의 접근매체를 제3자에게 제공 또는
                        노출하거나 방치하여서는 안되며, 접근매체의 도용이나
                        위변조를 방지하기 위해 충분한 주의를 기울여야 합니다.
                        <br />
                        <br />
                        <strong>제 5조 (서비스 이용방법)</strong>
                        <br />
                        <br />
                        1. 서비스는 다음 각 호의 이용자에 한하여 제공됩니다. 단,
                        회사의 ‘이동전화이용약관’상 이용 정지(제한 포함), 일시
                        정지, 계약해지 (개통취소 포함) 상태인 경우에는 서비스가
                        제공 되지 않습니다.
                        <br />
                        ① 본인명의로 개통된 휴대폰으로 회사의 이동전화 서비스를
                        정상적으로 계속 이용하고 있는 개인 이용자
                        <br />
                        ② 법인 명의로 개통된 휴대폰으로 회사의 이동전화 서비스를
                        정상적으로 계속 이용하고 있으면서, 회사가 정한 절차에
                        따라 법인 명의 휴대폰을 통한 본인확인서비스 이용 신청을
                        한 개인 이용자. 이 때, 법인은 법인 업력 1년 이상인
                        경우에 한합니다.
                        <br />
                        ③ 회사의 이동전화망을 이용하여 자체적으로
                        이동전화서비스를 제공하는 별정통신사업자의 이동전화
                        서비스를 본인 명의로 이용하고 있는 개인 이용자
                        <br />
                        2. 서비스는 이용자가 주민등록번호를 입력하지 아니하고
                        본인의 생년월일과 본인 명의 또는 법인 명의로 된
                        휴대폰정보를 이용하여 본인 식별 또는 본인 확인이
                        가능하도록 하는 휴대폰인증 서비스 입니다.
                        <br />
                        3. 회사는 인증대행사를 통해 인터넷사업자에게 서비스를
                        제공하며, 인터넷사업자는 회원가입, ID/PW찾기, 성인인증
                        등 이용자의 본인확인이 필요한 경우 이용자에게 서비스를
                        제공 합니다.
                        <br />
                        4. 이용자가 자신의 생년월일, 성명, 성별, 내/외국인,
                        휴대폰번호, 통신사 등의 정보를 입력(단, 제1항 제2호의
                        경우에는 이용자가 법인 명의 휴대폰을 통한 본인확인서비스
                        가입 시 등록한 비밀번호를 추가로 입력)한 후 입력한
                        정보가 이용자 본인의 정보와 일치한 경우에는 이용자 본인
                        명의 또는 법인 명의의 휴대폰번호로 수신된 1회성
                        비밀번호(이하 "승인번호")를 정확하게 입력하면 본인 식별
                        또는 본인 확인이 이루어 집니다.
                        <br />
                        5. 전항에 따라 본인확인이 완료 된 이용자에 대해서는
                        본인확인정보와 중복가입확인정보 및 연계정보가
                        인터넷사업자에게 제공되며, 인터넷사업자가
                        중복가입확인정보 또는 연계정보 등을 이용하여 이용자 관리
                        및 컨텐츠를 제공 운영 합니다.
                        <br />
                        <br />
                        <strong>제 6조 (서비스 제공시간)</strong>
                        <br />
                        <br />
                        회사는 연중무휴 1일 24시간 서비스를 제공함을 원칙으로
                        합니다. 다만, 회사는 서비스 설비의 장애, 서비스 이용의
                        폭주 등 기술상의 이유로 서비스를 일시 정지할 수 있고,
                        서비스 설비 정기 점검 등 운영상의 목적으로 시간을 정하고
                        공지한 후 서비스를 일시 정지할 수 있습니다.
                        <br />
                        <br />
                        <strong>제 7조 (회사의 권리와 의무)</strong>
                        <br />
                        <br />
                        1. 회사가 접근매체의 발급주체가 아닌 경우에는 접근매체의
                        위조나 변조로 발생한 사고로 인하여 이용자에게 발생한
                        손해에 대하여 배상책임이 없습니다.
                        <br />
                        2. 회사는 이용자가 서비스 이용약관이나 안내사항 등을
                        확인하지 않아 발생한 손해, 이용자에게 책임있는 사유로
                        접근매체를 누설 또는 노출하거나 방치한 손해 등 이용자의
                        부주의에 기인한 손해에 대하여 배상책임이 없습니다.
                        <br />
                        3. 회사는 서비스 제공시 접근매체를 이용하여 이용자의
                        신원, 권한 및 거래지시의 내용 등을 확인할 수 있습니다.
                        <br />
                        4. 회사는 서비스 제공과 관련하여 인지한 이용자의
                        본인확인정보를 본인의 승낙 없이 제3자에게 누설하거나
                        제공하지 않습니다. 단, 국가기관의 요구가 있는 경우,
                        범죄에 대한 수사상의 목적이 있는 경우 등 기타 관계
                        법령에서 정한 절차에 따른 요청이 있는 경우에는 그러하지
                        않습니다.
                        <br />
                        5. 회사는 이용자에게 안정적으로 서비스를 제공하기 위하여
                        지속적으로 서비스의 예방점검, 유지보수 등을 이행하며
                        서비스 장애가 발생하는 경우 지체없이 서비스를
                        복구합니다.
                        <br />
                        6. 회사는 복제폰, 대포폰, 불법 휴대폰 대출(일명
                        휴대폰깡) 등 시장질서를 교란시키는 불법행위로 의한
                        피해를 방지하기 위하여 사전통지 없이 서비스를 제한하거나
                        중지할 수 있습니다.
                        <br />
                        7. 법인 명의로 개통된 휴대폰을 통한 본인확인서비스의
                        경우, 다음 각호에 해당하는 서비스를 이용하기 위한 목적인
                        경우에는 회사는 서비스 제공을 하지 않을 수 있습니다.
                        <br />
                        ① 대출, 게임 등 환금성 서비스
                        <br />
                        ② 범죄 행위 및 범죄적 행위와 관련있는 서비스
                        <br />
                        ③ 법령에 위배되는 서비스
                        <br />
                        ④ 기타 서비스의 정상적 운영, 유지 등을 방해하거나
                        지연시키는 서비스
                        <br />
                        <br />
                        <strong>제 8조 (이용자의 의무)</strong>
                        <br />
                        <br />
                        1. 이용자는 서비스를 이용함에 있어서 다음 각호에
                        해당하는 행위를 하여서는 안되며, 회사는 위반 행위에
                        따르는 일체의 법적 책임을 지지 않습니다.
                        <br />
                        ① 타 이용자의 본인확인정보 및 승인번호를 부정하게 사용
                        및 도용하는 행위
                        <br />
                        ② 회사 또는 제3자의 지식재산권 등 기타 권리를 침해하는
                        행위
                        <br />
                        ③ 범죄 행위 및 범죄적 행위와 관련있는 행위
                        <br />
                        ④ 관련 법령에 위배되는 행위
                        <br />
                        ⑤ 기타 서비스의 정상적 운영, 유지 등을 방해하거나
                        지연시키는 행위
                        <br />
                        ⑥ 법인명의 휴대폰 이용자의 개인정보 및 비밀번호 관리를
                        소홀히하는행위(법인명의 휴대폰 이용자 변경 시
                        본인확인서비스해지 및 변경하지 않은 경우 포함)
                        <br />
                        ⑦ 법인폰 관리자와 이용자가 공모하여 서비스를 부정하게
                        사용하는 행위
                        <br />
                        2. 이용자는 본 약관에서 규정하는 사항과 서비스에 대한
                        이용안내 또는 주의사항 등을 준수하여야 합니다.
                        <br />
                        3. 서비스 이용 절차(이용신청, 인증 절차 등) 중 이용자가
                        회사에 제출하는 문서 위조 시 형법상 사문서위조가 성립할
                        수 있습니다.
                        <br />
                        4. 이용자가 본 약관을 위반하여 회사 또는 제3자에게
                        손해가 발생한 경우에는 이용자는 회사 및 제3자의 모든
                        손해를 배상하여야 합니다.이 때, 회사가 제3자의 손해를
                        직접 배상한 경우에는 회사는 이용자에게 구상권을 행사할
                        수 있습니다.
                        <br />
                        <br />
                        <strong>제 9조 (본인인증 정보의 제공금지)</strong>
                        <br />
                        <br />
                        회사는 서비스를 제공함에 있어 취득한 이용자의 정보 또는
                        자료를 이용자의 동의 없이 제3자에게 제공, 누설하거나
                        서비스 목적 외에 사용하지 않습니다.
                        <br />
                        <br />
                        <strong>제 10조 (서비스의 안정성 확보)</strong>
                        <br />
                        <br />
                        1. 회사는 서비스의 안전성과 신뢰성을 확보하기 위하여
                        업무처리지침의 제정 및 시행, 정보 처리시스템 및
                        전산자료의 관리 등의 관리적 조치와 모니터링 체계 및
                        해킹방지시스템 구축 및 운영 등의 기술적 조치를 취해야
                        합니다.
                        <br />
                        2. 회사는 서버 및 통신기기의 정상작동여부 확인을 위하여
                        정보처리시스템 자원 상태의 감시, 경고 및 제어가 가능한
                        모니터링 체계를 갖추어야 합니다.
                        <br />
                        3. "회사"는 해킹 침해 방지를 위하여 다음 각 호의 시스템
                        및 프로그램을 설치하여 운영합니다.
                        <br />
                        ① 침입차단시스템 설치
                        <br />
                        ② 침입탐지시스템 설치
                        <br />
                        ③ 그 밖에 필요한 보호장비 또는 암호프로그램 등
                        정보보호시스템 설치
                        <br />
                        4. "회사"는 컴퓨터바이러스 감염을 방지하기 위하여 다음
                        각 호를 포함한 대책을 수립, 운영하고 있습니다.
                        <br />
                        ① 출처, 유통경로 및 제작자가 명확하지 아니한
                        응용프로그램은 사용을 자제하고 불가피할 경우에는
                        컴퓨터바이러스 검색프로그램으로 진단 및 치료 후 사용할
                        것<br />
                        ② 컴퓨터바이러스 검색, 치료 프로그램을 설치하고 최신
                        버전을 유지할 것<br />
                        ③ 컴퓨터바이러스 감염에 대비하여 방어, 탐색 및 복구
                        절차를 마련할 것<br />
                        <br />
                        <strong>제 11조 (이용자의 개인정보보호)</strong>
                        <br />
                        <br />
                        회사는 관련법령이 정하는 방에 따라서 이용자의 개인정보를
                        보호하기 위하여 노력하며, 이용자의 개인정보에 관한
                        사항은 관련 법령 및 회사가 정하는 개인정보취급방침에
                        정한 바에 따릅니다.
                        <br />
                        <br />
                        <strong>제 12조 (개인정보의 처리)</strong>
                        <br />
                        <br />
                        1. 회사는 서비스 제공을 위하여 수집된 본인확인정보의
                        취급 및 관리 등의 업무를 스스로 수행함을 원칙으로 하나,
                        필요한 경우 아래 표와 같이 회사가 선정한 사업자에게
                        위탁할 수 있습니다.
                        <br />
                        <br />
                        <strong>[개인정보의 취급 위탁]</strong>
                      </p>
                      <br />
                      <table className="m_lyr_tbl">
                        <caption>
                          <span className="blind">개인정보의 취급 위탁</span>
                        </caption>
                        <colgroup>
                          <col />
                          <col />
                        </colgroup>
                        <thead>
                          <tr>
                            <th scope="col">수탁자</th>
                            <th scope="col">위탁업무내용</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>서울신용평가정보㈜</td>
                            <td>
                              본인확인정보의 처리
                              <br />
                              본인확인 업무대행
                            </td>
                          </tr>
                          <tr>
                            <td>한국모바일인증㈜</td>
                            <td>본인확인 업무대행</td>
                          </tr>
                          <tr>
                            <td>코리아크레딧뷰로㈜</td>
                            <td>
                              본인확인정보의 처리
                              <br />
                              본인확인 업무대행
                            </td>
                          </tr>
                          <tr>
                            <td>NICE평가정보㈜</td>
                            <td>본인확인 업무대행</td>
                          </tr>
                          <tr>
                            <td>㈜ 다날</td>
                            <td>본인확인 업무대행</td>
                          </tr>
                          <tr>
                            <td>㈜한국사이버결제</td>
                            <td>본인확인 업무대행</td>
                          </tr>
                          <tr>
                            <td>㈜인포허브</td>
                            <td>본인확인 업무대행</td>
                          </tr>
                          <tr>
                            <td>㈜드림시큐리티</td>
                            <td>본인확인 업무대행</td>
                          </tr>
                          <tr>
                            <td>KG모빌리언스</td>
                            <td>본인확인 업무대행</td>
                          </tr>
                          <tr>
                            <td>LG U+</td>
                            <td>본인확인 업무대행</td>
                          </tr>
                          <tr>
                            <td>수미온</td>
                            <td>본인확인 업무대행</td>
                          </tr>
                          <tr>
                            <td>에스케이플래닛㈜</td>
                            <td>본인확인 업무대행</td>
                          </tr>
                        </tbody>
                      </table>
                      <br />
                      <p>
                        2. 회사는 서비스 제공시 인터넷사업자가 필요로 하는
                        이용자 식별정보(중복가입확인정보, 연계정보)의 생성 및
                        제공을 위하여 아래 표와 같이 다른 본인확인기관에게
                        본인확인정보를 제공할 수 있으며, 수집된
                        식별정보(중복가입확인정보, 연계정보)는 본인 식별 및 확인
                        위한 목적으로 회사 또는 인증 대행사를 통해
                        인터넷사업자에게 제공할 수 있습니다.
                        <br />
                        <br />
                        <strong>[개인정보의 이용 및 제3자 제공]</strong>
                      </p>
                      <br />
                      <table className="m_lyr_tbl">
                        <caption>
                          <span className="blind">
                            개인정보의 이용 및 제3자 제공
                          </span>
                        </caption>
                        <colgroup>
                          <col style={{ width: "30%" }} />
                          <col style={{ width: "40%" }} />
                          <col style={{ width: "30%" }} />
                        </colgroup>
                        <thead>
                          <tr>
                            <th scope="col">제공 받는자</th>
                            <th scope="col">제공목적</th>
                            <th scope="col">제공정보</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>서울신용평가정보㈜</td>
                            <td>
                              휴대폰 본인확인(이용 고객에 한함) 서비스 이용
                              <br />※ 중복가입확인정보(DI), 연계정보(CI)의 생성
                              및 제공
                            </td>
                            <td>주민등록번호</td>
                          </tr>
                          <tr>
                            <td>코리아크레딧뷰로㈜</td>
                            <td>
                              휴대폰 본인확인(이용 고객에 한함) 서비스 이용
                              <br />※ 중복가입확인정보(DI), 연계정보(CI)의 생성
                              및 제공
                            </td>
                            <td>주민등록번호</td>
                          </tr>
                        </tbody>
                      </table>
                      <br />
                      <p>
                        3. 개인정보 처리 및 위탁 등에 관한 사항은 관련법령 및
                        회사가 정하는 개인정보취급방침에 정한 바에 따릅니다.
                        <br />
                        <br />
                        <strong>제 13조 (약관 외 준칙)</strong>
                        <br />
                        <br />
                        본 약관에 명시되지 아니한 사항에 대해서는 정보통신망
                        이용 촉진 및 정보보호 등에 관한 법률 등 기타 관련 법령
                        또는 상관례에 따릅니다.
                        <br />
                        <br />
                        <strong>부칙</strong>
                        <br />
                        <br />
                        (시행일) 이 약관은 공시한 날로부터 시행합니다.
                      </p>
                    </div>
                  </div>

                  <a
                    className="modal-close-btn modal-close"
                    onClick={closeModal}
                  >

                    <span className="blind">레이어 닫기</span>
                  </a>
                </div>
              </div>

              <div
                className={
                  modal[3]
                    ? "m_lyr_modal ly_term_unique show"
                    : "m_lyr_modal ly_term_unique"
                }
              >

                <div className="m_lyr_con">
                  <h2 className="t_tit">고유식별정보 처리 동의</h2>
                  <div className="m_lyr_scroll">
                    <p>
                      에스케이텔레콤(주), (주)케이티, LG유플러스(주) (이하
                      "본인확인기관")가 코리아크레딧뷰로(주) (이하 "회사")를
                      통해 제공하는 휴대폰 본인인증 서비스와 관련하여
                      고객으로부터 수집한 고유식별정보를 이용하거나 타인에게
                      제공할 때에는 '정보통신망 이용촉진 및 정보보호 등에 관한
                      법률'(이하 "정보통신망법")에 따라 고객의 동의를 얻어야
                      합니다.
                      <br />
                      <br />
                      <strong>[고유식별정보의 수집 및 이용 목적]</strong>
                      <br />
                      <br />
                      "본인확인기관"은 휴대폰 본인인증 서비스 제공시, 아래 두
                      가지 목적을 위해 고객의 고유식별정보를 처리할 수 있습니다.
                      <br />
                      <br />
                      1. 정보통신망법 제23조의2 제2항에 따라 인터넷상에서
                      주민등록번호를 입력하지 않고도 본인임을 확인할 수 있는
                      휴대폰 본인인증 서비스를 제공하기 위해 고유식별정보를 이용
                      <br />
                      <br />
                      2. '본인확인기관 지정 등에 관한 기준(방송통신위원회
                      고시)'에 따라 "회사"와 계약한 정보통신서비스 제공자의
                      연계서비스 및 중복가입확인을 위해 필요한 경우, 다른
                      본인확인기관이 아래의 고유식별정보를 제공받아 처리하기
                      위함.
                      <br />
                      <br />
                      <strong>[수집하는 개인정보의 항목]</strong>
                      <br />
                      <br />
                      (1) 주민등록번호(내국인)
                      <br />
                      (2) 외국인등록번호(국내거주외국인)
                      <br />
                      <br />
                      <strong>[개인정보의 보유 및 이용기간]</strong>
                      <br />
                      <br />
                      "회사"는 휴대폰 본인확인 서비스 제공, 연계서비스 및
                      중복가입확인을 위하여 필요한 기간 동안 이용자의
                      고유식별정보를 보유합니다.
                      <br />
                      상기 내용과 같이 고유식별정보의 처리에 동의합니다.
                      <br />※ 본 고유식별정보 처리동의는 거부할 수 있으나, 거부
                      시에는 휴대폰본인확인서비스를 제공받으실 수 없습니다.
                    </p>
                  </div>

                  <a
                    className="modal-close-btn modal-close"
                    onClick={closeModal}
                  >

                    <span className="blind">레이어 닫기</span>
                  </a>
                </div>
              </div>

              <div
                className={
                  modal[4]
                    ? "m_lyr_modal ly_term_service show"
                    : "m_lyr_modal ly_term_service"
                }
              >

                <div className="m_lyr_con">
                  <h2 className="t_tit">서비스 이용약관 동의</h2>
                  <div className="m_lyr_scroll">
                    <p>
                      <strong>제1조 (목적)</strong>
                      <br />
                      <br />
                      이 약관은 본인확인서비스 대행기관인 주식회사
                      코리아크레딧뷰로(이하 '회사'라 합니다)와 본인확인서비스
                      이용자(이하 '이용자'라 합니다) 간에 본인확인서비스 이용에
                      관한 회사와 이용자의 권리와 의무, 기타 제반 사항을 정함을
                      목적으로 합니다.
                      <br />
                      <br />
                      <strong>제2조 (용어의 정리)</strong>
                      <br />
                      <br />
                      ① "본인확인서비스"라 함은 이용자가 유무선 인터넷의
                      웹사이트 및 스마트폰 Application 등(이하 "사이트"라
                      합니다.)에서 본인 명의로 개통한 휴대폰을 이용하여,
                      "본인확인정보"를 입력하고 인증 절차를 통하여 본인 여부와
                      본인이 등록한 정보의 정확성을 확인하여 주는 서비스를
                      말합니다.
                      <br />
                      ② "본인확인정보"라 함은 이용자가 입력한 본인의 생년월일,
                      성별, 성명, 내/외국인 여부, 이동통신사, 본인명의로 개통된
                      휴대폰번호, 기타 본인확인기관과 이용자간에 별도로 설정한
                      번호 등 "이용자"의 본인 여부 확인에 필요한 정보를
                      말합니다.
                      <br />
                      ③ "이용자"라 함은 "사이트"에서 본인확인기관이 제공하는
                      "본인확인서비스"를 이용하는 자를 말합니다.
                      <br />
                      ④ "본인확인기관"이라 함은 "본인확인서비스" 관련 법령에
                      따라 주민등록번호를 수집 이용하고, "사이트"에서
                      주민등록번호를 사용하지 아니하고 본인을 확인할 수 있도록
                      해주는 방법을 개발 제공 관리하는 업무를 담당하는 사업자를
                      말합니다.
                      <br />
                      ⑤ "대행기관"은 본인확인기관을 대신하여 "이용자"가
                      "사이트"에서 "본인확인서비스"를 제공받을 수 있도록
                      "사이트"와 본인확인기관간의 "본인확인서비스"를 중계하고
                      "이용자"에게 이용방법의 안내와 문의 등 지원업무를
                      담당하여서, "사이트"에서 "이용자"에게 "본인확인서비스"를
                      대행하여 제공하는 사업자를 말합니다.
                      <br />
                      ⑥ "사이트"라 함은 유무선 인터넷의 Web사이트, 스마트폰
                      Application(Apps)을 통하여 "이용자"에게 서비스, Contents,
                      Point 등의 각종 재화와 용역을 유/무료로 제공하는 사업자 및
                      기관, 단체를 말합니다.
                      <br />
                      <br />
                      <strong>제3조 (약관의 명시 및 변경)</strong>
                      <br />
                      <br />
                      ① 회사는 본 약관을 서비스 초기 화면에 게시하여 이용자가 본
                      약관의 내용을 확인할 수 있도록 합니다.
                      <br />
                      ② 회사는 필요하다고 인정되는 경우 본 약관을 변경할 수
                      있으며, 회사가 약관을 변경할 경우에는 적용일자 및
                      변경사유를 명시하여 서비스 화면에 적용일자 14일 전부터
                      공지합니다.
                      <br />
                      ③ 회사가 전항에 따라 변경 약관을 공지 또는 통지하면서
                      이용자에게 약관 변경 적용일 까지 거부의사를 표시하지
                      않으면 약관의 변경에 동의한 것으로 간주한다는 내용을
                      명확하게 공지 또는 통지하였음에도 이용자가 명시적으로 약관
                      변경에 대한 거부의사를 표시하지 아니하면 이용자가 변경
                      약관에 동의한 것으로 간주합니다.
                      <br />
                      ④ 이용자 또는 사이트가 변경된 약관에 대한 내용을 알지
                      못하여 발생하는 손해 및 피해에 대해서는 회사는 일체 책임을
                      지지 않습니다.
                      <br />
                      ⑤ 회사의 약관은 개인정보보호 등을 규정한 정보통신 이용촉진
                      및 정보보호 등에 관한 법률 등 관련 법령에서 정한 절차와
                      범위 내에서만 유효합니다.
                      <br />
                      <br />
                      <strong>제4조 (본인확인서비스 제공시간)</strong>
                      <br />
                      <br />
                      ① 본인확인서비스의 이용은 연중무휴 1일 24시간을 원칙으로
                      합니다. 다만, 정기 점검 및 기타 기술상의 이유, 기타
                      운영상의 사유와 목적에 따라 회사가 정한 기간에 일시 중지될
                      수 있으며, 각 사이트의 기술상, 운영상의 사유와 목적에 따라
                      일시 중지될 수 있습니다.
                      <br />
                      ② 회사는 본인확인서비스 중지에 따라 이용자에게 별도의
                      보상은 하지 않습니다.
                      <br />
                      <br />
                      <strong>제5조 (회사의 권리와 의무)</strong>
                      <br />
                      <br />
                      ① 회사는 본인확인서비스 대행과 관련하여 인지한 이용자의
                      본인확인정보를 본인의 승낙 없이 제3자에게 누설하거나
                      배포하지 않습니다. 단, 국가기관의 요구가 있는 경우, 범죄에
                      대한 수사상의 목적이 있는 경우 등 기타 관계 법령에서 정한
                      절차에 따른 요청이 있는 경우에는 그러하지 않습니다.
                      <br />
                      ② 회사는 이용자에게 안정적인 본인확인서비스 대행을 위하여
                      지속적으로 관련 시스템이나 절차, 기능 등의 예방점검,
                      유지보수 등을 이행하며, 본인확인서비스의 장애가 발생하는
                      경우, 이를 지체 없이 수리 및 복구합니다.
                      <br />
                      ③ 회사는 서비스의 안전성과 신뢰성, 보안성을 확보하기
                      위하여 개인정보 처리시스템의 해킹방지시스템 및 보안관리
                      체계 운영 등 기술적, 관리적 조치를 취합니다.
                      <br />
                      ④ 회사는 서버 및 통신기기의 정상작동여부 확인을 위하여
                      정보처리시스템 자원 상태의 감시, 경고 및 제어가 가능한
                      모니터링 체계를 갖춥니다
                      <br />
                      ⑤ 회사는 해킹 침해 방지를 위하여 다음 각 호의 시스템 및
                      프로그램을 설치하여 운영합니다.
                      <br />
                      1. 침입 차단 및 탐지시스템 설치
                      <br />
                      2. 그 밖에 필요한 보호장비 또는 암호프로그램 등
                      정보보호시스템 설치
                      <br />
                      ⑥ 회사는 컴퓨터바이러스 감염을 방지하기 위하여 바이러스
                      방지 대책을 자체적으로 운영합니다.
                      <br />
                      <br />
                      <strong>제6조 (이용자의 권리와 의무)</strong>
                      <br />
                      <br />
                      ① 이용자는 서비스를 이용함에 있어서 다음 각호에 해당하는
                      행위를 하여서는 안되며, 회사는 위반 행위에 따르는 일체의
                      법적 책임을 지지 않습니다.
                      <br />
                      1. 본인이 아닌 타인의 본인확인정보를 부정하게 사용 및
                      도용하는 행위
                      <br />
                      2. 회사 및 본인확인기관, 사이트의 저작권, 제3자의 저작권
                      등 기타 권리를 침해하는 행위
                      <br />
                      3. 법령에 규정하는 제반 범죄 및 위법 행위
                      <br />
                      ② 이용자는 본 약관에서 규정하는 사항과 서비스에 대한
                      이용안내 또는 주의사항 등을 준수하여야 합니다.
                      <br />
                      ③ 이용자는 이용자 본인의 접근매체, 본인확인정보의 분실,
                      유출, 누설없이 본인 스스로 성실히 관리하여야 합니다.
                      <br />
                      ④ 이용자는 회사의 서비스 고객센터를 통하여 관련 문의를 할
                      수 있습니다.
                      <br />
                      《회사의 서비스 고객센터 연락처 : 02-708-1000,
                      www.ok-name.co.kr》
                      <br />
                      ⑤ 이용자는 본인확인서비스가 자신의 의사에 반하여 특정
                      사이트에 제공되었음을 안 때에는 본인확인기관 또는 회사를
                      통하여 자신의 본인확인정보 삭제를 요구할 수 있으며,
                      본인확인기관 또는 회사는 그 정정요구를 받은 날부터 2주
                      이내에 처리 결과를 알려 주어야 합니다.
                      <br />
                      회사의 서비스 고객센터 연락처 : 02-708-1000,
                      www.ok-name.co.kr》
                      <br />
                      <br />
                      <strong>제7조 (이용자의 개인정보보호)</strong>
                      <br />
                      <br />
                      ① 회사는 본인확인서비스를 대행함에 있어 취득한 이용자의
                      정보 또는 자료를 이용자의 동의 없이 제3자에게 제공,
                      누설하거나 업무상 목적 외에 사용하지 않습니다.
                      <br />
                      ② 이용자의 개인정보 보호는 회사가 관련 법령과 회사가
                      수립하여 운영하는 개인정보 취급방침에 따릅니다. 자세한
                      회사의 개인정보 제공 범위와 보호 방침, 위탁은 서비스
                      홈페이지(www.ok-name.co.kr)에 제공되는 개인정보 취급방침을
                      참조하시기 바랍니다.
                      <br />
                      <br />
                      <strong>제8조 (약관 외 준칙)</strong>
                      <br />
                      <br />
                      본 약관에 명시되지 아니한 사항에 대해서는 정보통신망 이용
                      촉진 및 정보보호 등에 관한 법률 등 기타 관련 법령 또는
                      상관례에 따릅니다.
                      <br />
                      <br />
                      <strong>부칙</strong>
                      <br />
                      <br />
                      (시행일) 이 약관은 공시한 날로부터 시행합니다.
                    </p>
                  </div>

                  <a
                    className="modal-close-btn modal-close"
                    onClick={closeModal}
                  >

                    <span className="blind">레이어 닫기</span>
                  </a>
                </div>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
}

export default SubSignUp2;
