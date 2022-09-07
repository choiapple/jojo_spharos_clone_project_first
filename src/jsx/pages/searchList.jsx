import React from 'react';
import PdtListCtt from '../pages_layout/ProductList/PdtListCtt';

function searchList() {
    return (  
        <>
            <div id="m_wrap" className="mcom_wrap sm_v3">
                <div id="m_container" className="mcom_container" data-iframe-height="">

                    {/* 헤더 */}
                    <PdtListTop />

                    {/* 모달창 */}
                    <div className="ly_change">
                        <div className="tit_change">

                            <h3>대체 상품</h3>
                            <a href="#" className="btn_close"><span className="blind">닫기</span></a>
                        </div>
                        <div className="cont_change" style={{height: '628px'}}>
                            <div className="mcom_scroll"></div>
                        </div>
                    </div>



                    {/* 콘텐츠 */}
                    <PdtListCtt />


                </div>
            </div>

            {/* 모달창 */}
            <button type="button" id="_layerLikeCouponBtn" className="store-modal-alert-open blind"

                data-layer-target="#_layerLikeCoupon" data-no-click-outside="">
                스토어 좋아요
            </button>

            <section className="store_modal ty_alert">
                <div className="store_modal_wrap">

                    <div className="store_modal_cont">
                        <h3 className="store_modal_tit">좋아하는 스토어로 등록되었습니다.</h3>
                        <div className="store_modal_coupon"></div>
                        <div className="store_modal_desc">
                            <p className="store_modal_tx ty_gray">
                                발급된 쿠폰은 MY SSG &gt; 쿠폰함에서 확인하실 수 있습니다.
                            </p>
                        </div>
                    </div>
                    <footer className="store_modal_foot">
                        <div className="mnodr_btn_area">
                            <button className="mnodr_btn ty_gray ty_sm modal-close-btn" type="button">
                                닫기
                            </button>
                        </div>
                    </footer>
                </div>
            </section>
            <div className="mcom_ly_wrap mcom_ly_share react-area">
                <div className="mcom_ly_inr">
                    <h2 className="mcom_ly_tit">SNS 공유</h2>
                    <div className="mcom_ly_cont">
                        <ul className="cm_sns">
                            <li>

                                <a className="kakao clickable"><span className="blind">카카오톡</span></a>
                            </li>
                            <li>
                                <a className="facebook clickable"><span className="blind">페이스북</span></a>
                            </li>
                            <li>
                                <a className="twitter clickable"><span className="blind">트위터</span></a>
                            </li>
                            <li>
                                <a className="sms clickable"><span className="blind">SMS 발송</span></a>
                            </li>
                            <li>
                                <a className="url clickable"><span className="blind">URL복사</span></a>

                            </li>
                        </ul>
                        <p className="cm_url_tip url_show">
                            아래의 URL을 전체선택하여 복사하세요
                        </p>
                        <div className="cm_url_txt url_show">
                            <input type="text" />
                        </div>
                    </div>
                    <a href="#" className="modal-close-btn"><span className="blind">닫기</span></a>
                </div>
            </div>
            <div className="ly_app react-area" id="lyApp" style={{display:'none'}}></div>

            <div className="ly_app ty2" id="lyVvip" style={{display:'none'}}></div>

            <div id="com_channel_ban" className="channel_ban _fixed_banner" style={{display:'none'}}></div>
            <div id="notice_b2e_pop" className="channel_ban _fixed_banner" style={{display:'none'}}></div>

            <div id="com_extend_ban" className="extend_ban _fixed_banner" style={{display:'none'}}>
            </div>

            <div className="ly_mnmorning" id="popup_lymnmorning" style={{display:'none'}}></div>

            <div className="cmnotipop_wrap v3" id="cmNotipopWrap" style={{display:'none'}}></div>

            <div className="cmnotipop_wrap v3" id="cmPromopopWrap" style={{display:'none'}}></div>
        </>
    );
}

export default searchList;