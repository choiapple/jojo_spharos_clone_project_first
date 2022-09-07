// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

// import '../node_modules/swiper/modules/pagination/pagination.scss'; // Pagination module
// import '../node_modules/swiper/modules/navigation/navigation.scss'; // Pagination module
// import '../node_modules/swiper/swiper.scss';


// SwiperCore.use([Navigation,Pagination,Autoplay ])

// function Example() {
//     const params = {
//         spaceBetween: 30,
//         centeredSlides: true,
//         autoplay: {
//           delay: 500,
//         },
//         pagination: {
//           el: '.swiper-pagination',
//           clickable: true
//         },
    
//       }
//     return ( 
//         <>
//              <Swiper
//                  autoplay= {{
//                     delay: 5000,
//                  }}
//                  navigation= {{
//                     nextEl :'.swiper-button-next',
//                     prevEl : '.swiper-button-prev'
//                   }}
//                >
//                 <SwiperSlide>Slide 1</SwiperSlide>
//                 <SwiperSlide>Slide 2</SwiperSlide>
//                 <SwiperSlide>Slide 3</SwiperSlide>
//                 <SwiperSlide>Slide 4</SwiperSlide>
 
//              </Swiper>
//              <div className="swiper-button-next"></div>
//              <div className="swiper-button-prev"></div>
//              <ul className=''>
//               <li></li>
//              </ul>
//         </>
//      );
// }

// export default Example;