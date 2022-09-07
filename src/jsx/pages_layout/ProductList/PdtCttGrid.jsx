import axios from 'axios';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect,useState  } from "react";
import queryString from 'query-string';
import Server from '../../../server/server';


function PdtCttGrid() {
    const [url, setUrl] = useState() 
    const location = useLocation();
    const query = queryString.parse(location.search);
    const [productList, setProductList] = useState();
    const token = localStorage.getItem('token')
    const [keyword, setKeyword] = useState()

    useEffect(()=>{
        setKeyword(query.keyword)
    },[location])

    useEffect(()=>{
        setUrl(`${Server.baseUrl}api/product/search?keyword=${query.keyword}`)
    },[keyword])
    useEffect(()=>{
        axios.get(url,{
            headers:{
                "Authorization" : token
            }
        })  
        .then(Response =>{
            setProductList(Response.data)
          
        })
    },[url])


    return ( 
        
        <div className="grid_infinite">
            <div className="grid_tabnav">
                <div className="cmctg_nav">
                    <div className="cmctg_top">
                        <h3>전체메뉴</h3>
                        <span className="cmctg_toggle">
                            <button type="button" aria-expanded="false">
                                <span className="btn_label ty_off"><span className="blind">메뉴 펼치기</span></span>
                                <span className="btn_label ty_on"><span className="blind">메뉴 접기</span></span>
                            </button>
                        </span>
                    </div>
                    <div className="cmctg_scroll">
                        <ul className="cmctg_menu">
                            <li className="cmctg_item">
                                <a href="#_section7200828153" id="_sectionTitle7200828153"
                                    className="clickable cmctg_lnk on" data-ctg-code="7200828153" data-cornr-id="7000706993"
                                    data-cornr-set-id="7200828153" data-cornr-set-name="MD추천" data-cornr-set-div-cd="10"
                                    data-react-tarea="기획전 상세|구분타이틀|구분타이틀_클릭|MD추천">
                                    <span className="cmctg_txt">MD추천</span>
                                </a>
                            </li>

                            <li className="cmctg_item">
                                <a href="#_section7200828154" id="_sectionTitle7200828154"
                                    className="clickable cmctg_lnk active" data-ctg-code="7200828154"
                                    data-cornr-id="7000706993" data-cornr-set-id="7200828154" data-cornr-set-name="수산"
                                    data-cornr-set-div-cd="10" data-react-tarea="기획전 상세|구분타이틀|구분타이틀_클릭|수산">
                                    <span className="cmctg_txt">수산</span>
                                </a>
                            </li>

                            <li className="cmctg_item">
                                <a href="#_section7200828155" id="_sectionTitle7200828155" className="clickable cmctg_lnk"
                                    data-ctg-code="7200828155" data-cornr-id="7000706993" data-cornr-set-id="7200828155"
                                    data-cornr-set-name="농산" data-cornr-set-div-cd="10"
                                    data-react-tarea="기획전 상세|구분타이틀|구분타이틀_클릭|농산">
                                    <span className="cmctg_txt">농산</span>
                                </a>
                            </li>

                            <li className="cmctg_item">
                                <a href="#_section7200828156" id="_sectionTitle7200828156" className="clickable cmctg_lnk"
                                    data-ctg-code="7200828156" data-cornr-id="7000706993" data-cornr-set-id="7200828156"
                                    data-cornr-set-name="축산" data-cornr-set-div-cd="10"
                                    data-react-tarea="기획전 상세|구분타이틀|구분타이틀_클릭|축산">
                                    <span className="cmctg_txt">축산</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="grid_container" style={{position: 'relative'}}>
                <div className="grid_section" id="_section7200828153" data-groupkey="1">
                    <div className="grid_heading">
                        <h3>MD추천</h3>
                    </div>
                    <div className="cmitem_grid">
                        <ul className="js_grid_items cmitem_grid_lst mnsditem_ty_thmb">

                          
                            {productList && productList.map((pl) => 

                               <Link to={`/product/${pl.id}`}>
                               <li key={pl.id} className="cmitem_grid_item">
                                   <div className="mnsditem_unit">
                                       <div className="mnsditem_helper">
                                       </div>
                                       <div className="mnsditem_goods">
                                           <div className="mnsditem_thmb">
                                               <a href="https://m-shinsegaemall.ssg.com/item/dealItemView.ssg?itemId=1000373056296&amp;siteNo=6004&amp;salestrNo=6005"
                                                   className="mnsditem_thmb_link clickable"
                                                   data-react-tarea="|상품_클릭|[쓱신]신선함 그대로 말복맞이! 굴비/오징어/먹태/새우外_1000373056296">
                                                   <div className="mnsditem_thmb_imgbx">
                                                       <img src={pl.thumbnailUri}
                                                           className="ssg_lazy mnsditem_thmb_img loaded" />
                                                   </div>
                                               </a>
                                               <div className="mnsditem_btn_like">

                                                   <span className="cmlike _js_cmlike interestIt">

                                                       <input type="hidden" name="attnDivCd" value="10" />
                                                       <input type="hidden" name="attnDivDtlCd" value="10" />
                                                       <input type="hidden" name="siteNo" value="6004" />
                                                       <input type="hidden" name="attnTgtIdnfNo1"
                                                           value="1000373056296" />
                                                       <input type="hidden" name="attnTgtIdnfNo2" value="6005" />
                                                       <input type="hidden" name="uitemId" value="00000" />
                                                       <input type="hidden" name="notiTitle"
                                                           value="[쓱신]신선함 그대로 말복맞이! 굴비/오징어/먹태/새우外" />
                                                       <input type="hidden" name="notiImgPath"
                                                           value="//sitem.ssgcdn.com/96/62/05/item/1000373056296_i1_500.jpg" />
                                                       <input type="hidden" name="checked" value="N" />
                                                       <input type="hidden" name="useForcedSsgYn" value="N" />

                                                       <button className="cmlike_btn _js_cmlike_btn clickable"
                                                           data-position="clip"
                                                           data-react-tarea="|상품_좋아요|[쓱신]신선함 그대로 말복맞이! 굴비/오징어/먹태/새우外_"
                                                           data-react-tarea-dtl-cd="t00003">
                                                           <span className="cmlike_ico">
                                                               <i className="cmlike_primary_m"></i>
                                                               <span className="sr_off"><span className="blind">관심상품
                                                                       취소</span></span>
                                                               <span className="sr_on"><span className="blind">관심상품
                                                                       등록</span></span>
                                                           </span>
                                                       </button>
                                                   </span>
                                               </div>


                                           </div>
                                           <div className="mnsditem_detail">
                                               <div className="mnsditem_maininfo">
                                                   <a href="https://m-shinsegaemall.ssg.com/item/dealItemView.ssg?itemId=1000373056296&amp;siteNo=6004&amp;salestrNo=6005"
                                                       className="mnsditem_maininfo_link">
                                                       <div className="mnsditem_tit">
                                                           <span className="cm_mall_text">
                                                               <i className="sm">{pl.mallName }</i>
                                                           </span>
                                                           <span className="mnsditem_goods_brand">{pl.manufactureCompany
                                                               }</span>
                                                           <span className="mnsditem_goods_tit">{pl.productName }</span>
                                                       </div>
                                                       <div className="mnsditem_pricewrap">
                                                               {pl.oldPrice ?<div
                                                                   className="mnsditem_price_row mnsditem_ty_oldpr">
                                                                   <div className="old_price">
                                                                       <del>
                                                                           <span className="blind">정상가격</span>
                                                                           <em className="ssg_price">{(pl.oldPrice).toLocaleString()}</em>
                                                                           <span className="ssg_tx">원</span>
                                                                       </del>
                                                                   </div>
                                                               </div> : ""}
                                                               <div className="mnsditem_price_row mnsditem_ty_newpr">
                                                                   <div className="new_price">
                                                                       <span className="blind">판매가격</span>
                                                                       <em className="ssg_price">{(pl.newPrice).toLocaleString()}</em>
                                                                       <span className="ssg_tx">원<span
                                                                               className="cm_tx_opt">~</span></span>
                                                                   </div>
                                                                   {pl.discountRate? <div className="discount_rate"><span
                                                                           className="blind">할인율</span><span>{pl.discountRate}%</span>
                                                                   </div> : ""}

                                                               </div>
                                                       </div>
                                                   </a>

                                               </div>
                                               
                                               <div className="mnsditem_sideinfo">

                                                    {pl.reviewScore?  <div className="mnsditem_review">
                                                       <div className="mnsditem_review_score">
                                                           <i className="icon ty_xs icon_star_fill" aria-hidden="true"></i>
                                                           <span className="blind">상품평점 5점 만점에</span>{pl.reviewScore }
                                                       </div>
                                                       <div className="mnsditem_review_num">
                                                           <span className="blind">상품평 개수</span>{pl.reviewNum }
                                                       </div>
                                                   </div> : ""}
                                                  


                                                   <div className="mnsditem_taglist">
                                                       {pl.fee ? "":<span className="mnsditem_tag">무료배송</span> }


                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </li>
                               </Link>
                            )}
                         
                         
                  



                        </ul>
                    </div>
                </div>
            </div>
            <div className="grid_loader">
                <div className="grid_loading">
                    <div className="dot1"></div>
                    <div className="dot2"></div>
                    <div className="dot3"></div>
                </div>
            </div>
        </div>
     );
}

export default PdtCttGrid;