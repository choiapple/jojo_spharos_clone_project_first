import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import LoginContext from "../../../context/login.context";
import CartModalToolbar from "./CartModalToolbar";
import Server from "../../../server/server";

function CartData({ userData, setUserData, toggle, setToggle}) {
  const auth = useContext(LoginContext);
  let initialTotalPrice = 0;
  let initialTotalFee = 0;
  let initialTotalNewPrice = 0;
  userData.forEach((data) => {
    initialTotalPrice = initialTotalPrice + data.oldPrice*data.cartCount;
  })
  userData.forEach((data) => {
    initialTotalFee = initialTotalFee + data.fee;
  })
  userData.forEach((data)=>{
    initialTotalNewPrice = initialTotalNewPrice + data.newPrice*data.cartCount;
  })

  console.log(userData)
  let initialCount = userData.map((data) => data.cartCount);
  const [cnt, setCnt] = useState(initialCount);
  const [totalPrice, setTotalPrice] = useState(initialTotalPrice);
  const [totalFee, setTotalFee] = useState(initialTotalFee);
  const [totalNewPrice, setTotalNewPrice] = useState(initialTotalNewPrice);
  
  
 

  const handleDec =(idx,id) =>{
    if(cnt[idx] > 1){
      initialCount = cnt.map((data,i)=> i ===idx ? data-1:data);
      setCnt(initialCount);
      let tmp = totalPrice - userData[idx].oldPrice;
      let tmp2 = totalNewPrice - userData[idx].newPrice;
      setTotalNewPrice(tmp2);
      setTotalPrice(tmp);
      setToggle(!toggle);
      axios.put(`${Server.baseUrl}api/cart/edit`,{
        "plma": "minus",
        "id":id
      })
      
    }
  }

  const handlePlus = (idx,id) =>{
    if(userData[idx].stock > cnt[idx]){
      initialCount = cnt.map((data,i)=> i === idx ? data+1:data);
      setCnt(initialCount);
      let tmp = totalPrice + userData[idx].oldPrice;
      let tmp2 = totalNewPrice + userData[idx].newPrice;
      setTotalNewPrice(tmp2);
      setTotalPrice(tmp);
      setToggle(!toggle);
      axios.put(`${Server.baseUrl}api/cart/edit`,{
        "plma": "plus",
        "id": id
      })
    }else{
      alert(`재고수량이 ${userData[idx].stock}개 입니다.`)
    }
  }
  // 딜리트 구현 다시 해보기 바로 삭제 되는지
  const handleDelete = (idx,i) =>{
    if(window.confirm("해당 상품을 삭제하시겠습니까?")){
      let dD = userData.filter((data)=>{
        if(i !== data.id){
          return data
        }
      })
      let tmp = totalPrice - userData[idx].oldPrice*userData[idx].cartCount;
      let tmp2 = totalNewPrice - userData[idx].newPrice*userData[idx].cartCount;
      let tmp3 = totalFee - userData[idx].fee;
      setTotalFee(tmp3);
      setTotalPrice(tmp);
      setTotalNewPrice(tmp2);
      setUserData(dD);
      alert("삭제되었습니다.");
      axios.delete(`${Server.baseUrl}api/cart/delete/${i}`)
      setToggle(!toggle);
    }else{
      return null;
    }
    
  }
  const [totalBtn, setTotalBtn] = useState(false);
  const handleSelectBtn = () =>{
    setTotalBtn(!totalBtn);
  }
  useEffect(()=>{
  },[userData,toggle, totalPrice])



  const cartTotalPrice = totalNewPrice+totalFee;

  console.log(cartTotalPrice)
  return (
    <>
      {userData.length !== 0?
        <>
          <div className="mnodr_control_wrap">
            <div className="mnodr_control mnodr_sticky fixed3">
              <div className="mnodr_control_group">
                <span className="mnodr_chk">
                  <input
                    type="checkbox"
                    id="chk_all"
                    name="btChekAll"
                    className="blind cartTracking"/>
                  <label htmlFor="chk_all">
                    <span className="blind">모든상품전체선택</span>
                  </label>
                </span>
                <label className="mnodr_control_tx">
                  <span className="df">전체</span>
                  <span className="sm">전체</span>
                </label>

                <span className="mnodr_control_tx">
                  <a
                    href=""
                    className="mnodr_control_link layer_filter cartTracking">
                    <span className="mnodr_selbox_tx"> 배송방법바꾸기 </span>
                  </a>
                  <a
                    style={{ display: "none" }}
                    className="modal-fix-open"
                    data-layer-target="#_layerMoveProduct"></a>
                </span>
              </div>
              <span className="mnodr_control_delete">
                <span
                  className="df cartTracking"
                  name="btDelChekItemAll"
                  data-tracking-cd="00044_000000199_t00060"
                  data-tracking-value="품절상품삭제">
                  품절상품삭제
                </span>
                <a
                  href=""
                  className="sm cartTracking"
                  name="btDelChekItemAll"
                  data-tracking-cd="00044_000000199_t00060"
                  data-tracking-value="품절상품삭제">
                  품절삭제
                </a>
              </span>
            </div>

            <div
              id="_acdo_parcel"
              name="progress_20"
              className="mnodr_acdo v2 ty_parcel progress_20 addOrdTab addOrd_">
              <div className="mnodr_acdo_header">
                <label
                  className="mnodr_acdo_grplabel"></label>
                <span className="mnodr_chk ty_group">
                  <input
                    type="checkbox"
                    className="blind codr_inp_chk cartTracking"
                    name="btChekShppGrp"
                    id="20"/>
                  <label >
                    <span className="blind">택배배송상품전체선택</span>
                  </label>
                </span>
                <div className="mnodr_acdo_titwrap">
                  <div className="mnodr_acdo_titarea">
                    <label>
                      <span className="blind">택배배송상품전체선택</span>
                      <h3 className="mnodr_acdo_tit">택배배송</h3>
                    </label>

                    <p className="mnodr_acdo_subtit"></p>
                  </div>
                </div>
              </div>
              <div className="mnodr_acdo_cont">
            { userData &&
                userData.map((data,idx) =>(
                <div key={idx}>
                    <div className="mnodr_unit">
                    <div id=""
                        className="pay_item_area mnodr_unit_item">
                        <div className="mnodr_unit_thmb">
                        <span className="mnodr_chk">
                            <input
                            type="checkbox"
                            className="blind cartTracking"
                            id=""
                            name="cbCartId"/>
                            <label>
                            <span className="blind">상품선택</span>
                            </label>
                        </span>
                        <span className="mnodr_unit_img">
                            <img
                            src={data.thumbnail}
                            alt="론디 01"
                            id=""
                            width={75}
                            height={75}/>
                        </span>
                        </div>
                        <div className="mnodr_unit_cont">
                        <div className="mnodr_unit_info">
                            <span className="cm_mall_text">
                            <i className="sm">신세계몰</i>
                            </span>
                            <em></em>
                        </div>
                        <div className="mnodr_unit_util">
                            <button
                            type="button"
                            className="mnodr_unit_pin1 cartTracking"
                            name="btKeep">
                            <i className="mnodr_ic ic_pin">
                                <span className="blind">계속 담아두기</span>
                            </i>
                            </button>
                            <button type="button" className="mnodr_unit_del cartTracking" name="btnDel" onClick={()=>handleDelete(idx,data.id)}>
                            <i className="mnodr_ic ic_del">
                                <span className="blind">상품 삭제</span>
                            </i>
                            </button>
                        </div>

                        <p className="mnodr_unit_tit">
                            <a
                            className="cartTracking"
                            href=""
                            name="itemNmBtn">
                            <strong className="mnodr_unit_brd">
                                {data.manufactureCompany}
                            </strong>
                            <span className="mnodr_unit_name">{data.productName}</span>
                            </a>
                        </p>
                        <div className="mnodr_unit_prdpay">
                            <div className="mnodr_unit_l">
                            <div
                                className="mnodr_unit_oldprice"
                                style={{ display: "none" }}>
                                <del>
                                <span className="blind">정상가격</span>
                                <em className="ssg_price itemSellprc">{data.newPrice}</em>
                                <span className="ssg_tx">원</span>
                                </del>

                                <button
                                type="button"
                                className="mnodr_btn_detail modal-alert-open"
                               
                                >
                                <i className="mnodr_ic ic_detail">
                                    <span className="blind">자세히 보기</span>
                                </i>
                                </button>

                                <div
                                className="mnodr_modal ty_alert"
                                role="dialog"
                                
                                id="_layerDiscountInfo_5142465319">
                                <div
                                    className="mnodr_modal_wrap"
                                    role="document">
                                    <div className="mnodr_modal_cont">
                                    <h3 className="mnodr_modal_tit">
                                        할인내역 정보
                                    </h3>
                                    <dl className="mnodr_priceitem ty_narrow">
                                        <dt>
                                        <span className="mnodr_priceitem_stit">
                                            판매가
                                        </span>
                                        </dt>
                                        <dd>
                                        <strong className="mnodr_tx_primary">
                                            <em className="ssg_price itemSellprc">
                                            {(data.newPrice).toLocaleString()}
                                            </em>
                                            <span className="ssg_tx">원</span>
                                        </strong>
                                        </dd>
                                    </dl>

                                    <div className="prom_list"></div>

                                    <dl className="mnodr_priceitem ty_total">
                                        <dt>
                                        <span className="mnodr_priceitem_stit">
                                            최적가
                                        </span>
                                        </dt>
                                        <dd>
                                        <strong className="mnodr_tx_primary">
                                            <em className="ssg_price itemOrdAmt">
                                            {data.newPrice}
                                            </em>
                                            <span className="ssg_tx">원</span>
                                        </strong>
                                        </dd>
                                    </dl>
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
                            <div className="mnodr_unit_newprice">
                                <span className="blind">판매가격</span>
                                <em className="ssg_price itemOrdAmt">{(data.newPrice).toLocaleString()}</em>
                                <span className="ssg_tx">원</span>
                            </div>
                            </div>

                            <div className="mnodr_unit_r">
                            <div className="mnodr_amount">
                                <div className="mnodr_opa_area">
                                <span className="blind">현재수량</span>
                                <span className="mnodr_opa_tx ordQty" >{cnt[idx]}</span>
                                </div>

                                <button type="button"
                                name="btUpdOrdQtyMinus"
                                className="mnodr_btn_minus cartTracking" onClick={()=>handleDec(idx, data.id)}>
                                <i className="mnodr_ic ic_minus">
                                    <span className="blind">주문수량빼기</span>
                                </i>
                                </button>


                                <button
                                type="button"
                                name="btUpdOrdQtyPlus"
                                className="mnodr_btn_plus cartTracking" onClick={()=>handlePlus(idx,data.id)}>
                                <i className="mnodr_ic ic_plus">
                                    <span className="blind">주문수량더하기</span>
                                </i>
                                </button>


                            </div>
                            </div>
                        </div>

                        {/* <div className="mnodr_unit_orderstate">
                            <div className="mnodr_unit_deadline">
                            <i
                                className="icon ty_sm icon_alert"
                           
                            ></i>
                            <span className="mnodr_tx_point">
                                마감임박(남은수량:4)
                            </span>
                            </div>
                        </div> */}
                        <div className="mnodr_unit_btnarea ty_fillbtn">
                            <button
                            type="button"
                            name="btOrd"
                            className="mnodr_unit_btn ty_point cartTracking">
                            <span>바로구매</span>
                            </button>
                        </div>
                        <div className="mnodr_unit_detail"></div>
                        </div>
                    </div>
                    </div>
                    <div className="mnodr_acdo_summary" id="shppGrp0">
                    <strong className="mnodr_tx_gray4 notranslate">
                        <span className="ssg_price codr_subtotal_sum">
                        {(data.newPrice*cnt[idx]).toLocaleString()}원 + 배송비 {(data.fee).toLocaleString()}원 = {(data.newPrice*cnt[idx]+data.fee).toLocaleString()}원
                        </span>
                        <span className="ssg_tx">&nbsp;</span>
                    </strong>

                    <button
                        className="mnodr_acdo_smrybtn cartTracking"
                        type="button">
                        <p className="mnodr_tx_gray">배송비SAVE 상품보기</p>
                        <i className="mnodr_ic ic_arr ty_arr_right ty_arr_gray"></i>
                    </button>
                    </div>
                </div>
                ))
            }
            </div>
            </div>
          </div>
          <div className="mnodr_thickhr"></div>




          <div className="mnodr_total" id="cartInformation">
            <div className="mnodr_form_sec">
              <h3 className="mnodr_form_tit">
                <strong>결제 예정금액</strong>
              </h3>
              <dl className="mnodr_priceitem ty_narrow">
                <dt>
                  <span className="mnodr_priceitem_stit">주문금액</span>
                </dt>
                <dd>
                  <span className="mnodr_tx_primary">
                    +<em className="ssg_price viewAmt_sellprc">{totalPrice.toLocaleString()}</em>
                    <span className="ssg_tx">원</span>
                  </span>
                </dd>
              </dl>
              <dl className="mnodr_priceitem ty_narrow">
                <dt>
                  <span className="mnodr_priceitem_stit">상품할인</span>
                </dt>
                <dd>
                  <span className="mnodr_tx_primary">
                    -<em className="ssg_price viewAmt_dcprc">{(totalPrice-totalNewPrice).toLocaleString()}</em>
                    <span className="ssg_tx">원</span>
                  </span>
                </dd>
              </dl>
              <dl className="mnodr_priceitem ty_narrow">
                <dt>
                  <span className="mnodr_priceitem_stit">배송비</span>
                </dt>
                <dd>
                  <span className="mnodr_tx_primary">
                    +<em className="ssg_price viewAmt_shppcst">{totalFee.toLocaleString()}</em>
                    <span className="ssg_tx">원</span>
                  </span>
                </dd>
              </dl>
              <dl className="mnodr_priceitem ty_total">
                <dt>
                  <span className="mnodr_tx_point mnodr_priceitem_stit">
                    총 결제예정금액
                  </span>
                </dt>
                <dd>
                  <span className="mnodr_priceitem_total">
                    <em className="ssg_price viewAmt_paymt">{(totalNewPrice+totalFee).toLocaleString()}</em>
                    <span className="ssg_tx">원</span>
                  </span>
                </dd>
              </dl>
            </div>
          </div>




          <div className="mnodr_thickhr"></div>
          <div className="mnodr_buyoften v2" id="recommendationCartItem"></div>
          <div className="mnodr_thickhr"></div>
          <CartModalToolbar cartTotalPrice={cartTotalPrice} userData={userData} toggle={toggle}/>
        </>
        :
        <>
        </>
      }
    </>
  );
}

export default CartData;
