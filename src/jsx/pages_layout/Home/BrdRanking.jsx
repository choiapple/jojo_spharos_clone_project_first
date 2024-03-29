import React from 'react';
import { useState } from 'react';

function BrdRanking() {

    const [isShow, setIsShow] = useState(false);
    const handleHide = () =>{
        setIsShow(!isShow)
    }
    return ( 
        
        <>
    
        <div className="cmgrid_full_box cmgrid_brd_ranking ty_border" data-page-set-id="121" data-has-next="false"
            data-react-tarea-cd="100000000149_121_301" data-observable-unit="true">
            <div className={isShow ?  "cmgrid_brd_wrap open" : "cmgrid_brd_wrap"}>
                <div className="cmgrid_brd_num v2" onClick={handleHide}>
                    <div className="cmgrid_brd_rank_wrap" data-react-unit-type="text">
                        <button type="button" className="cmitem_btn ranking_btn_drop clickable"
                            data-react-tarea-dtl-cd="t00060" aria-expanded="true">
                            <span className="blind">랭킹상품 펼치기</span>
                            <span className="cmitem_keyword_rank">1</span>
                            <div className="cmitem_keyword_tx">
                                <div className="cmitem_keyword_tx_tit">
                                    <span className="cmitem_keyword_ranktx">GUCCI</span>
                                    <span className="cmitem_keyword_rankinfo cmitem_keyword_ranksame"><span className="blind">순위
                                            동일</span></span>
                                </div>
                                <span className="cmitem_keyword_ranktx_sub"></span>
                            </div>
                        </button>
                    </div>

                    <div className="cmitem_brd_btn_wrap">
                        <span className="cmlike _js_cmlike interestIt" data-react-unit-type="text"
                            data-react-unit-text='[{"type":"text","value":"좋아요"}, {"type":"brand","value":"gucci"}]'>
                            
                            <button className="cmlike_btn _js_cmlike_btn clickable" data-react-tarea-dtl-cd="t00060">
                                <span className="cmlike_ico">
                                    <i className="cmlike_primary_l"></i>
                                    <span className="sr_off"><span className="blind">관심상품 취소</span></span>
                                    <span className="sr_on"><span className="blind">관심상품 등록</span></span>
                                </span>
                            </button>
                        </span>
                    </div>
                </div>
                <div className="cmgrid_brd_ranking_unit" style={{display:'none'}}>
                    <div
                        className="cmhorizontal_scrollitem cmhorizontal_brd_ranking cmhorizontal_scrollitem_sd has_cmitem_helper">
                        <div className="cmhorizontal_scroll">
                            <div className="cmitem_grid">
                                <ul className="cmitem_grid_lst mnsditem_ty_thmb">
                                    <li className="cmitem_grid_item ty_space" data-observable-item="true"
                                        data-react-unit-type="item" data-react-unit-id="1000338899298"
                                        data-react-unit-inx="0">
                                        <div className="mnsditem_unit" data-react-unit-type="item"
                                            data-react-unit-id="1000338899298" data-react-unit-inx="0"
                                            data-react-mdl-info="" data-react-advert-yn="N" data-react-advert-bid-id=""
                                            data-react-advert-tgt-id="" data-react-advert-bilng-type-cd=""
                                            data-react-advert-kind-cd="" data-react-advert-extens-tery-div-cd=""
                                            data-react-advert-advert-acct-grp-id=""
                                            data-react-unit-text='[{"type":"brand","value":"gucci"}]'>

                                            <div className="mnsditem_helper">

                                            </div>
                                            <div className="mnsditem_goods" data-unittype="item" data-advertacctid=""
                                                data-advertbidid="" data-adtgtid="1000338899298" data-adidx="0"
                                                data-advertbilngtypecd="" data-advertkindcd=""
                                                data-advertextensterydivcd="" data-prioradvertacctgrpid="">
                                                <div className="mnsditem_thmb">
                                                    <a href="https://m-shinsegaemall.ssg.com/special/itemView.ssg?itemId=1000338899298&amp;siteNo=6004&amp;salestrNo=6005&amp;itemSsgCollectYn=N"
                                                        className="mnsditem_thmb_link clickable" data-info="1000338899298"
                                                        data-index="0" data-position="view"
                                                        data-react-tarea-dtl-cd="t00001">
                                                        <div className="mnsditem_thmb_imgbx">
                                                            <img src="//sitem.ssgcdn.com/98/92/89/item/1000338899298_i1_500.jpg"
                                                                data-src="//sitem.ssgcdn.com/98/92/89/item/1000338899298_i1_500.jpg"
                                                                alt="[구찌 홀스빗 1955] 미니백"
                                                                
                                                                className="ssg_lazy mnsditem_thmb_img loaded"
                                                                data-ll-status="loaded" />
                                                        </div>
                                                    </a>
                                                    <div className="mnsditem_thmb_ctrl">
                                                        <a href="https://m.ssg.com/search/image/main.ssg?searchType=img&amp;itemId=1000338899298&amp;src_area=ssglens"
                                                            className="mnsditem_btn_lens clickable"
                                                            data-info="1000338899298" data-position="ssglens"
                                                            data-react-tarea-dtl-cd="t00008">
                                                            <span className="blind">이 상품 이미지로
                                                                검색하기</span></a>
                                                    </div>
                                                    <div className="mnsditem_btn_like">

                                                        <span className="cmlike _js_cmlike interestIt">
                                                            
                                                            <button className="cmlike_btn _js_cmlike_btn clickable"
                                                                data-position="clip" data-react-tarea-dtl-cd="t00003">
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
                                                        <a href="https://m-shinsegaemall.ssg.com/special/itemView.ssg?itemId=1000338899298&amp;siteNo=6004&amp;salestrNo=6005&amp;itemSsgCollectYn=N"
                                                            className="mnsditem_maininfo_link">
                                                            <div className="mnsditem_tit">
                                                                <span className="cm_mall_text">
                                                                    <i className="sm">신세계몰</i>
                                                                </span>
                                                                <span className="mnsditem_goods_tit">[구찌
                                                                    홀스빗
                                                                    1955] 미니백</span>
                                                            </div>
                                                            <div className="mnsditem_pricewrap">
                                                                <div className="mnsditem_price_row mnsditem_ty_newpr">
                                                                    <div className="new_price">
                                                                        <span className="blind">판매가격</span>
                                                                        <em className="ssg_price">1,490,000</em>
                                                                        <span className="ssg_tx">원</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>

                                                    </div>
                                                    <div className="mnsditem_sideinfo">

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="cmitem_grid_item ty_space" data-observable-item="true"
                                        data-react-unit-type="item" data-react-unit-id="1000050294029"
                                        data-react-unit-inx="1">
                                        <div className="mnsditem_unit" data-react-unit-type="item"
                                            data-react-unit-id="1000050294029" data-react-unit-inx="1"
                                            data-react-mdl-info="" data-react-advert-yn="N" data-react-advert-bid-id=""
                                            data-react-advert-tgt-id="" data-react-advert-bilng-type-cd=""
                                            data-react-advert-kind-cd="" data-react-advert-extens-tery-div-cd=""
                                            data-react-advert-advert-acct-grp-id=""
                                            data-react-unit-text='[{"type":"brand","value":"gucci"}]'>

                                            <div className="mnsditem_helper">

                                            </div>
                                            <div className="mnsditem_goods" data-unittype="item" data-advertacctid=""
                                                data-advertbidid="" data-adtgtid="1000050294029" data-adidx="0"
                                                data-advertbilngtypecd="" data-advertkindcd=""
                                                data-advertextensterydivcd="" data-prioradvertacctgrpid="">
                                                <div className="mnsditem_thmb">
                                                    <a href="https://m-shinsegaemall.ssg.com/special/itemView.ssg?itemId=1000050294029&amp;siteNo=6004&amp;salestrNo=6005&amp;itemSsgCollectYn=N"
                                                        className="mnsditem_thmb_link clickable" data-info="1000050294029"
                                                        data-index="0" data-position="view"
                                                        data-react-tarea-dtl-cd="t00001">
                                                        <div className="mnsditem_thmb_imgbx">
                                                            <img src="//sitem.ssgcdn.com/29/40/29/item/1000050294029_i1_500.jpg"
                                                                data-src="//sitem.ssgcdn.com/29/40/29/item/1000050294029_i1_500.jpg"
                                                                alt="[GG 마몽] 마틀라세 레더 수퍼 미니백"
                                                                
                                                                className="ssg_lazy mnsditem_thmb_img loaded"
                                                                data-ll-status="loaded" />
                                                        </div>
                                                    </a>
                                                    <div className="mnsditem_thmb_ctrl">
                                                        <a href="https://m.ssg.com/search/image/main.ssg?searchType=img&amp;itemId=1000050294029&amp;src_area=ssglens"
                                                            className="mnsditem_btn_lens clickable"
                                                            data-info="1000050294029" data-position="ssglens"
                                                            data-react-tarea-dtl-cd="t00008">
                                                            <span className="blind">이 상품 이미지로
                                                                검색하기</span></a>
                                                    </div>
                                                    <div className="mnsditem_btn_like">

                                                        <span className="cmlike _js_cmlike interestIt">
                                                            
                                                            <button className="cmlike_btn _js_cmlike_btn clickable"
                                                                data-position="clip" data-react-tarea-dtl-cd="t00003">
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
                                                        <a href="https://m-shinsegaemall.ssg.com/special/itemView.ssg?itemId=1000050294029&amp;siteNo=6004&amp;salestrNo=6005&amp;itemSsgCollectYn=N"
                                                            className="mnsditem_maininfo_link">
                                                            <div className="mnsditem_tit">
                                                                <span className="cm_mall_text">
                                                                    <i className="sm">신세계몰</i>
                                                                </span>
                                                                <span className="mnsditem_goods_tit">[GG
                                                                    마몽]
                                                                    마틀라세 레더 수퍼
                                                                    미니백</span>
                                                            </div>
                                                            <div className="mnsditem_pricewrap">
                                                                <div className="mnsditem_price_row mnsditem_ty_newpr">
                                                                    <div className="new_price">
                                                                        <span className="blind">판매가격</span>
                                                                        <em className="ssg_price">1,670,000</em>
                                                                        <span className="ssg_tx">원</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>

                                                    </div>
                                                    <div className="mnsditem_sideinfo">

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="cmitem_grid_item ty_space" data-observable-item="true"
                                        data-react-unit-type="item" data-react-unit-id="1000441903945"
                                        data-react-unit-inx="2">
                                        <div className="mnsditem_unit" data-react-unit-type="item"
                                            data-react-unit-id="1000441903945" data-react-unit-inx="2"
                                            data-react-mdl-info="" data-react-advert-yn="N" data-react-advert-bid-id=""
                                            data-react-advert-tgt-id="" data-react-advert-bilng-type-cd=""
                                            data-react-advert-kind-cd="" data-react-advert-extens-tery-div-cd=""
                                            data-react-advert-advert-acct-grp-id=""
                                            data-react-unit-text='[{"type":"brand","value":"gucci"}]'>

                                            <div className="mnsditem_helper">

                                            </div>
                                            <div className="mnsditem_goods" data-unittype="item" data-advertacctid=""
                                                data-advertbidid="" data-adtgtid="1000441903945" data-adidx="0"
                                                data-advertbilngtypecd="" data-advertkindcd=""
                                                data-advertextensterydivcd="" data-prioradvertacctgrpid="">
                                                <div className="mnsditem_thmb">
                                                    <a href="https://m-shinsegaemall.ssg.com/special/itemView.ssg?itemId=1000441903945&amp;siteNo=6004&amp;salestrNo=6005&amp;itemSsgCollectYn=N"
                                                        className="mnsditem_thmb_link clickable" data-info="1000441903945"
                                                        data-index="0" data-position="view"
                                                        data-react-tarea-dtl-cd="t00001">
                                                        <div className="mnsditem_thmb_imgbx">
                                                            <img src="//sitem.ssgcdn.com/45/39/90/item/1000441903945_i1_500.jpg"
                                                                data-src="//sitem.ssgcdn.com/45/39/90/item/1000441903945_i1_500.jpg"
                                                                alt="[GG 마몽] 탑 핸들 미니백"
                                                                
                                                                className="ssg_lazy mnsditem_thmb_img loaded"
                                                                data-ll-status="loaded" />
                                                        </div>
                                                    </a>
                                                    <div className="mnsditem_btn_like">

                                                        <span className="cmlike _js_cmlike interestIt">
                                            
                                                            <button className="cmlike_btn _js_cmlike_btn clickable"
                                                                data-position="clip" data-react-tarea-dtl-cd="t00003">
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
                                                        <a href="https://m-shinsegaemall.ssg.com/special/itemView.ssg?itemId=1000441903945&amp;siteNo=6004&amp;salestrNo=6005&amp;itemSsgCollectYn=N"
                                                            className="mnsditem_maininfo_link">
                                                            <div className="mnsditem_tit">
                                                                <span className="cm_mall_text">
                                                                    <i className="sm">신세계몰</i>
                                                                </span>
                                                                <span className="mnsditem_goods_tit">[GG
                                                                    마몽]
                                                                    탑 핸들 미니백</span>
                                                            </div>
                                                            <div className="mnsditem_pricewrap">
                                                                <div className="mnsditem_price_row mnsditem_ty_newpr">
                                                                    <div className="new_price">
                                                                        <span className="blind">판매가격</span>
                                                                        <em className="ssg_price">1,500,000</em>
                                                                        <span className="ssg_tx">원</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>

                                                    </div>
                                                    <div className="mnsditem_sideinfo">

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="cmhorizontal_btns" data-react-unit-type="text"
                                data-react-unit-text='[{"type":"text","value":"더보기"}, {"type":"brand","value":"gucci"}]'>
                                <a href="https://m-shinsegaemall.ssg.com/special/gucci/main.ssg?tarea=store6004index"
                                    className="cmhorizontal_more clickable" data-react-tarea-dtl-cd="t00060">상품
                                    더보기</a>
                            </div>
                        </div>
                    </div>
                    <div className="cmitem_more" data-react-unit-type="text"
                        data-react-unit-text='[{"type":"text","value":"바로가기"}, {"type":"brand","value":"gucci"}]'>
                        <a href="https://m-shinsegaemall.ssg.com/special/gucci/main.ssg?tarea=store6004index"
                            className="cmitem_more_link clickable" data-react-tarea-dtl-cd="t00060">브랜드매장
                            바로가기<span className="cmitem_more_arrow"></span></a>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}

export default BrdRanking;