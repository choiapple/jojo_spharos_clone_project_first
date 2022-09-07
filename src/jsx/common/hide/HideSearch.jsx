import React, { useContext } from "react";
import Server from "../../../server/server";
import { searchState } from "../../../recoil/atom/searchState";
import { useRecoilState } from "recoil";
import CartBtn from "../ui/button/CartBtn";
import axios from "axios";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import LoginContext from "../../../context/login.context";

function HideSearch() {
  const navigate = useNavigate();
  const [search, setSearch] = useRecoilState(searchState);
  // const search = useContext(SearchContext)
  const handleHideSearch = () => {
    setSearch({ ...search, show: !search.show });
  };


  const [searchCtt, setSearchCtt] = useState("");
  const onChange = (e) => {
    setSearchCtt(e.target.value);
  };
  
  const searchBtn = () => {
    const token = auth.token;
    setSearch({ ...search, show: !search.show });
    navigate(`/productlist?keyword=${searchCtt}`);
    axios.post(`${Server.baseUrl}api/recentsearches/add`,{
        "histories":searchCtt,
        headers:{"Authorization":token}
    })
  };

  const searchBtnPress = (e) => {
    if(e.key === "Enter"){
      const token = auth.token;
      setSearch({ ...search, show: !search.show });
      navigate(`/productlist?keyword=${searchCtt}`);
      axios.post(`http://localhost:8080/api/recentsearches/add`,{
          "histories":searchCtt,
          headers:{"Authorization":token}
      })
    }
  };


  const auth = useContext(LoginContext);
  const location= useLocation();
  const [recentSearch, setRecentSearch] = useState();
  const [toggle, setToggle]= useState(false);
  useEffect(()=>{
    const token = auth.token;
    axios.get(`${Server.baseUrl}api/recentsearches/get`,{
        headers:{"Authorization":token}
    }).then((Response)=>{
        setRecentSearch(Response.data);
    })
  },[location, search, toggle])
  const deleteSearch = (keyword) =>{
    const token = auth.token;
    axios.delete(`${Server.baseUrl}api/recentsearches/delete/${keyword}`,{
        headers:{"Authorization":token}
    })
    setToggle(!toggle);
  }
  const handleDeleteAll = () =>{
    const token = auth.token;
    axios.delete(`${Server.baseUrl}api/recentsearches/delete/all`,{
        headers:{"Authorization":token}
    })
    setToggle(!toggle);
  }
  const handleLink = () =>{
    setSearch(!search);
  }


  return (
    <>
      <div className="cgsearch cgsearch_v3 hideSearch">
        <div
          className={search.show ? "cgsearch_cover viewCom" : "cgsearch_cover"}
          id="m_sch_top"
        >
          <div className="cgsearch_inpbox_wrap">
            <div className="cgsearch_inpbox_back">
              <button type="button" onClick={handleHideSearch}>
                <span className="blind">이전으로</span>
              </button>
            </div>
            <div className="cgsearch_inpbox">
              <div className="cgsearch_inpbox_sbox">
                <input
                  id="query"
                  name="query"
                  type="text"
                  placeholder="검색어를 입력하세요."
                  className="cgsearch_inpbox_inp"
                  onChange={onChange}
                  onKeyPress={searchBtnPress}
                />

                <input type="hidden" id="query_sub" />
                <input type="hidden" id="srch_site_no" />
                <input type="hidden" id="select_site_no" />
                <input type="hidden" id="srch_header_type" />
                <input type="hidden" id="isSpcShopSrchYn" />
                <input type="hidden" id="specialShopId" />
                <input type="hidden" id="isModuleSrchYn" />
                <input type="hidden" id="modulePropId" />
                <input
                  type="hidden"
                  id="skipHeaderTopYn"
                  name="skipHeaderTopYn"
                />
                <button
                  type="button"
                  onClick={searchBtn}
                  className="cgsearch_inpbox_src"
                  id="cgsearch_src"
                >
                  <span className="blind">검색</span>
                </button>

                <button
                  type="button"
                  className="cgsearch_inpbox_del"
                  id="cgsearch_del"
                  style={{ display: "none" }}
                >
                  <span className="blind">검색</span>
                </button>
              </div>
            </div>

            <div className="cgsearch_inpbox_util">
              {/* <a id="mHeaderCartBtn_search"
                            href="javascript:mobileCommonFn.goCartViewPage('https://pay.ssg.com/m/cart/dmsShpp.ssg')"
                            className="cgsearch_util_mn ty_cart">
                            <i className="icon icon_cart">
                                <span id="mHeaderCartNm_search" className="blind">장바구니</span>
                            </i>

                            <span className="cmnoti_cartshare" id="cmnoti_cartshare_search"
                                style={{display:'none'}}><span className="blind">함께 장보기</span></span>
                            <span className="cmnoti_push" id="cartCnt_search"><span className="blind"
                                    id="searchCartCntSpan">담은 상품
                                    수</span></span>
                        </a> */}
              <CartBtn />
            </div>
          </div>

          <div
            className="cgsearch_cover_autocomp"
            id="m_srh2"
            style={{ display: "none" }}>
            <div className="cgsearch_cover_short" id="ac_short_list"></div>
            <div className="cgsearch_cover_recomm">
              <ul className="cgsearch_recomm_keylist" id="ac_kwd_list"></ul>
            </div>
          </div>
        
          <div className="cgsearch_recomm_keyword" id="m_srh1">
            {
                recentSearch && recentSearch.length !== 0 ?
                <div
                className="cgsearch_latest_keyword"
                id="mbr_kwd_alert_all"
                style={{ display: "block" }}>
                <h3 className="cgsearch_latest_title">최근검색어</h3>
                <ul className="cgsearch_latest_keylst" id="mbr_kwd_list">
                  {
                      recentSearch && recentSearch.map((data)=>(
                          <li>
                          <Link to={`/productlist?keyword=${data}`}
                            class="box" onClick={handleLink}>
                            {data}
                          </Link>
                          <button
                            class="cgsearch_keyword_del"
                             onClick={()=>deleteSearch(data)}
                             >
                            <span class="blind">삭제</span>
                          </button>
                        </li>
                      ))
                  }
                </ul>
                <button type="button" className="cgsearch_delete_all" onClick={handleDeleteAll}>
                  검색어 전체 삭제
                </button>
              </div>
                :
                <div className="cgsearch_none_result" id="mbr_kwd_alert_nolist">
              <p>최근검색어가 없습니다</p>
            </div>
            }
            
           

            <div className="cgsearch_recomm_tag" id="now_hot_all">
              <h3 className="cgsearch_recomm_title">추천태그</h3>
              <div className="cgsearch_recomm_container">
                <ul className="cgsearch_recomm_lst" id="now_hot_list">
                  <li>
                    <a href="http://m.shinsegaemall.ssg.com/mall/search.ssg?query=%23데오드란트">
                      <span className="cgsearch_recomm_img">
                        <img
                          src="//sui.ssgcdn.com/cmpt/banner/202208/2022080516540766110801992080_411.PNG"
                          alt=""
                        />
                      </span>
                      <span className="cgsearch_recomm_txt">
                        #겨터파크
                        <br />
                        문제없지
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="http://m.shinsegaemall.ssg.com/mall/search.ssg?query=%23셀프네일">
                      <span className="cgsearch_recomm_img">
                        <img
                          src="//sui.ssgcdn.com/cmpt/banner/202208/2022080516543313728281406828_989.PNG"
                          alt=""
                        />
                      </span>
                      <span className="cgsearch_recomm_txt">
                        #매력만점
                        <br />
                        네일아트
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="http://m.shinsegaemall.ssg.com/mall/search.ssg?query=%23빨래용">
                      <span className="cgsearch_recomm_img">
                        <img
                          src="//sui.ssgcdn.com/cmpt/banner/202208/2022080516545680379857510095_980.PNG"
                          alt=""
                        />
                      </span>
                      <span className="cgsearch_recomm_txt">
                        #여름빨래
                        <br />
                        뽀송하게!
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="http://m.shinsegaemall.ssg.com/mall/search.ssg?query=%23선글라스">
                      <span className="cgsearch_recomm_img">
                        <img
                          src="//sui.ssgcdn.com/cmpt/banner/202208/2022080516551843460401697040_21.PNG"
                          alt=""
                        />
                      </span>
                      <span className="cgsearch_recomm_txt">
                        #멋쟁이
                        <br />
                        여름아이템
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HideSearch;
