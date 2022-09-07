import React, { useState } from 'react';
import HistoryCt from '../pages_layout/RecentSearch/HistoryCt';
import HistoryTop from '../pages_layout/RecentSearch/HistoryTop';
import { historyState } from '../../recoil/atom/historyState'
import {useRecoilState} from 'recoil';
import { useEffect } from 'react';
import axios from 'axios';
import HistoryCtrl from '../common/widget/recentsearch/HistoryCtrl';
import Swal from 'sweetalert2';
import Server from '../../server/server';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import LoginContext from '../../context/login.context';

function RecentSearch() {
    const auth = useContext(LoginContext);

    const swal = ()=>{
        Swal.fire({
          title: '',  
              text: `삭제되었습니다 `,
              icon: 'success'
        })
      }
    const [recentList, setRecentList] = useState(false);

    const [isShow, setIsShow] = useRecoilState(historyState)
    const handleDelete = () => {
        setIsShow({
            ...isShow,
            show: !isShow.show
        })
    }
    const [recentPdt, setRecentPdt] = useState([]);
    const token = localStorage.getItem('token')
    
    const [deleteMsg , setDeleteMsg] = useState();

    useEffect(() => {
        if(auth.token){
            axios.get(`${Server.baseUrl}api/recently/list`, {
                headers: {
                    "Authorization": token
                }
            })
            .then(Response => {
                setRecentPdt(Response.data)
            })
        }
    }, [auth, deleteMsg])

    
    const deleteRecent = () => {
        axios.delete(`${Server.baseUrl}api/recently/delete/all`, {
                headers: {
                    "Authorization": token
                }
            })
            .then(Response => {
                console.log(Response)
                swal();
                setRecentList(!recentList)
                setDeleteMsg(Response)
            })
    }
  console.log(recentPdt)
    return ( 
        <div id="m_content">
            <div className="cmhistory_wrap" id="_cmhistory_wrap">
                <div className="cmhistory_top">
                    <div className="cmhistory_tit">
                        <h1><strong>최근 본 쇼핑정보</strong></h1>


                        {isShow.show ?
                        <button type="button" onClick={handleDelete} className="cmhistory_bt">
                            편집<i className="sp_cmhistory_ic cmhistory_ic_edit"></i>
                        </button>
                        :
                        <button onClick={handleDelete} type="button" className="cmhistory_bt">
                            취소<i className="sp_cmhistory_ic cmhistory_ic_cancel"></i>
                        </button>}
                    </div>

                    <div className="cmhistory_ctrl">
                        {isShow.show ?
                        <ul className="cmhistory_sort">
                            <li className="on" data-srch-div-cd="10,70,71"><button type="button">상품</button></li>
                            <li data-srch-div-cd="60"><button type="button">검색어</button></li>
                            <li data-srch-div-cd="20"><button type="button">카테고리</button></li>
                            <li data-srch-div-cd="50,51"><button type="button">이벤트</button></li>
                            <li data-srch-div-cd="30,32,35,36"><button type="button">기획전</button></li>
                            <li data-srch-div-cd="40"><button type="button">브랜드</button></li>
                            <li data-srch-div-cd="41"><button type="button">매장</button></li>
                        </ul>
                        :

                        <ul className="cmhistory_delete">
                            <li><span className="cmhistory_bt"><button type="button"
                                        className="cmhistory_bt_seldel">선택삭제 </button></span></li>
                            <li onClick={deleteRecent}><span className="cmhistory_bt"><button type="button"
                                        className="cmhistory_bt_alldel">전체삭제 </button></span></li>
                        </ul>
                        }


                    </div>
                </div>
                <div className="cmhistory_ct">

             {
                recentPdt.length !== 0 ? recentPdt &&
                    <div className="cmhistory_scroll" id="_cmhistory_scroll">
                        <div className="iscroll">
                            <ul className="cmhistory_list_area">



                                {recentPdt && recentPdt.map((data) =>
                                <li key={data.productId} className="cmhistory_type_product" id="history_10878875902">
                                    <div className="cmhistory_unit_box">
                                        {isShow.show ? "" :
                                        <div className="cmhistory_cell cmhistory_h_form">
                                            <span className="cmhistory_form_chk">
                                                <input type="checkbox" name="cmhistory_chk" id="cmhistory_chk14"
                                                    value="10878875902" />
                                                <label for="cmhistory_chk14" className="blind">상품 [APPLE(애플)] 애플워치SE
                                                    Nike
                                                    {data.productInfo}
                                                </label>
                                            </span>
                                        </div>
                                        }

                                        <div className="cmhistory_cell cmhistory_h_link">
                                            <a  className="clickable">
                                                <div className="cmhistory_h_txt">
                                                    <span className="cm_mall_text">
                                                        <i className="sm">신세계몰</i>
                                                    </span>
                                                    <span className="cmhistory_tx">{data.productInfo}</span>
                                                    <span className="cmhistory_tx_price"><em
                                                            className="ssg_price">{(data.price).toLocaleString()}</em><span
                                                            className="ssg_tx">원</span></span>
                                                </div>
                                                <div className="cmhistory_h_thmb">
                                                    <div className="cmhistory_thmb">
                                                        <img className="ssg_lazy" src={data.thumbnailUri} />
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="cmhistory_cell cmhistory_h_add">
                                            <div className="cmhistory_bt_area">
                                                <button type="button" className="cmhistory_bt_cart">
                                                    <i className="sp_cmhistory_ic cmhistory_ic_cart"><span
                                                            className="blind">장바구니
                                                            담기</span></i>
                                                </button>
                                                <span style={{display: 'none'}} className="disp_cart_data"> </span>
                                            </div>
                                            <div className="cmhistory_bt_area">
                                                <span className="cmlike _js_cmlike interestIt">
                                                    <input type="hidden" name="attnDivCd" value="10" />
                                                    <input type="hidden" name="attnDivDtlCd" value="10" />
                                                    <input type="hidden" name="siteNo" value="6004" />
                                                    <input type="hidden" name="attnTgtIdnfNo1" value="1000425144664" />
                                                    <input type="hidden" name="attnTgtIdnfNo2" value="6005" />
                                                    <input type="hidden" name="infloSiteNo" value="6004" />
                                                    <button className="cmlike_btn _js_cmlike_btn sel_clip clickable"
                                                        data-react-tarea="최근본|목록_상품|클립|APPLE(애플)">
                                                        <span className="cmlike_ico">
                                                            <i className="cmlike_secondary_m"></i>
                                                            <span className="sr_off"><span className="blind">관심상품
                                                                    취소</span></span>
                                                            <span className="sr_on"><span className="blind">관심상품
                                                                    등록</span></span>
                                                        </span>
                                                    </button></span>
                                            </div>
                                        </div>
                                    </div>

                                </li>
                                )}




                            </ul>
                        </div>
                    </div>
                :
                <div className="cmhistory_nodata">
                <p>최근 본 쇼핑정보 없습니다.</p>
            </div>
             }
                    
                    

                  

                
                  
                 

                    


                </div>
            </div>
        </div>
     );
}

export default RecentSearch;