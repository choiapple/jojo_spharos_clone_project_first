import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import loginContext from '../../context/login.context';
import Server from '../../server/server';


function BuyComplete() {

    const auth = useContext(loginContext);
    const [orderData, setOrderDate] = useState();
    const token = localStorage.getItem('token')
    const [orderLength, setOrderLength] = useState();
    useEffect(()=>{
        axios.get(`${Server.baseUrl}api/orders/get`,{
                headers:{
                    "Authorization":token
                }
            })
            .then(Response =>{
                console.log(Response.data)
                console.log(Response.data.length)
                setOrderDate(Response.data)
                setOrderLength(Response.data.length - 1)
            })
    },[]);
    
    console.log(orderData)
    return ( 
        <>
        {orderData && 
         <div id="m_wrap" className="reveal-left-wrap reveal-right-wrap mcom_wrap ssg" aria-hidden="false">
         <header id="header" className="reveal-left-header reveal-right-header mnodr_head_fix">
             <div className="mcom_tit_renew ty_top">

                 <h2 className="mcom_tit_txt">주문완료</h2>



                 <div className="mcom_tit_rgt">
                     <div className="btn_cate btn_home">
                         <Link to='/' id="headerHomeBtn" href="javascript:void(0);" onclick="headerGoHome();"
                             className="payTracking_v2" data-pt-click-v2="00028_000000130">
                             <span className="sp_ctg_icon ctg_icon_home"><span className="blind">홈</span></span>
                        </Link>
                     </div>
                 </div>
             </div>
         </header>


         <div id="m_container" className="reveal-left-contents reveal-right-contents mcom_container ty_headfix">
             <div id="m_content" className="mnodr_order_completed">
                 <div className="mnodr_section mnodr_section_head">
                     <p className="mnodr_section_title">
                         <strong>주문이 완료되었습니다.</strong>
                     </p>




                 </div>

                 <hr className="mnodr_border" />

                 <div className="mnodr_section">
                     <p className="mnodr_section_title"><strong>받는분 정보</strong></p>
                     <div className="mnodr_section_content">
                         <div className="mnodr_orderer_info">
                             <strong> {orderData[orderLength].receiveName} / <span>{orderData[orderLength].ordersPhone} </span> </strong>
                             <p className="orderer-address">
                                 <strong></strong>
                                 [{orderData[orderLength].zipCode}] {orderData[orderLength].address}
                             </p>

                             <button type="button" className="mnodr_btn mnodr_btn_orderer_change ty_xs"
                                 id="btnChangeShpploc" data-orord-no="20220904C61B6B"
                                 data-ord-shpploc-id="1390526071" data-shpp-no="D2458595234"
                                 data-inflo-site-no="6005">
                                 <span className="mnodr_btn_content">변경</span>
                             </button>
                         </div>
                     </div>
                 </div>
                 <hr className="mnodr_border" />

                 <div className="mnodr_section">
                     <div className="mnodr_acdo_toggle">
                         <div className="mnodr_form_sec">
                             <div className="mnodr_acdo_titarea">
                                 <h3 className="mnodr_tx_tit">결제금액 <span>:{(orderData[orderLength].ordersPrice).toLocaleString()}</span>원</h3>
                                 <button type="button" className="mnodr_acdo_btn">
                                     <span className="mnodr_ico_toggle">
                                         <i className="icon ty_sm icon_chevron_down" aria-hidden="true"></i>
                                         <span className="blind"><span className="sr_off">결제금액 상세 펼치기</span><span
                                                 className="sr_on">결제금액 상세
                                                 접기</span></span>
                                     </span>
                                 </button>
                             </div>
                         </div>
                         <div className="mnodr_acdo_cont ty_toggle">
                             <div className="mnodr_table">
                                 <dl className="mnodr_table_row">
                                     <dt className="mnodr_table_cell">주문금액</dt>
                                     <dd className="mnodr_table_cell"><span>{(orderData[orderLength].ordersPrice).toLocaleString()}</span>원</dd>
                                 </dl>

                                 <dl className="mnodr_table_row">
                                     <dt className="mnodr_table_cell">배송비</dt>
                                     <dd className="mnodr_table_cell"><span>+3,000</span>원</dd>
                                 </dl>
                             </div>
                         </div>
                     </div>

                     <div className="mnodr_section_content">
                         <div className="mnodr_table">
                             <dl className="mnodr_table_row mnodr_table_head">
                                 <dt className="mnodr_table_cell"><strong>무통장 입금</strong></dt>
                                 <dd className="mnodr_table_cell">
                                     <strong><span>{(orderData[orderLength].ordersPrice).toLocaleString()}</span>원</strong><span
                                         className="codr_tx_point">(입금대기)</span>
                                 </dd>
                             </dl>
                            {/*  <dl className="mnodr_table_row">
                                 <dt className="mnodr_table_cell">기업은행</dt>
                                 <dd className="mnodr_table_cell"><span>08207840197053 </span></dd>
                             </dl>
                             <dl className="mnodr_table_row">
                                 <dt className="mnodr_table_cell">입금 기한일</dt>
                                 <dd className="mnodr_table_cell">
                                     <span>2022</span>년 <span>09</span>월 <span>05</span>일
                                 </dd>
                             </dl>
                             <dl className="mnodr_table_row">
                                 <dt className="mnodr_table_cell">입금자</dt>
                                 <dd className="mnodr_table_cell">{orderData[orderLength].receiveName}</dd>
                             </dl> */}
                         </div>
                      {/*    <p className="mnodr_caption">
                             ※ (주)에스에스지닷컴으로 발급되는 가상계좌로, 상품구매목적
                             이외의 입금은 불가합니다.
                         </p>
                         <p className="mnodr_caption">
                             ※ 입금기한일까지 미 입금시 자동 주문취소
                         </p> */}
                     </div>
                 </div>
                 <hr className="mnodr_border" />

                 <div className="mnodr_section">
                     <p className="mnodr_section_title">적립예정내역</p>
                     <div className="mnodr_section_content">
                         <div className="mnodr_table">
                             <dl className="mnodr_table_row">
                                 <dt className="mnodr_table_cell">스탬프</dt>
                                 <dd className="mnodr_table_cell"><span>0</span>개</dd>
                             </dl>
                         </div>
                     </div>

                     <p className="mnodr_caption">
                         ※ 총 결제금액 3만원 미만으로 스탬프가 지급되지 않습니다. 스탬프는
                         3만원 이상부터 지급됩니다.(단, 배송비 및 포장비 제외)
                     </p>



                     <div className="mnodr_btn_group">
                         <a href="http://m.ssg.com" className="mnodr_btn mnodr_btn_contionus_shopping ty_md">
                             <span className="mnodr_btn_content">계속 쇼핑하기</span>
                         </a>

                         <a href="https://pay.ssg.com/m/myssg/orderDetail.ssg?orordNo=20220904C61B6B
               
             " className="mnodr_btn mnodr_btn_order_detail ty_md">
                             <span className="mnodr_btn_content">주문상품 상세보기</span>
                         </a>
                     </div>

                     <a className="mnodr_banner mnodr_banner_bio_auth payTracking_v2 campBanrDiv" id="campBanrUrl_1"
                         data-pt-click-v2="00028_000000134" style={{display: 'none'}}>
                         <div className="mnodr_banner_content">
                             <div className="mnodr_banner_prepend_icon">
                                 <img id="campBanrImg_1" />
                             </div>
                             <div className="mnodr_banner_txt_wrap">
                                 <strong className="mnodr_banner_title" id="campBanrMainTitle_1"></strong>
                                 <p className="mnodr_banner_text" id="campBanrSubTitle_1"></p>
                             </div>
                             <div className="mnodr_banner_append">
                                 <i className="icon ty_md icon_chevron_right_s" aria-hidden="true"></i>
                             </div>
                         </div>
                     </a>
                 </div>
             </div>


             <button type="button" className="modal-alert-open blind" data-layer-target="#_layerAffiliate"
                 id="btnLayerAffiliate">
                 제휴 멤버십 가입
             </button>
             <div className="mnodr_modal ty_alert ty_affiliate" role="dialog" tabindex="-1" aria-hidden="true"
                 id="_layerAffiliate">
                 <div className="mnodr_modal_wrap" role="document" tabindex="0">
                     <div className="mnodr_modal_cont">
                         <div className="mnodr_affiliate_icon">
                             <img src="https://sui.ssgcdn.com/ui/m_ssg/img/order/ico_affiliate.png" alt="" />
                         </div>
                         <h3 className="mnodr_tx_tit">
                             회원만의<br />
                             혜택을 놓치지 마세요
                         </h3>
                         <p className="mnodr_tx_desc mnodr_tx_gray2">
                             방금 쇼핑하신 상품을 자동으로 적립!<br />
                             만의 이벤트 혜택까지 쓱-<br />
                             지금 바로 가입하시고, 제휴 혜택을 누려보세요!
                         </p>
                     </div>
                     <footer className="mnodr_modal_foot">
                         <div className="mnodr_btn_area">
                             <button className="mnodr_btn ty_gray modal-close-btn" type="button">
                                 닫기
                             </button>
                             <button type="button" className="mnodr_btn ty_point modal-close-btn"
                                 onclick="location.href=''">
                                 가입하러 가기
                             </button>
                         </div>
                     </footer>
                 </div>
             </div>

             <div className="mnodr_modal ty_alert" role="dialog" tabindex="-1" aria-hidden="false"
                 id="_layerReasonWhyNeedsBag">
                 <div className="mnodr_modal_wrap" role="document" tabindex="0">
                     <div className="mnodr_modal_cont">
                         <h1 className="mnodr_tx_tit">알비백 보증금은 왜 필요한가요?</h1>
                         <p className="mnodr_tx_txt">
                             보증금은 회수용 알비백이 지급될 경우를 대비해, 미리 결제해두는
                             금액입니다. 새벽배송을 이용하시는 동안에 예치해두었다가, 잠시
                             멈추고 싶으실 땐 언제든지 [MYSSG &gt; 새벽배송 알비백 관리] 에서
                             환불하실 수 있습니다.
                         </p>
                     </div>
                     <footer className="mnodr_modal_foot">
                         <div className="mnodr_btn_area">
                             <button className="mnodr_btn ty_gray modal-close-btn" type="button">
                                 닫기
                             </button>
                         </div>
                     </footer>
                 </div>
             </div>

             <div id="mcom_footer">
                 <div className="mcom_footer mcom_footer_order mcom_footer_order_v2">
                     <div className="mcom_mall_wrap v2">
                         <div className="mcom_noti_wrap">
                             <p className="mcom_noti_txt">
                                 ㈜에스에스지닷컴에서 판매되는 상품 중에는 개별 판매자가
                                 판매하는 오픈마켓 상품이 포함되어 있습니다.
                             </p>
                             <p className="mcom_noti_txt">
                                 오픈마켓 상품의 경우, ㈜에스에스지닷컴은 통신판매중개자로서
                                 거래 당사자가 아니며, 입점 판매사가 등록한 상품정보 및 거래
                                 등에 대해 책임을 지지 않습니다.
                             </p>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
         </div>
        }
        </>

       
     );
}

export default BuyComplete;