import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProductSwiper({productPhotoList}) {

 
  return (
    <div className="mndtl_swiper_wrap">
      <div className="mndtl_swiper swiper-container-horizontal swiper-container-android">
      <Slider>
        { productPhotoList.map((data)=>
        <div key={data.productId}>
          <li className="swiper-slide swiper-slide-duplicate" id="itemImg4">
            <img 
              className="swiper-lazy swiper-lazy-loaded" 
              alt="상품이미지5" 
              src={data.productPhotoPath}
            />
          </li>
        </div>
        )}


      </Slider>

   

        <div className="mndtl_swiper_pagination swiper-pagination-custom">
         
        </div>
      </div>

      <div className="mndtl_ic_badge">
        <div className="ic_left_bottom" data-react-unit-type="text">
          <a
            href="https://m.ssg.com/search/image/main.ssg?searchType=img&amp;itemId=1000310147566&amp;src_area=ssglensdetail"
            className="mndtl_btn_lens clickable"
            target="_parent"
          >
            <i className="mndtl_ic mndtl_ic_lens"></i>
            <em className="blind">SSG.lens 바로가기</em>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductSwiper;
