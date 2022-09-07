import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import FtUpBtn from "../../common/ui/button/floating/FtUpBtn";
import BuyPage2 from "../../pages/BuyPage2";
import CartTopBtn from "./CartTopBtn";

function CartModalToolbar({userData, toggle, cartTotalPrice}) {
  let l = userData.length;
  let totalPrice = 0;
  let totalFee = 0;
  const [tp, setTp] = useState(totalPrice);
  const [tf, setTf] = useState(totalFee);
  useEffect(()=>{
    totalPrice = 0;
    totalFee = 0;
    userData.forEach((data) =>{
      totalPrice = totalPrice + data.newPrice*data.cartCount
    })
    setTp(totalPrice);
    userData.forEach((data)=>{
      totalFee = totalFee + data.fee
    })
    setTf(totalFee);
 
  },[userData,toggle])
  
  
	const [toggleBtn, setToggleBtn] = useState(false);
	const handleToggle = () =>{
		setToggleBtn(!toggleBtn);
	}

  const [openBuy, setOpenBuy] = useState(false);
  const handleBuy = () =>{
    setOpenBuy(!openBuy)
  }
 

  
  return (
    <>
    {openBuy? 

     <BuyPage2 userData={userData} cartTotalPrice={cartTotalPrice}/>
    : 
     <div className={toggleBtn ? "mnodr_toolbar2":"mnodr_toolbar2 on"}>
      <CartTopBtn />
	 

      <div className="mnodr_toolbar_ctn">
        <button type="button" className="mnodr_toolbar_togglebtn" name="appBarBtn" onClick={handleToggle}>
          <i className="icon ty_xs icon_chevron_down">
            <span className="blind">앱바 펼치기</span>
          </i>
          <i className="icon ty_xs icon_chevron_up">
            <span className="blind">앱바 닫기</span>
          </i>
        </button>
        <div className="mnodr_toolbar_cont mnodr_toolbar_toggle">
          <div className="mnodr_toolbar_state">
            <div className="mnodr_txbox">
              <a
                href=""
                className="mnodr_tx_link2 mmbrs_tx_point cartTracking"
                data-tracking-cd="00044_000000094_t00060"
                data-tracking-value="멤버십가입하기"
              >
                <p className="mnodr_tx_flex mmbrs_tx_point">
                  <i className="badge ty_s badge_mmbrs_brown">
                    <span className="blind">스마일클럽</span>
                  </i>
                  <span className="mnodr_bene_desc">
                    <strong>
                      가입시 SSG MONEY 최대 <span className="totMbrspPoint">0</span>
                      원 적립
                    </strong>
                  </span>
                </p>
                <i className="icon ty_xs icon_chevron_right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="mnodr_toolbar_cont">
          <p className="mnodr_tx_desc" id="bar_price">
            <span className="mnodr_cnt">전체상품 {l}개</span>
            <span className="ssg_tx" id="toolbarCst">
              {tp.toLocaleString()}원 + 배송비 {tf.toLocaleString()}원 =
            </span>
            <span className="mnodr_tx_total">
              <span className="ssg_tx" id="toolbarTotCst">
                {" "}
                {(tp +tf).toLocaleString()}원
              </span>
            </span>
          </p>
          <p
            id="dmndDisplay"
            className="mnodr_tx_desc mnodr_tx_point"
            style={{display: "none"}}
          ></p>
        </div>
      </div>

      <div className="mnodr_btn_area">
        <button
          className="mnodr_btn ty_line ty_m cartTracking"
          id="mnodr_btn_gift2"
          data-tracking-cd="00044_000000094_t00060"
          data-tracking-value="선물하기"
        >
          <i className="icon ty_md icon_gift" aria-hidden="true"></i>
          <span className="mnodr_txt_gift">선물하기</span>
        </button>
        <button
          type="button"
          className="mnodr_btn ty_point ty_m cartTracking"
          name="btOrdCheckbox"
          data-prom-yn=""
          data-tracking-cd="00044_000000094_t00060"
          data-tracking-value="주문하기"
        >
          <span onClick={handleBuy} className="mnodr_btn_tx">주문하기</span>
        </button>
      </div>
    </div>
    }
    </>
   
  );
}

export default CartModalToolbar;