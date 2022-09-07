import React from "react";

function ProductDetailReview({pdtDetail}) {


  const review = pdtDetail.reviewList


  

  
  return (
    <div className="mndtl_sec_cont" id="_detailreview">
      <div className="mndtl_sec_subject">
        <h3 className="mndtl_sec_tit">고객리뷰</h3>
      </div>
      <div className="mndtl_review_wrap">

        {review.length > 0 ? 
          <div className="mndtl_review_wrap">

            {/* 추천리뷰 */}
           {/*  <div className="mndtl_premium_review v2">
              <div className="mndtl_premium_wrap">
                <div className="mndtl_review_tit">
                  <span className="mndtl_tit_tx">추천 리뷰</span>
                  <a href="#" className="mndtl_ic mndtl_ic_qmark16 clickable" data-react-tarea="상품상세|상품평|안내_클릭"
                    target=""><span className="blind">프리미엄 리뷰 자세히보기</span></a>
                  <div className="mndtl_bubble_tip">
                    <div className="mndtl_bubble_inner">
                      <p className="mndtl_bubble_txt">
                        <strong>추천 리뷰 안내</strong> SSG.COM에서 직접 선정한 우수
                        리뷰이거나<br />
                        판매자가 직접 선정한 우수 리뷰입니다
                      </p>
                      <button type="button" className="mndtl_bubble_close">
                        <span className="blind">닫기</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="mndtl_review_swiper swiper-container js_mndtl_premium swiper-container-horizontal swiper-container-android">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide swiper-slide-active" style={{marginRight: '10px'}}>
                      <a href="#" className="modal-fix-open" data-layer-target=".modal_photo_review3"
                        onclick="itemReview.getReviewModalView('1000021319173', '6009', '1019', '1125134389', 1)"
                        target="">
                        <div className="swiper-slide-img">
                          <img
                            src="https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202102/20210228180448_1125134389_1.jpg&amp;autoOrient=true&amp;t=46a0b1ac93bbb3392a18848f45e05599bd5740d7"
                            alt="" />
                        </div>
                        <div className="mndtl_swiper_summary">
                          <div className="mndtl_swiper_summary">
                            <div className="mndtl_cmtsum">
                              <div className="mndtl_review_info">
                                <div className="mndtl_shortly_start">
                                  <span className="blind">별점 5점 중</span>
                                  <em>5</em>
                                  <span className="blind">점</span>
                                </div>
                                <div className="mndtl_review_name">프리미엄</div>
                                <div className="mndtl_review_date">2021.02.28</div>
                              </div>
                              <p className="mndtl_cmtsum_desc">
                                리뷰 : 아디다스 알파바운스 슬라이드 흔히 쪼리라고
                                말하는 슬리퍼를 신고 다니는데, 발가락 사이에 슬리퍼가
                                고정되는 형태라, 맨발에만 신을 수 있어서 겨울이나
                                사무실에서도 신을 수 있는 슬리퍼를 찾다가 가격과
                                성능이 좋을 것 같은 이 제품을 구입하였습니다. 그리고
                                약 2개월 가량 사용하였습니다. 1. 배송 배송은 오전 주문
                                후 당일 배송을 시작하여 다음날 수령했습니다. 배송의
                                진행 단계와 상품의 현재지를 SSG 앱으로 실시간 확인 할
                                수 있어 좋았습니다. 정품 아이다스 상자에 담겨 왔으며
                                박스의 찌그러짐도 없고 상품 파손없이 잘 받았습니다. 2.
                                상품 사이즈는 정사이즈 입니다. 상품 광고에서는
                                농구화에서 영감을 받은 디자인이라고 하였는데, 정말
                                밑창이 두툼하고 푹신합니다. 덕분에 30분 이상 걸을
                                때에도 다른 보통의 슬리퍼보다 편했습니다. 발바닥이
                                닿는 부분에는 물결무늬가 있어 발바닥에 땀이 차지
                                않도록 하고, 밑창은 3가지 형태의 홈이 파여 있어
                                미끄러지지 않았습니다. 발 볼에 따라 조절할 수 있는
                                발등패드는 푹신한 소재가 두툼하게 되어 맨발에도 발등이
                                편했고, 고정 찍찍이도 넓어서 쉽게 떨어지지 않았습니다.
                                특히 슬리퍼를 신다가 비오는 날 젖은 대리석 위에서
                                미끄러져 넘어질 때가 있는데 이 제품은 쉽게 미끌어지지
                                않아 낙상의 위험이 적다고 느꼈습니다. 덕분에 집,
                                사무실, 야외에서 모두 편하게 신을 수 있었습니다. 3.
                                총평 튼튼하고, 발이 편하며 안전한게 신을 수 있는데
                                가격은 합리적이고 디자인은 깔끔한 아이다스 알파바운스
                                슬라이드~ 계절 가리지 않고 언제든 신을 수 있으니
                                SSG에서 저렴하게 구입하세요~ 추천합니다.
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mndtl_review_pagination swiper-pagination-fraction">
                  <span className="swiper-pagination-current">1</span> /
                  <span className="swiper-pagination-total">1</span>
                </div>
              </div>
            </div> */}
            {/* 추천리뷰 */}


            
            {/* 리뷰리스트 */}
            <div className="mndtl_cmt_rate">
              <span className="mndtl_star18">
                <span className="mndtl_star18_per" style={{width: '98%'}}></span>
                <span className="blind">별점 5점 중 <em>4.9</em>점 </span>
              </span>
              <span className="mndtl_rate_score" aria-hidden="true">{}</span>
              <div className="mndtl_rate_count">
                <div className="mndtl_rate_total">
                  <span className="mndtl_rate_totalnum">{review.length}</span>건 리뷰
                </div>
              </div>
            </div>

      

            <div className="mndtl_cmt_summary v2">
              <div className="mndtl_chart_tit">
                <span className="mndtl_tit_tx">전체 리뷰</span>
                <a href="javascript:void(0);" className="mndtl_chart_more modal-iframe-open"
                  data-react-tarea-dtl-cd="t00041" data-title="고객리뷰" data-tab-name="_detailreview_tab"
                  data-layer-target="/mitem/reviewAll.ssg?repItemId=&amp;itemId=1000021319173&amp;siteNo=6009&amp;salestrNo=1019&amp;rightBadgeCd="
                  target="_parent">더보기<span className="count"></span><i className="mndtl_ic_arr"></i></a>
              </div>
              <ul className="mndtl_chart_lst">

                {review.map((review)=>
                <li className="mndtl_chart_item">
                  <div className="mndtl_cmtsum">
                    <div className="mndtl_msg_unit">
                      <div className="mndtl_msg_bx">
                        <span className="mndtl_prdopt_name"></span>
                      </div>
                    </div>
                    <span className="mndtl_star12">
                      <span className="mndtl_star12_per" style={{width: '100%'}}></span>
                      <span className="blind">별점 5점 중 <em>5</em>점</span>
                    </span>
                    <span className="mndtl_review_type">{review.title}</span>
                    <div className="mndtl_user_info">
                      <span className="mndtl_user_tx">{review.createdTime}</span>
                      <span className="mndtl_user_tx">{review.userId}</span>
                    </div>

                    {review.reviewPhotoDtoList.length > 0 ?  
                    
                    <div className="mndtl_cmtsum_figure">
                    <ul className="mndtl_figure_lst">
                      <li className="">
                        <a href="#" className="modal_btn_photoreview modal-fix-open"
                          data-layer-target=".modal_photo_review3" data-figure-index="0"
                          onclick="itemReview.getReviewModalView('1000021319173', '6009', '1019', '1125134389', 1)"
                          target="">
                          {review.reviewPhotoDtoList.map((data)=>
                          <div className="mndtl_figure_thmb">
                          <img className="ssg_lazy loaded"
                               src={data.reviewPhotoPath}
                          />
                        </div>
                          )}
                          
                        </a>
                      </li>
                    
                    </ul>
                  </div>
                    : ""}
                   



                    <a href="#" className="modal_all_review modal-fix-open"><span className="blind">전체리뷰보기</span></a>
                    <a href="#" className="modal-fix-open">
                      <p className="mndtl_cmtsum_desc">
                        {review.mainText}
                      </p>
                    </a>
                  </div>
                  <a href="#" className="modal_all_review modal-fix-open"><span className="blind">전체리뷰보기</span></a>
                </li>
                )}
                
              </ul>
            </div>
          </div>
        
          : 
        
          <div className="mndtl_summary_noti">
            <p className="mndtl_summary_tx">등록된 리뷰가 없습니다.</p>
          </div>
        }
        
      </div>
    </div>
  );
}

export default ProductDetailReview;
