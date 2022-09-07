import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import DeliveryHeader from "../pages_layout/Delivery/DeliveryHeader";
import axios from "axios";
import { useState } from "react";
import Server from "../../server/server";
function Delivery() {
  const [deliveryData, setDeliveryData] = useState([]);
  const [whetherD, setWhetherD] = useState([]);
  const [toggle,setToggle] = useState(false);
  const [addressName, setAddressName] = useState();
  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get(`${Server.baseUrl}api/deliveryaddress/get`, {headers:{"Authorization":token}})
    .then((Response) => {
      console.log(Response.data);
      setDeliveryData(Response.data);
      let tmp = 0;
      Response.data.forEach((data)=>{
        if(data.whetherOnlyThisTime === true){
          setAddressName(data.addressName);
          tmp = 1;
        }
      })
      if(tmp === 0){
        Response.data.forEach((data)=>{
          if(data.whetherDefaultAddress === true){
            setAddressName(data.addressName);
          }
        })
      }
      return Response.data;
    }).then((Response)=>{
      let tmp = 0;
      Response.forEach((data)=>{
        if(data.whetherOnlyThisTime === true){
          const tmp2 = Response.map((data)=>data.whetherOnlyThisTime);
          setWhetherD(tmp2);
          tmp = 1;
        }
      })
      if(tmp === 0){
        const tmp2 = Response.map((data)=>data.whetherDefaultAddress);
        setWhetherD(tmp2);
      }
    });
    
  }, [toggle]);



  const handleRadio=(idx) =>{
    const tmp2 = whetherD.map((data,i)=> {
      if(i === idx){
        return true;
      }else{
        return false;
      }});
    console.log(tmp2);
    setWhetherD(tmp2);
  }
  
  const handleDBtn=()=>{
    const token = localStorage.getItem('token')
    deliveryData.forEach((data, idx)=> {
      if(whetherD[idx] === true){
        axios.put(`${Server.baseUrl}api/deliveryaddress/edit`,{
          "id":data.id,
          "address":data.address,
          "whetherDefaultAddress":true,
          
          "whetherOnlyThisTime":data.whetherOnlyThisTime,
          "addressName":data.addressName,
          "receiveName":data.receiveName,
          "zipCode":data.zipCode
        },{headers:{"Authorization":token}}).then(()=>{
          setToggle(!toggle);
        })
      }
    })
    
  }
  const handleOBtn=()=>{
    const token = localStorage.getItem('token')
    deliveryData.forEach((data, idx)=> {
      if(whetherD[idx] === true){
        axios.put(`${Server.baseUrl}api/deliveryaddress/edit`,{
          "id":data.id,
          "address":data.address,
          "whetherDefaultAddress":data.whetherDefaultAddress,
          "whetherOnlyThisTime":true,
          "addressName":data.addressName,
          "receiveName":data.receiveName,
          "zipCode":data.zipCode
        },{headers:{"Authorization":token}}).then(()=>{
          setToggle(!toggle);
        })
      }
    })
  }
  return (
    <div className="body_ssg body_and">
      <div id="m_wrap" className="mcom_wrap ssg">
        <div id="m_container" className="mcom_container" data-iframe-height="">
          <DeliveryHeader />
          <div id="m_content">
            <div className="myodr_addrwrap">
              <div className="myodr_tit">
                <i className="myodr_tit_ico"></i>
                <h3 className="myodr_tit_tx">
                  [MY배송지] {addressName}
                </h3>
              </div>
              <div className="myodr_tab">
                <ul className="myodr_tab_list" role="tablist">
                  <li role="presentation" className="on">
                    <a
                      href="/m/comm/shpplocList.ssg"
                      role="tab"
                      aria-selected="true"
                    >
                      <span className="myodr_tab_tx">MY배송지</span>
                    </a>
                  </li>

                  <li role="presentation">
                    <a
                      href="/m/comm/shareShpplocList.ssg"
                      role="tab"
                      aria-selected="false"
                    >
                      <span className="myodr_tab_tx">함께장보기 배송지</span>
                    </a>
                  </li>
                </ul>
                <div className="myodr_tab_cont">
                  <div className="myodr_tab_panel" role="tabpanel">
                    <ul className="myodr_tabrdo_lst">
                      {deliveryData &&
                        deliveryData.map((data,idx) => (
                          <li className="myodr_tabrdo" key={idx}>
                            <div className="myodr_rdo on">
                              <a onClick={()=>handleRadio(idx)}>
                              <input
                                type="radio"
                                id="ui_test_rdotab0"
                                name="delivery"
                                value={"1"}
                                checked={whetherD[idx]?true:false}
                              /></a>
                              <label
                                htmlFor="ui_test_rdotab0"
                                className="myodr_rdo_cont">
                                <span className="myodr_rdo_inner">
                                  <strong className="tx_deliv_name">
                                    <span className="blind">배송지명</span>
                                    {data.addressName}
                                    {data.whetherDefaultAddress ? <em>기본배송지</em>:null}
                                    {data.whetherOnlyThisTime ? <em>이번만 배송지</em>:null}
                                  </strong>
                                  <span className="tx_deliv_address">
                                    <span className="blind">우편번호</span>(
                                    {data.zipCode})
                                  </span>
                                  <span className="tx_deliv_address">
                                    도로명주소: {data.address}
                                  </span>
                                  {/* <span className="tx_deliv_address">
                                    지번주소: 부산광역시 남구 용당동 576 유림빌
                                    201호
                                  </span> */}
                                </span>
                              </label>
                              <span className="myodr_btn_rt">
                                <button type="button" className="myodr_btn_tx">
                                  <span>수정</span>
                                </button>
                              </span>
                            </div>
                          </li>
                        ))}
                    </ul>

                    <div className="myodr_btn_newaddr">
                      <Link to="/deliveryadd">
                        <button type="button">
                          <span>
                            <span aria-hidden="true">+</span> 새 배송지 추가
                          </span>
                        </button>
                      </Link>
                    </div>
                    <div className="myodr_btnarea">
                      <ul>
                        <li>
                          <button
                            type="button"
                            className="myodr_btn myodr_btn_gray"
                            onClick={handleOBtn}>
                            <span>이번만배송지 설정</span>
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            className="myodr_btn myodr_btn_orange" onClick={handleDBtn}>
                            <span>기본 배송지 설정</span>
                          </button>
                        </li>
                      </ul>
                    </div>

                    <div className="myodr_infolst">
                      <ul>
                        <li>
                          이마트, 트레이더스 상품은 선택한 배송지에 따라
                          주문하실 상품의 재고가 달라집니다.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="myodr_banner">
                    <a href="http://m.ssg.com/service/eosPickup.ssg?salestrNo=2498">
                      <img
                        src="//sui.ssgcdn.com/ui/m_ssg/img/cs/bn_pickup.jpg"
                        alt="청계천점 PIXEL OPEN 온라인 주문하고 원하는 시간에 픽업을 쓱"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <span className="dimmed">&nbsp;</span>

          {/* <footer id="m_footer" className="mcom_footer react-area">
            <div className="mcom_service_wrap">
              <div className="mcom_service_area">
                <p className="mcom_service_info">
                  <span className="mcom_info_mall">
                    SSG.COM 고객센터 / 전자금융거래 분쟁처리
                  </span>
                  <br />
                  <span className="mcom_tel_tx">1577-3419 /</span>
                  <span className="mcom_email_tx">ssg@ssg.com</span>
                </p>
                <div className="mcom_service_btnarea">
                  <a
                    href="tel:1577-3419"
                    className="mcom_service_btn clickable"
                    data-react-tarea="푸터|전화연결"
                  >
                    <em>전화걸기</em>
                  </a>
                  <a
                    href="http://talk.ssg.com/webchat?gateType=cs"
                    className="mcom_service_btn clickable"
                    data-react-tarea="푸터|고객상담톡"
                  >
                    <em>1:1 고객센터</em>
                  </a>
                </div>
              </div>
            </div>
            <div className="mcom_btnbx_warp">
              <ul className="mcom_btnbx_list">
                <li id="footer_loginBtn" style={{display: "none"}}>
                  <a
                    href=""
                    className="clickable"
                    data-react-tarea="푸터|로그인"
                  >
                    로그인
                  </a>
                </li>
                <li id="footer_logoutBtn">
                  <a
                    href=""
                    className="clickable"
                    data-react-tarea="푸터|로그아웃"
                  >
                    로그아웃
                  </a>
                </li>
                <li id="footer_joinMemberBtn" style={{display: "none"}}>
                  <a
                    href="#"
                    className="clickable"
                    data-react-tarea="푸터|회원가입"
                    onclick="appBroswer('https://member.ssg.com/m/member/join/simpleJoinIntro.ssg', 'stack'); return false;"
                  >
                    회원가입
                  </a>
                </li>
                <li>
                  <a
                    href="https://m.ssg.com/comm/app/appLink.ssg?mobilAppSvcNo=3"
                    className="clickable"
                    data-react-tarea="푸터|앱다운로드"
                  >
                    앱다운로드
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="clickable"
                    data-react-tarea="푸터|PC버전"
                    onclick="appBroswer('https://www.ssg.com','pc','Y'); return false;"
                  >
                    PC버전
                  </a>
                </li>
              </ul>
            </div>
            <div className="mcom_mall_wrap v2">
              <div className="mcom_mall_box">
                <span className="mcom_mall_name">(주)에스에스지닷컴</span>
                <address>
                  대표자: 강희석<span className="bar">|</span>사업자등록번호:
                  870-88-01143
                  <br />
                  통신판매업 신고번호: 제2022-서울강남-03751호
                  <a
                    href="#"
                    onclick="appBroswer('https://www.ftc.go.kr/bizCommPop.do?wrkr_no=8708801143', 'stack');return false;"
                    className="txt_link"
                  >
                    사업자 정보확인
                  </a>
                  <br />
                  개인정보보호 책임자: 김우진<span className="bar">|</span>주소:
                  서울특별시 강남구 테헤란로 231
                  <br />
                  호스팅서비스 사업자 : (주)에스에스지닷컴
                </address>
              </div>
              <div className="mcom_noti_wrap">
                <p className="mcom_noti_tip">
                  우리은행 채무지급보증 안내
                  <a
                    href="#"
                    onclick="appBroswer('https://m.ssg.com/comm/popupWooriService.ssg', 'stack', 'Y'); return false;"
                    className="txt_link"
                  >
                    서비스가입사실 확인
                  </a>
                </p>
                <p className="mcom_noti_txt">
                  당사는 고객님이 현금 결제한 금액에 대해 우리은행과
                  <br />
                  채무지급 보증 계약을 체결하여 안전거래를 보장하고 있습니다.
                </p>
              </div>
              <div className="mcom_cont_info">
                <h3 className="blind">SSG.COM 정책 및 약관</h3>
                <ul className="mcom_cont_lst">
                  <li>
                    <a
                      href="#"
                      title="새창열림"
                      onclick="appBroswer('https://company.ssg.com', 'stack', 'Y'); return false;"
                    >
                      <span>회사소개</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title="새창열림"
                      onclick="appBroswer('https://m.ssg.com/comm/commInfo.ssg?type=clause&amp;_mpop=new','stack','Y'); return false;"
                    >
                      이용약관
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title="새창열림"
                      onclick="appBroswer('https://member.ssg.com/m/policies/tradeTerms.ssg', 'stack', 'Y'); return false;"
                    >
                      전자금융거래이용약관
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title="새창열림"
                      onclick="appBroswer('https://member.ssg.com/m/policies/privacy.ssg', 'stack', 'Y'); return false;"
                    >
                      <strong>개인정보처리방침</strong>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title="새창열림"
                      onclick="appBroswer('https://member.ssg.com/m/policies/youthProtection.ssg', 'stack', 'Y'); return false;"
                    >
                      청소년보호방침
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title="새창열림"
                      onclick="appBroswer('https://member.ssg.com/m/policies/consumerDispute.ssg', 'stack', 'Y'); return false;"
                    >
                      소비자분쟁해결기준
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title="새창열림"
                      onclick="appBroswer('https://partners.ssgadm.com/m/', 'stack', 'Y'); return false;"
                    >
                      <span>입점상담</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mcom_noti_wrap ty2">
                <p className="mcom_noti_txt">
                  ㈜에스에스지닷컴에서 판매되는 상품 중에는 개별 판매자가
                  판매하는 오픈마켓 상품이 포함되어 있습니다.
                </p>
                <p className="mcom_noti_txt">
                  오픈마켓 상품의 경우, ㈜에스에스지닷컴은 통신판매중개자로서
                  거래 당사자가 아니며, 입점 판매사가 등록한 상품정보 및 거래
                  등에 대해 책임을 지지 않습니다.
                </p>
                <p className="mcom_noti_txt">
                  ㈜에스에스지닷컴 사이트의 상품/판매자/쇼핑정보, 컨텐츠, UI
                  등에 대한 무단 복제, 전송, 배포, 스크래핑 등의 행위는
                  저작권법, 콘텐츠사업 진흥법 등에 의하여 엄격히 금지됩니다.
                </p>
              </div>
              <p className="mcom_copyright">
                Copyright ⓒ SSG.COM Corp. All rights reserved.
              </p>
            </div>
          </footer> */}
        </div>
      </div>

      {/* <div className="ly_app react-area" id="lyApp" style={{display: "none"}}></div>

      <div className="ly_app ty2" id="lyVvip" style={{display: "none"}}></div>

      <div
        id="com_channel_ban"
        className="channel_ban _fixed_banner"
        style={{display: "none"}}
      ></div>
      <div
        id="notice_b2e_pop"
        className="channel_ban _fixed_banner"
        style={{display: "none"}}
      ></div>

      <div
        id="com_extend_ban"
        className="extend_ban _fixed_banner"
        style={{display: "none"}}
      ></div>

      <div
        className="ly_mnmorning"
        id="popup_lymnmorning"
        style={{display: "none"}}
      ></div>

      <div
        className="cmnotipop_wrap v3"
        id="cmNotipopWrap"
        style={{display: "none"}}
      ></div>

      <div
        className="cmnotipop_wrap v3"
        id="cmPromopopWrap"
        style={{display: "none"}}
      ></div> */}
    </div>
  );
}

export default Delivery;
