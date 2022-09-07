import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import axios from 'axios';
import Server from "../../../server/server";


function HeroSwiper() {
  // const [good, setGood] = useState([]);
  // const getGood = async () => {
  //   const response = await fetch(
  //     `http://10.10.10.153:8081/api/newservice/getAll`
  //   );
  //   //광식씨가 준 주소 받기 -> get
  //   const json = await response.json();
  //   setGood(json);
  // };

  // useEffect(() => {
  //   getGood();
  // }, []);

 
    const [good, setGood] = useState();
    useEffect(()=>{
        axios.get(`${Server.baseUrl}api/newservice/getAll`)
        .then(Response =>{
            setGood(Response.data)
        })
    },[])
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 1000,
      autoplay: true,
    }


    //const [good, setGood] = useState([]);
    //const getGood = async () =>{
    //    const response1 = await fetch(`http://10.10.10.153:8081/api/newservice/getAll`);
    //    //광식씨가 준 주소 받기 -> get
    //    const json1 = await response1.json();
    //    setGood(json1)
    //}

    //useEffect(()=>{
    //    getGood();
    //},[])


  return (
    <>
      <div className="cmgrid_full_box">
        <div className="cmhero_banner cmhero_banner_ty_sd_scroll ty_bn100">
          <div className="cmhero_swiper" id="_cmhero_swiper">
            <div className="swiper-container swiper-container-horizontal">
              <Slider >
                {good && good.map((d) =>(
                    <div key={d.id}>
                      <li className="swiper-slide">
                        <div className="cmhero_bn">
                          <Link
                            className="cmhero_bnlnk"
                            to="">
                            <img
                              className="ssg_lazy"
                              src={`${d.productNewPhotoPath}`}
                              alt="명절"/>
                          </Link>
                        </div>
                        <div className="cmhero_tit">
                          <Link
                            className="cmhero_titlnk"
                            to="">
                            <h3 className="cmhero_titmain">
                              <span className="cmhero_titmain_tx">
                               {d.newServiceName}
                              </span>
                            </h3>
                            <div className="cmhero_titsub">
                              <span className="ccmhero_titsub_tx">
                               {d.newServiceContent}
                              </span>
                            </div>
                          </Link>
                        </div>
                      </li>
                    </div>
                ))}
              </Slider>
            </div>
            <div className="swiper-ctrls">
              <div className="swiper-pagination swiper-pagination-progressbar">
                <span className="swiper-pagination-progressbar-fill"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSwiper;
