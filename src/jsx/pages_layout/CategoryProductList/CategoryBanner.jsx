import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function CategoryBanner({categoryData,queryLv,queryId,moreBtn,setMoreBtn,bm,setBm,parent}) {
  const [mainData, setMainData] = useState();
  const [parentData, setParentData] = useState();
  useEffect(() => {
    categoryData.sameLevelCategory.forEach((data) => {
      if (`${data.id}` === queryId) {
        setMainData(data);
      }
    });
    categoryData.parentCategory.forEach((data)=>{
      if(`${data.id}` === parent){
        setParentData(data);
      }
    })
  });
  const handleMore = () => {
    setMoreBtn(!moreBtn);
    if (bm === "none") {
      setBm("block");
    } else {
      setBm("none");
    }
  };
  return (
    <>
      {mainData ? (
        <div className="mcom_tit_renew react-area">
          <div id="mcom_path_cate" className="mcom_category">
            <div className="cate_path">
              <span className="depth previous">
                <a href="">
                  <span className="ctg_mn">
                    <span className="ctg_txt">
                      {parentData.categoryName}
                    </span>
                  </span>
                </a>
              </span>
              <span className="depth current">
                <button
                  type="button"
                  className={moreBtn ? "btn_more on" : "btn_more"}
                  onClick={handleMore}>
                  <strong className="ctg_txt">{mainData.categoryName}</strong>
                  <span className="sp_ctg_icon ctg_icon_arr whb">
                    <span className="blind">더보기</span>
                  </span>
                </button>
              </span>
            </div>
            <div className="cate_view v2" style={{ display: `${bm}` }}>
              <ul className="lst_cate">
                {categoryData &&
                  categoryData.parentCategory.map((dataP,idx) => {
                    if (`${dataP.id}` === parent) {
                      return (
                        <li className="selected" key={idx}>
                          <a href="#" className="cate_txt">
                            {dataP.categoryName}
                            <span className="blind">하위 카테고리 7개</span>
                          </a>
                          <div
                            className="cate_view_lv2 selected"
                            role="menu"
                            aria-expanded="true">
                            <ul className="lst_cate lv2">
                              <li>
                                <a
                                  href="https://m-shinsegaemall.ssg.com/page/llcategory/1000016177.ssg"
                                  className="cate_txt cate_all">
                                  전체보기
                                </a>
                              </li>
                              {categoryData &&
                                categoryData.sameLevelCategory.map((data,idxx) => {
                                  if (`${data.id}` === queryId) {
                                    return (
                                      <li className="selected" key={idxx}>
                                        <a href="" className="cate_txt">
                                          {data.categoryName}
                                        </a>
                                        <span className="sp_ctg_icon ctg_icon_check bk">
                                          <span className="blind">선택됨</span>
                                        </span>
                                      </li>
                                    );
                                  } else {
                                    return (
                                      <li key={idxx}>
                                        <a href="" className="cate_txt">
                                          {data.categoryName}
                                        </a>
                                      </li>
                                    );
                                  }
                                })}
                            </ul>
                          </div>
                        </li>
                      );
                    }else{
                      return(<li className="" key={idx}>
                      <a href="#" className="cate_txt">
                        {dataP.categoryName}
                        <span className="blind">하위 카테고리 7개</span>
                      </a>
                      <div
                        className="cate_view_lv2"
                        role="menu"
                        aria-expanded="true">
                        <ul className="lst_cate lv2">
                          <li>
                            <a
                              href="https://m-shinsegaemall.ssg.com/page/llcategory/1000016177.ssg"
                              className="cate_txt cate_all">
                              전체보기
                            </a>
                          </li>
                          {categoryData &&
                            categoryData.sameLevelCategory.map((data,idxx) => {
                              if (`${data.id}` === queryId) {
                                return (
                                  <li className="selected" key={idxx}>
                                    <a href="" className="cate_txt">
                                      {data.categoryName}
                                    </a>
                                    <span className="sp_ctg_icon ctg_icon_check bk">
                                      <span className="blind">선택됨</span>
                                    </span>
                                  </li>
                                );
                              } else {
                                return (
                                  <li key={idxx}>
                                    <a href="" className="cate_txt">
                                      {data.categoryName}
                                    </a>
                                  </li>
                                );
                              }
                            })}
                        </ul>
                      </div>
                    </li>);
                    }
                  })}
              </ul>
            </div>
          </div>
          <div className="mcom_tit_lft">
            <a href="" className="btn_back clickable">
              <span className="sp_ctg_icon ctg_icon_back">
                <span className="blind">이전 페이지</span>
              </span>
            </a>
          </div>
          <div className="mcom_tit_rgt">
            <div className="btn_cate btn_clip">
              <span className="cmlike _js_cmlike interestIt">
                <button className="cmlike_btn _js_cmlike_btn">
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
            <div className="btn_cate btn_share">
              <button
                type="button"
                className="cm_bt_share clickable"
                data-morph-target=".mcom_ly_share"
              >
                <span className="blind">공유하기</span>
                <i className="icon ty_md icon_share_sns" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default CategoryBanner;
