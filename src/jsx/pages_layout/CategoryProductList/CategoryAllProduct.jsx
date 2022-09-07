import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {useInView} from "react-intersection-observer";

function CategoryAllProduct({ product, pageData, setPageData}) {
  
  const [ref, inView] = useInView();
  useEffect(()=>{
    if(inView){
      setPageData(pre => pre+1)
    }
  },[inView])
 
  return (
    <div
      id="_infinite_grid"
      className="cmitem_grid"
      data-areaid="item_list"
      data-globalid="category">
      <ul
        className="cmitem_grid_lst mnsditem_ty_thmb"
        data-equal-height="true"
        style={{ position: "relative", height: "18679.1px" }}>
        {
          product && product.map((dataA)=>(
            dataA.length !== 0 &&
            dataA.map((data,idx) => (
                dataA.length ===idx+1
                ?
                <Link to={`/product/${data.id}`} >
                <li
              id="item_unit_1000201289197"
              data-page="1"
              className="cmitem_grid_item"
              data-groupkey="1"
              style={{ left: "0px", top: "0px"}} key={idx}
              ref={ref}>
              <div className="mnsditem_unit">
                <div className="mnsditem_helper"></div>
                <div className="mnsditem_goods">
                  <div className="mnsditem_thmb">
                    <a
                      href="/item/itemView.ssg?itemId=1000201289197&amp;siteNo=6004&amp;salestrNo=6005"
                      className="mnsditem_thmb_link clickable">
                      <div className="mnsditem_thmb_imgbx">
                        <img
                          src={`${data.thumbnailUri}`}
                          data-src="//sitem.ssgcdn.com/97/91/28/item/1000201289197_i1_500.jpg"
                          alt="이자벨마랑 여성 에뚜왈 만셀 에크루 후드티 SW0031 00M017E 23EC"
                          className="ssg_lazy mnsditem_thmb_img loading"
                          data-ll-status="loading"
                        />
                      </div>
                    </a>
                    <div className="mnsditem_btn_like">
                      <span className="cmlike _js_cmlike interestIt">
                        <button
                          className="cmlike_btn _js_cmlike_btn clickable"
                        >
                          <span className="cmlike_ico">
                            <i className="cmlike_primary_m"></i>
                            <span className="sr_off">
                              <span className="blind">관심상품 취소</span>
                            </span>
                            <span className="sr_on">
                              <span className="blind">관심상품 등록</span>
                            </span>
                          </span>
                        </button>
                      </span>
                    </div>
                  </div>
                  <div className="mnsditem_detail">
                    <div className="mnsditem_maininfo">
                      <a
                        href="/item/itemView.ssg?itemId=1000201289197&amp;siteNo=6004&amp;salestrNo=6005"
                        className="mnsditem_maininfo_link"
                      >
                        <div className="mnsditem_tit">
                          <span className="cm_mall_text">
                            <i className="sm">{data.mallName}</i>
                          </span>
                          <span className="mnsditem_goods_brand">
                            {data.manufactureCompany}
                          </span>
                          <span className="mnsditem_goods_tit">
                          {data.productName}
                          </span>
                        </div>
                        <div className="mnsditem_pricewrap">
                          {data.oldPrice ?<div className="mnsditem_price_row mnsditem_ty_oldpr">
                            <div className="old_price">
                              <del>
                                <span className="blind">정상가격</span>
                                <em className="ssg_price">{(data.oldPrice).toLocaleString()}</em>
                                <span className="ssg_tx">원</span>
                              </del>
                            </div>
                          </div>:<></>}
                          <div className="mnsditem_price_row mnsditem_ty_newpr">
                            <div className="new_price">
                              <span className="blind">판매가격</span>
                              <em className="ssg_price">{(data.newPrice).toLocaleString()}</em>
                              <span className="ssg_tx">원</span>
                            </div>
                            {data.discountRate ?<div className="discount_rate">
                              <span className="blind">할인율</span>
                              <span>{`${data.discountRate}%`}</span>
                            </div>:<></>}
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="mnsditem_sideinfo">
                      <div className="mnsditem_review">
                        <div className="mnsditem_review_score">
                          <i
                            className="icon ty_xs icon_star_fill"
                            aria-hidden="true"
                          ></i>
                          <span className="blind">상품평점 5점 만점에</span>
                          {data.reviewScore}
                        </div>
                        <div className="mnsditem_review_num">
                          <span className="blind">상품평 개수</span>{data.reviewNum}건
                        </div>
                      </div>
  
                      <div className="mnsditem_taglist">
                        <span className="mnsditem_tag">무료배송</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                </li>
                </Link>
                :
                <Link to={`/product/${data.id}`}>
                    <li
                  id="item_unit_1000201289197"
                  data-page="1"
                  className="cmitem_grid_item"
                  data-groupkey="1"
                  style={{ left: "0px", top: "0px"}} key={idx}>
                  <div className="mnsditem_unit">
                    <div className="mnsditem_helper"></div>
                    <div className="mnsditem_goods">
                      <div className="mnsditem_thmb">
                        <a
                          href="/item/itemView.ssg?itemId=1000201289197&amp;siteNo=6004&amp;salestrNo=6005"
                          className="mnsditem_thmb_link clickable">
                          <div className="mnsditem_thmb_imgbx">
                            <img
                              src={`${data.thumbnailUri}`}
                              data-src="//sitem.ssgcdn.com/97/91/28/item/1000201289197_i1_500.jpg"
                              alt="이자벨마랑 여성 에뚜왈 만셀 에크루 후드티 SW0031 00M017E 23EC"
                              className="ssg_lazy mnsditem_thmb_img loading"
                              data-ll-status="loading"
                            />
                          </div>
                        </a>
                        <div className="mnsditem_btn_like">
                          <span className="cmlike _js_cmlike interestIt">
                            <button
                              className="cmlike_btn _js_cmlike_btn clickable"
                            >
                              <span className="cmlike_ico">
                                <i className="cmlike_primary_m"></i>
                                <span className="sr_off">
                                  <span className="blind">관심상품 취소</span>
                                </span>
                                <span className="sr_on">
                                  <span className="blind">관심상품 등록</span>
                                </span>
                              </span>
                            </button>
                          </span>
                        </div>
                      </div>
                      <div className="mnsditem_detail">
                        <div className="mnsditem_maininfo">
                          <a
                            href="/item/itemView.ssg?itemId=1000201289197&amp;siteNo=6004&amp;salestrNo=6005"
                            className="mnsditem_maininfo_link"
                          >
                            <div className="mnsditem_tit">
                              <span className="cm_mall_text">
                                <i className="sm">{data.mallName}</i>
                              </span>
                              <span className="mnsditem_goods_brand">
                                {data.manufactureCompany}
                              </span>
                              <span className="mnsditem_goods_tit">
                              {data.productName}
                              </span>
                            </div>
                            <div className="mnsditem_pricewrap">
                              {data.oldPrice ?<div className="mnsditem_price_row mnsditem_ty_oldpr">
                                <div className="old_price">
                                  <del>
                                    <span className="blind">정상가격</span>
                                    <em className="ssg_price">{(data.oldPrice).toLocaleString()}</em>
                                    <span className="ssg_tx">원</span>
                                  </del>
                                </div>
                              </div>:<></>}
                              <div className="mnsditem_price_row mnsditem_ty_newpr">
                                <div className="new_price">
                                  <span className="blind">판매가격</span>
                                  <em className="ssg_price">{(data.newPrice).toLocaleString()}</em>
                                  <span className="ssg_tx">원</span>
                                </div>
                                {data.discountRate ?<div className="discount_rate">
                                  <span className="blind">할인율</span>
                                  <span>{`${data.discountRate}%`}</span>
                                </div>:<></>}
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="mnsditem_sideinfo">
                          <div className="mnsditem_review">
                            <div className="mnsditem_review_score">
                              <i
                                className="icon ty_xs icon_star_fill"
                                aria-hidden="true"
                              ></i>
                              <span className="blind">상품평점 5점 만점에</span>
                              {data.reviewScore}
                            </div>
                            <div className="mnsditem_review_num">
                              <span className="blind">상품평 개수</span>{data.reviewNum}건
                            </div>
                          </div>
  
                          <div className="mnsditem_taglist">
                            <span className="mnsditem_tag">무료배송</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                    </li>
                  </Link>
              
              ))
          ))
        }
      </ul>
    </div>
  );
}

export default CategoryAllProduct;
