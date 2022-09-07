import React, { useState } from "react";
import DeliveryAddHeader from "../pages_layout/DeliveryAdd/DeliveryAddHeader";
import DaumPostcode from "react-daum-postcode";
import axios from "axios";
import { useContext } from "react";
import loginContext from "../../context/login.context";
import { useNavigate } from "react-router-dom";
import Server from "../../server/server";

function DeliveryAdd() {
  const navigate = useNavigate();
  const auth = useContext(loginContext);
  const [inputData, setInputData] = useState({
    name: "",
    name2:""
  });
  const [userAdd, setUserAdd] = useState("");
  const [userAddError, setUserAddError] = useState(false);
  const [openPostcode, setOpenPostcode] = useState(false);
  const [address, setAddress] = useState();
  const [zonecode, setZonecode] = useState();
  const onChangeAddress = (e) => {
    setUserAddError(false);
    setUserAdd(e.target.value)
  };
  const handle = {
    // 버튼 클릭 이벤트
    clickButton: () => {
      setOpenPostcode((current) => !current);
    },

    // 주소 선택 이벤트
    selectAddress: (data) => {
     
      setAddress(`${data.address}`);
      setZonecode(`${data.zonecode}`);
      setOpenPostcode(false);
    },
  };
  const handleInput = (e) => {
   
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };
  const handlePush =() =>{
    const token = auth.token;
    axios.post(`${Server.baseUrl}api/deliveryaddress/add`,{
      address:address,
      whetherDefaultAddress:false,
      whetherOnlyThisTime:false,
      addressName:inputData.name,
      receiveName:inputData.name2,
      zipCode:zonecode},{
      headers:{"Authorization":token}
    }).then(Response=>
      navigate("/delivery"))
  }
  return (
    <div className="body_ssg body_and">
      <div id="m_wrap" className="mcom_wrap ssg">
        <div id="m_container" className="mcom_container" data-iframe-height="">
          <DeliveryAddHeader />
          {openPostcode && (
            <DaumPostcode
              className="fixed"
              onComplete={handle.selectAddress} // 값을 선택할 경우 실행되는 이벤트
              autoClose={false} // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정 defaultQuery='중앙대로 664' // 팝업을 열때 기본적으로 입력되는
              검색어
            />
          )}
          {openPostcode && (
            <div onClick={handle.clickButton} className="modalBg"></div>
          )}
          <div id="m_content">
            <div className="m_addrbx order_sectionwrap">
              <div className="delivery_detail">
                <div
                  className="order_article new_delivery_add"
                  style={{ display: "block" }}
                >
                  <div className="order_artcont">
                    <div className="order_infoset">
                      <form id="submitForm">
                        <ul className="order_infolist">
                          <li className="oi_th_inp">
                            <span className="oi_th">
                              <label htmlFor="shpplocAntnmNm">주소별칭</label>
                            </span>
                            <div className="oi_cont">
                              <span className="inpbx">
                                <input
                                  type="text"
                                  id="shpplocAntnmNm"
                                  name="name"
                                  placeholder="주소별칭 입력"
                                  maxLength="20"
                                  value={inputData.name}
                                  onChange={handleInput}
                                />
                              </span>
                            </div>
                          </li>

                          <li className="oi_th_inp">
                            <span className="oi_th">
                              <label htmlFor="rcptpeNm">받는 분</label>
                            </span>
                            <div className="oi_cont">
                              <span className="inpbx">
                                <input
                                  type="text"
                                  id="rcptpeNm"
                                  name="name2"
                                  placeholder="받는분 성함입력"
                                  maxLength="20"
                                  value={inputData.name2}
                                  onChange={handleInput}
                                />
                              </span>
                            </div>
                          </li>
                          <li className="oi_th_inp">
                            <span className="oi_th">
                              <label htmlFor="phoneNum1">휴대폰</label>
                            </span>
                            <div className="oi_cont">
                              <div className="oi_phone_pd">
                                <span className="p_first">
                                  <span className="des_select">
                                    <span className="cc_ellip_in selected">
                                      010
                                    </span>
                                    <span className="sp_com sel_arrow">
                                      &nbsp;
                                    </span>
                                    <span className="hide_select">
                                      <select
                                        id="phoneNum1"
                                        title="휴대폰 앞자리"
                                      >
                                        <option
                                          value={"010"}
                                          
                                        >
                                          010
                                        </option>
                                        <option
                                          value={"011"}
                                          
                                        >
                                          011
                                        </option>
                                        <option
                                          value={"016"}
                                          
                                        >
                                          016
                                        </option>
                                        <option
                                          value={"017"}
                                          
                                        >
                                          017
                                        </option>
                                        <option
                                          value={"018"}
                                          
                                        >
                                          018
                                        </option>
                                        <option
                                          value={"019"}
                                      
                                        >
                                          019
                                        </option>
                                      </select>
                                    </span>
                                  </span>
                                </span>
                                <span className="inpbx">
                                  <input
                                    type="tel"
                                    title="휴대폰(숫자만 입력)"
                                    placeholder="휴대폰(숫자만 입력)"
                                    id="phoneNum2"
                                    maxLength="8"
                                  />
                                </span>
                              </div>
                            </div>
                          </li>
                          <li className="oi_th_inp">
                            <span className="oi_th">
                              <label htmlFor="lf_like4">전화번호(선택)</label>
                            </span>
                            <div className="oi_cont">
                              <div className="oi_phone_pd">
                                <span className="p_first">
                                  <span className="des_select">
                                    <span className="cc_ellip_in">선택</span>
                                    <span className="sp_com sel_arrow">
                                      &nbsp;
                                    </span>
                                    <span className="hide_select">
                                      <select
                                        id="telNum1"
                                        title="전화번호 앞자리"
                                      >
                                        <option value={""}>선택</option>
                                        <option
                                          value={"02"}
                                          addtoptnval1=""
                                          addtoptnval2=""
                                        >
                                          02
                                        </option>
                                        <option
                                          value={"031"}
                                          addtoptnval1=""
                                          addtoptnval2=""
                                        >
                                          031
                                        </option>
                                        <option
                                          value={"032"}
                                          addtoptnval1=""
                                          addtoptnval2=""
                                        >
                                          032
                                        </option>
                                        <option
                                          value={"033"}
                                          addtoptnval1=""
                                          addtoptnval2=""
                                        >
                                          033
                                        </option>
                                        <option
                                          value={"041"}
                                          addtoptnval1=""
                                          addtoptnval2=""
                                        >
                                          041
                                        </option>
                                        <option
                                          value={"042"}
                                          addtoptnval1=""
                                          addtoptnval2=""
                                        >
                                          042
                                        </option>
                                        <option
                                          value={"043"}
                                          addtoptnval1=""
                                          addtoptnval2=""
                                        >
                                          043
                                        </option>
                                        <option
                                          value={"051"}
                                          addtoptnval1=""
                                          addtoptnval2=""
                                        >
                                          051
                                        </option>
                                        <option
                                          value={"044"}
                                          addtoptnval1=""
                                          addtoptnval2=""
                                        >
                                          044
                                        </option>
                                        <option
                                          value={"052"}
                                          addtoptnval1=""
                                          addtoptnval2=""
                                        >
                                          052
                                        </option>
                                        <option
                                          value={"053"}
                                          addtoptnval1=""
                                          addtoptnval2=""
                                        >
                                          053
                                        </option>
                                        <option
                                          value={"054"}
                                          addtoptnval1=""
                                          addtoptnval2=""
                                        >
                                          054
                                        </option>
                                        <option
                                          value={"055"}
                                          addtoptnval1=""
                                          addtoptnval2=""
                                        >
                                          055
                                        </option>
                                        <option
                                          value={"061"}
                                          addtoptnval1=""
                                          addtoptnval2=""
                                        >
                                          061
                                        </option>
                                        <option
                                          value={"062"}
                                          addtoptnval1=""
                                          addtoptnval2=""
                                        >
                                          062
                                        </option>
                                        <option
                                          value={"063"}
                                          addtoptnval1=""
                                          addtoptnval2=""
                                        >
                                          063
                                        </option>
                                        <option
                                          value={"064"}
                                          addtoptnval1=""
                                          addtoptnval2=""
                                        >
                                          064
                                        </option>
                                        <option
                                          value={"070"}
                                          addtoptnval1=""
                                          addtoptnval2=""
                                        >
                                          070
                                        </option>
                                        <option
                                          value={"080"}
                                          addtoptnval1=""
                                          addtoptnval2=""
                                        >
                                          080
                                        </option>
                                        <option
                                          value={"0505"}
                                          addtoptnval1=""
                                          addtoptnval2=""
                                        >
                                          0505
                                        </option>
                                        <option
                                          value={"0507"}
                                          addtoptnval1=""
                                          addtoptnval2=""
                                        >
                                          0507
                                        </option>
                                        <option
                                          value={"010"}
                                          addtoptnval1=""
                                          addtoptnval2=""
                                        >
                                          010
                                        </option>
                                        <option
                                          value={"011"}
                                          addtoptnval1=""
                                          addtoptnval2=""
                                        >
                                          011
                                        </option>
                                        <option
                                          value={"016"}
                                          addtoptnval1=""
                                          addtoptnval2=""
                                        >
                                          016
                                        </option>
                                        <option
                                          value={"017"}
                                          addtoptnval1=""
                                          addtoptnval2=""
                                        >
                                          017
                                        </option>
                                        <option
                                          value={"018"}
                                          addtoptnval1=""
                                          addtoptnval2=""
                                        >
                                          018
                                        </option>
                                        <option
                                          value={"019"}
                                          addtoptnval1=""
                                          addtoptnval2=""
                                        >
                                          019
                                        </option>
                                      </select>
                                    </span>
                                  </span>
                                </span>
                                <span className="inpbx">
                                  <input
                                    type="tel"
                                    id="telNum2"
                                    maxLength="8"
                                    placeholder="전화번호(숫자만 입력)"
                                    title="전화번호(숫자만 입력)"
                                  />
                                </span>
                              </div>
                            </div>
                          </li>
                          <li className="oi_th_inp">
                            <span className="oi_th">
                              <label htmlFor="zipcd">배송주소</label>
                            </span>
                            <div className="oi_cont">
                              <div className="oi_cblock oi_post_pd">
                                <div className="in_bwrap">
                                  <span className="in_b">
                                    <span className="inpbx">
                                      {/* <a href="">
                                        <input
                                          type="text"
                                          name="zipcd"
                                          title="우편번호 입력"
                                          readOnly="readonly"
                                        />
                                      </a> */}
                                      <input value={address} type="text" id="zipcd" onChange={onChangeAddress} />
                                    </span>
                                  </span>
                                </div>
                                <a onClick={handle.clickButton} className="b_def3">
                                  우편번호
                                </a>
                              </div>
                              <div></div>
                              {/* <div
                                className="addr_info"
                                style={{ display: "none" }}
                              >
                                <strong className="info_tit">도로명</strong>
                                <span id="roadNmAddr" className="info_cont">
                                  도로명주소가 없거나 확인되지 않습니다.
                                </span>
                                <strong className="info_tit">지번</strong>
                                <span id="lotnoAddr" className="info_cont">
                                  지번주소가 없거나 확인되지 않습니다
                                </span>
                              </div> */}
                            </div>
                          </li>
                        </ul>
                        <div className="order_btnarea2 order_btnarea3">
                          <ul className="bnbox">
                            <li>
                              <a href="" className="b_def">
                                초기화
                              </a>
                            </li>

                            <li>
                              <a className="b_def">취소</a>
                            </li>

                            <li>
                              <a className="b_def5" onClick={handlePush}>
                                등록
                              </a>
                            </li>
                          </ul>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span className="dimmed">&nbsp;</span>
          </div>

          {/* <div id="m_content" style={{ display: "none" }}>
            <span className="dimmed">&nbsp;</span>
          </div>
          <div id="zipcode" style={{ display: "none" }}>
            <div className="m_fullpop_header">
              <h1 className="m_fullpop_tit">우편번호 찾기</h1>
              <a href="" className="m_fullpop_close">
                <span className="blind">닫기</span>
              </a>
            </div>
            <div className="search_address">
              <div className="srchaddr_form">
                <form action="">
                  <fieldset>
                    <legend className="blind">검색어 입력</legend>
                    <div className="srchaddr_search">
                      <input
                        name="searchKeyword"
                        type="text"
                        title="검색어 입력"
                        className="search_txt"
                        autoComplete="off"
                        placeholder="도로명 또는 지번 주소를 입력해주세요."
                      />
                      <button type="button" className="search_clear">
                        <span className="blind">검색어 지우기</span>
                      </button>
                      <button type="button" className="search_btn" href="">
                        <span className="blind">검색</span>
                      </button>
                    </div>
                  </fieldset>
                </form>
                <div className="srchaddr_suggest" style={{ display: "none" }}>
                  <strong className="blind">제안 검색어</strong>
                  <ul className="suggest_list"></ul>
                </div>
              </div>

              <div className="srchaddr_sec srchaddr_sec_init">
                <div className="srchaddr_tip">
                  <strong className="tip_tit">TIP_이렇게 검색하세요!</strong>
                  <div className="tip_search">
                    <dl>
                      <dt>도로명 + 건물번호</dt>
                      <dd className="notranslate">
                        <span>우정국로 26</span>
                      </dd>
                    </dl>
                    <dl>
                      <dt>지역명 + 번지</dt>
                      <dd className="notranslate">
                        <span>공평동 17</span>
                      </dd>
                    </dl>
                    <dl>
                      <dt>지역명 + 건물명</dt>
                      <dd className="notranslate">
                        <span>회현동 신세계백화점</span>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>

              <div
                className="srchaddr_sec srchaddr_sec_noresult"
                style={{ display: "none" }}>
                <h2 className="blind">주소 검색결과</h2>
                <div className="srchaddr_noresult">
                  <p className="noresult_txt">
                    <span className="point">검색결과가 없습니다</span>
                  </p>
                </div>
                <div className="srchaddr_tip">
                  <strong className="tip_tit">
                    TIP_찾으시는 주소가 없나요?
                  </strong>
                  <ul className="tip_desc">
                    <li>
                      행정안전부 도로명주소 시스템에 주소 등록 후 익일부터 주소
                      검색이 가능합니다.
                    </li>
                    <li>
                      도로명주소 홈페이지에서 주소 등록 여부를 확인해주세요.
                      <br />
                      · 도로명주소 안내 홈페이지 : https://www.juso.go.kr
                      <br />· 도로명주소 도움센터 : 1588-0061
                    </li>
                  </ul>
                </div>
              </div>

              <div
                className="srchaddr_sec srchaddr_sec_result"
                style={{ display: "none" }}>
                <h2 className="blind">주소 검색결과</h2>
                <div className="srchaddr_notice">
                  <p className="notice_txt">
                    <em>검색한 결과 총 0건 입니다.</em>
                  </p>
                </div>

                <div className="srchaddr_result">
                  <ul className="result_list"></ul>
                  <div
                    className="srchaddr_more"
                    style={{ display: "none" }}
                  ></div>
                </div>
              </div>

              <div
                className="srchaddr_sec srchaddr_sec_detail"
                style={{ display: "none" }}>
                <h2 className="blind">상세주소 입력</h2>
                <div className="srchaddr_final">
                  <dl className="srchaddr_info">
                    <dt className="info_tit">우편번호</dt>
                    <dd name="zipcd" className="info_cont">
                      <span className="num"></span>
                    </dd>
                    <dt className="info_tit">도로명</dt>
                    <dd name="roadNmAddr" className="info_cont"></dd>
                    <dt className="info_tit">지번</dt>
                    <dd name="lotnoAddr" className="info_cont"></dd>
                  </dl>
                </div>
                <div className="srchaddr_detail">
                  <span className="srchaddr_input">
                    <input
                      name="dtlAddr"
                      type="text"
                      title="상세주소 입력"
                      className="input_txt"
                      placeholder="상세주소를 입력해주세요."
                      maxLength="40"
                    />
                  </span>
                  <div className="srchaddr_btnarea">
                    <a href="" className="srchaddr_btn">
                      확인
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default DeliveryAdd;
