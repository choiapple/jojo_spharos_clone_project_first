import React from 'react';

function UserBanner() {
    return ( 
        <div className="myssg_banner ty_plcc">
                         <div className="myssg_banner_swiper swiper-container swiper-container-horizontal swiper-container-android"
                             id="_plcc_bnr_swiper" data-react-tarea-cd="00040_000000235">
                             <div className="swiper-wrapper">
                                 <div className="swiper-slide swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev"
                                     data-swiper-slide-index="1" style={{height:'563px'}}>
                                     <a href="/event/eventDetail.ssg?promId=1100575267"><img
                                             src="//sui.ssgcdn.com/cmpt/banner/202010/2020102609530229026839293683_608.png"
                                             data-src="//sui.ssgcdn.com/cmpt/banner/202010/2020102609530229026839293683_608.png"
                                             alt="삼성카드" /></a>
                                 </div>
                                 <div className="swiper-slide swiper-slide-duplicate-active" data-swiper-slide-index="0"
                                     style={{height:'563px'}}>
                                     <a
                                         href="https://event.ssg.com/m/eventDetail.ssg?nevntId=1000000000858&amp;siteNo=6005&amp;recruitmentPath=L6007001&amp;eventCode=HPG02"><img
                                             src="//sui.ssgcdn.com/cmpt/banner/202207/2022071216344071569741400084_171.jpg"
                                             data-src="//sui.ssgcdn.com/cmpt/banner/202207/2022071216344071569741400084_171.jpg"
                                             alt="Ed2 오픈" /></a>
                                 </div>
                                 <div className="swiper-slide swiper-slide-prev swiper-slide-duplicate-next"
                                     data-swiper-slide-index="1" style={{height:'563px'}}>
                                     <a href="/event/eventDetail.ssg?promId=1100575267"><img
                                             src="//sui.ssgcdn.com/cmpt/banner/202010/2020102609530229026839293683_608.png"
                                             data-src="//sui.ssgcdn.com/cmpt/banner/202010/2020102609530229026839293683_608.png"
                                             alt="삼성카드" /></a>
                                 </div>
                                 <div className="swiper-slide swiper-slide-duplicate swiper-slide-active"
                                     data-swiper-slide-index="0" style={{height:'563px'}}>
                                     <a
                                         href="https://event.ssg.com/m/eventDetail.ssg?nevntId=1000000000858&amp;siteNo=6005&amp;recruitmentPath=L6007001&amp;eventCode=HPG02"><img
                                             src="//sui.ssgcdn.com/cmpt/banner/202207/2022071216344071569741400084_171.jpg"
                                             data-src="//sui.ssgcdn.com/cmpt/banner/202207/2022071216344071569741400084_171.jpg"
                                             alt="Ed2 오픈" /></a>
                                 </div>
                             </div>
                             <button type="button" className="myssg_banner_btn myssg_banner_prev">
                                 <span className="blind">이전 배너 보기</span>
                             </button>
                             <button type="button" className="myssg_banner_btn myssg_banner_next">
                                 <span className="blind">다음 배너 보기</span>
                             </button>
                         </div>
                     </div>
     );
}

export default UserBanner;