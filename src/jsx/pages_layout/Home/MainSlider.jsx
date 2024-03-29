import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import axios from 'axios';
import Server from "../../../server/server";



function MainSlider(props) {

    const [mainSlider, setMainSlider] = useState([]);
    useEffect(()=>{
        axios.get(`${Server.baseUrl}api/banner/getAll`)
        .then(Response =>{
            setMainSlider(Response.data)
         
        })
    },[])
    
    const [settings, setSettings] = useState({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 1000,
        autoplay: true,
      });
    const handleAutoBtn= () =>{
        setSettings({...settings, autoplay : !settings.autoplay})
  
    }
    const [idx, setIdx] = useState(0);
    const handleChange = (i) =>{
        setIdx(i+1);
    }
    const useScroll = () =>{
      const [state, setState] = useState({
        y:0
      })
      const onScroll = () =>{
        setState({y:window.scrollY})
        
      }
      useEffect(()=>{
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
      },[])
      return state;
    }
    const {y} = useScroll();
    let cal = 1 - y/400;
    if(cal < 0){
      cal = 0;
    }else if(cal > 1){
      cal = 1;
    }
    
    
    
    return ( 
        <>
            <div className="smhero_banner_wrap">
                <div id="smhero_banner" className="smhero_banner"style={{opacity:cal}}>
                    <div className="smhero_swiper">


                        <div className="swiper-container swiper-container-horizontal swiper-container-autoheight">

                            <div>               
                                <Slider {...settings}>
                                    {mainSlider && mainSlider.map((m,index)=>
                                    <div key={index} onChange={()=>handleChange({index})}>
                                        <li className="swiper-slide swiper-slide-duplicate"
                                            data-swiper-slide-index="16">
                                            <div className="smhero_bn gate_unit" data-unittype="banr"
                                                data-advertacctid="1005578087" data-advertbidid="1002120689"
                                                data-advertbilngtypecd="10" data-advertkindcd="50">
                                                <div className="cmitem_tt_adinfo ssg-tooltip-wrap">
                                                    <span className="cmitem_btn_tt_adinfo ssg-tooltip"><span
                                                            className="blind">광고
                                                            안내 툴팁</span></span>
                                                    <div className="cmitem_tt_adinfo_layer ssg-tooltip-layer">검색어와 관련된
                                                        상품으로
                                                        입찰가순으로 전시됩니다.<button type="button"
                                                            className="cmitem_close_tt_adinfo ssg-tooltip-close"><span
                                                                className="blind">광고
                                                                안내 툴팁
                                                                닫기</span></button>
                                                    </div>
                                                </div>
                                                <Link to={m.bannerUri} className="smhero_bnlink">
                                                <div className="smhero_thumb">
                                                        <img src={m.bannerPhotoPath}/>
                                                </div>
                                                <div className="smhero_tit">
                                                    <h3 className="smhero_titmain">
                                                        <span className="smhero_titmain_tx">{m.bannerName}</span>
                                                        <span className="smhero_titmain_tx"></span>
                                                    </h3>
                                                    <div className="smhero_titsub">
                                                        <span className="csmhero_titsub_tx">{m.bannerContents}</span>
                                                        <span className="csmhero_titsub_tx"></span>
                                                    </div>
                                                </div>
                                                </Link>
                                            </div>
                                        </li>
                                    </div>
                                    )}
                                </Slider>
                            </div>
                        </div>


                  

            <div className="swiper-ctrls">
              <div className="swiper_autoplay">
                {/* <button
                  onClick={handleAutoBtn}
                  type="button"
                  className="btn_autoplay pause"
                >
                  <span className="label_pause">
                    <span className="blind">배너 목록 자동 재생 정지</span>
                  </span>
                  <span className="label_play">
                    <span className="blind">배너 목록 자동 재생 시작</span>
                  </span>
                </button> */}
              </div>
              <div className="swiper_moreview">
                <button type="button" className="btn_moreview">
                  <span className="blind">배너 전체보기</span>
                </button>
              </div>
            </div>
          </div>

          {/* 클릭하면 나오는거 */}
          <div
            className="smhero_viewer"
            role="dialog"
            
            aria-hidden="true"
          >
            <div className="smhero_wrap" role="document" >
              <div className="smhero_scroll">
                <div className="smhero_head">
                  <h3 className="smhero_head_tit">전체보기</h3>
                  <button type="button" className="smhero_close">
                    <span className="blind">배너 전체보기 닫기</span>
                  </button>
                </div>
                <div className="smhero_cont">
                  <ul
                    className="smhero_bnlist"
                    data-areaid="smhero"
                    data-impyn="Y"
                  >
                    <li>
                      <div
                        className="smhero_bn gate_unit"
                        data-unittype="banr"
                        data-advertacctid="1005578087"
                        data-advertbidid="1002120686"
                        data-advertbilngtypecd="10"
                        data-advertkindcd="50"
                      >
                        <div className="cmitem_tt_adinfo ssg-tooltip-wrap">
                          <span
                          
                            className="cmitem_btn_tt_adinfo ssg-tooltip"
                          >
                            <span className="blind">광고 안내 툴팁</span>
                          </span>
                          <div className="cmitem_tt_adinfo_layer ssg-tooltip-layer">
                            검색어와 관련된 상품으로 입찰가순으로 전시됩니다.
                            <button
                              type="button"
                              className="cmitem_close_tt_adinfo ssg-tooltip-close"
                            >
                              <span className="blind">광고 안내 툴팁 닫기</span>
                            </button>
                          </div>
                        </div>
                        <span
                          className="smhero_bnlink"
                   
                          
                        >
                          <div className="smhero_thumb">
                            <img
                              className="ssg_lazy"
                              src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                              data-src="https://simg.ssgcdn.com/trans.ssg?src=/ssgadp/6m/68/1002120686m.jpg&amp;w=750&amp;t=42fe216fbbc0744fd63f3b2699b3d377736f33d2"
                              alt="더운 여름 시원하게"
                              data-ll-status="observed"
                            />
                          </div>
                          <div className="smhero_tit">
                            <h3 className="smhero_titmain">
                              <span className="smhero_titmain_tx">
                                더운 여름 시원하게
                              </span>
                              <span className="smhero_titmain_tx"></span>
                            </h3>
                            <div className="smhero_titsub">
                              <span className="csmhero_titsub_tx">
                                위니아 브랜드위크
                              </span>
                              <span className="csmhero_titsub_tx"></span>
                            </div>
                          </div>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="smhero_bn gate_unit">
                        <span
                          className="smhero_bnlink"
                        >
                          <div className="smhero_thumb">
                            <img
                              className="ssg_lazy"
                              src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                              data-src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202208/2022080100044918239324907932_142.jpg&amp;w=750&amp;t=888a8898cefd98251259be028dc5d1a57315c7ab"
                              alt="메타버쓱 오픈런 사전 행사"
                              data-ll-status="observed"
                            />
                          </div>
                          <div className="smhero_tit">
                            <h3 className="smhero_titmain">
                              <span className="smhero_titmain_tx">
                                메타버쓱 오픈런 사전 행사
                              </span>
                              <span className="smhero_titmain_tx"></span>
                            </h3>
                            <div className="smhero_titsub">
                              <span className="csmhero_titsub_tx">
                                오픈런은 처음이시죠? 참여만 해도 S머니 증정!
                              </span>
                              <span className="csmhero_titsub_tx"></span>
                            </div>
                          </div>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="smhero_bn gate_unit">
                        <span
                          className="smhero_bnlink"
                      
                        >
                          <div className="smhero_thumb">
                            <img
                              className="ssg_lazy"
                              src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                              data-src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202207/2022072608260942820708147070_658.jpg&amp;w=750&amp;t=d65266aea064cab1c07cc2575acaede3f84664bd"
                              alt="2022 추석 신세계몰 사전예약"
                              data-ll-status="observed"
                            />
                          </div>
                          <div className="smhero_tit">
                            <h3 className="smhero_titmain">
                              <span className="smhero_titmain_tx">
                                2022 추석 신세계몰 사전예약
                              </span>
                              <span className="smhero_titmain_tx"></span>
                            </h3>
                            <div className="smhero_titsub">
                              <span className="csmhero_titsub_tx">
                                최대 150만원 적립 얼리버드 혜택전
                              </span>
                              <span className="csmhero_titsub_tx"></span>
                            </div>
                          </div>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="smhero_bn gate_unit">
                        <span
                          className="smhero_bnlink"
                      
                        >
                          <div className="smhero_thumb">
                            <img
                              className="ssg_lazy"
                              src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                              data-src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202207/2022072913300030619653009965_824.jpg&amp;w=750&amp;t=7ef9de5254f174d9dd33d9f09adcd286ceaee9d2"
                              alt="오늘 스마일클럽 장보기 10%적립"
                              data-ll-status="observed"
                            />
                          </div>
                          <div className="smhero_tit">
                            <h3 className="smhero_titmain">
                              <span className="smhero_titmain_tx">
                                오늘 스마일클럽 장보기 10%적립
                              </span>
                              <span className="smhero_titmain_tx"></span>
                            </h3>
                            <div className="smhero_titsub">
                              <span className="csmhero_titsub_tx">
                                뷰티 50% 매일 선착순 할인쿠폰!
                              </span>
                              <span className="csmhero_titsub_tx"></span>
                            </div>
                          </div>
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainSlider;
