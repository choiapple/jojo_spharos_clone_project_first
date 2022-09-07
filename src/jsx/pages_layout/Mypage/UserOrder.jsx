import React from 'react';

function UserOrder({myOrder}) {
    

    console.log(myOrder)
    return ( 
        <>
       {myOrder &&
        <div className="myssg_sec">
        <div className="myssg_sec_conts" id="divMyOrderSecConts">
            <a href="https://pay.ssg.com/m/myssg/orderInfo.ssg?_mpop=new"
                className="myssg_sec_title ty_order clickable" data-react-tarea="MYSSG|M_MY_SSG_주문배송조회">주문/배송
                조회</a>

            <div className="myssg_order_process">
                <ul className="myssg_process_list">
                    <li>
                        <span id="ordRcp" className={myOrder ? "myssg_process_count"
                            : "myssg_process_count ty_zero" }>{myOrder.length}</span>
                        <span id="ordRcpTxt" className="myssg_process_title">주문접수</span>
                        <a href="https://pay.ssg.com/m/myssg/orderInfo.ssg?searchType=6&amp;searchCheckBox=%2C15"
                            className="myssg_process_link" data-react-tarea="MYSSG|M_MY_SSG_주문배송조회_주문접수"><span
                                className="blind">주문접수
                                자세히보기</span></a>
                    </li>
                    <li>
                        <span id="paymtCmpt" className="myssg_process_count ty_zero">0</span>
                        <span id="paymtCmptTxt" className="myssg_process_title">결제완료</span>
                        <a href="https://pay.ssg.com/m/myssg/orderInfo.ssg?searchType=6&amp;searchCheckBox=%2C11"
                            className="myssg_process_link" data-react-tarea="MYSSG|M_MY_SSG_주문배송조회_결제완료"><span
                                className="blind">결제완료
                                자세히보기</span></a>
                    </li>
                    <li>
                        <span id="itemReady" className="myssg_process_count ty_zero">0</span>
                        <span id="itemReadyTxt" className="myssg_process_title">상품준비중</span>
                        <a href="https://pay.ssg.com/m/myssg/orderInfo.ssg?searchType=6&amp;searchCheckBox=%2C12"
                            className="myssg_process_link" data-react-tarea="MYSSG|M_MY_SSG_주문배송조회_상품준비중"><span
                                className="blind">상품준비중
                                자세히보기</span></a>
                    </li>
                    <li>
                        <span id="shpp" className="myssg_process_count ty_zero">0</span>
                        <span id="shppTxt" className="myssg_process_title">배송중</span>
                        <a href="https://pay.ssg.com/m/myssg/orderInfo.ssg?searchType=6&amp;searchCheckBox=%2C13"
                            className="myssg_process_link" data-react-tarea="MYSSG|M_MY_SSG_주문배송조회_배송중"><span
                                className="blind">배송중
                                자세히보기</span></a>
                    </li>
                    <li>
                        <span id="shppCmpt" className="myssg_process_count ty_zero">0</span>
                        <span id="shppCmptTxt" className="myssg_process_title">배송완료
                            <button className="myssg_question_btn myssg_modal_btn"
                                data-morph-target=".myssg_modal_completed">
                                <span className="blind">베송완료란</span>
                            </button></span>
                        <a href="https://pay.ssg.com/m/myssg/orderInfo.ssg?searchType=6&amp;searchCheckBox=%2C14"
                            className="myssg_process_link" data-react-tarea="MYSSG|M_MY_SSG_주문배송조회_배송완료"><span
                                className="blind">배송완료
                                자세히보기</span></a>
                    </li>
                </ul>
            </div>
            <div className="myssg_order_claim">
                <div className="myssg_claim_conts">
                    <span className="myssg_claim_title">취소</span>
                    <span className="myssg_claim_count ty_zero" id="cancelClaimCount">0</span>
                    <a href="https://pay.ssg.com/m/myssg/orderInfo.ssg?searchType=6&amp;searchCheckBox=%2C16"
                        className="myssg_claim_link" data-react-tarea="MYSSG|M_MY_SSG_주문배송조회_취소"><span
                            className="blind">취소
                            자세히보기</span></a>
                </div>
                <div className="myssg_claim_conts">
                    <span className="myssg_claim_title">교환</span>
                    <span className="myssg_claim_count ty_zero" id="exchangeClaimCount">0</span>
                    <a href="https://pay.ssg.com/m/myssg/orderInfo.ssg?searchType=6&amp;searchCheckBox=%2C18"
                        className="myssg_claim_link" data-react-tarea="MYSSG|M_MY_SSG_주문배송조회_교환"><span
                            className="blind">교환
                            자세히보기</span></a>
                </div>
                <div className="myssg_claim_conts">
                    <span className="myssg_claim_title">반품</span>
                    <span className="myssg_claim_count ty_zero" id="returnClaimCount">0</span>
                    <a href="https://pay.ssg.com/m/myssg/orderInfo.ssg?searchType=6&amp;searchCheckBox=%2C17"
                        className="myssg_claim_link" data-react-tarea="MYSSG|M_MY_SSG_주문배송조회_반품"><span
                            className="blind">반품
                            자세히보기</span></a>
                </div>
                <div className="myssg_claim_conts">
                    <span className="myssg_claim_title">구매확정<button
                            className="myssg_question_btn myssg_modal_btn"
                            data-morph-target=".myssg_modal_confirm">
                            <span className="blind">구매확정이란</span>
                        </button></span>
                    <span className="myssg_claim_count ty_zero" id="ordPurchDcsnCnt">0</span>
                    <a href="#" className="myssg_claim_link"><span className="blind"
                            data-react-tarea="MYSSG|M_MY_SSG_주문배송조회_구매확정">구매확정 자세히보기</span></a>
                </div>
            </div>

            {myOrder ? 
            
            myOrder.map((data,idx)=>

            <div key={idx} class="myssg_order_list">
                <div class="myssg_order_conts">
                    <a href="https://pay.ssg.com/m/myssg/orderInfo.ssg?_mpop=new" class="myssg_order_header">
                        <span class="myssg_order_date">{data.deliveryDate}</span>
                        <span class="myssg_order_status myssg_primary_text">주문접수</span>
                    </a>
                    <div class="myssg_order_item">

                    {data.ordersProductListGetIdDtoListEdit.map((orderPdtData)=>
                        <div class="myssg_unit_item">
                            <div class="myssg_unit_thmb">
                                <span class="myssg_unit_img" aria-hidden="true">
                                   
                                     <img src={orderPdtData.thumbnail} width="140" height="140"
                                        alt="우먼스 나이키 드라이 핏 에센셜 러닝 팬츠 AS NIKE DH6980-010"
                                        onerror="this.onerror=null;this.src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=500&amp;h=500&amp;t=1ec79c3423d0d0bb5cfce1a84b8605496eddb340'"
                                        id="itemImg_1000116370618" />
                                 
                                   </span>
                            </div>
                            <div class="myssg_unit_cont">
                                <div class="myssg_unit_info">
                                    <div class="myssg_unit_delivery_tx">
                                        <em>택배배송</em>
                                        <em> {orderPdtData.manufactureCompany}</em>
                                    </div>
                                </div>
                                <p class="myssg_unit_tit">
                                    <span class="cm_mall_text"><i class="sd">신세계백화점</i></span>
                                    <span class="myssg_unit_name">{orderPdtData.productName}</span>
                                </p>
                            </div>
                        </div>
                        )}
                    </div>
                </div>
            </div>
             )       
           
            :
            <a href="https://pay.ssg.com/m/myssg/orderInfo.ssg?_mpop=new" className="myssg_gray_btn"
                data-react-tarea="MYSSG|M_MY_SSG_주문배송조회_보러가기"><span className="myssg_btn_text">주문/배송조회
                    보러가기</span></a>
            }


            <div className="myssg_order_trip">
                <a href="https://m-triip.ssg.com/m/trip/myssg/tripRsvtInfo.ssg?_mpop=new">
                    <span className="myssg_trip_title">항공권 예약</span>
                    <span className="myssg_trip_count ty_zero">0</span>
                </a>
                <a href="https://m-triip.ssg.com/hotel/myssg/rsvtList.ssg?_mpop=new">
                    <span className="myssg_trip_title">호텔 예약</span>
                    <span className="myssg_trip_count ty_zero">0</span>
                </a>
            </div>
        </div>
        </div>
       }
           
      
        </> 
            
          
      
     );
}

export default UserOrder;