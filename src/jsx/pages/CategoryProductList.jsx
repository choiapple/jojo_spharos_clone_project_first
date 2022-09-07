import React from "react";
import { useLocation, useParams } from "react-router-dom";
import CategoryAdt from "../pages_layout/CategoryProductList/CategoryAdt";
import CategoryAllProduct from "../pages_layout/CategoryProductList/CategoryAllProduct";
import CategoryBanner from "../pages_layout/CategoryProductList/CategoryBanner";
import CategoryBrand from "../pages_layout/CategoryProductList/CategoryBrand";
import CategoryListMid from "../pages_layout/CategoryProductList/CategoryListMid";
import CategoryProductListScroll from "../pages_layout/CategoryProductList/CategoryProductListScroll";
import { useEffect } from "react";
import axios from "axios";
import queryString from 'query-string';
import { useState } from "react";
import {useInView} from "react-intersection-observer";
import Server from "../../server/server";

function CategoryProductList() {
  const location = useLocation();
  const query = queryString.parse(location.search);
  const [categoryData, setCategoryData] = useState();
  const [pageData, setPageData] = useState(1);
  const [moreBtn, setMoreBtn] = useState(false);
  const [bm, setBm] = useState("none");
  const [scrollBtn,setScrollBtn] = useState(false);
  const [product, setProduct] = useState([]);
  const [url, setUrl] = useState();
  useEffect(()=>{
    setUrl(`${Server.baseUrl}api/product/findbycategory?lv=${query.lv}&id=${query.id}&page=${pageData}`);
  },[pageData])
  useEffect(()=>{
    axios.get(url)
    .then((Response)=>{
      setCategoryData(Response.data);
      setProduct(pre=>[...pre, Response.data.productList])

    })
  },[url])
  
  return (
    <>
      {
        categoryData ?
        <div className={scrollBtn ? "body_sm body_and zIndex":"body_sm body_and"}>
        <div id="m_wrap" className="mcom_wrap sm_v3">
          <div
            id="m_container"
            className={moreBtn? "mcom_container overlay":"mcom_container"}
            data-iframe-height="">
            <CategoryBanner 
            categoryData={categoryData} 
            queryLv={query.lv} 
            queryId={query.id} 
            moreBtn={moreBtn} 
            setMoreBtn={setMoreBtn} 
            bm={bm} 
            setBm={setBm}
            parent={query.parent}/>

            <div id="m_content" className="react-area">
              <div id="m_top_catelist" className="m_catelst_wrap_v2">
                <CategoryProductListScroll 
                categoryData={categoryData}
                queryId={query.id}
                scrollBtn={scrollBtn}
                setScrollBtn={setScrollBtn}
                />

                <CategoryListMid  
                categoryData={categoryData}
                queryId={query.id}/>
              </div>

              <CategoryBrand 
              categoryData={categoryData}
              />

              <CategoryAdt />

              <div className="cmft_sort v2">
                <div className="cmft_sort_opts">
                  <ul className="cmft_sort_lst">
                    <li className="cmft_cell cmft_sort_ship" id="filter_shpp">
                      <div className="cmft_sel_wrap">
                        <span
                          className="cmft_inp_chk clickable"
                          data-react-tarea="카테고리|바닥필터|배송_필터_선택|매장픽업">
                          <input
                            type="checkbox"
                            id="ui_ship_view"
                            // value="picku"
                            />
                        </span>

                        <a
                          href=""
                          className="clickable"
                          data-react-tarea="카테고리|바닥필터|배송_필터_선택|매장픽업">
                          <label
                            htmlFor={"ui_ship_view"}
                            className="cmft_sort_tit cmft_label_curent">
                            <span className="cmft_txt">매장픽업</span>
                          </label>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="cmft_allstore_lst" style={{ display: "" }}>
                  <div className="cmft_allstore_parent">
                    <ul className="cmft_allstore_round"></ul>
                  </div>
                  <div className="cmft_dtstore_lst">
                    <ul>
                      <li
                        className="clickable"
                        data-react-tarea="카테고리|바닥필터|백화점픽업_필터_선택|전체"
                      >
                        <a href="" aria-selected="true">
                          전체
                        </a>
                      </li>
                      <input
                        type="hidden"
                        name="pickuSalestr"
                        id="pickuSalestr"
                      />
                    </ul>
                  </div>
                </div>

                <div className="cmft_store_lst" style={{ display: "none" }}>
                  <ul>
                    <li
                      className="clickable"
                      data-react-tarea="카테고리|바닥필터|백화점상품_필터_선택|전체"
                    >
                      <a href="" aria-selected="true">
                        전체
                      </a>
                    </li>

                    <input type="hidden" name="salestr" id="salestr" />
                  </ul>
                </div>
              </div>

              <div className="cmft_sort_count v2">
                <span className="cmft_sort_tit">
                  <span className="cmft_num">
                    <strong>{categoryData.totalCnt}</strong>개의 상품이 있습니다.
                  </span>
                </span>
              </div>

              <CategoryAllProduct
              product = {product}
              pageData={pageData}
              setPageData={setPageData}
              />

              <span className="dimmed">&nbsp;</span>
            </div>
            <form idxmlns="default namespace"></form>
            <form id="form" name="form"></form>
          </div>
          <div id="m_toolbar" className="mcom_toolbar_v2 react-area">
            <ul className="toolbar_menu" role="navigation">
              <li className="toolbar_item">
                <a
                  href="/comm/getmCategoryLnb.ssg"
                  className="toolbar_lnk ty_category clickable"
                  data-react-tarea="웹공통_N|웹바|카테고리|신세계몰"
                >
                  <i
                    className="icon ty_lg icon_category"
                    aria-hidden="true"
                  ></i>
                  <span className="toolbar_txt">카테고리</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      :
      <></>
      }
    </>
  );
}

export default CategoryProductList;
