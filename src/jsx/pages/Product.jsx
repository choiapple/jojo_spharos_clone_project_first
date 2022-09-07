import React, { Link, useEffect } from "react";
import ProductImgHeaderBtn from "../common/ui/button/ProductImgHeaderBtn";
import ProductSwiper from "../common/ui/ProductSwiper";
import ProductBrand from "../pages_layout/Product/ProductBrand";
import ProductCard from "../pages_layout/Product/ProductCard";
import ProductCategory from "../pages_layout/Product/ProductCategory";
import ProductDetailInfo from "../pages_layout/Product/ProductDetailInfo";
import ProductEtcExplain from "../pages_layout/Product/ProductEtcExplain";
import ProductEndlessGoods from "../pages_layout/Product/ProductEndlessGoods";
import ProductExplain from "../pages_layout/Product/ProductExplain";
import ProductManySee from "../pages_layout/Product/ProductManySee";
import ProductDetailEtc from "../pages_layout/Product/ProductDetailEtc";
import ProductReview from "../pages_layout/Product/ProductReview";
import ProductDetailReview from "../pages_layout/Product/ProductDetailReview";
import ProductQna from "../pages_layout/Product/ProductQna";
import ProductEvent from "../pages_layout/Product/ProductEvent";
import ProductSpecial from "../pages_layout/Product/ProductSpecial";
import Floating from "../common/ui/floating/Floating";
import ProductToolbar from "../common/ui/productToolbar/ProductToolbar";
import ProductOptBar from "../common/ui/productoptbar/ProductOptBar";
import ShareBtn from "../common/ui/button/ShareBtn";
import ProductBackButton from "../common/ui/button/ProductBackButton";
import ProductLikeCouponBtn from "../common/ui/button/ProductLikeBtn";
import ProductLikeCouponSection from "../pages_layout/Product/ProductLikeCouponSection";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import LoginContext from "../../context/login.context";
import Swal from "sweetalert2";
import BuyPage from "./BuyPage";
import '../../css/product.css'

import { cartCountState } from "../../recoil/atom/cartCountState";
import { useRecoilState } from "recoil";
import Server from "../../server/server";

import Loading from "./Loading";


function Product() {

  
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const auth = useContext(LoginContext);
  const pa = useParams();
  const [pdtDetail, setPdtDetail] = useState();
  const [pdtOption, setPdtOption] = useState();
  /* 누르면 각 사이즈별로 수량체크박스 관리 */
  const [selectedData, setSelectedData] = useState([]);
  const [selectedData2, setSelectedData2] = useState([]);

/*   const [optionWrap, setOptionWrap] = useState();
  const [option1, setOption1] = useState();
  const [option2, setOption2] = useState();
  const [sizeData, setSizeData] = useState(); */



  /* `http://localhost:8080/api/productoptionbyproduct/${pa.id}` */
  const token = localStorage.getItem('token')
  const[url, setUrl] = useState();
  useEffect(()=>{

    axios.all([
      axios.get(`${Server.baseUrl}api/product/detail/${pa.id}`,{headers: {"Authorization": token}}),
      axios.get(`${Server.baseUrl}api/productoptionbyproduct/${pa.id}`,{headers: {"Authorization": token}})
    ]) 
    .then(axios.spread((Response,Response2)=>{

      setPdtDetail(Response.data)
      setPdtOption(Response2.data)
      setLoading(!false)
    }))
    
    .catch(Error => {
      console.log(Error)
    })
  },[url])

 
 
  const isOption = pdtOption && pdtOption.productOption1Name;
  const sizeOpt = pdtOption && pdtOption.options;
  const sizeLength = pdtOption && sizeOpt.length;


 
  const [openBuy, setOpenBuy] = useState(false);
  const handleBuy = () =>{
    if(selectedData.length !== 0){
      if(auth.token){
        setOpenBuy(!openBuy)
      }else{
        navigate("/login")
      }
      
    }else{
      Swal.fire({
        title: '바로구매',  
            text: `옵션을 선택해주세요.`,
            icon: 'error'
      })
    }
   
  }
 


  const [isShow, setIsShow] = useState(true);
  const [toggleOn, setToggleOn] = useState("")
  const openBuyBtn = () => {
    setIsShow(!isShow)
    setToggleOn("on")
  }
  const closeBuyBtn = () => {
    setIsShow(!isShow)
    setToggleOn("")
  }


  
  /* 옵션메뉴 활성화 */
  const [size, setSize] = useState(false);
  const handleSize = () =>{
    setSize(!size)
  }





  
 
 
  /* map은 배열로 반환 */
  /* forEach은 리턴값만 반환 */
  const addSize = (e) => {
    let tmp = 0;
    selectedData.forEach((data)=>
      {
        if(data.productOption === e.optionId){
          alert("이미 선택한 옵션입니다.");
          tmp = 1;
        }
      }
    )
    if(tmp === 0){
      setSelectedData([...selectedData,{product:pdtDetail.id,cartCount:1, productOption:e.optionId}])
      setSelectedData2([...selectedData2,{product:pdtDetail.id,cartCount:1, productOption:e.optionId, option:e.productOption1Contents}])
    }
    setSize(!size)
  }



 


  const removeSize = (e) => {
    let tmp = selectedData.filter((data)=>
        data.productOption !== e.productOption
    )
    let tmp2 = selectedData2.filter((data)=>
        data.productOption !== e.productOption
    )
    setSelectedData(tmp)
    setSelectedData2(tmp2)
  }  



 

  /* 옵션 여러개의 경우 개별 수량체크 */

  const addCnt = (e) => {
    setSelectedData(selectedData.map((data)=> 
    data.productOption === e.productOption ? {...data, cartCount: data.cartCount + 1 } : data))
    setSelectedData2(selectedData2.map((data)=> 
    data.productOption === e.productOption ? {...data, cartCount: data.cartCount + 1 } : data))
  }



  const decCnt = (e) => {
    setSelectedData(selectedData.map((data)=> 
    data.productOption === e.productOption && data.cartCount > 1 ? {...data, cartCount: data.cartCount - 1 } : data))
    setSelectedData2(selectedData2.map((data)=> 
    data.productOption === e.productOption && data.cartCount > 1? {...data, cartCount: data.cartCount - 1 } : data))
  } 
 
  

   /* 최종 결제 금액 */
   let initialTotalPrice = 0;
   selectedData.forEach((data) => {
     initialTotalPrice =initialTotalPrice + ((pdtDetail.newPrice) * data.cartCount)
   })
   const [totalNewPrice, setTotalNewPrice] = useState(initialTotalPrice);
   useEffect(() => {
    setTotalNewPrice(initialTotalPrice)
   }, [decCnt])
   




  const [cartC,setCartC] = useRecoilState(cartCountState);
  console.log(selectedData)
  /* 장바구니 추가 */

  const addCart = () => {
    if(auth.token){
      if(selectedData.length !== 0){
        axios.post(`${Server.baseUrl}api/cart/add`, {
          "cartProductListAddDtoList": selectedData,
        }, {
          headers: {
            "Authorization": token
          }
        }).then(response => {
          console.log(response.data)
          alert("장바구니에 추가되었습니다")
          setCartC({...cartC,cartC:!cartC.cartC})
        })
      }else{
        Swal.fire({
          title: '장바구니',  
              text: `옵션을 선택해주세요.`,
              icon: 'error'
        })
      }
    }else{
      navigate("/login")
    }
    
  }

  console.log(pdtOption)
  return (
    <>

        {loading ?
        
        (openBuy?
          <BuyPage pdtDetail={pdtDetail} selectedData={selectedData}/>
         :
           <>
           <div id="m_wrap" className="mcom_wrap sm_v3">
             <div id="m_container" className="mcom_container">
               <div className="ly_change">
                 <div className="tit_change">
                   <h3>대체 상품</h3>
                   <a className="btn_close" target="">
                     <span className="blind">닫기</span>
                   </a>
                 </div>
                 <div className="cont_change" style={{ height: "630px" }}>
                   <div className="mcom_scroll"></div>
                 </div>
               </div>
     
               <div id="m_content" className="react-area">
                 <div className="mndtl_wrap ty_default">
                   <h2 className="blind">상품상세</h2>
                   <ProductImgHeaderBtn />
                   <ProductSwiper productPhotoList={pdtDetail.productPhotoList}/>
                   <ProductExplain pdtDetail={pdtDetail}/>
                   <ProductCard />
                   <div className="mndtl_sec mndtl_cont_wrap" id="detailDescTab">
                     <ProductDetailInfo pdtDetail={pdtDetail} />
                     <ProductDetailReview pdtDetail={pdtDetail}/>
                     <ProductQna qnaList={pdtDetail.qnaList}/>
                     <div className="mndtl_sec_cont">
                       <ProductDetailEtc />
                    
                       
                     </div>
                    
                     <ProductEndlessGoods />
                   </div>
                 </div>
                 <ProductReview />
                 <ProductReview />
               </div>
               <ProductEtcExplain />
             </div>
             <ProductBackButton />
           </div>
     
     
           <ProductOptBar />
           <Floating />
         
           <div className="wrap">
             <div className="mndtl_opt_btm _js_mndtl_opt_btm react-area" >
               <div className="opt_btm_bgn">
                 {isShow ?
                 <div className="btm_bgn_in dps1">
                   <ul className="btm_bgn_bx type_other1">
                     <li className="ty_like">
                       <span className="cmlike _js_cmlike interestIt clickable">
                         <button className="cmlike_btn _js_cmlike_btn enp_mobon_wish">
                           <span className="cmlike_ico">
                             <i className="cmlike_primary_l"></i>
                             <span className="sr_off">
                               <span className="blind">관심상품 취소</span>
                             </span>
                             <span className="sr_on">
                               <span className="blind">관심상품 등록</span>
                             </span>
                           </span>
                         </button>
                       </span>
                     </li>
                     <li>
                       <a className="mndtl_btn type05 line type_gift _js_mndtl_opt_toggle_btn clickable"
                         target="_parent">
                         <span className="btn_tx">
                           <i className="ico_gift_box_btm"></i>선물하기
                         </span>
                       </a>
                     </li>
                     <li>
                       <a className="mndtl_btn type01 line _js_mndtl_opt_toggle_btn clickable" target="_parent"
                         onClick={openBuyBtn}>
                         <span className="btn_tx">구매하기</span>
                       </a>
                     </li>
                   </ul>
                 </div>
                 :
                 <div className="btm_bgn_in dps2">
                   <ul className="btm_bgn_bx" id="dps2_gift" style={{ display: "none" }}>
                     <li>
                       <a className="mndtl_btn type01 clickable" target="_parent">
                         <span className="btn_tx">선물하기</span>
                       </a>
                     </li>
                   </ul>
                   <ul className="btm_bgn_bx" id="dps2_buy">
                     <li onClick={addCart}>
                       <a className="mndtl_btn type02 clickable" target="_parent">
                         <span className="btn_tx">장바구니</span>
                       </a>
                     </li>
                     <li>
                       <div className="mndtl_btn type01 clickable">
                         <span className="btn_tx ssgpay" onClick={handleBuy}>
                           <i className="ico_txt_ssgpay_btm">
                             <span className="blind">SSGPAY.</span>
                           </i>
                           바로구매
                         </span>
                       </div>
                     </li>
                   </ul>
                 </div>
                 }
 
 
               </div>
             </div>
             <div id="_cdtl_opt_bar" style={{zIndex:'500'}} className={`mndtl_opt_bar _js_mndtl_opt_bar react-area
               ${toggleOn}`}>
 
               <div className="mndtl_opt_close">
                 <a onClick={closeBuyBtn} className="mndtl_btn_opt_close _js_mndtl_opt_toggle_btn clickable"><span
                     className="blind">열기/닫기</span></a>
               </div>
               <div className="mndtl_opt_wrap _js_opt_wrap">
                 <div id="cdtl_scr1" className="mndtl_scr_area">
                   <div className="mndtl_scroll">
 
                     <div className="mndtl_addbenefit"></div>
                     {/* 옵션박스 */}
                    
 
 
                   
                     {/*  옵션이있는경우  */}
                     <>
                       <div className="mndtl_opt_group">
                         <div id="frebieSelectArea"></div>
                         <div className="mndtl_opt_comp" id="_ordCacOpt_area">
                           <div className="mndtl_opt_item" data-optn-type="uitem">
                             <div className="mndtl_ingrp" id="_opt_area">
                               <div className="mndtl_drop_sel" onClick={handleSize} id="_ordOpt_area2">
                                 <select id="ordOpt2" className="_dropdown2" title="사이즈" style={{display: 'none'}}>
                                   <option data-tarea="드롭다운" value="">
                                     선택하세요. (사이즈)
                                   </option>
                                   <option data-tarea="드롭다운" value="L" disabled="">
                                     L(품절)
                                   </option>
                                   <option data-tarea="드롭다운" value="M">
                                     M (남은 수량: 48개)
                                   </option>
                                   <option data-tarea="드롭다운" value="S">
                                     S (남은 수량: 23개)
                                   </option>
 
                                 </select>
                                 <a className="mndtl_opt_select clickable">
                                   {pdtOption.productOption1Name === null ?
                                   <span className="mndtl_opt_txt">단일품목</span>
                                   :
                                   <span className="mndtl_opt_txt">선택하세요. ({pdtOption.productOption1Name})</span>
                                   }

                                 </a>
                               </div>
                             </div>
                           </div>
                           <div id="cmptSelectArea"></div>
                         </div>
                         <div className="mndtl_opt_bx">
                           <div id="cdtl_opt_bx_uitem">
 
                           {selectedData2 && selectedData2.map((s) =>
                              <div key={s.optionId} className="mndtl_opt_ani add">
                                <div className="mndtl_opt_selected active">
 
                                   <dl>
                                    <dt>{pdtDetail.productName} {s.option}</dt>
                                    <dd className="mndtl_art_l">
                                      <div className="mndtl_amount">
                                        <a  onClick={()=>decCnt(s)} className="mndtl_b_minus clickable">빼기</a>
                                        <span className="mndtl_opa_area">
                                          <span className="opa_tx">{s.cartCount}</span>
                                        </span>
                                        <a onClick={()=>addCnt(s)} className="mndtl_b_plus clickable">더하기</a>
                                      </div>
                                    </dd>
 
                                    <dd className="mndtl_art_r">
                                      <span className="price">
                                        <em className="ssg_price" data-prc="44940"></em>
                                        <span className="ssg_tx">{(pdtDetail.newPrice*s.cartCount).toLocaleString()}원</span>
                                      </span>
                                    </dd>
                                  </dl>
                                
                                 
 
                                  <a  onClick={()=>removeSize(s)}  className="mndtl_item_del"><span
                                      className="mndtl_delete">삭제</span></a>
                                </div>
                              </div>
                           )}
                             
                          
 
 
                           </div>
                           <div id="cdtl_opt_bx_cmpt"></div>
                         </div>
                       </div>
                       <div className="mndtl_opt_bar">
                         <div className={size ? "mndtl_ly_opt bottom0" : "mndtl_ly_opt"}>
                           <div className="mndtl_ly_opt_close"  onClick={handleSize}>
                             <a  className="mndtl_btn_ly_opt_close" target="">
                               <span className="blind">닫기</span>
                             </a>
                           </div>
                           <a className="mndtl_opt_select clickable">
                                   {pdtOption.productOption1Name === null ?
                                   <span className="mndtl_opt_txt">단일품목</span>
                                   :
                                   <span className="mndtl_opt_txt">선택하세요. ({pdtOption.productOption1Name})</span>
                                   }

                                 </a>
                           <div className="mndtl_scr_area2">
                             <div className="mndtl_scroll">
                               <ul className="mndtl_select_lst">
 
 
                  
 
                                 {sizeOpt && sizeOpt.map((s,idx) =>
                                    <li onClick={()=>addSize(s)} key={s.optionId} className = {s.stock > 0 ? "" : "disabled"}>
                                      <span className="mndtl_sel_item">
                                        <span className="mndtl_sel_txt">

                                        {pdtOption.productOption1Name === null ? 
                                        <span className="mndtl_txt">{pdtDetail.productName}</span>
                                        :
                                        <span className="mndtl_txt">{s.productOption1Contents}</span>
                                        }
                                          
                                        </span>
 
                                       {s.stock > 0 ?
                                       <span className="mndtl_sel_price">
                                       <span className="">남은 수량 : {s.stock}개</span>
                                     </span>
                                       :
                                       
                                       <span className="mndtl_sel_price">
                                          <a href="//m.ssg.com/myssg/activityMng/itemNotiReg.ssg?itemId=1000057551445&amp;salestrNo=6005&amp;siteNo=6004"
                                            className="mndtl_btn_stock clickable">입고알림</a>
                                        </span>
                                       }
                                        
                                      </span>
                                    </li> 
                                 )}
 
 
 
 
                               </ul>
                             </div>
                           </div>
                         </div>
                       </div>
                     </>
                     
                   
                 
                   </div>
                 </div>
                 <div className="mndtl_total">
                   <strong className="mndtl_label">총 합계</strong>
                   <strong className="price"><em id="totalPrc" className="ssg_price"></em><span
                       className="ssg_tx">{totalNewPrice.toLocaleString()}원</span></strong>
                 </div>
               </div>
 
 
 
               <div className="mndtl_ly_opt">
                 <div className="mndtl_ly_opt_close">
                   <a  className="mndtl_btn_ly_opt_close" target="">
                     <span className="blind">닫기</span>
                   </a>
                 </div>
                 <a className="mndtl_opt_select clickable">
                                   {pdtOption.productOption1Name === null ?
                                   <span className="mndtl_opt_txt">단일품목</span>
                                   :
                                   <span className="mndtl_opt_txt">선택하세요. ({pdtOption.productOption1Name})</span>
                                   }

                                 </a>
                 <div className="mndtl_scr_area2">
                   <div className="mndtl_scroll">
                     <ul className="mndtl_select_lst">
                       <li className="disabled" data-index="1">
                         <span className="mndtl_sel_item">
                           <span className="mndtl_sel_txt">
                             <span className="mndtl_txt">네이비블랙(품절)</span>
                           </span>
                           <span className="mndtl_sel_price">
                             <a href="//m.ssg.com/myssg/activityMng/itemNotiReg.ssg?itemId=1000057551445&amp;salestrNo=6005&amp;siteNo=6004"
                               className="mndtl_btn_stock clickable">입고알림</a>
                           </span>
                         </span>
                       </li>
                       <li className="disabled" data-index="2">
                         <span className="mndtl_sel_item">
                           <span className="mndtl_sel_txt">
                             <span className="mndtl_txt">멀티그레이(품절)</span>
                           </span>
                           <span className="mndtl_sel_price">
                             <a href="//m.ssg.com/myssg/activityMng/itemNotiReg.ssg?itemId=1000057551445&amp;salestrNo=6005&amp;siteNo=6004"
                               className="mndtl_btn_stock clickable">입고알림</a>
                           </span>
                         </span>
                       </li>
                       <li data-index="3" data-react-unit-type="text"
                         data-react-unit-text='[{"type":"tarea_addt_val","value":"드롭다운_선택"}]'>
                         <span className="mndtl_sel_item">
                           <span className="mndtl_sel_txt clickable">
                             <span className="mndtl_txt">멜란그린</span>
                           </span>
                         </span>
                       </li>
                       <li className="disabled" data-index="4">
                         <span className="mndtl_sel_item">
                           <span className="mndtl_sel_txt">
                             <span className="mndtl_txt">핑키베이지(품절)</span>
                           </span>
                           <span className="mndtl_sel_price">
                             <a href="//m.ssg.com/myssg/activityMng/itemNotiReg.ssg?itemId=1000057551445&amp;salestrNo=6005&amp;siteNo=6004"
                               className="mndtl_btn_stock clickable">입고알림</a>
                           </span>
                         </span>
                       </li>
                     </ul>
                   </div>
                 </div>
               </div>
            
               <div className="mndtl_ly_opt">
 
                 <div className="mndtl_ly_opt_close">
                   <a  className="mndtl_btn_ly_opt_close" target=""><span className="blind">닫기</span></a>
                 </div>
                 <a  className="mndtl_opt_select clickable">
                    {pdtOption.productOption1Name === null ? 
                    <span className="mndtl_opt_txt">단일품목</span>
                    :
                    <span className="mndtl_opt_txt">선택하세요. ({pdtOption.productOption1Name})</span>
                    }
                   
                 </a>
 
                 <div className="mndtl_scr_area2">
                   <div className="mndtl_scroll">
                     <ul className="mndtl_select_lst">
 
                 
                         <li className="disabled">
                           <span className="mndtl_sel_item">
                             <span className="mndtl_sel_txt">
                               <span className="mndtl_txt"></span>
                             </span>
                             <span className="mndtl_sel_price">
 
                               {/* <span> 남은수량 : {sizeData.option2[0].stock}</span> */}
 
                               <a href="//m.ssg.com/myssg/activityMng/itemNotiReg.ssg?itemId=1000057551445&amp;salestrNo=6005&amp;siteNo=6004&amp;uitemId=00007"
                                 className="mndtl_btn_stock clickable">입고알림</a>
 
                             </span>
                           </span>
                         </li>
                     
                    
                     </ul>
                   </div>
                 </div>
               </div>
 
             </div>
           </div>
 
 
           <ProductLikeCouponBtn />
           <ProductLikeCouponSection />
           <ShareBtn />
           </>)
         
         :
         <Loading />
        }
     
 
     
  
    </>
  );
}

export default Product;
