import React from "react";

function CategoryLanguage() {
  return (
    <>
      <button
        type="button"
        data-morph-target=".mcom_modal_lang"
        className="blind clnb_lang_open"
      >
        언어 변경 레이어
      </button>
      <div className="mcom_modal mcom_modal_lang">
        <div className="mcom_modal_wrap">
          <button className="mcom_modal_close modal-lang-close-btn">
            <span className="blind">언어 변경 레이어 닫기</span>
          </button>
          <div className="mcom_modal_cont">
            <h3
              id="lang_kr_title"
              className="modal_lang_tit"
              style={{ display: "none" }}
            >
              한국어로 쇼핑합니다.
            </h3>

            <h3
              id="lang_en_title"
              className="modal_lang_tit"
              style={{ display: "none" }}
            >
              Changing to (English).
            </h3>
            <ul
              id="lang_en_sub"
              className="modal_lang_desc"
              style={{ display: "none" }}
            >
              <li>
                * The price is based on exchange rate of the day and the sale
                price is calculated in KRW currency at the time of the payment.
              </li>
              <li>
                * The set language is maintained for 7 days from the accessed
                date.
              </li>
            </ul>
            <h3
              id="lang_en_close_title"
              className="modal_lang_tit"
              style={{ display: "none" }}
            >
              Termination of translation service
            </h3>
            <ul
              id="lang_en_close_sub"
              className="modal_lang_desc"
              style={{ display: "none" }}
            >
              <li>SSG multilingual translation service support has ended.</li>
              <li>* End date : Korean time 05/31/2021 (2021-05-31)</li>
              <li>In the future, please use Korean to shop.</li>
              <li>Thank you.</li>
            </ul>

            <h3
              id="lang_ch_title"
              className="modal_lang_tit"
              style={{ display: "none" }}
            >
              切换成(中國語)界面
            </h3>
            <ul
              id="lang_ch_sub"
              className="modal_lang_desc"
              style={{ display: "none" }}
            >
              <li>* 贩卖价格以当天汇率为准，将转换成韩币(₩)进行支付。</li>
              <li>* 设置完的语言，自登陆日起7天内维持不变。</li>
            </ul>
            <h3
              id="lang_ch_close_title"
              className="modal_lang_tit"
              style={{ display: "none" }}
            >
              终止翻译服务
            </h3>
            <ul
              id="lang_ch_close_sub"
              className="modal_lang_desc"
              style={{ display: "none" }}
            >
              <li>你好。这是SSG.COM。</li>
              <li>SSG多语言翻译服务支持已终止。</li>
              <li>* 结束日期 : Korean time 05/31/2021 (2021-05-31)</li>
              <li>将来，请使用韩语购物。</li>
              <li>谢谢你</li>
            </ul>
          </div>
          <div className="mcom_modal_btnarea">
            <button
              className="mcom_modal_btn ty_cancel modal-lang-close-btn"
              id="lang_btn_cancel"
             
            >
              취소
            </button>
            <button
              className="mcom_modal_btn ty_change modal-lang-close-btn"
              id="lang_btn_change"
       
            >
              변경
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryLanguage;
