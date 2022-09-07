import React from 'react';

function CategoryProductListScroll({categoryData, queryId, setScrollBtn, scrollBtn}) {
  const handleScrollBtn=()=>{
    setScrollBtn(!scrollBtn)
  }
    return (
        <div className="cmgrid_full_box">
        <div className={scrollBtn? "cmctg_nav is_open":"cmctg_nav"}>
          <div className="cmctg_top">
            <h3>전체메뉴</h3>
            <span className="cmctg_toggle">
              <button type="button" aria-expanded="false" onClick={handleScrollBtn}>
                <span className="btn_label ty_off">
                  <span className="blind">메뉴 펼치기</span>
                </span>
                <span className="btn_label ty_on">
                  <span className="blind">메뉴 접기</span>
                </span>
              </button>
            </span>
          </div>
          <div className="cmctg_scroll">
            <ul className="cmctg_menu">
            {
              categoryData && categoryData.sameLevelCategory.map((data)=>{
                if(`${data.id}` === queryId){
                  return (
                    <li className="cmctg_item">
                <a
                  href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000201547"
                  className="clickable cmctg_lnk on"
                  data-react-tarea="카테고리|동위카테고리|카테고리_선택|명품/수입의류">
                  <span className="cmctg_txt">{data.categoryName}</span>
                </a>
              </li>
                  );
                }else{
                  return (
                    <li className="cmctg_item">
                <a
                  href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000201547"
                  className="clickable cmctg_lnk"
                  data-react-tarea="카테고리|동위카테고리|카테고리_선택|명품/수입의류">
                  <span className="cmctg_txt">{data.categoryName}</span>
                </a>
              </li>
                  );
                }
              })
            }
              
            </ul>
          </div>
        </div>
      </div>
    );
}

export default CategoryProductListScroll;