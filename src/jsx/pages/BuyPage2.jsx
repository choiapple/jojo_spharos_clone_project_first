import React, { useContext, useEffect, useState } from 'react';
import BuyPageCtt from '../pages_layout/BuyPage/BuyPageCtt';
import BuyPageFooter from '../pages_layout/BuyPage/BuyPageFooter';
import BuyPageHeader from '../pages_layout/BuyPage/BuyPageHeader';
import '../../css/product.css'
import { useNavigate } from 'react-router-dom';
import LoginContext from '../../context/login.context';
import axios from 'axios';
import Swal from 'sweetalert2';
import Server from '../../server/server';

function BuyPage2({cartTotalPrice, userData }) {
    const navigate = useNavigate();
    const auth = useContext(LoginContext);
    const [user, setUser] = useState();
    const [userDelivery, setUserDelivery] = useState();
    const [pdtDetail, setPdtDetail] = useState();

    console.log(cartTotalPrice)
    /* 데이터받기 */
    useEffect(()=>{
        if(auth.auth === true){
            const token = auth.token;
            axios.all([
            axios.get(`${Server.baseUrl}api/user/get`,{headers:{"Authorization":token}}),
            axios.get(`${Server.baseUrl}api/deliveryaddress/get`,{headers:{"Authorization":token}}),
            axios.get(`${Server.baseUrl}api/cart/get`,{headers:{"Authorization":token}})
            ])
            .then(axios.spread((Response1, Response2, Response3) =>{
            
                setUser(Response1.data);
                setUserDelivery(Response2.data);
                setPdtDetail(Response3.data);
                
                let tmp = 0;
                Response2.data.forEach((data)=>{
                    if(data.whetherOnlyThisTime === true){
                    setUserDelivery(data);
                    tmp = 1;
                    }
                })
                if(tmp === 0){
                    Response2.data.forEach((data)=>{
                    if(data.whetherDefaultAddress === true){
                        setUserDelivery(data);
                    }
                    })
                }

            }))
        }
       
    },[]);
   

  


    
    
    /* user/get */
    
    const [addressChange, setAddressChange] = useState(false)
    const [addressAdd, setAddressAdd] = useState(false)
    const handleAddress = () =>{
        setAddressChange(!addressChange)
    }
    const handleAddressAdd = () =>{
        setAddressAdd(!addressAdd)
        setAddressChange(!addressChange)
    }
    const backToChange = () =>{
        setAddressAdd(!addressAdd)
        setAddressChange(!addressChange)
    }

  

    const [selectOpt, setSlelectOpt] = useState([]);
   
    useEffect(()=>{
        pdtDetail && pdtDetail.forEach((data)=>(
            setSlelectOpt([
                ...selectOpt, {
                    count: data.cartCount,
                    product: data.product,
                    productOption : data.productOption,
                }
            ])
        ))
    },[pdtDetail])
  
  
    
 
    

    const goodOrder = ()=>{
        Swal.fire({
          title: '결제가 완료되었습니다 !',  
              text: `${user.name}님 안전하게 배송해드릴게요 `,
              icon: 'success'
        })
      }

    

    const [price, setPrice] = useState({
        fee: 0,
        newPrice: 0,
        oldPrice: 0
    })


    useEffect(()=>{
        let initialFee = 0
        let initialNewPrice = 0
        let initialOldPrice = 0
        pdtDetail && pdtDetail.forEach((data) =>
        (
            initialFee = initialFee + data.fee,
            initialNewPrice= initialNewPrice + (data.newPrice * data.cartCount),
            initialOldPrice= initialOldPrice + (data.oldPrice * data.cartCount)
        ))
        setPrice({...price,fee:initialFee,newPrice:initialNewPrice, oldPrice:initialOldPrice})
    
    },[pdtDetail])

    console.log(pdtDetail)
    console.log(price)

    /* 결제시 데이터 보내기 */
    const handleOrder = () =>{
        

        if(auth.auth === true){
            const token = auth.token;
            axios.post(`${Server.baseUrl}api/orders/add`,{
                    "ordersPrice":cartTotalPrice,
                    "ordersName":user.name,
                    "ordersPhone":user.phone,
                    "ordersEmail":user.email,
                    "deliveryDate":"2022-09-04",
                    "deliveryRequest":"배송 전 연락주세요",
                    "deliveryAddress":userDelivery.id,
                    "ordersProductListAddDtoList":
                        selectOpt
                    },
                    {
                        headers:
                        {
                        "Authorization":token
                        }
                    }
                  
            )
            .then((Response) =>{
                console.log(Response.data)
                goodOrder();
                navigate('/BuyComplete')
            })
            .catch((error)=>{
                alert("결제가 이루어지지 않았습니다.")
                console.log(error)
            })  
        }
    }
 
  

    return ( 
        <div id="m_wrap" className="reveal-left-wrap reveal-right-wrap mcom_wrap ssg v3 positionAbsolute"
            style={{backgroundColor: '#f5f5f5'}}>


            <header id="header" className="reveal-left-header reveal-right-header mnodr_head_fix">
                <div className="mcom_tit_renew ty_top">

                    <h2 className="mcom_tit_txt">결제하기</h2>


                    <div className="mcom_tit_lft">

                        <a href="" className="btn_back payTracking" data-pt-click="주문서|헤더|뒤로가기"><span
                                className="sp_ctg_icon ctg_icon_back"><span className="blind">이전
                                    페이지</span></span></a>
                    </div>

                    <div className="mcom_tit_rgt">
                        <div className="btn_cate btn_home"></div>
                    </div>
                </div>
            </header>


            {userDelivery ?
            <div id="m_container"
                className="reveal-left-contents reveal-right-contents mcom_container mnodr_container_step ty_headfix">
                <div id="m_content" className="m_content ty_bg">
                    <form id="orderForm" name="orderForm" method="post" action="/m/order/orderProcessNew.ssg">
                     


                        <div id="ordShppRcptInfoDiv">
                            <div name="divOrdStep" id="rcptInfoDiv_1" className="fullOrdArea" data-display="N"
                                data-title-name="수령위치 선택" style={{display: "none"}}>
                                <div className="mnodr_form_sec ty3">
                                    <h3 className="mnodr_form_tit2">택배배송 요청사항</h3>
                                    <ul className="mnodr_form_lst">
                                        <li className="mnodr_form_lst_itm">
                                            <span className="mnodr_rdo">
                                                <input type="radio" id="deliShppMemo_0_1" name="deliShppMemo_0"
                                                    className="blind payTracking"
                                                    data-pt-click="수령위치 선택|택배배송 요청사항|부재 시 경비실" data-commcdno="10" />
                                                <label><span className="mnodr_tx_label">부재 시 경비실에
                                                        맡겨주세요</span></label>
                                            </span>
                                        </li>

                                        <li className="mnodr_form_lst_itm">
                                            <span className="mnodr_rdo">
                                                <input type="radio" id="deliShppMemo_0_2" name="deliShppMemo_0"
                                                    className="blind payTracking"
                                                    data-pt-click="수령위치 선택|택배배송 요청사항|부재 시 문앞" data-commcdno="20" />
                                                <label><span className="mnodr_tx_label">부재 시 문앞에
                                                        놓아주세요</span></label>
                                            </span>
                                        </li>

                                        <li className="mnodr_form_lst_itm">
                                            <span className="mnodr_rdo">
                                                <input type="radio" id="deliShppMemo_0_3" name="deliShppMemo_0"
                                                    className="blind payTracking"
                                                    data-pt-click="수령위치 선택|택배배송 요청사항|직접 수령" data-commcdno="30" />
                                                <label><span className="mnodr_tx_label">직접
                                                        받겠습니다</span></label>
                                            </span>
                                        </li>

                                        <li className="mnodr_form_lst_itm">
                                            <span className="mnodr_rdo">
                                                <input type="radio" id="deliShppMemo_0_4" name="deliShppMemo_0"
                                                    className="blind payTracking"
                                                    data-pt-click="수령위치 선택|택배배송 요청사항|배송 전 연락" data-commcdno="40" />
                                                <label><span className="mnodr_tx_label">배송 전에
                                                        연락주세요</span></label>
                                            </span>
                                        </li>

                                        <li className="mnodr_form_lst_itm">
                                            <span className="mnodr_rdo">
                                                <input type="radio" id="deliShppMemo_0_5" name="deliShppMemo_0"
                                                    className="blind payTracking"
                                                    data-pt-click="수령위치 선택|택배배송 요청사항|직접 입력" data-commcdno="99" />
                                                <label>
                                                    <span className="mnodr_tx_label">직접 입력</span>
                                                </label>
                                                <span className="mnodr_inp_txtarea focus_visible ty_delete">
                                                    <label>
                                                        메세지를 입력해주세요
                                                    </label>
                                                    <textarea id="deliShppMemoTxtArea_0_5" cols="30" rows="2"
                                                        maxLength="50"></textarea>
                                                    <span className="mnodr_inp_txtcount">
                                                        <span className="mnodr_inp_current">0</span>/<span
                                                            className="mnodr_inp_total">50</span>
                                                    </span>
                                                </span>
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="mnodr_form_sec ty2">
                                    <div className="mnodr_form_cont">
                                        <span className="mnodr_chk ty_red">
                                            <input type="checkbox" id="saveOrdShpplocUserDefiYn_0"
                                                name="saveOrdShpplocUserDefiYn_0" className="blind payTracking"
                                                data-pt-click="수령위치 선택|수령위치 저장|다음 배송에도 계속 사용" />
                                            <label>
                                                <strong className="mnodr_tx_desc3 mnodr_tx_point">다음 배송에도 계속
                                                    사용할게요</strong>
                                            </label>
                                        </span>
                                        <p className="mnodr_tx_desc2">
                                            <span className="mnodr_tx_gray">편리한 배송을 위해 배송 목적에 한해
                                                사용하겠습니다</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="mnodr_toolbar2" style={{display : "block"}}>
                                    <div className="mnodr_btn_area">
                                        <button type="button" className="mnodr_btn ty_point ty_m payTracking"
                                            id="saveRcptInfo_1" data-pt-click="수령위치 선택|헤더/웹바|계속하기">
                                            <span className="mnodr_btn_tx" name="btnNextOrdStep">계속하기</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div id="ordFrebieItemInfoDiv">
                            <div id="frebieInfoDiv_1" name="divOrdStep" data-title-name="사은품 선택"
                                style={{display: "none"}}>
                                <input type="hidden" id="incFrebieItemYn_1" />
                            </div>
                        </div>
                        <div id="ordNotiInfoDiv">
                            <div name="divOrdStep" id="notiInfoDiv" data-title-name="주문자정보 변경"
                                style={{display: "none"}}>
                                <div className="mnodr_sec_heading">
                                    <h3 className="mnodr_tx_heading">
                                        어느 분에게<br />주문 알림을 보내드릴까요?
                                    </h3>
                                </div>

                                <div className="mnodr_form_sec ty3">
                                    <div className="mnodr_form_tit"><strong>주문자명</strong></div>
                                    <div className="mnodr_form_cont ty_space">
                                        <span className="mnodr_inp_txt">
                                            <input type="text" name="change.ord.ordpeNm" className="payTracking"
                                                data-pt-click="주문자정보 선택|정보입력|주문자명" placeholder="성명을 입력해주세요"
                                                maxLength="50" />
                                        </span>
                                    </div>
                                </div>
                                <div className="mnodr_form_sec ty2">
                                    <div className="mnodr_form_tit">
                                        <strong>휴대전화번호</strong>
                                    </div>
                                    <div className="mnodr_form_cont ty_space">
                                        <input type="hidden" id="change.mbrAuthYn" />
                                        <div className="mnodr_inp_row_grp">
                                            <span className="mnodr_inp_txt">
                                                <input type="tel" name="change.ord.ordpeHpsno" pattern="[0-9]*"
                                                    maxLength="3" title="휴대폰 번호 첫자리" />
                                            </span>
                                            <span className="mnodr_inp_txt">
                                                <input type="tel" name="change.ord.ordpeHpeno" pattern="[0-9]*"
                                                    maxLength="4" title="휴대폰 번호 가운데 자리" className="payTracking"
                                                    data-pt-click="주문자정보 선택|정보입력|휴대전화번호" />
                                            </span>
                                            <span className="mnodr_inp_txt">
                                                <input type="tel" name="change.ord.ordpeHplno" pattern="[0-9]*"
                                                    maxLength="4" title="휴대폰 번호 마지막 자리" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mnodr_form_sec ty2">
                                    <div className="mnodr_form_tit">
                                        <strong>이메일주소</strong>
                                    </div>
                                    <div className="mnodr_form_cont ty_space">
                                        <span className="mnodr_inp_txt">
                                            <input type="text" id="change.email" name="change.ord.ordpeEmail"
                                                className="payTracking" data-pt-click="주문자정보 선택|정보입력|이메일주소"
                                                placeholder="예) email@ssg.com" maxLength="100" />
                                        </span>
                                    </div>
                                </div>

                                <div className="mnodr_form_sec ty2">
                                    <div className="mnodr_form_tit">
                                        <strong>품절시 환불</strong>
                                    </div>
                                    <div className="mnodr_form_cont ty_space">
                                        <ul className="mnodr_form_lst">
                                            <li>
                                                <span className="mnodr_rdo">
                                                    <input type="radio" id="change.rdoRefund_10"
                                                        name="change.ord.rfdMthdCd" className="blind payTracking"
                                                        data-pt-click="주문자정보 변경|정보입력|품절시 환불_주문시 결제수단" />
                                                    <label>
                                                        <span className="mnodr_tx_label rfdMthdTxt">주문시 결제수단으로 환불</span>
                                                    </label>
                                                </span>
                                            </li>
                                            <li>
                                                <span className="mnodr_rdo">
                                                    <input type="radio" id="change.rdoRefund_20"
                                                        name="change.ord.rfdMthdCd" className="blind payTracking"
                                                        data-pt-click="주문자정보 변경|정보입력|품절시 환불_SSGMONEY환불" />
                                                    <label>
                                                        <span className="mnodr_tx_label rfdMthdTxt">SSG MONEY로 환불</span>
                                                    </label>
                                                    <button type="button"
                                                        className="mnodr_btn_info_detail modal-alert-open payTracking"
                                                        data-pt-click="주문자정보 변경|정보입력|환불_SSGMONEY환불_도움말"
                                                        data-layer-target="#_layerRefundInfo">
                                                        <i className="mnodr_ic ic_qmark">
                                                            <span className="blind">SSG MONEY 환불안내 팝업</span>
                                                        </i>
                                                    </button>
                                                    <div className="mnodr_modal ty_alert" role="dialog"
                                                        aria-hidden="true" id="_layerRefundInfo"
                                                        style={{height:'1940px'}}>

                                                        <div className="mnodr_modal_wrap" role="document"
                                                            style={{left:'15px', right:'15px' , top:'239px'}}>
                                                            <div className="mnodr_modal_cont">
                                                                <h1 className="mnodr_tx_tit">
                                                                    SSG MONEY 환불 안내
                                                                </h1>
                                                                <p className="mnodr_tx_desc mnodr_tx_gray">
                                                                    SSG MONEY로 환불받기를 선택하셔도 아래의
                                                                    경우 주문시 결제수단으로 환불됩니다.
                                                                </p>
                                                                <ul className="mnodr_bullst ty2 ty_grayline">
                                                                    <li>
                                                                        <span className="mnodr_tx_desc">품절된 상품의 금액이 5만원을
                                                                            넘는
                                                                            경우</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="mnodr_tx_desc">해외발급신용카드, 법인카드,
                                                                            SSG
                                                                            VOUCHER로 결제한 경우</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="mnodr_tx_desc">비회원인 경우</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <footer className="mnodr_modal_foot">
                                                                <div className="mnodr_btn_area">
                                                                    <button
                                                                        className="mnodr_btn ty_gray ty_sm modal-close-btn"
                                                                        type="button">
                                                                        닫기
                                                                    </button>
                                                                </div>
                                                            </footer>
                                                        </div>
                                                    </div>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>



                                <div className="mnodr_toolbar2" style={{display : "block"}}>
                                    <div className="mnodr_btn_area">
                                        <button type="button" className="mnodr_btn ty_point ty_m payTracking"
                                            data-pt-click="주문자정보 변경|웹바|변경하기" id="saveOrdNotiInfo">
                                            <span className="mnodr_btn_tx" name="btnNextOrdStep">계속하기</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="divOrdInflo" style={{display: "none"}}></div>
                        <div id="divSecCpnArea" name="divOrdStep" data-title-name="사용가능 쿠폰 선택"
                            style={{display: "none"}}>
                            <div className="mnodr_coupon">
                                <div className="mnodr_form_sec">
                                    <div className="mnodr_form_cont">
                                        <span className="mnodr_chk">
                                            <input type="checkbox" id="_mnodr_modal_max_discount"
                                                name="discountRecommendCheckbox"
                                                className="blind discountRecommendCheckbox payTracking"
                                                data-pt-click="사용가능쿠폰선택|상단 영역|최대 할인혜택 적용" />
                                            <label>
                                                <span className="mnodr_tx_desc3">최대 할인 쿠폰을 추천해주세요</span>
                                            </label>
                                        </span>
                                    </div>
                                    <div className="mnodr_coupon_notice ssgpaySecCpnGuideArea"
                                        style={{display: "none"}}>
                                        <p className="mnodr_tx_desc2 mnodr_tx_white">
                                            <strong>SSGPAY 전용쿠폰은 SSGPAY로 결제 시 자동
                                                적용됩니다.</strong>
                                        </p>
                                    </div>
                                </div>
                                <div className="mnodr_coupon_sec">
                                    <ul className="mnodr_coupon_lst">

                                    </ul>
                                </div>
                            </div>
                            <div className="mnodr_toolbar2">
                                <div className="mnodr_btn_area">
                                    <button type="button" id="secCpnConfirmButton"
                                        className="mnodr_btn ty_lg ty_point payTracking"
                                        data-pt-click="사용가능쿠폰선택|웹바|할인금액 적용하기">
                                        <span className="mnodr_btn_tx">할인금액
                                            <em className="ssg_price dispItemOrdCpnPromTotAmt">0</em><span
                                                className="ssg_tx">원</span> 적용하기</span>
                                    </button>
                                    <button type="button" id="mnodr_btn_refresh1" name="secCpnResetButton"
                                        className="mnodr_btn ty_line ty_lg mnodr_btn_refresh payTracking"
                                        data-pt-click="사용가능쿠폰선택|쿠폰|새로고침">
                                        <i className="mnodr_ic ic_refresh"><span className="blind">최대할인 초기화</span></i>
                                    </button>
                                </div>
                            </div>

                        </div>
                        <div id="divShppcstCpnArea" name="divOrdStep" data-title-name="배송비쿠폰 선택"
                            style={{display: "none"}}>
                            <div className="mnodr_coupon">
                                <div className="mnodr_coupon_sec">
                                    <ul className="mnodr_coupon_lst">

                                        <li className="mnodr_coupon_unit ssgcomCrdShppcstCpnGuideArea"
                                            style={{display: "none"}}>
                                            <div className="mnodr_coupon_cont">
                                                <p className="mnodr_coupon_name ty_size">
                                                    <strong>SSG.COM 카드<br />배송비 쿠폰</strong>
                                                </p>
                                                <p className="mnodr_coupon_tx_red">
                                                    SSG.COM카드 선택시 자동 적용됩니다.
                                                </p>
                                            </div>
                                            <input type="checkbox" id="_coupon_ssgcomcard" name="_coupon_ssgcomcard"
                                                className="blind" disabled="disabled" />
                                            <label>
                                                <span className="mnodr_coupon_chk_ico"><span
                                                        className="blind">선택</span></span>
                                                <span className="mnodr_coupon_chk_tx"><span
                                                        className="mnodr_coupon_ssgcomcard"><span
                                                            className="blind">SSG.COM</span>전용쿠폰</span></span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mnodr_toolbar2">
                                <div className="mnodr_btn_area">
                                    <button type="button" id="shppcstCpnConfirmButton"
                                        className="mnodr_btn ty_lg ty_point payTracking"
                                        data-pt-click="배송비쿠폰 선택|웹바|할인금액 적용하기">
                                        <span className="mnodr_btn_tx">할인금액
                                            <em className="ssg_price dispOrdCstTotAmtWithoutCrdDc">0</em><span
                                                className="ssg_tx">원</span> 적용하기</span>
                                    </button>
                                    <button type="button" id="mnodr_btn_refresh2" name="shppcstCpnResetButton"
                                        className="mnodr_btn ty_line ty_lg mnodr_btn_refresh payTracking"
                                        data-pt-click="배송비쿠폰 선택|웹바|새로고침">
                                        <i className="mnodr_ic ic_refresh"><span className="blind">최대할인 초기화</span></i>
                                    </button>
                                </div>
                            </div>
                        </div>



                        <div id="divOrdArea">
                            <ul className="mnodr_article_list" id="ordPageShpplocInfoDiv_1">

                                <li className="mnodr_article_item ordPageShpplocArea fullOrdArea">
                                    <article className="mnodr_article mnodr_delivery_infos">
                                        <div className="mnodr_article_head">
                                            <div className="mnodr_article_headlt">
                                                <h2 className="mnodr_tx_tit">배송지 : 벽산</h2>
                                            </div>
                                            <div className="mnodr_article_headrt">
                                                <button type="button"
                                                    className="mnodr_btn ty_grayline ty_xxs payTracking"
                                                    data-pt-click="주문서|배송지|변경" name="btnShowTgtDiv"
                                                    data-target-div="shpplocInfoDiv_1" onClick={handleAddress}>
                                                    변경
                                                </button>
                                            </div>
                                        </div>
                                        <div className="mnodr_article_cont ty_pull">
                                            <div className="mnodr_form_sec">
                                                <p className="mnodr_tx_desc">
                                                    [{userDelivery.zipCode}] {userDelivery.address}
                                                </p>
                                                <div className="mnodr_tx_wrap ty_space">
                                                    <span className="mnodr_tx_size2 mnodr_tx_gray">
                                                        <span id="dispRcptpeNm_0">{user.name}</span>
                                                        /
                                                        <span id="dispHpno_0">{user.phone}</span>
                                                    </span>
                                                    <span className="mnodr_chk">
                                                        <input type="checkbox" id="relaxNoUseYn_0"
                                                            name="shpploc[0].relaxNoUseYn" className="blind payTracking"
                                                            data-pt-click="|배송지|안심번호 사용" />
                                                        <label>
                                                            <span className="mnodr_chk_tx">안심번호 사용</span>
                                                        </label>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </li>
                            </ul>


                            <article className="mnodr_article" id="discountBenefitArticle">
                                <ul className="mnodr_article_cont">
                                    <li className="mnodr_article_item">

                                        <div className="mnodr_article_head">
                                            <div className="mnodr_article_headlt">
                                                <h2 className="mnodr_tx_tit">할인혜택</h2>
                                            </div>
                                            <input type="hidden" id="totBsellAmt" />
                                        </div>
                                        <div className="mnodr_article_cont">
                                            <div className="mnodr_discount_sec ty_space discountBenefitDtlArea">
                                                <dl className="mnodr_priceitem fullOrdArea">
                                                    <dt>
                                                        <span className="mnodr_priceitem_stit">결제할인 (쿠폰 0장 보유)</span>
                                                    </dt>
                                                    <dd>
                                                        <span className="mnodr_tx_primary">- <em
                                                                className="ssg_price">0</em><span
                                                                className="ssg_tx">원</span></span>
                                                    </dd>
                                                </dl>

                                                <ul className="mnodr_paydetail_sublst fullOrdArea cpnApplyDtlArea"
                                                    style={{display: "none"}}></ul>

                                                <dl className="mnodr_priceitem cardIssueCouponArea fullOrdArea"
                                                    data-display="Y">
                                                    <dt>
                                                        <span className="mnodr_priceitem_stit">카드 첫결제 혜택</span>
                                                    </dt>
                                                    <dd>
                                                        <span className="mnodr_tx_primary">-
                                                            <em
                                                                className="ssg_price cardIssueCouponDiscountAmt">0</em><span
                                                                className="ssg_tx">원</span></span>
                                                    </dd>
                                                </dl>
                                                <ul className="mnodr_bene_sublst cardIssueCouponArea fullOrdArea"
                                                    data-display="Y">
                                                    <li className="ssgcomSamsungCardIssueCouponArea fullOrdArea"
                                                        data-display="Y">
                                                        <span className="mnodr_bene_chk">
                                                            <input type="checkbox"
                                                                id="ssgcomSamsungCardIssueCouponCheckbox"
                                                                name="cardIssueCouponCheckbox"
                                                                className="blind payTracking" data-amt="30000"
                                                                data-pt-click="주문서|할인혜택|SSG.COM삼성카드30000원 할인받기" />
                                                            <label>
                                                                <span className="mnodr_bene_bg"></span>
                                                                <span className="mnodr_bene_tx">
                                                                    <strong>30,000원 할인받기</strong>
                                                                    SSG.COM 삼성카드</span>
                                                            </label>
                                                        </span>
                                                    </li>
                                                    <li className="ssgcomCardEd2IssueCouponArea fullOrdArea"
                                                        data-display="Y">
                                                        <span className="mnodr_bene_chk">
                                                            <input type="checkbox" id="ssgcomCardEd2IssueCouponCheckbox"
                                                                name="cardIssueCouponCheckbox"
                                                                className="blind payTracking" data-amt="10000"
                                                                data-pt-click="주문서|할인혜택|SSG.COM카드Edition210000원 할인받기" />
                                                            <label>
                                                                <span className="mnodr_bene_bg"></span>
                                                                <span className="mnodr_bene_tx">
                                                                    <strong>
                                                                        10,000원 할인받고<br />
                                                                        매월 스마일클럽 제공
                                                                    </strong>
                                                                    SSG.COM카드 Edition2</span>
                                                            </label>
                                                        </span>
                                                    </li>
                                                </ul>


                                                <div className="fullOrdArea">
                                                    <p className="mnodr_coupon_desc mnodr_tx_size2 ssgpaySecCpnGuideArea"
                                                        style={{display: "none"}}>
                                                        SSGPAY전용쿠폰은 SSG<span className="mnodr_tx_point">PAY</span>로 결제 시
                                                        자동
                                                        적용됩니다.
                                                    </p>
                                                    <p className="mnodr_coupon_desc mnodr_tx_size2 ssgcomCrdShppcstCpnGuideArea"
                                                        style={{display: "none"}}>
                                                        <span className="mnodr_tx_point">SSG.COM카드 배송비 쿠폰은 해당 카드 선택시 자동
                                                            적용됩니다.</span>
                                                    </p>
                                                </div>
                                                <dl className="mnodr_priceitem ty_ellipsis quickOrdDcDtlArea quickOrdArea"
                                                    style={{display: "none"}}>
                                                    <dt>
                                                        <span className="mnodr_priceitem_stit">결제할인 : 쿠폰 0장</span>
                                                    </dt>
                                                </dl>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <input type="hidden" id="secItemProm_1" name="secItemPromApl[0]" />
                                <input type="hidden" name="secOrdPromApl" className="blind secOrdPromApl" />
                            </article>

                            <article id="pointArticle" className="mnodr_article mnodr_acdo_toggle fullOrdArea">
                                <div className="mnodr_article_head mnodr_acdo_btn payTracking"
                                    data-pt-click="주문서|포인트|펼침" id="pointToggleButton">
                                    <div className="mnodr_article_headlt">
                                        <h2 className="mnodr_tx_tit">
                                            포인트
                                            <span className="totPointAmtArea">
                                                : <span id="totPointAmt">227</span>원 보유</span>
                                        </h2>
                                    </div>
                                    <div className="mnodr_article_headrt">
                                        <button type="button" className="mnodr_toggle_btn">
                                            <span className="blind">포인트사용 보기</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="mnodr_article_head_subtx crdDcApplyGuideArea" style={{display: "none"}}>
                                    <p className="mnodr_tx_desc">
                                        <span className="mnodr_tx_gray">카드할인혜택이 적용되어 포인트 사용이 불가합니다.</span>
                                    </p>
                                </div>
                                <div className="mnodr_article_head_subtx mnodr_pt_desc">
                                    <span className="mnodr_tx_desc mnodr_tx_gray">SSG MONEY, 신세계포인트 외 제휴포인트</span>
                                </div>
                                <div className="mnodr_article_cont mnodr_acdo_cont ty_toggle">
                                    <div className="mnodr_point_sec">
                                        <div className="mnodr_form_sec ty10 pointUseDivArea">
                                            <p className="mnodr_tx_desc">
                                                SSG MONEY
                                                <span id="ssgMoneyBaseAmt"> : 0원</span>
                                            </p>
                                            <div className="mnodr_form_cont">
                                                <div className="mnodr_inp_btn_grp">
                                                    <span className="mnodr_inp_txt">
                                                        <input type="number" pattern="[0-9]*" inputMode="numeric"
                                                            id="ssgMoneyUseInput" name="paymtMeans[1].amt"
                                                            placeholder="0원" className="ty_txt_right pointUseInput" />
                                                    </span>
                                                    <button type="button" id="ssgMoneyUseAllButton"
                                                        className="mnodr_btn mnodr_inp_btn pointUseAllButton payTracking"
                                                        data-pt-click="주문서|포인트|SSG MONEY_전액사용">
                                                        <span className="mnodr_btn_tx">전액사용</span>
                                                    </button>
                                                </div>
                                                <ul className="mnodr_bullst ty1">
                                                    <li className="ssgMoneyAuthGuideArea" style={{display: "none"}}>
                                                        10만원 초과 사용시 SSGPAY에 가입/인증이
                                                        필요합니다.
                                                    </li>
                                                    <li className="ssgMoneyMaxValGuideArea" style={{display: "none"}}>
                                                        간편가입회원은 최대 10만원까지 이용가능합니다.
                                                    </li>
                                                    <li className="ssgMoneyImpossibleGuideArea"
                                                        style={{display: "none"}}>
                                                        ※ 안정적인 서비스 제공을 위해 시스템 점검중입니다.
                                                        <span className="ssgMoneyImpossibleDtsArea">06/01 10:00</span>까지
                                                        SSG
                                                        MONEY 사용이 잠시 불가하니
                                                        양해부탁드립니다.
                                                    </li>
                                                </ul>
                                            </div>
                                            <input type="hidden" name="paymtMeans[1].paymtMeansCd" />
                                        </div>
                                        <div className="mnodr_form_sec ty10 pointUseDivArea ssgVoucherArea"
                                            style={{display: "none"}}>
                                            <p className="mnodr_tx_desc">
                                                SSG VOUCHER<span id="ssgVoucherBaseAmt"> : 0원</span>
                                            </p>
                                            <div className="mnodr_form_cont">
                                                <div className="mnodr_inp_btn_grp">
                                                    <span className="mnodr_inp_txt">
                                                        <input type="number" pattern="[0-9]*" inputMode="numeric"
                                                            id="ssgVoucherUseInput" name="paymtMeans[7].amt"
                                                            placeholder="0원" className="ty_txt_right pointUseInput" />
                                                    </span>
                                                    <button type="button" id="ssgVoucherUseAllButton"
                                                        className="mnodr_btn mnodr_inp_btn pointUseAllButton payTracking"
                                                        data-pt-click="주문서|포인트|SSG VOUCHER_전액사용">
                                                        <span className="mnodr_btn_tx">전액사용</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <input type="hidden" name="paymtMeans[7].paymtMeansCd" />
                                        </div>
                                        <div className="mnodr_form_sec ty10 pointUseDivArea">
                                            <p className="mnodr_tx_desc">
                                                신세계포인트<span id="shinsegaePointBaseAmt">
                                                    : 227원</span>
                                            </p>
                                            <div className="mnodr_form_cont">
                                                <div className="mnodr_inp_btn_grp">
                                                    <span className="mnodr_inp_txt">
                                                        <input type="number" pattern="[0-9]*" inputMode="numeric"
                                                            id="shinsegaePointUseInput" name="paymtMeans[2].amt"
                                                            placeholder="0원" className="ty_txt_right pointUseInput"
                                                            disabled="" />
                                                    </span>
                                                    <button type="button" id="shinsegaePointSearchButton"
                                                        className="mnodr_btn mnodr_inp_btn modal-alert-open"
                                                        data-layer-target="#_layerAlertPointCard"
                                                        data-no-click-outside="">
                                                        <span className="mnodr_btn_tx">사용</span>
                                                    </button>
                                                    <button type="button" id="shinsegaePointUseAllButton"
                                                        className="mnodr_btn mnodr_inp_btn pointUseAllButton payTracking"
                                                        data-pt-click="주문서|포인트|신세계포인트_전액사용" style={{display: "none"}}>
                                                        <span className="mnodr_btn_tx">전액사용</span>
                                                    </button>
                                                </div>
                                                <ul className="mnodr_bullst ty1">
                                                    <li className="shinsegaePointImpossibleGuideArea"
                                                        style={{display: "none"}}>
                                                        ※ 안정적인 서비스 제공을 위해 시스템 점검중입니다.
                                                        <span className="shinseagePointImpossibleDtsArea">06/01
                                                            10:00</span>까지 신세계포인트 사용이 잠시 불가하니
                                                        양해부탁드립니다.
                                                    </li>
                                                </ul>
                                            </div>
                                            <input type="hidden" name="paymtMeans[2].paymtMeansCd" />
                                        </div>
                                        <div className="mnodr_form_sec ty10 pointUseDivArea">
                                            <p className="mnodr_tx_desc">
                                                OK 캐쉬백<span id="okCashBagBaseAmt"></span>
                                            </p>
                                            <div className="mnodr_form_cont">
                                                <div className="mnodr_inp_btn_grp">
                                                    <span className="mnodr_inp_txt">
                                                        <input type="number" pattern="[0-9]*" inputMode="numeric"
                                                            id="okCashBagUseInput" name="paymtMeans[4].amt"
                                                            placeholder="0원" className="ty_txt_right pointUseInput"
                                                            disabled="" />
                                                    </span>
                                                    <button type="button" id="okCashBagSearchButton"
                                                        className="mnodr_btn mnodr_inp_btn modal-alert-open payTracking"
                                                        data-pt-click="주문서|포인트|OK캐쉬백_조회"
                                                        data-layer-target="#_layerPointokCashbag">
                                                        <span className="mnodr_btn_tx">조회</span>
                                                    </button>
                                                    <button type="button" id="okCashBagUseAllButton"
                                                        className="mnodr_btn mnodr_inp_btn pointUseAllButton"
                                                        style={{display: "none"}}>
                                                        <span className="mnodr_btn_tx">전액사용</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <input type="hidden" name="paymtMeans[4].paymtMeansCd" />
                                        </div>
                                        <div className="mnodr_form_sec ty10 pointUseDivArea">
                                            <p className="mnodr_tx_desc">
                                                PAYCO포인트<span id="paycoPointBaseAmt"></span>
                                            </p>
                                            <div className="mnodr_form_cont">
                                                <div className="mnodr_inp_btn_grp">
                                                    <span className="mnodr_inp_txt">
                                                        <input type="number" pattern="[0-9]*" inputMode="numeric"
                                                            id="paycoPointUseInput" name="paymtMeans[5].amt"
                                                            placeholder="0원" className="ty_txt_right pointUseInput"
                                                            disabled="" />
                                                    </span>
                                                    <button type="button" id="paycoPointSearchButton"
                                                        className="mnodr_btn mnodr_inp_btn pointSearchButton payTracking"
                                                        data-pt-click="주문서|포인트|PAYCO포인트_조회">
                                                        <span className="mnodr_btn_tx">조회</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <input type="hidden" name="paymtMeans[5].paymtMeansCd" />
                                        </div>
                                        <div className="mnodr_form_sec ty3 pointUseDivArea">
                                            <p className="mnodr_tx_desc">
                                                U+ 라이프콕<span id="uplusPointBaseAmt"></span>
                                            </p>
                                            <div className="mnodr_form_cont">
                                                <div className="mnodr_inp_btn_grp">
                                                    <span className="mnodr_inp_txt">
                                                        <input type="number" pattern="[0-9]*" inputMode="numeric"
                                                            id="uplusPointUseInput" name="paymtMeans[6].amt"
                                                            placeholder="0원" className="ty_txt_right pointUseInput"
                                                            disabled="" />
                                                    </span>
                                                    <button type="button" id="uplusPointSearchButton"
                                                        className="mnodr_btn mnodr_inp_btn pointSearchButton payTracking"
                                                        data-pt-click="주문서|포인트|U+라이프콕_조회">
                                                        <span className="mnodr_btn_tx">조회</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <input type="hidden" name="paymtMeans[6].paymtMeansCd" />
                                        </div>
                                        <div className="mnodr_article_flex">
                                            <button type="button" className="mnodr_charge_btn payTracking"
                                                data-pt-click="주문서|포인트|신세계상품권_SSGMONEY_충전" id="ssgMoneyConvertButton">
                                                <span className="mnodr_tx_desc2"><strong>신세계상품권으로 SSG MONEY를 충전할 수
                                                        있어요.</strong></span>
                                                <span className="mnodr_ic_arr"></span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="mnodr_point_sec">
                                        <div className="mnodr_form_sec ty3 mnodr_acdo_toggle ty_depth2">
                                            <div className="mnodr_form_cont">
                                                <span className="mnodr_chk">
                                                    <input type="checkbox" id="shinsegaePointCardSavingCheckbox"
                                                        className="blind payTracking pointSavingCheckbox"
                                                        data-pt-click="주문서|포인트|신세계포인트 카드 적립_체크" />
                                                    <label>
                                                        <span className="mnodr_tx_desc">신세계포인트 카드 적립</span>
                                                    </label>
                                                    <button type="button" id="shinsegaePointToggleButton"
                                                        className="mnodr_acdo_btn mnodr_arrow_btn payTracking"
                                                        data-pt-click="주문서|포인트|신세계포인트 카드 적립_펼침">
                                                        <span className="blind">더보기</span>
                                                    </button>
                                                </span>
                                                <div className="mnodr_acdo_cont ty_toggle ty_depth2">
                                                    <div className="mnodr_point_dtl">
                                                        <p className="mnodr_tx_desc">카드번호</p>
                                                        <span className="mnodr_inp_txt">
                                                            <input type="number" pattern="[0-9]*" inputMode="numeric"
                                                                id="shinsegaePointCardNoInput"
                                                                placeholder="- 를 제외한 숫자만 입력해 주세요."
                                                                className="pointSavingNoInput" maxLength="16" />
                                                        </span>
                                                        <ul className="mnodr_bullst ty5">
                                                            <li>
                                                                신세계·이마트 제휴카드 고객은 해당 카드로
                                                                결제하셔야 신세계포인트가 0.7% 적립됩니다.
                                                                (단, 신세계씨티카드는 0.2%, 이마트KB/이마트SC
                                                                /신세계SC 카드는 0.1% 적립)
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>


                            {/* 결제정보 */}
                            <article className="mnodr_article fullOrdArea" id="paymtMthdArticle">
                                <div className="mnodr_article_head">
                                    <div className="mnodr_article_headlt">
                                        <h2 className="mnodr_tx_tit">결제방법</h2>
                                        <div className="mnodr_article_headbubble" style={{display: "block"}}>
                                            <p>
                                                주문더하기는 이전 주문과 같은 카드로만 결제할 수
                                                있어요
                                            </p>
                                        </div>
                                        <span className="crdDcccc"></span>
                                    </div>
                                </div>
                                <input type="hidden" id="paymtMeansCd" name="paymtMeansCd" />
                                <div className="mnodr_article_cont ty_pull">


                                    <div className="mnodr_ssgpay_acdowrap" id="_mnodr_pay_module">

                                        <div className="mnodr_ssgpay_acdo mnodr_ssgpay_acdotoggle on">
                                            <input type="radio" id="_mnodrpay_ssgpay" name="_mnodrpay_group"
                                                className="mnodr_ssgpay_acdotogglerdo blind payTracking"
                                                data-pt-click="주문서|결제방법_SSGPAY카드|선택" data-group-name="ssgpay" />
                                            <label aria-expanded="false" aria-controls="_mnodrpay_ssgpay_cont"
                                                id="_mnodrpay_ssgpay_toggle" className="mnodr_ssgpay_acdotogglebtn"
                                                aria-selected="true">
                                                <div className="mnodr_ssgpay_acdohead">
                                                    <span className="mnodr_ssgpay_acdocol">
                                                        <h3 className="mnodr_ssgpay_acdoheadtit">
                                                            <span className="mnodr_ssgpay_acdoheadtx">
                                                                <span className="mnodr_tx_ssgpay"><span
                                                                        className="blind">SSGPAY</span></span>
                                                                <span className="mnodr_tx_ssgpay_desc">카드</span>
                                                            </span>
                                                            <span className="mnodr_ssgpay_acdoheadtag mnodr_tx_point"
                                                                id="ssgpayWebPaymtSpcEventText"
                                                                style={{display: "none"}}>0원
                                                                추가할인</span>
                                                        </h3>
                                                    </span>
                                                </div>
                                            </label>
                                            <div className="mnodr_ssgpay_acdocont" id="_mnodr_ssgpay_cont"
                                                aria-labelledby="_mnodrpay_ssgpay_toggle">

                                                <div className="mnodr_ssgpay_slider swiper_box_wrapper ssgpayWebExpDiv ssgpayWebExpDiv_0000 ssgpayWebExpDiv_1002 ssgpayWebExpDiv_1012 ssgpayWebExpDiv_2202"
                                                    id="_mnodr_ssgpay_slider">
                                                    <div className="swiper_box">
                                                        <div
                                                            className="swiper-container swiper-container-horizontal swiper-container-android">
                                                            <div className="swiper-wrapper"
                                                                id="ssgpayWebPaymtCardSlider">
                                                                <div className="swiper-slide swiper-slide-active"
                                                                    style={{marginRight:'20px'}}>
                                                                    <input type="radio" name="_mnodr_ssgpay_card"
                                                                        id="_mnodr_ssgpay_card_default"
                                                                        className="mnodr_ssgpay_cardrdo"
                                                                        data-pt-change="주문서|결제방법_SSGPAY카드|카드넘김" /><a
                                                                        href=""
                                                                        className="mnodr_ssgpay_card ty_add modal-fix-open"
                                                                        id="ssgpayWebPaymtCrdRegisterAnchor"
                                                                        data-pt-click="주문서|결제방법_SSGPAY카드|카드추가하기">
                                                                        <div className="mnodr_ssgpay_cardimg">
                                                                            <div className="mnodr_ssgpay_cardnone">
                                                                                <span className="mnodr_tx_desc">카드
                                                                                    추가하기</span>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="mnodr_article_headbubble ty_center">
                                                                            <p>
                                                                                카드를 등록하고 결제하신 분들은<br />청구할인을
                                                                                약 3배 더 받았어요
                                                                            </p>
                                                                        </div>
                                                                    </a>
                                                                    <div className="mnodr_ssgpay_carddetail">
                                                                        <div className="mnodr_form_sec"></div>
                                                                    </div>
                                                                </div>
                                                                <div className="swiper-slide swiper-slide-next"
                                                                    style={{marginRight:'20px'}}>
                                                                    <input type="radio" name="_mnodr_ssgpay_card"
                                                                        id="_mnodr_ssgpay_card_dummy_76"
                                                                        className="mnodr_ssgpay_cardrdo" data-crdcd="76"
                                                                        data-pt-change="주문서|결제방법_SSGPAY카드|카드넘김" />
                                                                    <div className="mnodr_ssgpay_carditem">
                                                                        <label className="blind">SSG.COM카드 Edition2
                                                                            선택하기</label>
                                                                        <div className="mnodr_ssgpay_card">
                                                                            <div className="mnodr_ssgpay_cardimg"
                                                                                style={{backgroundColor:'#fc336d'}}>
                                                                                <span
                                                                                    className="mnodr_ssgpay_cardbi"><img
                                                                                        src="https://sui.ssgcdn.com/ui/m_ssg/img/order/card/ordercard-76@2x.png"
                                                                                        alt="카드BI"
                                                                                        aria-hidden="true" /></span>
                                                                                <div className="mnodr_ssgpay_firstbene">
                                                                                    <strong
                                                                                        className="mnodr_ssgpay_firstbene_tit">매월
                                                                                        스마일클럽 제공</strong><span
                                                                                        className="mnodr_ssgpay_firstbene_tx">+
                                                                                        쓱/새벽배송 12% 적립</span><button
                                                                                        type="button"
                                                                                        className="mnodr_ssgpay_btn_firstbene"
                                                                                        name="ssgcomCardIssueButton"
                                                                                        data-crdcd="76"
                                                                                        data-pt-click="주문서|결제방법_SSGPAY카드|SSG.COM카드Edition2_할인받기">
                                                                                        <span>혜택 받기</span>
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="mnodr_ssgpay_carddetail">
                                                                            <div className="mnodr_form_sec"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="swiper-slide"
                                                                    style={{marginRight:'20px'}}>
                                                                    <input type="radio" name="_mnodr_ssgpay_card"
                                                                        id="_mnodr_ssgpay_card_dummy_75"
                                                                        className="mnodr_ssgpay_cardrdo" data-crdcd="75"
                                                                        data-pt-change="주문서|결제방법_SSGPAY카드|카드넘김" />
                                                                    <div className="mnodr_ssgpay_carditem">
                                                                        <label className="blind">SSG.COM 삼성카드
                                                                            선택하기</label>
                                                                        <div className="mnodr_ssgpay_card">
                                                                            <div className="mnodr_ssgpay_cardimg"
                                                                                style={{backgroundColor:"#7e8083"}}>
                                                                                <span
                                                                                    className="mnodr_ssgpay_cardbi"><img
                                                                                        src="https://sui.ssgcdn.com/ui/m_ssg/img/order/card/ordercard-06@2x.png"
                                                                                        alt="카드BI"
                                                                                        aria-hidden="true" /></span>
                                                                                <div className="mnodr_ssgpay_firstbene">
                                                                                    <strong
                                                                                        className="mnodr_ssgpay_firstbene_tit">카드
                                                                                        혜택 바로 적용</strong><span
                                                                                        className="mnodr_ssgpay_firstbene_tx">SSGPAY
                                                                                        등록 시 즉시 사용
                                                                                        가능</span><button type="button"
                                                                                        className="mnodr_ssgpay_btn_firstbene"
                                                                                        name="ssgcomCardIssueButton"
                                                                                        data-crdcd="75"
                                                                                        data-pt-click="주문서|결제방법_SSGPAY카드|SSG.COM삼성카드_할인받기">
                                                                                        <span>혜택 받기</span>
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="mnodr_ssgpay_carddetail">
                                                                            <div className="mnodr_form_sec"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mnodr_ssgpay_errorbx ssgpayWebExpDiv ssgpayWebExpDiv_2000"
                                                    style={{display: "none"}}>
                                                    <div className="mnodr_ssgpay_errorcontainer">
                                                        <div className="mnodr_ssgpay_errormsg">
                                                            <p className="mnodr_tx_desc">
                                                                <strong>SSGPAY 가입여부 및 계정상태를<br />확인해주세요</strong>
                                                            </p>
                                                        </div>
                                                        <div className="mnodr_ssgpay_btnarea">
                                                            <button type="button" name="ssgpayWebPaymtCertButton"
                                                                className="mnodr_ssgpay_btn ty_blkline payTracking"
                                                                data-pt-click="주문서|결제방법_SSGPAY카드|SSGPAY가입하기">
                                                                <span>본인인증하여 회원상태 확인</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mnodr_ssgpay_errorbx ssgpayWebExpDiv ssgpayWebExpDiv_3000"
                                                    style={{display: "none"}}>
                                                    <div className="mnodr_ssgpay_errorcontainer">
                                                        <div className="mnodr_ssgpay_errormsg">
                                                            <p className="mnodr_tx_desc">
                                                                <strong>일시적 오류가 발생하였습니다.</strong>
                                                            </p>
                                                            <p className="mnodr_tx_desc2">
                                                                문제가 지속될 경우 SSG.COM 고객센터로
                                                                문의바랍니다.
                                                            </p>
                                                        </div>
                                                        <div className="mnodr_ssgpay_btnarea">
                                                            <button type="button" name="ssgpayWebPaymtRetryButton"
                                                                className="mnodr_ssgpay_btn ty_blkline">
                                                                <span>다시시도</span>
                                                            </button>
                                                            <button type="button" name="ssgpayWebPaymtAppButton"
                                                                className="mnodr_ssgpay_btn ty_blkline">
                                                                <span>SSGPAY 앱에서 결제</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mnodr_ssgpay_errorbx ssgpayWebExpDiv ssgpayWebExpDiv_9001"
                                                    style={{display: "none"}}>
                                                    <div className="mnodr_ssgpay_errorcontainer">
                                                        <div className="mnodr_ssgpay_errormsg">
                                                            <p className="mnodr_tx_desc">
                                                                <strong>일시적 오류가 발생하였습니다.</strong>
                                                            </p>
                                                            <p className="mnodr_tx_desc2">
                                                                SSGPAY – SSG.COM 간 가입정보가 달라,<br />카드정보를
                                                                조회할 수 없습니다.
                                                            </p>
                                                        </div>
                                                        <div className="mnodr_ssgpay_btnarea">
                                                            <button type="button" name="ssgpayWebPaymtAppButton"
                                                                className="mnodr_ssgpay_btn ty_blkline">
                                                                <span>SSGPAY 앱에서 결제</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mnodr_ssgpay_errorbx ssgpayWebExpDiv ssgpayWebExpDiv_0000err"
                                                    style={{display: "none"}}>
                                                    <div className="mnodr_ssgpay_errorcontainer">
                                                        <div className="mnodr_ssgpay_errormsg">
                                                            <p className="mnodr_tx_desc">
                                                                <strong>주문더하기는<br />원주문과 동일한
                                                                    결제수단의<br />신용카드에 한하여 결제가
                                                                    가능합니다.</strong>
                                                            </p>
                                                            <p className="mnodr_tx_desc2 orordCardInfo"></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mnodr_ssgpay_errorbx ssgpayWebExpDiv ssgpayWebExpDiv_9999"
                                                    style={{display: "none"}}>
                                                    <div className="mnodr_ssgpay_errorcontainer">
                                                        <div className="mnodr_ssgpay_errormsg">
                                                            <p className="mnodr_tx_desc">
                                                                <strong>안정적인 서비스 제공을 위해 시스템
                                                                    점검중이니 양해 부탁드립니다.</strong>
                                                            </p>
                                                            <p className="mnodr_tx_desc2 ssgpayWebExpDivMsgArea_9999"
                                                                style={{display: "none"}}>
                                                                (6/1 06:00까지)
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mnodr_ssgpay_promo ssgpayWebExpDiv ssgpayWebExpDiv_noCard"
                                                    style={{display: "none"}}>
                                                    <p className="mnodr_promo_tit">
                                                        SSGPAY에 카드 등록만 해도 SSG MONEY 1천원 지급
                                                    </p>
                                                    <p className="mnodr_promo_tx">(최초 1회 한정)</p>
                                                </div>
                                                <div className="mnodr_ssgpay_errorbx ssgpayWebExpDiv ssgpayWebExpDiv_corpMbrTyp"
                                                    style={{display: "none"}}>
                                                    <div className="mnodr_ssgpay_errorcontainer">
                                                        <div className="mnodr_ssgpay_errormsg">
                                                            <p className="mnodr_tx_desc">
                                                                <strong>등록된 카드가 있는지 확인해보세요</strong>
                                                            </p>
                                                        </div>
                                                        <div className="mnodr_ssgpay_btnarea">
                                                            <button type="button" name="ssgpayWebPaymtCertButton"
                                                                className="mnodr_ssgpay_btn ty_blkline payTracking"
                                                                data-pt-click="주문서|결제방법_SSGPAY카드|SSGPAY가입하기">
                                                                <span>바로 확인하기</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>


                                    </div>

                                    <div className="mnodr_ssgpay_acdo mnodr_ssgpay_acdotoggle">
                                        <input type="radio" id="_mnodrpay_ssgpay_account" name="_mnodrpay_group"
                                            className="mnodr_ssgpay_acdotogglerdo blind payTracking"
                                            data-pt-click="주문서|결제방법_SSGPAY계좌|선택" data-group-name="ssgpayAcct" />
                                        <label aria-expanded="false" aria-controls="_mnodrpay_ssgpay_account_cont"
                                            id="_mnodrpay_ssgpay_account_toggle" className="mnodr_ssgpay_acdotogglebtn"
                                            aria-selected="true">
                                            <div className="mnodr_ssgpay_acdohead">
                                                <span className="mnodr_ssgpay_acdocol">
                                                    <h3 className="mnodr_ssgpay_acdoheadtit">
                                                        <span className="mnodr_ssgpay_acdoheadtx">
                                                            <span className="mnodr_tx_ssgpay"><span
                                                                    className="blind">SSGPAY</span></span>
                                                            <span className="mnodr_tx_ssgpay_desc">계좌</span>
                                                        </span>
                                                    </h3>
                                                </span>
                                            </div>
                                        </label>
                                        <div className="mnodr_ssgpay_acdocont" id="_mnodrpay_ssgpay_account_cont"
                                            aria-labelledby="_mnodrpay_ssgpay_account_toggle">
                                            <div className="mnodr_cardsel_btnarea ssgpayWebPaymtAcctResetArea"
                                                style={{display: "none"}}>
                                                <button type="button"
                                                    className="mnodr_ssgpay_btn ty_blkline modal-fix-open"
                                                    data-layer-target="#mnodr_modal_account_select">
                                                    <span className="mnodr_ic_arr">계좌를 선택해주세요</span>
                                                </button>
                                            </div>

                                            <div className="mnodr_selected_carditem ssgpayWebExpDiv ssgpayWebExpDiv_0000 ssgpayWebPaymtAcctArea"
                                                style={{display: "none"}}>
                                                <div className="mnodr_selected_card">
                                                    <div className="mnodr_selected_cardbox ty_account"
                                                        id="ssgpayWebPaymtAcctBackgroundArea"
                                                        style={{background: "#645b4c"}}>
                                                        <span className="mnodr_ssgpay_cardbi"><img
                                                                src="https://sui.ssgcdn.com/ui/m_ssg/img/com_v2/bank/orderbank-04@3x.png"
                                                                id="ssgpayWebPaymtAcctImgArea" alt="은행BI"
                                                                aria-hidden="true" /></span>
                                                        <button type="button"
                                                            className="mnodr_card_chg_btn modal-fix-open payTracking"
                                                            data-layer-target="#mnodr_modal_account_select"
                                                            data-pt-click="주문서|결제방법_SSGPAY계좌|계좌변경">
                                                            <span className="mnodr_tx_link">계좌변경</span>
                                                        </button>
                                                        <span className="mnodr_account_num"
                                                            id="ssgpayWebPaymtAcctMaskNum">1233344****</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mnodr_form_sec ty7 ssgpayWebExpDiv ssgpayWebExpDiv_0000 ssgpayWebPaymtAcctArea"
                                                style={{display: "none"}}>
                                                <div className="mnodr_infobx">
                                                    <ul className="mnodr_priceinfo_lst">

                                                        <li>
                                                            <dl className="mnodr_priceitem ty_narrow paySummaryNoCardDcArea"
                                                                style={{display: "none"}}>
                                                                <dt>
                                                                    <span
                                                                        className="mnodr_priceitem_stit mnodr_tx_gray">결제금액</span>
                                                                </dt>
                                                                <dd>
                                                                    <span className="mnodr_tx_gray"><em
                                                                            className="ssg_price paySummaryPayAmtWithoutCrdDc">69,900</em><span
                                                                            className="ssg_tx">원</span></span>
                                                                </dd>
                                                            </dl>
                                                            <dl className="mnodr_priceitem ty_card">
                                                                <dt>
                                                                    <strong
                                                                        className="mnodr_tx_desc paySummaryCrdDcTitleNm">결제금액</strong>
                                                                    <button type="button"
                                                                        className="mnodr_btn_info_detail modal-alert-open paySummaryCrdDcButton ssgpayWebPaymtCrdDcDtlToggleButton"
                                                                        data-pt-click="주문서|결제방법_SSGPAY계좌|SSGPAY최적가_상세"
                                                                        data-layer-target="#_layerSsgpayAcctBenefitDetailBest"
                                                                        style={{display: "none"}}>
                                                                        <i className="mnodr_ic ic_info_detail"><span
                                                                                className="blind">SSGPAY 최적가</span></i>
                                                                    </button>
                                                                </dt>
                                                                <dd>
                                                                    <strong className="mnodr_tx_desc"><em
                                                                            className="ssg_price mnodr_tx_size6"><strong
                                                                                className="paySummaryPayAmt">69,900</strong></em><span
                                                                            className="ssg_tx">원</span></strong>
                                                                </dd>
                                                            </dl>
                                                        </li>
                                                    </ul>
                                                    <div className="mnodr_modal ty_alert" role="dialog"
                                                        aria-hidden="true" id="_layerSsgpayAcctBenefitDetailBest">

                                                        <div className="mnodr_modal_wrap" role="document">

                                                            <div className="mnodr_modal_cont">
                                                                <h1 className="mnodr_tx_tit">
                                                                    SSGPAY 최적가 상세
                                                                </h1>
                                                                <div className="mnodr_discount_sec"
                                                                    name="ssgpayWebPaymtAcctDcDtlArea"></div>
                                                                <div className="mnodr_discount_sec duplicateNotCpnArea"
                                                                    style={{display: "none"}}>
                                                                    <p className="mnodr_tx_desc">
                                                                        아래 쿠폰은 중복사용 불가로 사용
                                                                        해제되었습니다.
                                                                    </p>
                                                                    <ul
                                                                        className="mnodr_bullst ty5 duplicateNotCpnListArea">
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <footer className="mnodr_modal_foot">
                                                                <div className="mnodr_btn_area">
                                                                    <button
                                                                        className="mnodr_btn ty_gray ty_sm modal-close-btn"
                                                                        type="button">
                                                                        닫기
                                                                    </button>
                                                                </div>
                                                            </footer>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mnodr_tx_box ssgpayAcctWebPaymtMaxPsblAmtArea"
                                                    style={{display: "none"}}>
                                                    <span className="mnodr_tx_desc2 mnodr_card_discount_tx"><strong>SSG<span
                                                                className="mnodr_tx_point">PAY</span></strong>계좌는 최대
                                                        200만원까지
                                                        결제 가능합니다</span>
                                                </div>
                                            </div>


                                            <div className="mnodr_modal ty_full" role="dialog" aria-hidden="true"
                                                id="mnodr_modal_account_select">
                                                <div className="mnodr_modal_wrap" role="document">

                                                    <div className="mnodr_modal_head">
                                                        <h3 className="mnodr_modal_tit">계좌 변경하기</h3>
                                                        <button type="button"
                                                            className="mnodr_modal_close modal-close-btn payTracking"
                                                            data-pt-click="주문서|결제방법_SSGPAY계좌|계좌변경하기_닫기"
                                                            id="ssgpayWebPaymtAcctListLayerCloseButton">
                                                            <i className="mnodr_ic ic_close"><span
                                                                    className="blind">팝업닫기</span></i>
                                                        </button>
                                                    </div>
                                                    <div className="mnodr_modal_cont">
                                                        <div className="mnodr_modal_scroll">
                                                            <div className="mnodr_form_sec ty3">
                                                                <ul className="mnodr_pay_account_rdolst"
                                                                    id="ssgpayWebPaymtAcctListArea"></ul>
                                                                <button type="button"
                                                                    className="mnodr_btn_addaccount payTracking"
                                                                    data-pt-click="주문서|결제방법_SSGPAY카드|계좌변경하기_계좌추가하기"
                                                                    name="ssgpayWebPaymtAcctRegisterButton">
                                                                    <span className="mnodr_btn_addaccount_tx">계좌
                                                                        추가하기</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mnodr_ssgpay_reg_account ssgpayWebExpDiv ssgpayWebExpDiv_0000 ssgpayWebExpDiv_1002 ssgpayWebExpDiv_1012 ssgpayWebExpDiv_2202"
                                                id="ssgpayWebPaymtNoAcctArea">
                                                <a href=";"
                                                    className="mnodr_ssgpay_card ty_add ssgpayWebExpDiv ssgpayWebExpDiv_1002 ssgpayWebExpDiv_1012 ssgpayWebExpDiv_2202 payTracking"
                                                    data-pt-click="주문서|결제방법_SSGPAY계좌|계좌 등록하기(가입하기)"
                                                    name="ssgpayWebPaymtCertButton" style={{display: "none"}}>
                                                    <div className="mnodr_ssgpay_cardimg">
                                                        <div className="mnodr_ssgpay_cardnone">
                                                            <span className="mnodr_tx_desc">계좌 추가하기</span>
                                                        </div>
                                                    </div>
                                                    <div className="mnodr_article_headbubble ty_center">
                                                        <p>
                                                            한 번만 입력하면 다음부터 재입력없이<br />안전하게
                                                            결제할 수 있어요
                                                        </p>
                                                    </div>
                                                </a>
                                                <a href=";"
                                                    className="mnodr_ssgpay_card ty_add ssgpayWebExpDiv ssgpayWebExpDiv_0000 payTracking"
                                                    data-pt-click="주문서|결제방법_SSGPAY계좌|계좌 등록하기"
                                                    name="ssgpayWebPaymtAcctRegisterButton" style={{display : "block"}}>
                                                    <div className="mnodr_ssgpay_cardimg">
                                                        <div className="mnodr_ssgpay_cardnone">
                                                            <span className="mnodr_tx_desc">계좌 추가하기</span>
                                                        </div>
                                                    </div>
                                                    <div className="mnodr_article_headbubble ty_center">
                                                        <p>
                                                            한 번만 입력하면 다음부터 재입력없이<br />안전하게
                                                            결제할 수 있어요
                                                        </p>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="mnodr_ssgpay_errorbx ssgpayWebExpDiv ssgpayWebExpDiv_2000"
                                                style={{display: "none"}}>
                                                <div className="mnodr_ssgpay_errorcontainer">
                                                    <div className="mnodr_ssgpay_errormsg">
                                                        <p className="mnodr_tx_desc">
                                                            <strong>SSGPAY 가입여부 및 계정상태를<br />확인해주세요</strong>
                                                        </p>
                                                    </div>
                                                    <div className="mnodr_ssgpay_btnarea">
                                                        <button type="button" name="ssgpayWebPaymtCertButton"
                                                            className="mnodr_ssgpay_btn ty_blkline payTracking"
                                                            data-pt-click="주문서|결제방법_SSGPAY계좌|SSGPAY가입하기">
                                                            <span>본인인증하여 회원상태 확인</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mnodr_ssgpay_errorbx ssgpayWebExpDiv ssgpayWebExpDiv_3000"
                                                style={{display: "none"}}>
                                                <div className="mnodr_ssgpay_errorcontainer">
                                                    <div className="mnodr_ssgpay_errormsg">
                                                        <p className="mnodr_tx_desc">
                                                            <strong>일시적 오류가 발생하였습니다.</strong>
                                                        </p>
                                                        <p className="mnodr_tx_desc2">
                                                            문제가 지속될 경우 SSG.COM 고객센터로
                                                            문의바랍니다.
                                                        </p>
                                                    </div>
                                                    <div className="mnodr_ssgpay_btnarea">
                                                        <button type="button" name="ssgpayWebPaymtRetryButton"
                                                            className="mnodr_ssgpay_btn ty_blkline">
                                                            <span>다시시도</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mnodr_ssgpay_errorbx ssgpayWebExpDiv ssgpayWebExpDiv_9001"
                                                style={{display: "none"}}>
                                                <div className="mnodr_ssgpay_errorcontainer">
                                                    <div className="mnodr_ssgpay_errormsg">
                                                        <p className="mnodr_tx_desc">
                                                            <strong>일시적 오류가 발생하였습니다.</strong>
                                                        </p>
                                                        <p className="mnodr_tx_desc2">
                                                            SSGPAY – SSG.COM 간 가입정보가 달라,<br />계좌정보를
                                                            조회할 수 없습니다.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mnodr_ssgpay_errorbx ssgpayWebExpDiv ssgpayWebExpDiv_9999"
                                                style={{display: "none"}}>
                                                <div className="mnodr_ssgpay_errorcontainer">
                                                    <div className="mnodr_ssgpay_errormsg">
                                                        <p className="mnodr_tx_desc">
                                                            <strong>안정적인 서비스 제공을 위해 시스템 점검중이니
                                                                양해 부탁드립니다.</strong>
                                                        </p>
                                                        <p className="mnodr_tx_desc2 ssgpayWebExpDivMsgArea_9999"
                                                            style={{display: "none"}}>
                                                            (6/1 06:00까지)
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mnodr_ssgpay_acdo mnodr_ssgpay_acdotoggle on otherPaymtMeansArea">
                                        <input type="radio" id="_mnodrpay_etc" name="_mnodrpay_group"
                                            className="mnodr_ssgpay_acdotogglerdo blind payTracking"
                                            data-pt-click="주문서|결제방법_다른 결제수단|선택" data-group-name="etc" />
                                        <label aria-expanded="false" aria-controls="_mnodrpay_etc_cont"
                                            id="_mnodrpay_etc_toggle" className="mnodr_ssgpay_acdotogglebtn"
                                            aria-selected="true">
                                            <div className="mnodr_ssgpay_acdohead">
                                                <span className="mnodr_ssgpay_acdocol">
                                                    <h3 className="mnodr_ssgpay_acdoheadtit">
                                                        <span className="mnodr_ssgpay_acdoheadtx">일반결제</span>
                                                    </h3>

                                                </span>
                                            </div>
                                        </label>
                                        <div className="mnodr_ssgpay_acdocont" id="_mnodrpay_etc_cont"
                                            aria-labelledby="_mnodrpay_etc_toggle">
                                            <div className="mnodr_pay_bx">
                                                <ul className="modr_pay_lst" role="tablist">


                                                    <li>
                                                        <button type="button" id="creditCardPaymtMeansButton"
                                                            name="otherPaymtMeansCdButton"
                                                            className="mnodr_pay_tab payTracking"
                                                            data-pt-click="주문서|결제방법_다른 결제수단|신용카드" role="tab">
                                                            <span>신용카드</span>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <span className="bdg_tx">APP</span><button type="button"
                                                            id="ssgpayAppPaymtMeansButton"
                                                            name="otherPaymtMeansCdButton"
                                                            className="mnodr_pay_tab payTracking"
                                                            data-pt-click="주문서|결제방법_다른 결제수단|SSGPAY앱" role="tab">
                                                            <span className="mnodr_ic ic_ssgpay"><span
                                                                    className="blind">SSGPAY</span></span>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button type="button" id="kakaopayPaymtMeansButton"
                                                            name="otherPaymtMeansCdButton"
                                                            className="mnodr_pay_tab payTracking"
                                                            data-pt-click="주문서|결제방법_다른 결제수단|카카오페이" role="tab">
                                                            <span className="mnodr_ic ic_kakaopay"><span
                                                                    className="blind">카카오
                                                                    페이</span></span>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button type="button" id="paycoPaymtMeansButton"
                                                            name="otherPaymtMeansCdButton"
                                                            className="mnodr_pay_tab payTracking"
                                                            data-pt-click="주문서|결제방법_다른 결제수단|PAYCO" role="tab">
                                                            <span className="mnodr_ic ic_payco"><span
                                                                    className="blind">PAYCO</span></span>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button type="button" id="samsungpayPaymtMeansButton"
                                                            name="otherPaymtMeansCdButton"
                                                            className="mnodr_pay_tab payTracking"
                                                            data-pt-click="주문서|결제방법_다른 결제수단|SAMSUNGPAY" role="tab">
                                                            <span className="mnodr_ic ic_samsungpay_sm"><span
                                                                    className="blind">SAMSUNG PAY</span></span>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button type="button" id="mobilePayPaymtMeansButton"
                                                            name="otherPaymtMeansCdButton"
                                                            className="mnodr_pay_tab payTracking"
                                                            data-pt-click="주문서|결제방법_다른 결제수단|휴대폰 소액결제" role="tab">
                                                            <span>휴대폰 소액결제</span>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button type="button" id="virtualAccountPaymtMeansButton"
                                                            name="otherPaymtMeansCdButton"
                                                            className="mnodr_pay_tab payTracking"
                                                            data-pt-click="주문서|결제방법_다른 결제수단|무통장 입금" role="tab">
                                                            <span>무통장 입금</span>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button type="button" id="realBankPaymtMeansButton"
                                                            name="otherPaymtMeansCdButton"
                                                            className="mnodr_pay_tab payTracking"
                                                            data-pt-click="주문서|결제방법_다른 결제수단|실시간 계좌이체" role="tab">
                                                            <span>실시간 계좌이체</span>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button type="button" id="paygatePaymtMeansButton"
                                                            name="otherPaymtMeansCdButton"
                                                            className="mnodr_pay_tab payTracking"
                                                            data-pt-click="주문서|결제방법_다른 결제수단|해외발급 신용카드" role="tab">
                                                            <span>해외발급 신용카드</span>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button type="button" id="ubpayPaymtMeansButton"
                                                            name="otherPaymtMeansCdButton"
                                                            className="mnodr_pay_tab payTracking"
                                                            data-pt-click="주문서|결제방법_다른 결제수단|UBPAY" role="tab">
                                                            <span>UBPAY</span>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button type="button" id="alipayPaymtMeansButton"
                                                            name="otherPaymtMeansCdButton"
                                                            className="mnodr_pay_tab payTracking"
                                                            data-pt-click="주문서|결제방법_다른 결제수단|Alipay" role="tab">
                                                            <span>Alipay</span>
                                                        </button>
                                                    </li>
                                                </ul>
                                                <div className="mnodr_pay_panel paymtMeansPanelArea" role="tabpanel"
                                                    style={{display: "none"}}>

                                                    <div className="mnodr_panel_sec paymtMeansArea creditCrdPaymtMeansArea"
                                                        style={{display: "none"}}>
                                                        <div className="mnodr_form_cont">
                                                            <span className="mnodr_inp_sel ty_black">
                                                                <select id="creditCrdCdSelect" title="카드를 선택하세요.">
                                                                    <option>카드를 선택하세요.</option>
                                                                    <option isptype="20" title="SSG.COM카드 EDITION2">
                                                                        SSG.COM카드 EDITION2
                                                                    </option>
                                                                    <option isptype="20" title="SSG.COM카드">
                                                                        SSG.COM카드
                                                                    </option>
                                                                    <option isptype="20" title="이마트e카드(현대카드)">
                                                                        이마트e카드(현대카드)
                                                                    </option>
                                                                    <option isptype="20" title="현대카드">
                                                                        현대카드
                                                                    </option>
                                                                    <option isptype="10" title="이마트KB국민카드">
                                                                        이마트KB국민카드
                                                                    </option>
                                                                    <option isptype="10" title="KB국민카드">
                                                                        KB국민카드
                                                                    </option>
                                                                    <option isptype="20" title="이마트삼성카드">
                                                                        이마트삼성카드
                                                                    </option>
                                                                    <option isptype="20" title="SSG.COM 삼성카드">
                                                                        SSG.COM 삼성카드
                                                                    </option>
                                                                    <option isptype="20" title="신세계삼성카드">
                                                                        신세계삼성카드
                                                                    </option>
                                                                    <option isptype="20" title="트레이더스삼성카드">
                                                                        트레이더스삼성카드
                                                                    </option>
                                                                    <option isptype="20" title="삼성카드">
                                                                        삼성카드
                                                                    </option>
                                                                    <option isptype="20" title="이마트신한카드">
                                                                        이마트신한카드
                                                                    </option>
                                                                    <option isptype="20" title="신세계신한카드">
                                                                        신세계신한카드
                                                                    </option>
                                                                    <option isptype="20" title="신한카드">
                                                                        신한카드
                                                                    </option>
                                                                    <option isptype="10" title="비씨카드">
                                                                        비씨카드
                                                                    </option>
                                                                    <option isptype="20" title="신세계하나체크카드">
                                                                        신세계하나체크카드
                                                                    </option>
                                                                    <option isptype="20" title="하나카드">
                                                                        하나카드
                                                                    </option>
                                                                    <option isptype="20" title="롯데카드">
                                                                        롯데카드
                                                                    </option>
                                                                    <option isptype="20" title="NH카드">
                                                                        NH카드
                                                                    </option>
                                                                    <option isptype="10" title="카카오뱅크카드">
                                                                        카카오뱅크카드
                                                                    </option>
                                                                    <option isptype="20" title="신세계씨티카드">
                                                                        신세계씨티카드
                                                                    </option>
                                                                    <option isptype="20" title="씨티카드">
                                                                        씨티카드
                                                                    </option>
                                                                    <option isptype="10" title="이마트우리체크카드">
                                                                        이마트우리체크카드
                                                                    </option>
                                                                    <option isptype="10" title="우리카드">
                                                                        우리카드
                                                                    </option>
                                                                    <option isptype="10" title="IBK기업은행카드">
                                                                        IBK기업은행카드
                                                                    </option>
                                                                    <option isptype="10" title="이마트SC카드">
                                                                        이마트SC카드
                                                                    </option>
                                                                    <option isptype="10" title="신세계SC카드">
                                                                        신세계SC카드
                                                                    </option>
                                                                    <option isptype="10" title="SC은행카드">
                                                                        SC은행카드
                                                                    </option>
                                                                    <option isptype="10" title="SSGPAY카드">
                                                                        SSGPAY카드
                                                                    </option>
                                                                    <option isptype="10" title="광주카드">
                                                                        광주카드
                                                                    </option>
                                                                    <option isptype="10" title="수협카드">
                                                                        수협카드
                                                                    </option>
                                                                    <option isptype="10" title="제주카드">
                                                                        제주카드
                                                                    </option>
                                                                    <option isptype="10" title="전북카드">
                                                                        전북카드
                                                                    </option>
                                                                </select>
                                                            </span>
                                                        </div>
                                                        <div className="mnodr_form_cont">
                                                            <span className="mnodr_inp_sel ty_black">
                                                                <select id="creditCrdInstallmentSelect"
                                                                    title="카드 할부를 선택하세요.">
                                                                    <option>일시불</option>
                                                                </select>
                                                            </span>
                                                        </div>
                                                        <div className="mnodr_form_cont ty_space creditCrdPointUseArea"
                                                            style={{display: "none"}}>
                                                            <span className="mnodr_chk">
                                                                <input type="checkbox" id="creditCrdPointUseCheckbox"
                                                                    name="_mnodr_ssgpay_card2_discount"
                                                                    className="blind" />
                                                                <label>
                                                                    <span className="mnodr_tx_label">카드포인트 사용</span>
                                                                </label>
                                                            </span>
                                                            <p className="mnodr_form_desc creditCrdPointGuideArea creditCrdPointGuideArea_08"
                                                                style={{display: "none"}}>
                                                                <span className="mnodr_tx_desc2 mnodr_tx_gray">M포인트
                                                                    결제금액의 최고
                                                                    5%, 최대 5천포인트
                                                                    (단, M포인트 적립 및 사용이 가능한 카드에
                                                                    한함)</span>
                                                            </p>
                                                        </div>
                                                        <div className="mnodr_form_cont creditCrdPaymtDtlArea"></div>
                                                        <div className="modr_pay_descbx">
                                                            <dl className="mnodr_priceitem ty_narrow paySummaryNoCardDcArea"
                                                                style={{display: "none"}}>
                                                                <dt>
                                                                    <span
                                                                        className="mnodr_priceitem_stit mnodr_tx_gray">결제금액</span>
                                                                </dt>
                                                                <dd>
                                                                    <span className="mnodr_tx_gray"><em
                                                                            className="ssg_price paySummaryPayAmtWithoutCrdDc">69,900</em><span
                                                                            className="ssg_tx">원</span></span>
                                                                </dd>
                                                            </dl>
                                                            <dl
                                                                className="mnodr_priceitem ty_narrow paySummaryCardDcArea">
                                                                <dt>
                                                                    <strong
                                                                        className="mnodr_priceitem_stit mnodr_tx_primary paySummaryCrdDcTitleNm">결제금액</strong>
                                                                    <button type="button"
                                                                        id="creditCrdPaymtCrdDcDtlArea"
                                                                        className="mnodr_btn_more modal-alert-open paySummaryCrdDcButton"
                                                                        data-layer-target="#_layerCreditCardBenefitDetail"
                                                                        style={{display: "none"}}>
                                                                        <span className="blind">자세히 보기</span><span
                                                                            className="mnodr_ic ic_info_detail"></span>
                                                                    </button>

                                                                    <div className="mnodr_modal ty_alert" role="dialog"
                                                                        aria-hidden="true"
                                                                        id="_layerCreditCardBenefitDetail"
                                                                        style={{height: '10698px'}}>
                                                                        <div className="mnodr_modal_wrap"
                                                                            role="document" style={{

                                                             left:'15px', right : '15px', top:"183.5px"
                                                         }}>
                                                                            <div className="mnodr_modal_cont">
                                                                                <h1 className="mnodr_tx_tit">
                                                                                    카드할인 최적가 상세
                                                                                </h1>
                                                                                <div
                                                                                    className="mnodr_discount_sec creditCrdPaymtCrdDcDtlArea">
                                                                                </div>
                                                                                <div className="mnodr_discount_sec duplicateNotCpnArea"
                                                                                    style={{display: "none"}}>
                                                                                    <p className="mnodr_tx_desc">
                                                                                        아래 쿠폰은 중복사용 불가로 사용
                                                                                        해제되었습니다.
                                                                                    </p>
                                                                                    <ul
                                                                                        className="mnodr_bullst ty5 duplicateNotCpnListArea">
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                            <footer className="mnodr_modal_foot">
                                                                                <div className="mnodr_btn_area">
                                                                                    <button
                                                                                        className="mnodr_btn ty_gray ty_sm modal-close-btn"
                                                                                        type="button">
                                                                                        닫기
                                                                                    </button>
                                                                                </div>
                                                                            </footer>
                                                                        </div>
                                                                    </div>
                                                                </dt>
                                                                <dd>
                                                                    <strong className="mnodr_tx_primary"><strong
                                                                            className="paySummaryPayAmt ssg_price">69,900</strong><span
                                                                            className="ssg_tx"><strong>원</strong></span></strong>
                                                                </dd>
                                                            </dl>
                                                            <dl className="mnodr_priceitem ty_narrow tgtOfferInfoAmtDiv tgtSpcCrdInfoAmtDiv"
                                                                id="creditCrdTgtSpcCrdInfoAmtDiv"
                                                                data-paymtmeanscd="100" style={{display: "none"}}>
                                                                <dt>
                                                                    <span className="mnodr_chk">
                                                                        <input type="checkbox"
                                                                            id="creditSpcCrdChngPaymtCheckbox"
                                                                            name="tgtPaymtMeansCheckbox"
                                                                            className="blind payTracking tgtPaymtMeansCheckbox"
                                                                            data-paymtmeanscd="100"
                                                                            data-pt-click="주문서|SSGPAY전용프로모션|신용카드_선택" />
                                                                        <label>
                                                                            <span
                                                                                className="mnodr_priceitem_stit mnodr_tx_primary">SSGPAY
                                                                                결제시</span>
                                                                        </label>
                                                                    </span>
                                                                    <button type="button"
                                                                        className="mnodr_btn_info_detail modal-alert-open payTracking"
                                                                        data-pt-click="주문서|할인혜택|SSGPAY전용오퍼_특정카드할인_상세"
                                                                        data-layer-target="#_layerTgtPaymtSpcCrdDcDisc">
                                                                        <i className="mnodr_ic ic_info_detail">
                                                                            <span className="blind">SSGPAY로 결제시 카드할인
                                                                                안내</span>
                                                                        </i>
                                                                    </button>
                                                                </dt>
                                                                <dd>
                                                                    <span className="mnodr_tx_primary">
                                                                        <em className="ssg_price"><span
                                                                                id="creditPaySummaryTgtPaymtSpcCrdDcAmt"
                                                                                className="paySummaryTgtPaymtSpcCrdDcAmt"
                                                                                data-paymtmeanscd="100">0</span></em><span
                                                                            className="ssg_tx">원</span>
                                                                    </span>
                                                                </dd>
                                                            </dl>
                                                            <dl className="mnodr_priceitem ty_narrow tgtOfferInfoAmtDiv tgtDmndDcInfoAmtDiv"
                                                                id="creditCrdTgtDmndDcInfoAmtDiv"
                                                                data-paymtmeanscd="100" style={{display: "none"}}>
                                                                <dt>
                                                                    <span className="mnodr_chk">
                                                                        <input type="checkbox"
                                                                            id="creditDmndDcChngPaymtCheckbox"
                                                                            name="tgtPaymtMeansCheckbox"
                                                                            className="blind payTracking tgtPaymtMeansCheckbox"
                                                                            data-paymtmeanscd="100"
                                                                            data-pt-click="주문서|SSGPAY전용프로모션|신용카드_선택" />
                                                                        <label>
                                                                            <span
                                                                                className="mnodr_priceitem_stit mnodr_tx_primary">SSGPAY
                                                                                결제시</span>
                                                                        </label>
                                                                    </span>
                                                                    <button type="button"
                                                                        className="mnodr_btn_info_detail modal-alert-open payTracking"
                                                                        data-pt-click="주문서|할인혜택|SSGPAY전용오퍼_카드청구할인_상세"
                                                                        data-layer-target="#_layerTgtPaymtDmndDcDisc">
                                                                        <i className="mnodr_ic ic_info_detail">
                                                                            <span className="blind">SSGPAY로 결제시 청구할인
                                                                                안내</span>
                                                                        </i>
                                                                    </button>
                                                                </dt>
                                                                <dd>
                                                                    <span className="mnodr_tx_primary">
                                                                        <em className="ssg_price"><span
                                                                                id="creditPaySummaryTgtPaymtDmndDcAmt"
                                                                                className="paySummaryTgtPaymtDmndDcAmt"
                                                                                data-paymtmeanscd="100">0</span></em><span
                                                                            className="ssg_tx">원 청구예상</span>
                                                                    </span>
                                                                </dd>
                                                            </dl>
                                                            <dl className="mnodr_priceitem ty_narrow cardDcInfoAmtDiv"
                                                                style={{display: "none"}}>
                                                                <dt>
                                                                    <span
                                                                        className="mnodr_priceitem_stit mnodr_tx_gray">청구할인예상금액</span>
                                                                </dt>
                                                                <dd>
                                                                    <span className="mnodr_tx_gray"><em
                                                                            className="ssg_price paySummaryPayCardDcAmt">0</em><span
                                                                            className="ssg_tx">원</span></span>
                                                                </dd>
                                                            </dl>
                                                        </div>
                                                        <div className="mnodr_form_cont cardDcInfoMaxAmtDiv"
                                                            style={{display: "none"}}>
                                                            <p className="mnodr_tx_noti">
                                                                청구할인은 하루 최대
                                                                <span
                                                                    className="ssg_price paySummaryPayCardMaxDcAmt"></span><span
                                                                    className="ssg_tx paySummaryPayCardMaxDcAmtSymbol">원</span>까지
                                                                적용됩니다.
                                                            </p>
                                                        </div>
                                                        <div className="mnodr_form_cont duplicateNotCpnArea"
                                                            style={{display: "none"}}>
                                                            <span
                                                                className="mnodr_tx_desc2 mnodr_tx_point duplicateNotCpnGuideArea">선택하신
                                                                쿠폰 대신 할인액이 더 큰 카드혜택이
                                                                적용되었습니다. 쿠폰은 다음 주문 시 사용
                                                                가능합니다.</span>
                                                        </div>
                                                    </div>

                                                    <div className="mnodr_panel_sec paymtMeansArea ssgpayAppPaymtMeansArea"
                                                        style={{display: "none"}}>
                                                        <div className="mnodr_form_cont ty_space">
                                                            <span className="mnodr_inp_sel ty_black">
                                                                <select id="ssgpayAppCrdCdSelect" title="카드를 선택하세요.">
                                                                    <option>카드를 선택하세요.</option>
                                                                    <option>
                                                                        SSG.COM카드 EDITION2
                                                                    </option>
                                                                    <option>SSG.COM카드</option>
                                                                    <option>
                                                                        이마트e카드(현대카드)
                                                                    </option>
                                                                    <option>현대카드</option>
                                                                    <option>이마트KB국민카드</option>
                                                                    <option>KB국민카드</option>
                                                                    <option>이마트삼성카드</option>
                                                                    <option>SSG.COM 삼성카드</option>
                                                                    <option>신세계삼성카드</option>
                                                                    <option>
                                                                        트레이더스삼성카드
                                                                    </option>
                                                                    <option>삼성카드</option>
                                                                    <option>이마트신한카드</option>
                                                                    <option>신세계신한카드</option>
                                                                    <option>신한카드</option>
                                                                    <option>비씨카드</option>
                                                                    <option>
                                                                        신세계하나체크카드
                                                                    </option>
                                                                    <option>하나카드</option>
                                                                    <option>롯데카드</option>
                                                                    <option>NH카드</option>
                                                                    <option>카카오뱅크카드</option>
                                                                    <option>신세계씨티카드</option>
                                                                    <option>씨티카드</option>
                                                                    <option>
                                                                        이마트우리체크카드
                                                                    </option>
                                                                    <option>우리카드</option>
                                                                    <option>IBK기업은행카드</option>
                                                                    <option>이마트SC카드</option>
                                                                    <option>신세계SC카드</option>
                                                                    <option>SC은행카드</option>
                                                                    <option>SSGPAY카드</option>
                                                                    <option>광주카드</option>
                                                                    <option>수협카드</option>
                                                                    <option>전북카드</option>
                                                                </select>
                                                            </span>
                                                        </div>
                                                        <div className="mnodr_form_cont">
                                                            <span className="mnodr_inp_sel ty_black">
                                                                <select id="ssgpayAppInstallmentSelect"
                                                                    title="카드 할부를 선택하세요.">
                                                                    <option>일시불</option>
                                                                </select>
                                                            </span>
                                                        </div>
                                                        <div className="mnodr_form_cont ty_space ssgpayAppCrdPointUseArea"
                                                            style={{display: "none"}}>
                                                            <span className="mnodr_chk">
                                                                <input type="checkbox" id="ssgpayAppCrdPointUseCheckbox"
                                                                    name="_mnodr_otherpay_ssgpay02_1"
                                                                    className="blind" />
                                                                <label>
                                                                    <span className="mnodr_tx_label">카드포인트 사용</span>
                                                                </label>
                                                            </span>
                                                            <p className="mnodr_form_desc ssgpayAppCrdPointGuideArea ssgpayAppCrdPointGuideArea_08"
                                                                style={{display: "none"}}>
                                                                <span className="mnodr_tx_desc2 mnodr_tx_gray">M포인트
                                                                    결제금액의 최고
                                                                    5%, 최대 5천포인트
                                                                    (단, M포인트 적립 및 사용이 가능한 카드에
                                                                    한함)</span>
                                                            </p>
                                                            <p className="mnodr_form_desc ssgpayAppCrdPointGuideArea ssgpayAppCrdPointGuideArea_16"
                                                                style={{display: "none"}}>
                                                                <span className="mnodr_tx_desc2 mnodr_tx_gray">씨티포인트 사용
                                                                    선택시
                                                                    청구할인혜택
                                                                    적용불가</span>
                                                            </p>
                                                        </div>
                                                        <div className="mnodr_form_cont ssgpayAppPaymtDtlArea"></div>
                                                        <div className="modr_pay_descbx">
                                                            <dl className="mnodr_priceitem ty_narrow paySummaryNoCardDcArea"
                                                                style={{display: "none"}}>
                                                                <dt>
                                                                    <span
                                                                        className="mnodr_priceitem_stit mnodr_tx_gray">결제금액</span>
                                                                </dt>
                                                                <dd>
                                                                    <span className="mnodr_tx_gray"><em
                                                                            className="ssg_price paySummaryPayAmtWithoutCrdDc">69,900</em><span
                                                                            className="ssg_tx">원</span></span>
                                                                </dd>
                                                            </dl>
                                                            <dl className="mnodr_priceitem ty_narrow">
                                                                <dt>
                                                                    <strong
                                                                        className="mnodr_priceitem_stit mnodr_tx_primary paySummaryCrdDcTitleNm">결제금액</strong>
                                                                    <button type="button"
                                                                        id="ssgpayAppPaymtCrdDcDtlButton"
                                                                        className="mnodr_btn_more modal-alert-open paySummaryCrdDcButton"
                                                                        data-layer-target="#_layerSsgpayAppCardBenefitDetail"
                                                                        style={{display: "none"}}>
                                                                        <span className="blind">자세히 보기</span><span
                                                                            className="mnodr_ic ic_info_detail"></span>
                                                                    </button>

                                                                    <div className="mnodr_modal ty_alert" role="dialog"
                                                                        aria-hidden="true"
                                                                        id="_layerSsgpayAppCardBenefitDetail"
                                                                        style={{height: '10698px'}}>
                                                                        <div className="mnodr_modal_wrap"
                                                                            role="document" style={{

                                                             left:'15px', right : '15px', top:"183.5px"
                                                         }}>
                                                                            <div className="mnodr_modal_cont">
                                                                                <h1 className="mnodr_tx_tit">
                                                                                    카드할인 최적가 상세
                                                                                </h1>
                                                                                <div
                                                                                    className="mnodr_discount_sec ssgpayAppPaymtCrdDcDtlArea">
                                                                                </div>
                                                                                <div className="mnodr_discount_sec duplicateNotCpnArea"
                                                                                    style={{display: "none"}}>
                                                                                    <p className="mnodr_tx_desc">
                                                                                        아래 쿠폰은 중복사용 불가로 사용
                                                                                        해제되었습니다.
                                                                                    </p>
                                                                                    <ul
                                                                                        className="mnodr_bullst ty5 duplicateNotCpnListArea">
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                            <footer className="mnodr_modal_foot">
                                                                                <div className="mnodr_btn_area">
                                                                                    <button
                                                                                        className="mnodr_btn ty_gray ty_sm modal-close-btn"
                                                                                        type="button">
                                                                                        닫기
                                                                                    </button>
                                                                                </div>
                                                                            </footer>
                                                                        </div>
                                                                    </div>
                                                                </dt>
                                                                <dd>
                                                                    <strong className="mnodr_tx_primary"><strong
                                                                            className="paySummaryPayAmt ssg_price">69,900</strong><span
                                                                            className="ssg_tx"><strong>원</strong></span></strong>
                                                                </dd>
                                                            </dl>
                                                            <dl className="mnodr_priceitem ty_narrow cardDcInfoAmtDiv"
                                                                style={{display: "none"}}>
                                                                <dt>
                                                                    <span
                                                                        className="mnodr_priceitem_stit mnodr_tx_gray">청구할인예상금액</span>
                                                                </dt>
                                                                <dd>
                                                                    <span className="mnodr_tx_gray"><em
                                                                            className="ssg_price paySummaryPayCardDcAmt">0</em><span
                                                                            className="ssg_tx">원</span></span>
                                                                </dd>
                                                            </dl>
                                                        </div>
                                                        <div className="mnodr_form_cont cardDcInfoMaxAmtDiv"
                                                            style={{display: "none"}}>
                                                            <p className="mnodr_tx_noti">
                                                                청구할인은 하루 최대
                                                                <span
                                                                    className="ssg_price paySummaryPayCardMaxDcAmt"></span><span
                                                                    className="ssg_tx paySummaryPayCardMaxDcAmtSymbol">원</span>까지
                                                                적용됩니다.
                                                            </p>
                                                        </div>
                                                        <div className="mnodr_form_cont duplicateNotCpnArea"
                                                            style={{display: "none"}}>
                                                            <span
                                                                className="mnodr_tx_desc2 mnodr_tx_point duplicateNotCpnGuideArea">선택하신
                                                                쿠폰 대신 할인액이 더 큰 카드혜택이
                                                                적용되었습니다. 쿠폰은 다음 주문 시 사용
                                                                가능합니다.</span>
                                                        </div>
                                                    </div>

                                                    <div className="mnodr_panel_sec paymtMeansArea samsungpayPaymtMeansArea"
                                                        style={{display: "none"}}>
                                                        <div className="mnodr_form_cont ty_space">
                                                            <span className="mnodr_inp_sel ty_black">
                                                                <select id="samsungpayCrdCdSelect" title="카드를 선택하세요.">
                                                                    <option>카드를 선택하세요.</option>
                                                                    <option>
                                                                        SSG.COM카드 EDITION2
                                                                    </option>
                                                                    <option>SSG.COM카드</option>
                                                                    <option>
                                                                        이마트e카드(현대카드)
                                                                    </option>
                                                                    <option>현대카드</option>
                                                                    <option>이마트KB국민카드</option>
                                                                    <option>KB국민카드</option>
                                                                    <option>이마트삼성카드</option>
                                                                    <option>SSG.COM 삼성카드</option>
                                                                    <option>신세계삼성카드</option>
                                                                    <option>
                                                                        트레이더스삼성카드
                                                                    </option>
                                                                    <option>삼성카드</option>
                                                                    <option>이마트신한카드</option>
                                                                    <option>신세계신한카드</option>
                                                                    <option>신한카드</option>
                                                                    <option>비씨카드</option>
                                                                    <option>
                                                                        신세계하나체크카드
                                                                    </option>
                                                                    <option>하나카드</option>
                                                                    <option>롯데카드</option>
                                                                </select>
                                                            </span>
                                                        </div>
                                                        <div className="mnodr_form_cont">
                                                            <span className="mnodr_inp_sel ty_black">
                                                                <select id="samsungpayInstallmentSelect"
                                                                    title="카드 할부를 선택하세요.">
                                                                    <option>일시불</option>
                                                                </select>
                                                            </span>
                                                        </div>
                                                        <div className="mnodr_form_cont ty_space samsungpayCrdPointUseArea"
                                                            style={{display: "none"}}>
                                                            <span className="mnodr_chk">
                                                                <input type="checkbox"
                                                                    id="samsungpayCrdPointUseCheckbox"
                                                                    name="_mnodr_otherpay_ssgpay02_1"
                                                                    className="blind" />
                                                                <label>
                                                                    <span className="mnodr_tx_label">카드포인트 사용</span>
                                                                </label>
                                                            </span>
                                                        </div>
                                                        <div className="mnodr_form_cont samsungpayPaymtDtlArea"></div>
                                                        <div className="modr_pay_descbx">
                                                            <dl className="mnodr_priceitem ty_narrow paySummaryNoCardDcArea"
                                                                style={{display: "none"}}>
                                                                <dt>
                                                                    <span
                                                                        className="mnodr_priceitem_stit mnodr_tx_gray">결제금액</span>
                                                                </dt>
                                                                <dd>
                                                                    <span className="mnodr_tx_gray"><em
                                                                            className="ssg_price paySummaryPayAmtWithoutCrdDc">69,900</em><span
                                                                            className="ssg_tx">원</span></span>
                                                                </dd>
                                                            </dl>
                                                            <dl
                                                                className="mnodr_priceitem ty_narrow paySummaryCardDcArea">
                                                                <dt>
                                                                    <strong
                                                                        className="mnodr_priceitem_stit mnodr_tx_primary paySummaryCrdDcTitleNm">결제금액</strong>
                                                                    <button type="button"
                                                                        id="samsungpayPaymtCrdDcDtlButton"
                                                                        className="mnodr_btn_more modal-alert-open paySummaryCrdDcButton"
                                                                        data-layer-target="#_layerSamsungpayCardBenefitDetail"
                                                                        style={{display: "none"}}>
                                                                        <span className="blind">자세히 보기</span><span
                                                                            className="mnodr_ic ic_info_detail"></span>
                                                                    </button>

                                                                    <div className="mnodr_modal ty_alert" role="dialog"
                                                                        aria-hidden="true"
                                                                        id="_layerSamsungpayCardBenefitDetail"
                                                                        style={{height: '10698px'}}>
                                                                        <div className="mnodr_modal_wrap"
                                                                            role="document" style={{

                                                             left:'15px', right : '15px', top:"183.5px"
                                                         }}>
                                                                            <div className="mnodr_modal_cont">
                                                                                <h1 className="mnodr_tx_tit">
                                                                                    카드할인 최적가 상세
                                                                                </h1>
                                                                                <div
                                                                                    className="mnodr_discount_sec samsungpayPaymtCrdDcDtlArea">
                                                                                </div>
                                                                                <div className="mnodr_discount_sec duplicateNotCpnArea"
                                                                                    style={{display: "none"}}>
                                                                                    <p className="mnodr_tx_desc">
                                                                                        아래 쿠폰은 중복사용 불가로 사용
                                                                                        해제되었습니다.
                                                                                    </p>
                                                                                    <ul
                                                                                        className="mnodr_bullst ty5 duplicateNotCpnListArea">
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                            <footer className="mnodr_modal_foot">
                                                                                <div className="mnodr_btn_area">
                                                                                    <button
                                                                                        className="mnodr_btn ty_gray ty_sm modal-close-btn"
                                                                                        type="button">
                                                                                        닫기
                                                                                    </button>
                                                                                </div>
                                                                            </footer>
                                                                        </div>
                                                                    </div>
                                                                </dt>
                                                                <dd>
                                                                    <strong className="mnodr_tx_primary"><strong
                                                                            className="paySummaryPayAmt ssg_price">69,900</strong><span
                                                                            className="ssg_tx"><strong>원</strong></span></strong>
                                                                </dd>
                                                            </dl>
                                                            <dl className="mnodr_priceitem ty_narrow tgtOfferInfoAmtDiv tgtSpcCrdInfoAmtDiv"
                                                                id="samsungpayTgtSpcCrdInfoAmtDiv"
                                                                data-paymtmeanscd="170" style={{display: "none"}}>
                                                                <dt>
                                                                    <span className="mnodr_chk">
                                                                        <input type="checkbox"
                                                                            id="samsungpaySpcCrdChngPaymtCheckbox"
                                                                            name="tgtPaymtMeansCheckbox"
                                                                            className="blind payTracking tgtPaymtMeansCheckbox"
                                                                            data-paymtmeanscd="170"
                                                                            data-pt-click="주문서|SSGPAY전용프로모션|삼성페이_선택" />
                                                                        <label>
                                                                            <span
                                                                                className="mnodr_priceitem_stit mnodr_tx_primary">SSGPAY
                                                                                결제시</span>
                                                                        </label>
                                                                    </span>
                                                                    <button type="button"
                                                                        className="mnodr_btn_info_detail modal-alert-open payTracking"
                                                                        data-pt-click="주문서|할인혜택|SSGPAY전용오퍼_특정카드할인_상세"
                                                                        data-layer-target="#_layerTgtPaymtSpcCrdDcDisc">
                                                                        <i className="mnodr_ic ic_info_detail">
                                                                            <span className="blind">SSGPAY로 결제시 카드할인
                                                                                안내</span>
                                                                        </i>
                                                                    </button>
                                                                </dt>
                                                                <dd>
                                                                    <span className="mnodr_tx_primary">
                                                                        <em className="ssg_price"><span
                                                                                id="samsungpayPaySummaryTgtPaymtSpcCrdDcAmt"
                                                                                className="paySummaryTgtPaymtSpcCrdDcAmt"
                                                                                data-paymtmeanscd="170">0</span></em><span
                                                                            className="ssg_tx">원</span>
                                                                    </span>
                                                                </dd>
                                                            </dl>
                                                            <dl className="mnodr_priceitem ty_narrow tgtOfferInfoAmtDiv tgtDmndDcInfoAmtDiv"
                                                                id="samsungpayTgtDmndDcInfoAmtDiv"
                                                                data-paymtmeanscd="170" style={{display: "none"}}>
                                                                <dt>
                                                                    <span className="mnodr_chk">
                                                                        <input type="checkbox"
                                                                            id="samsungpayDmndDcChngPaymtCheckbox"
                                                                            name="tgtPaymtMeansCheckbox"
                                                                            className="blind payTracking tgtPaymtMeansCheckbox"
                                                                            data-paymtmeanscd="170"
                                                                            data-pt-click="주문서|SSGPAY전용프로모션|삼성페이_선택" />
                                                                        <label>
                                                                            <span
                                                                                className="mnodr_priceitem_stit mnodr_tx_primary">SSGPAY
                                                                                결제시</span>
                                                                        </label>
                                                                    </span>
                                                                    <button type="button"
                                                                        className="mnodr_btn_info_detail modal-alert-open payTracking"
                                                                        data-pt-click="주문서|할인혜택|SSGPAY전용오퍼_카드청구할인_상세"
                                                                        data-layer-target="#_layerTgtPaymtDmndDcDisc">
                                                                        <i className="mnodr_ic ic_info_detail">
                                                                            <span className="blind">SSGPAY로 결제시 청구할인
                                                                                안내</span>
                                                                        </i>
                                                                    </button>
                                                                </dt>
                                                                <dd>
                                                                    <span className="mnodr_tx_primary">
                                                                        <em className="ssg_price"><span
                                                                                id="samsungpayPaySummaryTgtPaymtDmndDcAmt"
                                                                                className="paySummaryTgtPaymtDmndDcAmt"
                                                                                data-paymtmeanscd="170">0</span></em><span
                                                                            className="ssg_tx">원 청구예상</span>
                                                                    </span>
                                                                </dd>
                                                            </dl>
                                                            <dl className="mnodr_priceitem ty_narrow cardDcInfoAmtDiv"
                                                                style={{display: "none"}}>
                                                                <dt>
                                                                    <span
                                                                        className="mnodr_priceitem_stit mnodr_tx_gray">청구할인예상금액</span>
                                                                </dt>
                                                                <dd>
                                                                    <span className="mnodr_tx_gray"><em
                                                                            className="ssg_price paySummaryPayCardDcAmt">0</em><span
                                                                            className="ssg_tx">원</span></span>
                                                                </dd>
                                                            </dl>
                                                        </div>
                                                        <div className="mnodr_form_cont cardDcInfoMaxAmtDiv"
                                                            style={{display: "none"}}>
                                                            <p className="mnodr_tx_noti">
                                                                청구할인은 하루 최대
                                                                <span
                                                                    className="ssg_price paySummaryPayCardMaxDcAmt"></span><span
                                                                    className="ssg_tx paySummaryPayCardMaxDcAmtSymbol">원</span>까지
                                                                적용됩니다.
                                                            </p>
                                                        </div>
                                                        <div className="mnodr_form_cont duplicateNotCpnArea"
                                                            style={{display: "none"}}>
                                                            <span
                                                                className="mnodr_tx_desc2 mnodr_tx_point duplicateNotCpnGuideArea">선택하신
                                                                쿠폰 대신 할인액이 더 큰 카드혜택이
                                                                적용되었습니다. 쿠폰은 다음 주문 시 사용
                                                                가능합니다.</span>
                                                        </div>
                                                    </div>

                                                    <div className="mnodr_panel_sec paymtMeansArea kakaopayPaymtMeansArea"
                                                        style={{display: "none"}}>
                                                        <div className="mnodr_form_cont ty_space">
                                                            <span className="mnodr_inp_sel ty_black">
                                                                <select id="kakaopayCrdCdSelect" title="카드를 선택하세요.">
                                                                    <option>카드를 선택하세요.</option>
                                                                    <option>
                                                                        SSG.COM카드 EDITION2
                                                                    </option>
                                                                    <option>SSG.COM카드</option>
                                                                    <option>
                                                                        이마트e카드(현대카드)
                                                                    </option>
                                                                    <option>현대카드</option>
                                                                    <option>이마트KB국민카드</option>
                                                                    <option>KB국민카드</option>
                                                                    <option>이마트삼성카드</option>
                                                                    <option>SSG.COM 삼성카드</option>
                                                                    <option>신세계삼성카드</option>
                                                                    <option>
                                                                        트레이더스삼성카드
                                                                    </option>
                                                                    <option>삼성카드</option>
                                                                    <option>이마트신한카드</option>
                                                                    <option>신세계신한카드</option>
                                                                    <option>신한카드</option>
                                                                    <option>비씨카드</option>
                                                                    <option>
                                                                        신세계하나체크카드
                                                                    </option>
                                                                    <option>하나카드</option>
                                                                    <option>롯데카드</option>
                                                                    <option>NH카드</option>
                                                                    <option>카카오뱅크카드</option>
                                                                    <option>신세계씨티카드</option>
                                                                    <option>씨티카드</option>
                                                                    <option>
                                                                        이마트우리체크카드
                                                                    </option>
                                                                    <option>우리카드</option>
                                                                    <option>IBK기업은행카드</option>
                                                                    <option>이마트SC카드</option>
                                                                    <option>신세계SC카드</option>
                                                                    <option>SC은행카드</option>
                                                                    <option>SSGPAY카드</option>
                                                                    <option>광주카드</option>
                                                                    <option>수협카드</option>
                                                                    <option>제주카드</option>
                                                                    <option>전북카드</option>
                                                                </select>
                                                            </span>
                                                        </div>
                                                        <div className="mnodr_form_cont">
                                                            <span className="mnodr_inp_sel ty_black">
                                                                <select id="kakaopayInstallmentSelect"
                                                                    title="카드 할부를 선택하세요.">
                                                                    <option>일시불</option>
                                                                </select>
                                                            </span>
                                                        </div>
                                                        <div className="mnodr_form_cont ty_space kakaopayCrdPointUseArea"
                                                            style={{display: "none"}}>
                                                            <span className="mnodr_chk">
                                                                <input type="checkbox" id="kakaopayCrdPointUseCheckbox"
                                                                    name="_mnodr_otherpay_ssgpay03_1"
                                                                    className="blind" />
                                                                <label>
                                                                    <span className="mnodr_tx_label">카드포인트 사용</span>
                                                                </label>
                                                            </span>
                                                            <p className="mnodr_form_desc kakaopayCrdPointGuideArea kakaopayCrdPointGuideArea_08"
                                                                style={{display: "none"}}>
                                                                <span className="mnodr_tx_desc2 mnodr_tx_gray">M포인트
                                                                    결제금액의 최고
                                                                    5%, 최대 5천포인트
                                                                    (단, M포인트 적립 및 사용이 가능한 카드에
                                                                    한함)</span>
                                                            </p>
                                                            <p className="mnodr_form_desc kakaopayCrdPointGuideArea kakaopayCrdPointGuideArea_16"
                                                                style={{display: "none"}}>
                                                                <span className="mnodr_tx_desc2 mnodr_tx_gray">씨티포인트 사용
                                                                    선택시
                                                                    청구할인혜택
                                                                    적용불가</span>
                                                            </p>
                                                        </div>
                                                        <div className="mnodr_form_cont kakaopayPaymtDtlArea"></div>
                                                        <div className="modr_pay_descbx">
                                                            <dl className="mnodr_priceitem ty_narrow paySummaryNoCardDcArea"
                                                                style={{display: "none"}}>
                                                                <dt>
                                                                    <span
                                                                        className="mnodr_priceitem_stit mnodr_tx_gray">결제금액</span>
                                                                </dt>
                                                                <dd>
                                                                    <span className="mnodr_tx_gray"><em
                                                                            className="ssg_price paySummaryPayAmtWithoutCrdDc">69,900</em><span
                                                                            className="ssg_tx">원</span></span>
                                                                </dd>
                                                            </dl>
                                                            <dl
                                                                className="mnodr_priceitem ty_narrow paySummaryCardDcArea">
                                                                <dt>
                                                                    <strong
                                                                        className="mnodr_priceitem_stit mnodr_tx_primary paySummaryCrdDcTitleNm">결제금액</strong>
                                                                    <button type="button"
                                                                        id="kakaopayPaymtCrdDcDtlButton"
                                                                        className="mnodr_btn_more modal-alert-open paySummaryCrdDcButton"
                                                                        data-layer-target="#_layerKakaopayCardBenefitDetail"
                                                                        style={{display: "none"}}>
                                                                        <span className="blind">자세히 보기</span><span
                                                                            className="mnodr_ic ic_info_detail"></span>
                                                                    </button>

                                                                    <div className="mnodr_modal ty_alert" role="dialog"
                                                                        aria-hidden="true"
                                                                        id="_layerKakaopayCardBenefitDetail"
                                                                        style={{height: '10698px'}}>
                                                                        <div className="mnodr_modal_wrap"
                                                                            role="document" style={{

                                                             left:'15px', right : '15px', top:"183.5px"
                                                         }}>
                                                                            <div className="mnodr_modal_cont">
                                                                                <h1 className="mnodr_tx_tit">
                                                                                    카드할인 최적가 상세
                                                                                </h1>
                                                                                <div
                                                                                    className="mnodr_discount_sec kakaopayPaymtCrdDcDtlArea">
                                                                                </div>
                                                                                <div className="mnodr_discount_sec duplicateNotCpnArea"
                                                                                    style={{display: "none"}}>
                                                                                    <p className="mnodr_tx_desc">
                                                                                        아래 쿠폰은 중복사용 불가로 사용
                                                                                        해제되었습니다.
                                                                                    </p>
                                                                                    <ul
                                                                                        className="mnodr_bullst ty5 duplicateNotCpnListArea">
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                            <footer className="mnodr_modal_foot">
                                                                                <div className="mnodr_btn_area">
                                                                                    <button
                                                                                        className="mnodr_btn ty_gray ty_sm modal-close-btn"
                                                                                        type="button">
                                                                                        닫기
                                                                                    </button>
                                                                                </div>
                                                                            </footer>
                                                                        </div>
                                                                    </div>
                                                                </dt>
                                                                <dd>
                                                                    <strong className="mnodr_tx_primary"><strong
                                                                            className="paySummaryPayAmt ssg_price">69,900</strong><span
                                                                            className="ssg_tx"><strong>원</strong></span></strong>
                                                                </dd>
                                                            </dl>
                                                            <dl className="mnodr_priceitem ty_narrow tgtOfferInfoAmtDiv tgtSpcCrdInfoAmtDiv"
                                                                id="kakaopayTgtSpcCrdInfoAmtDiv" data-paymtmeanscd="161"
                                                                style={{display: "none"}}>
                                                                <dt>
                                                                    <span className="mnodr_chk">
                                                                        <input type="checkbox"
                                                                            id="kakaopaySpcCrdChngPaymtCheckbox"
                                                                            name="tgtPaymtMeansCheckbox"
                                                                            className="blind payTracking tgtPaymtMeansCheckbox"
                                                                            data-paymtmeanscd="161"
                                                                            data-pt-click="주문서|SSGPAY전용프로모션|카카오페이_선택" />
                                                                        <label>
                                                                            <span
                                                                                className="mnodr_priceitem_stit mnodr_tx_primary">SSGPAY
                                                                                결제시</span>
                                                                        </label>
                                                                    </span>
                                                                    <button type="button"
                                                                        className="mnodr_btn_info_detail modal-alert-open payTracking"
                                                                        data-pt-click="주문서|할인혜택|SSGPAY전용오퍼_특정카드할인_상세"
                                                                        data-layer-target="#_layerTgtPaymtSpcCrdDcDisc">
                                                                        <i className="mnodr_ic ic_info_detail">
                                                                            <span className="blind">SSGPAY로 결제시 카드할인
                                                                                안내</span>
                                                                        </i>
                                                                    </button>
                                                                </dt>
                                                                <dd>
                                                                    <span className="mnodr_tx_primary">
                                                                        <em className="ssg_price"><span
                                                                                id="kakaopayPaySummaryTgtPaymtSpcCrdDcAmt"
                                                                                className="paySummaryTgtPaymtSpcCrdDcAmt"
                                                                                data-paymtmeanscd="161">0</span></em><span
                                                                            className="ssg_tx">원</span>
                                                                    </span>
                                                                </dd>
                                                            </dl>
                                                            <dl className="mnodr_priceitem ty_narrow tgtOfferInfoAmtDiv tgtDmndDcInfoAmtDiv"
                                                                id="kakaopayTgtDmndDcInfoAmtDiv" data-paymtmeanscd="161"
                                                                style={{display: "none"}}>
                                                                <dt>
                                                                    <span className="mnodr_chk">
                                                                        <input type="checkbox"
                                                                            id="kakaopayDmndDcChngPaymtCheckbox"
                                                                            name="tgtPaymtMeansCheckbox"
                                                                            className="blind payTracking tgtPaymtMeansCheckbox"
                                                                            data-paymtmeanscd="161"
                                                                            data-pt-click="주문서|SSGPAY전용프로모션|카카오페이_선택" />
                                                                        <label>
                                                                            <span
                                                                                className="mnodr_priceitem_stit mnodr_tx_primary">SSGPAY
                                                                                결제시</span>
                                                                        </label>
                                                                    </span>
                                                                    <button type="button"
                                                                        className="mnodr_btn_info_detail modal-alert-open payTracking"
                                                                        data-pt-click="주문서|할인혜택|SSGPAY전용오퍼_카드청구할인_상세"
                                                                        data-layer-target="#_layerTgtPaymtDmndDcDisc">
                                                                        <i className="mnodr_ic ic_info_detail">
                                                                            <span className="blind">SSGPAY로 결제시 청구할인
                                                                                안내</span>
                                                                        </i>
                                                                    </button>
                                                                </dt>
                                                                <dd>
                                                                    <span className="mnodr_tx_primary">
                                                                        <em className="ssg_price"><span
                                                                                id="kakaopayPaySummaryTgtPaymtDmndDcAmt"
                                                                                className="paySummaryTgtPaymtDmndDcAmt"
                                                                                data-paymtmeanscd="161">0</span></em><span
                                                                            className="ssg_tx">원 청구예상</span>
                                                                    </span>
                                                                </dd>
                                                            </dl>
                                                            <dl className="mnodr_priceitem ty_narrow cardDcInfoAmtDiv"
                                                                style={{display: "none"}}>
                                                                <dt>
                                                                    <span
                                                                        className="mnodr_priceitem_stit mnodr_tx_gray">청구할인예상금액</span>
                                                                </dt>
                                                                <dd>
                                                                    <span className="mnodr_tx_gray"><em
                                                                            className="ssg_price paySummaryPayCardDcAmt">0</em><span
                                                                            className="ssg_tx">원</span></span>
                                                                </dd>
                                                            </dl>
                                                        </div>
                                                        <div className="mnodr_form_cont cardDcInfoMaxAmtDiv"
                                                            style={{display: "none"}}>
                                                            <p className="mnodr_tx_noti">
                                                                청구할인은 하루 최대
                                                                <span
                                                                    className="ssg_price paySummaryPayCardMaxDcAmt"></span><span
                                                                    className="ssg_tx paySummaryPayCardMaxDcAmtSymbol">원</span>까지
                                                                적용됩니다.
                                                            </p>
                                                        </div>
                                                        <div className="mnodr_form_cont duplicateNotCpnArea"
                                                            style={{display: "none"}}>
                                                            <span
                                                                className="mnodr_tx_desc2 mnodr_tx_point duplicateNotCpnGuideArea">선택하신
                                                                쿠폰 대신 할인액이 더 큰 카드혜택이
                                                                적용되었습니다. 쿠폰은 다음 주문 시 사용
                                                                가능합니다.</span>
                                                        </div>
                                                    </div>

                                                    <div className="mnodr_panel_sec paymtMeansArea paycoPaymtMeansArea"
                                                        style={{display: "none"}}>
                                                        <ul className="mnodr_rdotab_lst">
                                                            <li>
                                                                <span className="mnodr_rdo">
                                                                    <input type="radio" id="paycoPaymtMeansInput_1"
                                                                        name="paycoPaymtMeansInput"
                                                                        className="blind payTracking"
                                                                        data-pt-click="주문서|결제방법_다른 결제수단|PAYCO_신용카드" />
                                                                    <label>
                                                                        <span className="mnodr_tx_label">신용카드</span>
                                                                    </label>
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="mnodr_rdo">
                                                                    <input type="radio" id="paycoPaymtMeansInput_2"
                                                                        name="paycoPaymtMeansInput"
                                                                        className="blind payTracking"
                                                                        data-pt-click="주문서|결제방법_다른 결제수단|PAYCO_간편계좌" />
                                                                    <label>
                                                                        <span className="mnodr_tx_label">간편계좌</span>
                                                                    </label>
                                                                </span>
                                                            </li>
                                                        </ul>

                                                        <div
                                                            className="mnodr_form_cont ty_space paycoCrdPaymtMeansArea">
                                                            <span className="mnodr_inp_sel ty_black">
                                                                <select id="paycoCrdCdSelect" title="카드를 선택하세요.">
                                                                    <option>카드를 선택하세요.</option>
                                                                    <option>
                                                                        SSG.COM카드 EDITION2
                                                                    </option>
                                                                    <option>SSG.COM카드</option>
                                                                    <option>
                                                                        이마트e카드(현대카드)
                                                                    </option>
                                                                    <option>현대카드</option>
                                                                    <option>이마트KB국민카드</option>
                                                                    <option>KB국민카드</option>
                                                                    <option>이마트삼성카드</option>
                                                                    <option>SSG.COM 삼성카드</option>
                                                                    <option>신세계삼성카드</option>
                                                                    <option>
                                                                        트레이더스삼성카드
                                                                    </option>
                                                                    <option>삼성카드</option>
                                                                    <option>이마트신한카드</option>
                                                                    <option>신세계신한카드</option>
                                                                    <option>신한카드</option>
                                                                    <option>비씨카드</option>
                                                                    <option>
                                                                        신세계하나체크카드
                                                                    </option>
                                                                    <option>하나카드</option>
                                                                    <option>롯데카드</option>
                                                                    <option>NH카드</option>
                                                                    <option>카카오뱅크카드</option>
                                                                    <option>신세계씨티카드</option>
                                                                    <option>씨티카드</option>
                                                                    <option>
                                                                        이마트우리체크카드
                                                                    </option>
                                                                    <option>우리카드</option>
                                                                    <option>IBK기업은행카드</option>
                                                                    <option>이마트SC카드</option>
                                                                    <option>신세계SC카드</option>
                                                                    <option>SC은행카드</option>
                                                                    <option>SSGPAY카드</option>
                                                                    <option>광주카드</option>
                                                                    <option>수협카드</option>
                                                                    <option>제주카드</option>
                                                                    <option>전북카드</option>
                                                                </select>
                                                            </span>
                                                        </div>
                                                        <div className="mnodr_form_cont paycoCrdPaymtMeansArea">
                                                            <span className="mnodr_inp_sel ty_black">
                                                                <select id="paycoInstallmentSelect"
                                                                    title="카드 할부를 선택하세요.">
                                                                    <option>일시불</option>
                                                                </select>
                                                            </span>
                                                        </div>
                                                        <div className="mnodr_form_cont ty_space paycoCrdPointUseArea"
                                                            style={{display: "none"}}>
                                                            <span className="mnodr_chk">
                                                                <input type="checkbox" id="paycoCrdPointUseCheckbox"
                                                                    name="_mnodr_otherpay_ssgpay04_3"
                                                                    className="blind" />
                                                                <label>
                                                                    <span className="mnodr_tx_label">카드포인트 사용</span>
                                                                </label>
                                                            </span>
                                                            <p className="mnodr_form_desc paycoCrdPointGuideArea paycoCrdPointGuideArea_08"
                                                                style={{display: "none"}}>
                                                                <span className="mnodr_tx_desc2 mnodr_tx_gray">M포인트
                                                                    결제금액의 최고
                                                                    5%, 최대 5천포인트
                                                                    (단, M포인트 적립 및 사용이 가능한 카드에
                                                                    한함)</span>
                                                            </p>
                                                            <p className="mnodr_form_desc paycoCrdPointGuideArea paycoCrdPointGuideArea_16"
                                                                style={{display: "none"}}>
                                                                <span className="mnodr_tx_desc2 mnodr_tx_gray">씨티포인트 사용
                                                                    선택시
                                                                    청구할인혜택
                                                                    적용불가</span>
                                                            </p>
                                                        </div>
                                                        <div className="mnodr_form_cont paycoPaymtDtlArea"></div>
                                                        <div className="modr_pay_descbx">
                                                            <dl className="mnodr_priceitem ty_narrow paySummaryNoCardDcArea"
                                                                style={{display: "none"}}>
                                                                <dt>
                                                                    <span
                                                                        className="mnodr_priceitem_stit mnodr_tx_gray">결제금액</span>
                                                                </dt>
                                                                <dd>
                                                                    <span className="mnodr_tx_gray"><em
                                                                            className="ssg_price paySummaryPayAmtWithoutCrdDc">69,900</em><span
                                                                            className="ssg_tx">원</span></span>
                                                                </dd>
                                                            </dl>
                                                            <dl
                                                                className="mnodr_priceitem ty_narrow paySummaryCardDcArea">
                                                                <dt>
                                                                    <strong
                                                                        className="mnodr_priceitem_stit mnodr_tx_primary paySummaryCrdDcTitleNm">결제금액</strong>
                                                                    <button type="button" id="paycoPaymtCrdDcDtlButton"
                                                                        className="mnodr_btn_more modal-alert-open paySummaryCrdDcButton"
                                                                        data-layer-target="#_layerPaycoCardBenefitDetail"
                                                                        style={{display: "none"}}>
                                                                        <span className="blind">자세히 보기</span><span
                                                                            className="mnodr_ic ic_info_detail"></span>
                                                                    </button>

                                                                    <div className="mnodr_modal ty_alert" role="dialog"
                                                                        aria-hidden="true"
                                                                        id="_layerPaycoCardBenefitDetail"
                                                                        style={{height: '10698px'}}>
                                                                        <div className="mnodr_modal_wrap"
                                                                            role="document" style={{

                                                             left:'15px', right : '15px', top:"183.5px"
                                                         }}>
                                                                            <div className="mnodr_modal_cont">
                                                                                <h1 className="mnodr_tx_tit">
                                                                                    카드할인 최적가 상세
                                                                                </h1>
                                                                                <div
                                                                                    className="mnodr_discount_sec paycoPaymtCrdDcDtlArea">
                                                                                </div>
                                                                                <div className="mnodr_discount_sec duplicateNotCpnArea"
                                                                                    style={{display: "none"}}>
                                                                                    <p className="mnodr_tx_desc">
                                                                                        아래 쿠폰은 중복사용 불가로 사용
                                                                                        해제되었습니다.
                                                                                    </p>
                                                                                    <ul
                                                                                        className="mnodr_bullst ty5 duplicateNotCpnListArea">
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                            <footer className="mnodr_modal_foot">
                                                                                <div className="mnodr_btn_area">
                                                                                    <button
                                                                                        className="mnodr_btn ty_gray ty_sm modal-close-btn"
                                                                                        type="button">
                                                                                        닫기
                                                                                    </button>
                                                                                </div>
                                                                            </footer>
                                                                        </div>
                                                                    </div>
                                                                </dt>
                                                                <dd>
                                                                    <strong className="mnodr_tx_primary"><strong
                                                                            className="paySummaryPayAmt ssg_price">69,900</strong><span
                                                                            className="ssg_tx"><strong>원</strong></span></strong>
                                                                </dd>
                                                            </dl>
                                                            <dl className="mnodr_priceitem ty_narrow tgtOfferInfoAmtDiv tgtSpcCrdInfoAmtDiv"
                                                                id="paycoTgtSpcCrdInfoAmtDiv" data-paymtmeanscd="180"
                                                                style={{display: "none"}}>
                                                                <dt>
                                                                    <span className="mnodr_chk">
                                                                        <input type="checkbox"
                                                                            id="paycoSpcCrdChngPaymtCheckbox"
                                                                            name="tgtPaymtMeansCheckbox"
                                                                            className="blind payTracking tgtPaymtMeansCheckbox"
                                                                            data-paymtmeanscd="180"
                                                                            data-pt-click="주문서|SSGPAY전용프로모션|카카오페이_선택" />
                                                                        <label>
                                                                            <span
                                                                                className="mnodr_priceitem_stit mnodr_tx_primary">SSGPAY
                                                                                결제시</span>
                                                                        </label>
                                                                    </span>
                                                                    <button type="button"
                                                                        className="mnodr_btn_info_detail modal-alert-open payTracking"
                                                                        data-pt-click="주문서|할인혜택|SSGPAY전용오퍼_특정카드할인_상세"
                                                                        data-layer-target="#_layerTgtPaymtSpcCrdDcDisc">
                                                                        <i className="mnodr_ic ic_info_detail">
                                                                            <span className="blind">SSGPAY로 결제시 카드할인
                                                                                안내</span>
                                                                        </i>
                                                                    </button>
                                                                </dt>
                                                                <dd>
                                                                    <span className="mnodr_tx_primary">
                                                                        <em className="ssg_price"><span
                                                                                id="paycoPaySummaryTgtPaymtSpcCrdDcAmt"
                                                                                className="paySummaryTgtPaymtSpcCrdDcAmt"
                                                                                data-paymtmeanscd="180">0</span></em><span
                                                                            className="ssg_tx">원</span>
                                                                    </span>
                                                                </dd>
                                                            </dl>
                                                            <dl className="mnodr_priceitem ty_narrow tgtOfferInfoAmtDiv tgtDmndDcInfoAmtDiv"
                                                                id="paycoTgtDmndDcInfoAmtDiv" data-paymtmeanscd="180"
                                                                style={{display: "none"}}>
                                                                <dt>
                                                                    <span className="mnodr_chk">
                                                                        <input type="checkbox"
                                                                            id="paycoDmndDcChngPaymtCheckbox"
                                                                            name="tgtPaymtMeansCheckbox"
                                                                            className="blind payTracking tgtPaymtMeansCheckbox"
                                                                            data-paymtmeanscd="180"
                                                                            data-pt-click="주문서|SSGPAY전용프로모션|페이코_선택" />
                                                                        <label>
                                                                            <span
                                                                                className="mnodr_priceitem_stit mnodr_tx_primary">SSGPAY
                                                                                결제시</span>
                                                                        </label>
                                                                    </span>
                                                                    <button type="button"
                                                                        className="mnodr_btn_info_detail modal-alert-open payTracking"
                                                                        data-pt-click="주문서|할인혜택|SSGPAY전용오퍼_카드청구할인_상세"
                                                                        data-layer-target="#_layerTgtPaymtDmndDcDisc">
                                                                        <i className="mnodr_ic ic_info_detail">
                                                                            <span className="blind">SSGPAY로 결제시 청구할인
                                                                                안내</span>
                                                                        </i>
                                                                    </button>
                                                                </dt>
                                                                <dd>
                                                                    <span className="mnodr_tx_primary">
                                                                        <em className="ssg_price"><span
                                                                                id="paycoPaySummaryTgtPaymtDmndDcAmt"
                                                                                className="paySummaryTgtPaymtDmndDcAmt"
                                                                                data-paymtmeanscd="180">0</span></em><span
                                                                            className="ssg_tx">원 청구예상</span>
                                                                    </span>
                                                                </dd>
                                                            </dl>
                                                            <dl className="mnodr_priceitem ty_narrow cardDcInfoAmtDiv"
                                                                style={{display: "none"}}>
                                                                <dt>
                                                                    <span
                                                                        className="mnodr_priceitem_stit mnodr_tx_gray">청구할인예상금액</span>
                                                                </dt>
                                                                <dd>
                                                                    <span className="mnodr_tx_gray"><em
                                                                            className="ssg_price paySummaryPayCardDcAmt">0</em><span
                                                                            className="ssg_tx">원</span></span>
                                                                </dd>
                                                            </dl>
                                                        </div>
                                                        <div className="mnodr_form_cont cardDcInfoMaxAmtDiv"
                                                            style={{display: "none"}}>
                                                            <p className="mnodr_tx_noti">
                                                                청구할인은 하루 최대
                                                                <span
                                                                    className="ssg_price paySummaryPayCardMaxDcAmt"></span><span
                                                                    className="ssg_tx paySummaryPayCardMaxDcAmtSymbol">원</span>까지
                                                                적용됩니다.
                                                            </p>
                                                        </div>
                                                        <div className="mnodr_form_cont duplicateNotCpnArea"
                                                            style={{display: "none"}}>
                                                            <span
                                                                className="mnodr_tx_desc2 mnodr_tx_point duplicateNotCpnGuideArea">선택하신
                                                                쿠폰 대신 할인액이 더 큰 카드혜택이
                                                                적용되었습니다. 쿠폰은 다음 주문 시 사용
                                                                가능합니다.</span>
                                                        </div>

                                                        <ul className="mnodr_bullst ty5 paycoAcctPaymtMeansArea">
                                                            <li>
                                                                본인 명의 계좌만 이용 가능합니다.<br />(1회
                                                                결제한도 : 300,000원)
                                                            </li>
                                                            <li>
                                                                결제와 동시에 즉시이체되며, 취소 시
                                                                전체/부분취소 관계없이 결제하신 PAYCO 계좌로
                                                                당일입금 됩니다.
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="mnodr_panel_sec paymtMeansArea virtualAccountPaymtMeansArea"
                                                        style={{display: "none"}}>
                                                        <div className="mnodr_form_cont">
                                                            <span className="mnodr_inp_sel ty_black">
                                                                <select id="virtualAccountBankSelect"
                                                                    title="입금은행을 선택하세요.">
                                                                    <option>
                                                                        입금은행을 선택하세요.
                                                                    </option>
                                                                    <option>기업은행</option>
                                                                    <option>국민은행</option>
                                                                    <option>농협중앙회</option>
                                                                    <option>우리은행</option>
                                                                    <option>SC제일은행</option>
                                                                    <option>신한은행</option>
                                                                    <option>대구은행</option>
                                                                    <option>부산은행</option>
                                                                    <option>우체국</option>
                                                                    <option>하나은행</option>
                                                                </select>
                                                            </span>
                                                        </div>
                                                        <div className="mnodr_form_cont ty_space">
                                                            <span className="mnodr_inp_txt">
                                                                <input type="text" id="virtualAccountDepositNameInput"
                                                                    placeholder="입금자명을 입력해 주세요."
                                                                    title="입금자명을 입력해 주세요." />
                                                            </span>
                                                        </div>
                                                        <div className="mnodr_form_cont ty_space">
                                                            <p className="mnodr_tx_desc">
                                                                입금기한 :
                                                                <span className="mnodr_tx_point">2022년 08월 19일까지
                                                                </span>미입금시
                                                                자동취소
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className="mnodr_panel_sec paymtMeansArea realBankPaymtMeansArea"
                                                        style={{display: "none"}}>
                                                        <div className="mnodr_otherpay_infobx">
                                                            <ul className="mnodr_bullst ty5">
                                                                <li>
                                                                    뱅크페이 앱 설치/가입 후 이용하실 수
                                                                    있습니다.
                                                                </li>
                                                                <li>
                                                                    결제와 동시에 즉시 이체되며, 전체 주문취소
                                                                    시에는 당일 입금/ 부분취소시에는
                                                                    익일입금됩니다.
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    <div className="mnodr_panel_sec paymtMeansArea paygatePaymtMeansArea"
                                                        style={{display: "none"}}>
                                                        <div className="mnodr_form_cont">
                                                            <span className="mnodr_inp_sel ty_black">
                                                                <select id="paygateCrdSelect" title="카드를 선택하세요.">
                                                                    <option>카드를 선택하세요.</option>
                                                                    <option>VISA카드</option>
                                                                    <option>Master카드</option>
                                                                    <option>JCB카드</option>
                                                                </select>
                                                            </span>
                                                        </div>
                                                        <div className="mnodr_form_cont">
                                                            <span className="mnodr_inp_sel ty_black">
                                                                <select id="paygateCurrencySelect" title="국제통화를 선택하세요.">
                                                                    <option>
                                                                        국제통화를 선택하세요.
                                                                    </option>
                                                                    <option>USD($)</option>
                                                                    <option>JPY(￥)</option>
                                                                    <option>EUR(€)</option>
                                                                    <option>AUD($)</option>
                                                                    <option>GBP(￡)</option>
                                                                    <option>CAD($)</option>
                                                                    <option>HKD($)</option>
                                                                    <option>SGD($)</option>
                                                                    <option>TWD($)</option>
                                                                    <option>THB(B)</option>
                                                                    <option>RUB(руб)</option>
                                                                    <option>KRW(￦)</option>
                                                                </select>
                                                            </span>
                                                        </div>
                                                        <div className="mnodr_form_cont paygateExchangeRateGuideArea"
                                                            style={{display: "none"}}>
                                                            <p className="mnodr_tx_desc2 mnodr_tx_gray">
                                                                <span className="paygateAbroadCurrencyTextArea">미국 USD
                                                                    (1$)
                                                                    : </span><span
                                                                    className="paygateWonExchangeRate">1138.10</span>KRW
                                                                (<span
                                                                    className="paygateWonExchangeRateExpireDate">2019.09.24
                                                                    14:30</span>)
                                                            </p>
                                                        </div>
                                                        <div className="mnodr_form_cont ty_space">
                                                            <p className="mnodr_tx_desc">
                                                                결제금액 :
                                                                <span className="mnodr_tx_point"><span
                                                                        className="paygateWonAmt">69,900</span>원&nbsp;/&nbsp;<span
                                                                        className="paygateExchangeAmt">69,900</span>&nbsp;<span
                                                                        className="paygateExchangeCurrency">WON</span></span>
                                                            </p>
                                                        </div>
                                                        <div className="mnodr_otherpay_infobx">
                                                            <ul className="mnodr_bullst ty5">
                                                                <li>
                                                                    해외에서 발급한 신용카드로만 결제가
                                                                    가능합니다.
                                                                </li>
                                                                <li>
                                                                    MCP(현지 통화 결제) 대상카드는 VISA, MASTER,
                                                                    JCB입니다. (AMEX는 제외)
                                                                </li>
                                                                <li>
                                                                    등록한 해외카드가 도난 혹은 타인 명의이거나,
                                                                    허위, 정보누락,오기가 있는 경우 구매자의
                                                                    동의 없이 체결취소가 가능합니다.
                                                                </li>
                                                                <li>
                                                                    환율로 인한 결제금액의 환차손익은
                                                                    구매고객님께 부담됩니다.
                                                                </li>
                                                                <li>
                                                                    환율변동에 따라 주문시점과 결제시점의 자국
                                                                    통화 환산금액에 차액이 발생할 수 있습니다.
                                                                    실제 자국통화 결제금액은 카드정보 입력화면에
                                                                    표시되는 금액으로 확인해주시길 바랍니다.
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    <div className="mnodr_panel_sec paymtMeansArea alipayPaymtMeansArea"
                                                        style={{display: "none"}}>
                                                        <div className="mnodr_form_cont">
                                                            <p className="mnodr_tx_desc">결제통화 : USD($)</p>
                                                        </div>
                                                        <div className="mnodr_form_cont ty_space">
                                                            <p className="mnodr_tx_desc">
                                                                결제금액 :
                                                                <span className="mnodr_tx_point"><span
                                                                        className="alipayWonAmt">69,900</span>원&nbsp;/&nbsp;<span
                                                                        className="alipayExchangeAmt">53.89</span>&nbsp;USD($)</span>
                                                            </p>
                                                        </div>
                                                        <div className="mnodr_form_cont ty_space">
                                                            <p className="mnodr_tx_desc2 mnodr_tx_gray">
                                                                미국 USD (1$) :
                                                                <span className="alipayExchangeRate">1297</span>KRW
                                                                (<span
                                                                    className="alipayExchangeRateExpireDate">2022.08.20
                                                                    09:32</span>)
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className="mnodr_panel_sec paymtMeansArea ubpayPaymtMeansArea"
                                                        style={{display: "none"}}>
                                                        <div className="mnodr_form_cont">
                                                            <span className="mnodr_inp_txt">
                                                                <input type="text" id="ubpayHpno"
                                                                    placeholder="- 없이 휴대전화번호만 입력하세요"
                                                                    title="- 없이 휴대전화번호를 입력해주세요." maxLength="11" />
                                                            </span>
                                                        </div>
                                                        <div className="mnodr_form_cont">
                                                            <span className="mnodr_inp_sel ty_black">
                                                                <select id="ubpayCrdCdSelect" title="카드를 선택하세요.">
                                                                    <option>카드를 선택하세요.</option>
                                                                    <option>신한카드</option>
                                                                    <option>비씨카드</option>
                                                                    <option>전북카드</option>
                                                                </select>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>

                            <article className="mnodr_article cashReceiptArticleArea fullOrdArea" data-display="N"
                                style={{display: "none"}}>
                                <div className="mnodr_article_cont">
                                    <div className="mnodr_toggle_sec">
                                        <div className="mnodr_form_sec">
                                            <div className="mnodr_payinfo_bx mnodr_acdo_toggle">
                                                <span className="mnodr_chk">
                                                    <input type="checkbox" id="cashReceiptAgreeCheckbox"
                                                        className="blind payTracking"
                                                        data-pt-click="주문서|현금영수증 발급신청|선택" />
                                                    <label>
                                                        <span className="mnodr_tx_desc3"><strong>현금영수증
                                                                발급신청</strong></span>
                                                    </label>
                                                    <button type="button" id="cashReceiptToggleButton"
                                                        className="mnodr_acdo_btn mnodr_arrow_btn payTracking"
                                                        data-pt-click="주문서|현금영수증 발급신청|펼침">
                                                        <span className="blind">더보기</span>
                                                    </button>
                                                </span>
                                                <p className="mnodr_toggle_hietx mnodr_tx_desc2 mnodr_tx_gray">
                                                    개인소득공제 / 핸드폰번호(01074641533)
                                                </p>
                                                <div className="mnodr_togglechk_cont mnodr_acdo_cont ty_toggle">
                                                    <ul className="mnodr_rdotab_lst">
                                                        <li>
                                                            <span className="mnodr_rdo">
                                                                <input type="radio" id="cashReceiptEvidUseRadio_1"
                                                                    name="cashReceiptEvidUseRadio"
                                                                    className="blind payTracking"
                                                                    data-pt-click="주문서|현금영수증 발급신청|개인소득공제_클릭" />
                                                                <label>
                                                                    <span className="mnodr_tx_label">개인 소득 공제</span>
                                                                </label>
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className="mnodr_rdo">
                                                                <input type="radio" id="cashReceiptEvidUseRadio_2"
                                                                    name="cashReceiptEvidUseRadio"
                                                                    className="blind payTracking"
                                                                    data-pt-click="주문서|현금영수증 발급신청|사업자지출증빙_클릭" />
                                                                <label>
                                                                    <span className="mnodr_tx_label">사업자 지출 증빙</span>
                                                                </label>
                                                            </span>
                                                        </li>
                                                    </ul>

                                                    <div className="mnodr_form_cont cashReceiptIsssueMeansSelectArea">
                                                        <span className="mnodr_inp_sel ty_black">
                                                            <select id="cashReceiptIsssueMeansSelect"
                                                                title="현금영수증 발급 수단을 선택하세요.">
                                                                <option selected="">
                                                                    휴대전화번호
                                                                </option>
                                                                <option>신용카드번호</option>
                                                                <option>현금영수증카드</option>
                                                                <option>
                                                                    모바일 현금영수증카드
                                                                </option>
                                                            </select>
                                                        </span>
                                                    </div>
                                                    <div
                                                        className="mnodr_form_cont cashReceiptIssueMeansArea cashReceiptIssueMeansArea_10">
                                                        <div className="mnodr_form_cont">
                                                            <div className="mnodr_inp_row_grp">
                                                                <span className="mnodr_inp_txt">
                                                                    <input type="tel" id="cashReceiptHpsno"
                                                                        maxLength="3" />
                                                                </span>
                                                                <span className="mnodr_inp_txt">
                                                                    <input type="tel" id="cashReceiptHpeno"
                                                                        maxLength="4" />
                                                                </span>
                                                                <span className="mnodr_inp_txt">
                                                                    <input type="tel" id="cashReceiptHplno"
                                                                        maxLength="4" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mnodr_form_cont cashReceiptIssueMeansArea cashReceiptIssueMeansArea_20 cashReceiptIssueMeansArea_30 cashReceiptIssueMeansArea_50"
                                                        style={{display: "none"}}>
                                                        <div className="mnodr_inp_row_grp">
                                                            <span className="mnodr_inp_txt">
                                                                <input type="text" id="cashReceiptCardno1"
                                                                    title="카드 번호 첫번째 그룹 네자리를 입력해주세요." maxLength="4" />
                                                            </span>
                                                            <span className="mnodr_inp_txt">
                                                                <input type="text" id="cashReceiptCardno2"
                                                                    title="카드 번호 두번째 그룹 네자리를 입력해주세요." maxLength="4" />
                                                            </span>
                                                            <span className="mnodr_inp_txt">
                                                                <input type="text" id="cashReceiptCardno3"
                                                                    title="카드 번호 세번째 그룹 네자리를 입력해주세요." maxLength="4" />
                                                            </span>
                                                            <span className="mnodr_inp_txt">
                                                                <input type="text" id="cashReceiptCardno4"
                                                                    title="카드 번호 마지막 그룹 네자리를 입력해주세요." maxLength="7" />
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="mnodr_form_cont cashReceiptIssueMeansArea cashReceiptIssueMeansArea_40"
                                                        style={{display: "none"}}>
                                                        <span className="mnodr_inp_txt">
                                                            <input type="text" id="cashReceiptBizno"
                                                                placeholder="사업자번호를 입력해주세요." title="사업자번호을 입력해주세요."
                                                                maxLength="10" />
                                                        </span>
                                                    </div>
                                                    <div className="mnodr_otherpay_infobx">
                                                        <ul className="mnodr_bullst ty5">
                                                            <li className="cashReceiptSsgMoneyInsnmArea cashReceiptSsgMoneyInsnmArea_Y"
                                                                style={{display: "none"}}>
                                                                SSG MONEY 한도상향된 회원의 소득공제 신청 가능
                                                                내역(현금성 SSG MONEY)은 국세청에 연 1회 일괄
                                                                신고됩니다.
                                                            </li>
                                                            <li className="cashReceiptSsgMoneyInsnmArea cashReceiptSsgMoneyInsnmArea_M"
                                                                style={{display: "none"}}>
                                                                SSGPAY 앱에서 사업자등록번호로 현금영수증을
                                                                설정하시면 SSG.COM에서도 사업자 지출
                                                                증빙으로만 신청됩니다.
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>

                            <article className="mnodr_article dwnShppIcebagInfo" style={{display: "none"}}>
                                <div className="mnodr_article_head">
                                    <div className="mnodr_article_headlt">
                                        <h2 className="mnodr_tx_tit">새벽시간 포장안내</h2>
                                    </div>
                                </div>
                                <div className="mnodr_article_cont ty_pull">
                                    <div className="mnodr_bag">
                                        <ul className="mnodr_bag_list dwnShppInfoUl">
                                            <li className="dwnShppFreeCbagInfoArea">
                                                <div className="mnodr_bag_sec">
                                                    <div className="mnodr_bag_img">
                                                        <i className="ico_albibag" aria-hidden="true"></i>
                                                        <span className="albibag_bedge">free</span>
                                                    </div>
                                                    <p className="mnodr_bag_txt">
                                                        첫 새벽배송엔 알비백을 선물로 드려요!
                                                        <span className="mnodr_bag_desc">다음 새벽배송 때 문앞에 놓아주세요.</span>
                                                    </p>
                                                </div>
                                            </li>
                                            <li className="dwnShppInfoArea">
                                                <div className="mnodr_bag_sec">
                                                    <div className="mnodr_bag_img">
                                                        <i className="ico_albibag" aria-hidden="true"></i>
                                                    </div>
                                                    <p className="mnodr_bag_txt">
                                                        보냉이 필요한 상품은 알비백에 담아드려요.
                                                        <span className="mnodr_bag_desc">최대 9시간까지 신선하게 유지됩니다.</span>
                                                    </p>
                                                </div>
                                            </li>
                                            <li className="dwnShppRetCbagNotAvailArea" style={{display: "none"}}>
                                                <div className="mnodr_bag_sec">
                                                    <div className="mnodr_bag_img">
                                                        <i className="ico_coldbox" aria-hidden="true"></i>
                                                        <span className="albibag_bedge" aria-hidden="true">!</span>
                                                    </div>
                                                    <p className="mnodr_bag_txt">
                                                        알비백 수급 불안정으로 인한 보냉박스 발송<span className="mnodr_bag_desc">이번에 받지
                                                            못한
                                                            알비백은
                                                            <span className="mnodr_tx_point">04/10 이후 첫 새벽배송 주문</span>에
                                                            보내드립니다.</span>
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </article>

                            <article className="mnodr_article fullOrdArea">
                                <div className="mnodr_article_head">
                                    <div className="mnodr_article_headlt">
                                        <h2 className="mnodr_tx_tit">결제 예정금액</h2>
                                    </div>
                                </div>
                                <div className="mnodr_article_cont ty_pull">
                                    <div className="mnodr_form_sec">
                                        <dl className="mnodr_priceitem ty_narrow">
                                            <dt>
                                                <span className="mnodr_priceitem_stit">주문금액</span>
                                            </dt>
                                            <dd>
                                                <span className="mnodr_tx_primary">+ <em
                                                        className="ssg_price dispTotPayOrdAmt">{(price.oldPrice).toLocaleString()}</em><span
                                                        className="ssg_tx">원</span></span>
                                            </dd>
                                        </dl>
                                        <dl className="mnodr_priceitem ty_narrow">
                                            <dt>
                                                <span className="mnodr_priceitem_stit">할인금액</span>
                                            </dt>
                                            <dd>
                                                <span className="mnodr_tx_point">- <em
                                                        className="ssg_price dispTotDcAmt">{(price.oldPrice-price.newPrice).toLocaleString()}</em><span
                                                        className="ssg_tx">원</span></span>
                                            </dd>
                                        </dl>
                                        <ul className="mnodr_paydetail_sublst dispTotDcAmtDtl"
                                            style={{display: "none"}}>
                                            <li className="dispTotDcAmtWithoutCrdDcArea">
                                                <span className="mnodr_paydetail_tx">상품할인</span>
                                                <span className="mnodr_paydetail_money">-
                                                    <em className="ssg_price dispTotDcAmtWithoutCrdDc">0</em><span
                                                        className="ssg_tx">원</span></span>
                                            </li>
                                            <li className="dispTotDcAmtWithCrdDcArea">
                                                <span className="mnodr_paydetail_tx">결제할인</span>
                                                <span className="mnodr_paydetail_money">- <em
                                                        className="ssg_price dispTotDcAmtWithCrdDc">0</em><span
                                                        className="ssg_tx">원</span></span>
                                            </li>
                                        </ul>
                                        <dl className="mnodr_priceitem ty_narrow paySummaryTgtPaymtDcArea"
                                            style={{display: "none"}}>
                                            <dt>
                                                <span className="mnodr_priceitem_stit paySummarySsgpayDcTitleNm">SSGPAY
                                                    최적할인</span>
                                            </dt>
                                            <dd>
                                                <span className="mnodr_tx_point">-
                                                    <em className="ssg_price dispTotDcAmtWithTgtPaymtDc">0</em><span
                                                        className="ssg_tx">원</span></span>
                                            </dd>
                                        </dl>
                                        <dl className="mnodr_priceitem ty_narrow paySummaryPointUseArea"
                                            style={{display: "none"}}>
                                            <dt>
                                                <span className="mnodr_priceitem_stit">포인트 사용</span>
                                            </dt>
                                            <dd>
                                                <span className="mnodr_tx_point">- <em
                                                        className="ssg_price dispTotPointUseAmt">0</em><span
                                                        className="ssg_tx">원</span></span>
                                            </dd>
                                        </dl>
                                        <dl className="mnodr_priceitem ty_narrow">
                                            <dt>
                                                <span className="mnodr_priceitem_stit">배송비</span>
                                            </dt>
                                            <dd>
                                                <span className="mnodr_tx_primary">+<em
                                                        className="ssg_price paySummaryTotOrdCstAmt">{(price.fee).toLocaleString()}</em><span
                                                        className="ssg_tx">원</span></span>
                                            </dd>
                                        </dl>
                                        <ul className="mnodr_paydetail_sublst paySummaryTotOrdCstDtl"
                                            style={{display: "none"}}>
                                            <li>
                                                <span className="mnodr_paydetail_tx">배송비</span>
                                                <span className="mnodr_paydetail_money">+<em
                                                        className="ssg_price paySummaryOrdCstAmt">0</em><span
                                                        className="ssg_tx">원</span></span>
                                            </li>
                                            <li className="paySummaryOrdCstDcArea" style={{display: "none"}}>
                                                <span className="mnodr_paydetail_tx">배송비 할인</span>
                                                <span className="mnodr_paydetail_money">-<em
                                                        className="ssg_price dispOrdCstTotAmt">0</em><span
                                                        className="ssg_tx">원</span></span>
                                            </li>
                                        </ul>
                                        <dl className="mnodr_priceitem ty_narrow paySummaryIceBagArea"
                                            style={{display: "none"}}>
                                            <dt>
                                                <span className="mnodr_priceitem_stit">알비백 보증금</span>
                                                <button type="button"
                                                    className="mnodr_btn_info_detail modal-alert-open payTracking"
                                                    data-pt-click="주문서|결제예정금액|알비백보증금_상세"
                                                    data-layer-target="#_layerCoolerbag">
                                                    <i className="mnodr_ic ic_info_detail"><span className="blind">알비백
                                                            보증금
                                                            안내</span></i>
                                                </button>
                                            </dt>
                                            <dd>
                                                <span className="mnodr_tx_primary">+ <em
                                                        className="ssg_price paySummaryIceBagAmt">0</em><span
                                                        className="ssg_tx">원</span></span>
                                            </dd>
                                        </dl>
                                        <dl className="mnodr_priceitem ty_total">
                                            <dt>
                                                <strong className="mnodr_priceitem_stit">총 결제예정금액</strong>
                                            </dt>
                                            <dd>
                                                <strong className="mnodr_tx_primary mnodr_priceitem_total v2">
                                                    +
                                                    <em
                                                        className="ssg_price paySummaryPayAmt paySummaryTgtPaymtAmt">{(price.newPrice +price.fee).toLocaleString()}</em><span
                                                        className="ssg_tx">원</span>
                                                </strong>
                                            </dd>
                                        </dl>
                                        <dl className="mnodr_priceitem ty_narrow cardDcInfoAmtDiv"
                                            style={{display: "none"}}>
                                            <dt>
                                                <span className="mnodr_priceitem_stit">청구할인 예상금액</span>
                                            </dt>
                                            <dd>
                                                <span className="mnodr_tx_primary"><em
                                                        className="ssg_price paySummaryPayCardDcAmt paySummaryTgtPaymtDmndDcAmt">0</em><span
                                                        className="ssg_tx">원</span></span>
                                            </dd>
                                        </dl>
                                        <dl className="mnodr_priceitem ty_narrow tgtPaymtCardDcInfoAmtDiv"
                                            style={{display: "none"}}>
                                            <dt>
                                                <span className="mnodr_priceitem_stit">청구할인 예상금액</span>
                                            </dt>
                                            <dd>
                                                <span className="mnodr_tx_primary"><em
                                                        className="ssg_price paySummaryTgtPaymtCardDcAmt">0</em><span
                                                        className="ssg_tx">원</span></span>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </article>
                            <input type="hidden" id="promMbrspPntAplTotAmt" name="promMbrspPntAplTotAmt" />

                            <article className="mnodr_article paySummaryPayTotAccumAmtArea fullOrdArea" data-display="N"
                                style={{display: "none"}}>
                                <div className="mnodr_article_head">
                                    <div className="mnodr_article_headlt">
                                        <h2 className="mnodr_tx_tit">적립 예정 SSG MONEY</h2>
                                    </div>
                                </div>
                                <div className="mnodr_article_cont ty_pull">
                                    <div className="mnodr_form_sec">
                                        <dl className="mnodr_priceitem ty_narrow paySummaryPayAccumArea_330"
                                            style={{display: "none"}}>
                                            <dt>
                                                <span className="mnodr_priceitem_stit">적립쿠폰</span>
                                            </dt>
                                            <dd>
                                                <span className="mnodr_tx_primary"><em
                                                        className="ssg_price paySummaryPayAccumAmt_330">0</em><span
                                                        className="ssg_tx ssg_tx_330">원</span></span>
                                            </dd>
                                        </dl>
                                        <dl className="mnodr_priceitem ty_narrow paySummaryPayAccumArea_360"
                                            style={{display: "none"}}>
                                            <dt>
                                                <span className="mnodr_priceitem_stit">특정카드혜택</span>
                                            </dt>
                                            <dd>
                                                <span className="mnodr_tx_primary"><em
                                                        className="ssg_price paySummaryPayAccumAmt_360">0</em><span
                                                        className="ssg_tx ssg_tx_360">원</span></span>
                                            </dd>
                                        </dl>
                                        <dl className="mnodr_priceitem ty_narrow paySummaryPayAccumArea_500"
                                            style={{display: "none"}}>
                                            <dt>
                                                <span className="mnodr_priceitem_stit">SSG MONEY</span>
                                            </dt>
                                            <dd>
                                                <span className="mnodr_tx_primary"><em
                                                        className="ssg_price paySummaryPayAccumAmt_500">0</em><span
                                                        className="ssg_tx ssg_tx_500">원</span></span>
                                            </dd>
                                        </dl>
                                        <dl className="mnodr_priceitem ty_narrow paySummaryPayAccumArea_501"
                                            style={{display: "none"}}>
                                            <dt>
                                                <span className="mnodr_priceitem_stit">임직원 SSG MONEY</span>
                                            </dt>
                                            <dd>
                                                <span className="mnodr_tx_primary"><em
                                                        className="ssg_price paySummaryPayAccumAmt_501">0</em><span
                                                        className="ssg_tx ssg_tx_501">원</span></span>
                                            </dd>
                                        </dl>
                                        <dl className="mnodr_priceitem ty_narrow paySummaryPayMbrshAccumAmtArea paySummaryPayAccumArea_550"
                                            style={{display: "none"}}>
                                            <dt>
                                                <span className="mnodr_priceitem_stit mmbrs_tx_point">
                                                    <span className="cmbadge_mmbrs ty_brown ty_s ty_radius2"><i
                                                            className="badge badge_mmbrs_white ty_xxs"><span
                                                                className="blind">스마일클럽</span></i></span>
                                                    <span className="paySummaryPayAccumGuideArea_550">멤버십 추가 적립</span>
                                                    <span className="paySummaryPayNoAccumGuideArea_550"
                                                        style={{display: "none"}}>등급쿠폰 중복 불가</span>
                                                    <button type="button"
                                                        className="mnodr_btn_info_detail modal-alert-open"
                                                        data-layer-target="#_layerSmileClubBene">
                                                        <i className="icon ty_xs icon_questionmark_circle"
                                                            aria-hidden="true"></i><span className="blind">스마일클럽 적립 혜택
                                                            안내</span>
                                                    </button>
                                                </span>
                                            </dt>
                                            <dd>
                                                <span className="mmbrs_tx_point"><em
                                                        className="ssg_price paySummaryPayAccumAmt_550">0</em><span
                                                        className="ssg_tx ssg_tx_550">원</span></span>
                                            </dd>
                                        </dl>
                                        <dl className="mnodr_priceitem ty_total">
                                            <dt>
                                                <strong className="mnodr_priceitem_stit">총 적립 예정금액</strong>
                                            </dt>
                                            <dd>
                                                <strong className="mnodr_tx_primary mnodr_priceitem_total v2"><i
                                                        className="mnodr_ic ic_ssgmoney_sm"></i>
                                                    <em className="ssg_price paySummaryPayAccumAmt">0</em><span
                                                        className="ssg_tx">원</span></strong>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </article>
                            <article className="mnodr_article mnodr_article_mmbrs_bene mbrspBenefitInfoArea"
                                style={{display: "none"}}>
                                <div className="mnodr_txbox ty_brown">
                                    <p className="mnodr_tx_inline">
                                        <i className="badge badge_mmbrs_white ty_s"><span
                                                className="blind">스마일클럽</span></i><span className="mnodr_bene_desc">으로
                                            최대
                                            <strong><span className="dispPromMbrspAplAmt">0</span>원</strong>의 혜택을
                                            받아요!</span>
                                    </p>
                                </div>
                            </article>

                            <article className="mnodr_article">
                                <div className="mnodr_article_cont">
                                    <div className="mnodr_toggle_sec">
                                        <div className="mnodr_form_sec">
                                            <div className="mnodr_form_cont">
                                                <div className="mnodr_togglechk_all mnodr_acdo_toggle">
                                                    <span className="mnodr_chk">
                                                        <span className="mnodr_tx_label ty_chk_bold">주문정보 및 서비스 약관에
                                                            동의합니다.</span>
                                                        <button type="button"
                                                            className="mnodr_acdo_btn mnodr_arrow_btn">
                                                            <span className="blind">더보기</span>
                                                        </button>
                                                    </span>
                                                    <div className="mnodr_togglechk_cont mnodr_acdo_cont ty_toggle">
                                                        <div className="mnodr_tx_wrap ty_indent">
                                                            <span className="mnodr_tx_desc2">전자금융거래 이용약관</span>
                                                            <button
                                                                className="mnodr_tx_link mnodr_tx_gray modal-fix-open"
                                                                id="electronicFinancialTransactionShowButton"
                                                                type="button">
                                                                약관보기
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mnodr_article_foot" onClick={handleOrder}>
                                    <div className="mnodr_btn_area">
                                        <button type="button" name="processPaymtButton"
                                            className="mnodr_btn ty_point ty_m payTracking"
                                            data-pt-click="주문서|결제예정금액|결제하기">
                                            <span className="mnodr_btn_tx"><strong>결제하기</strong></span>
                                        </button>
                                    </div>
                                </div>
                            </article>


                            <ul className="mnodr_article_list fullOrdArea">
                                <li className="mnodr_article_item">
                                    <article className="mnodr_article mnodr_delivery_infos">
                                        <div className="mnodr_article_head">
                                            <div className="mnodr_article_headlt">
                                                <h2 className="mnodr_tx_tit">주문자 정보</h2>
                                            </div>
                                            <div className="mnodr_article_headrt">
                                                <button type="button"
                                                    className="mnodr_btn ty_grayline ty_xxs payTracking"
                                                    data-pt-click="주문서|주문자정보|변경" name="btnShowTgtDiv"
                                                    data-target-div="notiInfoDiv">
                                                    변경
                                                </button>
                                            </div>
                                        </div>
                                        <div className="mnodr_article_cont ty_pull">
                                            <div className="mnodr_form_sec">
                                                <div className="mnodr_form_cont">
                                                    <dl className="mnodr_dl_desc">
                                                        <dt>
                                                            <span className="mnodr_tx_desc mnodr_tx_gray">주문자명</span>
                                                        </dt>
                                                        <dd>
                                                            <p className="mnodr_tx_desc" id="ordpeNmStr">
                                                                {user.name}
                                                            </p>
                                                        </dd>
                                                    </dl>
                                                    <dl className="mnodr_dl_desc">
                                                        <dt>
                                                            <span className="mnodr_tx_desc mnodr_tx_gray">연락처</span>
                                                        </dt>
                                                        <dd>
                                                            <p className="mnodr_tx_desc" id="ordpeHpnoStr">
                                                                {user.phone}
                                                            </p>
                                                        </dd>
                                                    </dl>
                                                    <dl className="mnodr_dl_desc">
                                                        <dt>
                                                            <span className="mnodr_tx_desc mnodr_tx_gray">이메일</span>
                                                        </dt>
                                                        <dd>
                                                            <p className="mnodr_tx_desc" id="ordpeEmailStr">
                                                                {user.email}
                                                            </p>
                                                        </dd>
                                                    </dl>
                                                    <dl className="mnodr_dl_desc">
                                                        <dt>
                                                            <span className="mnodr_tx_desc mnodr_tx_gray">품절시 환불</span>
                                                        </dt>
                                                        <dd>
                                                            <p className="mnodr_tx_desc">
                                                                <span id="rfdMthdStrArea">
                                                                    주문 시 결제수단으로 환불받기</span>
                                                            </p>
                                                        </dd>
                                                        <dd style={{display: "none"}}>
                                                            <span className="codr_inp_rdo">
                                                                <input type="radio" id="rdoRefund_10"
                                                                    name="ord.rfdMthdCd" /><label>주문 시
                                                                    결제수단으로 환불받기</label>
                                                            </span>
                                                            <span className="codr_inp_rdo">
                                                                <input type="radio" id="rdoRefund_20"
                                                                    name="ord.rfdMthdCd" /><label>SSG MONEY로 자동환불
                                                                    받기</label>
                                                            </span>
                                                            <span className="codr_inp_rdo" style={{display: "none"}}>
                                                                <input type="radio" id="rdoRefund_30"
                                                                    name="ord.rfdMthdCd" /><label>고객계좌로 환불받기</label>
                                                            </span>
                                                        </dd>
                                                    </dl>
                                                </div>
                                            </div>
                                        </div>
                                        <input type="hidden" id="rfdMthdCdChk" name="rfdMthdCdChk" />
                                    </article>
                                </li>
                            </ul>

                            <ul className="mnodr_article_list fullOrdArea" id="ordPageShppRcptInfoDiv_1">
                                <li className="mnodr_article_item">
                                    <article className="mnodr_article mnodr_delivery_infos">
                                        <div className="mnodr_article_head">
                                            <div className="mnodr_article_headlt">
                                                <h2 className="mnodr_tx_tit">배송 요청사항</h2>
                                            </div>
                                            <div className="mnodr_article_headrt">
                                                <button type="button"
                                                    className="mnodr_btn ty_grayline ty_xxs payTracking"
                                                    data-pt-click="주문서|배송요청사항|변경" name="btnShowTgtDiv"
                                                    data-target-div="rcptInfoDiv_1">
                                                    변경
                                                </button>
                                            </div>
                                        </div>
                                        <div className="mnodr_article_cont ty_pull">
                                            <div className="mnodr_form_sec">
                                                <dl className="mnodr_dl_desc">
                                                    <dt>
                                                        <span className="mnodr_tx_desc mnodr_tx_gray">택배배송 요청사항</span>
                                                    </dt>
                                                    <dd>
                                                        <p className="mnodr_tx_desc" id="deliShppMemoTxt_0">
                                                            없음
                                                        </p>
                                                        <input type="hidden" id="deliShppMemo_0"
                                                            name="shpploc[0].deliShppMemo" />
                                                    </dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </article>
                                </li>
                            </ul>


{/* 유저데이터 맵돌리기 */}
{userData.map((data)=>
<ul className="mnodr_article_list fullOrdArea">
    <li className="mnodr_article_item">
        <article className="mnodr_article">
            <div className="mnodr_article_head">
                <div className="mnodr_article_headlt">
                    <h2 className="mnodr_tx_tit">택배배송</h2>
                </div>
            </div>

            <div className="mnodr_article_cont ty_pull">
                <div className="mnodr_form_sec">
                    <div className="mnodr_unit">


                        <div className="mnodr_unit_item">
                            <div className="mnodr_unit_thmb">
                                <span className="mnodr_unit_img" aria-hidden="true">
                                    <img src={data.thumbnail} alt="JMW 매직컬 W2010ME 무빙쿠션 고데기" width="85" height="85" />
                                </span>
                            </div>
                            <div className="mnodr_unit_cont">
                                <div className="mnodr_unit_info ty2">
                                    <span className="cm_mall_text">
                                        <i className="sm">신세계</i>
                                    </span>

                                    <em id="dispSalestrNm_1">
                                    {data.manufactureCompany}  
                                    </em>
                                </div>
                                <p className="mnodr_unit_tit">
                                    <a>
                                        <strong style={{marginRight:'7px'}} className="mnodr_unit_brd">  
                                        {data.manufactureCompany}   
                                        </strong>
                                        <span className="mnodr_unit_name">
                                        {data.productName}
                                        </span>
                                    </a>
                                </p>

                                <span className="mnodr_unit_option mnodr_tx_point" id="shppRsvtType_1_1_50_"
                                    style={{display: "none"}}>
                                </span>

                                <span className="mnodr_unit_option">{/* 옵션넣기 */}</span>

                                <div className="mnodr_unit_prdpay ty_space">
                                    <div className="mnodr_unit_l">
                                        <div className="mnodr_unit_newprice ty2">
                                            <span className="blind">판매가격</span><em
                                                className="ssg_price">{(data.newPrice).toLocaleString()}</em><span
                                                className="ssg_tx"> 원</span>
                                        </div>
                                    </div>
                                    <div className="mnodr_unit_r">
                                        <span className="mnodr_unit_option">수량 {data.cartCount}개</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </article>

    </li>




</ul>
)}
                           



                            <div className="mnodr_toolbar2" id="divOrdToolbar">
                                <div className="mnodr_btn_area">

                                    <button onClick={handleOrder} type="button" className="mnodr_btn ty_point ty_m payTracking"
                                        data-pt-click="주문서|웹바|결제하기" name="processPaymtButton">
                                        <span className="mnodr_btn_tx">
                                            <em
                                                className="ssg_price paySummaryPayAmt paySummaryTgtPaymtAmt">{cartTotalPrice.toLocaleString()}</em><span
                                                className="ssg_tx">원</span> 결제하기</span>
                                        <span className="mnodr_btn_tx6 cardDcInfoAmtDiv" style={{display: "none"}}>(<em
                                                className="ssg_price paySummaryPayCardDcAmt">0</em><span
                                                className="ssg_tx">원</span> 청구예상)</span>
                                        <span className="mnodr_btn_tx6 tgtPaymtCardDcInfoAmtDiv"
                                            style={{display: "none"}}>(<em
                                                className="ssg_price paySummaryTgtPaymtCardDcAmt">0</em><span
                                                className="ssg_tx">원</span> 청구예상)</span>
                                    </button>
                                </div>
                            </div>


                        </div>
                    </form>

                </div>
            </div>
            :
            ""
            }


            <div id="divFooter">
                <div id="mcom_footer">
                    <div className="mcom_footer mcom_footer_order mcom_footer_order_v2 ty_bg">
                        <div className="mcom_mall_wrap v2">
                            <div className="mcom_noti_wrap">
                                <p className="mcom_noti_txt">
                                    ㈜에스에스지닷컴에서 판매되는 상품 중에는 개별 판매자가
                                    판매하는 오픈마켓 상품이 포함되어 있습니다.
                                </p>
                                <p className="mcom_noti_txt">
                                    오픈마켓 상품의 경우, ㈜에스에스지닷컴은
                                    통신판매중개자로서 거래 당사자가 아니며, 입점 판매사가
                                    등록한 상품정보 및 거래 등에 대해 책임을 지지 않습니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <input type="hidden" id="isOrdMakeItem" />
            </div>
        </div>
     );
}

export default BuyPage2;