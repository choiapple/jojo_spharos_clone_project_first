import React from "react";

function CategoryBrand({ categoryData }) {
  return (
    <div className="cmcate_brand">
      <div className="cmcate_brand_tit">
        <span className="cmcate_brand_tittx">브랜드관</span>
        <a href="" className="cmcate_titlnk">
          전체보기
        </a>
      </div>
      <div className="cmcate_brand_cont">
        <ul className="cmcate_brand_lst">
          {categoryData &&
            categoryData.productList.map((data, idx) => {
              if (data.manufactureCompany !== "") {
                return (
                  <li key={idx}>
                    <a href="https://m-shinsegaemall.ssg.com/mall/disp/brandMain.ssg?brandId=2011010191&amp;ctgId=6000201547">
                      <span
                        className="cmcate_brand_thmb ssg_lazy"
                        data-bg="url('https://simg.ssgcdn.com/trans.ssg?src=1000201289197_i1&amp;w=200&amp;h=200&amp;edit=c&amp;t=7b908f4ef6e00445ed1a8c236a028c7dd057502e')"
                        data-ll-status="loading"
                        style={{ backgroundImage: `url(${data.thumbnailUri})` }}
                      ></span>
                      <span className="cmcate_brand_tx">
                        {data.manufactureCompany}
                      </span>
                    </a>
                  </li>
                );
              }
            })}
        </ul>
      </div>
    </div>
  );
}

export default CategoryBrand;
