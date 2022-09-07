import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductLiveMsg from "../../common/ui/ProductLiveMsg";

function ProductDetailInfo({pdtDetail}) {
  const [more, setMore] = useState(false);
  const handleMore= () => {
    setMore(!more);
  }



  const data = pdtDetail.productDetailPhotoList
  return (
    <div className="mndtl_sec_cont" id="_detailinfo">
      <ProductLiveMsg />
      <div className="mndtl_sec_caution_text mndtl_tx_point">
        <h3 className="mndtl_caution_tit">직거래 유도 주의 안내</h3>
        <div className="mndtl_caution_desc">
          판매자가 쓱톡/문자 등을 이용하여 <br />
          현금 입금을 유도하는 경우 사기 가능성이 있으니 거부하시고
          <br />
          SSG.COM 고객센터로 신고 해 주시기 바랍니다.
        </div>
      </div>

      <div className="mndtl_sec_subject">
        <h3 className="mndtl_sec_tit">상세정보</h3>
      </div>

      <div className={more ? "mndtl_detail_wrap on" :"mndtl_detail_wrap"} data-react-tarea-cd="00006_000000009">
        <div className="mndtl_detail_info">
          <ul className="mndtl_detail_infolist">
            <li>상품번호 : 1000310147566</li>

            <li>{pdtDetail.productName}</li>
          </ul>

          <div className="mndtl_detail_err">
            <i className="mndtl_ic mndtl_ic_warning"></i>
            <p className="mndtl_err_txt">
              상품정보에
              <br />
              문제가 있나요?
            </p>
            <Link to="" className="mndtl_btn_err clickable" target="_parent">
            <span>신고하기</span>
            </Link>
          </div>







          {data.map((data,index)=>
           <div key={index} className="mndtl_detail_md">
             <div className="mndtl_md_cont">
               <div className="mndtl_md_bx">
                 <img src={data.productDetailPhotoPath} alt="" />
               </div>
             </div>
           </div>

          )}
         


        </div>

        <div className="mndtl_detail_cont type_1800">
          <div className="mndtl_detail_area ty_detail">
            <div className="mndtl_tmpl_detail">
              <div className="mndtl_tmpl_html">
                
              </div>

              <div className="blind" id="itemNutritionGrid"></div>

              <div id="itemAppeProp"></div>
            </div>
          </div>

          <div className={more ? "mndtl_detail_more on" :"mndtl_detail_more"}>
            <button type="button" className="mndtl_detail_btnmore clickable" onClick={handleMore}>
              <span className="sr_off">상세정보 펼쳐보기</span>
              <span className="sr_on">상세정보 접기</span>
              <i className="mndtl_ico_arr"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailInfo;
