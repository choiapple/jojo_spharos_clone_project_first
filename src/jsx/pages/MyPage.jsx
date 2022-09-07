import React, { useState } from 'react';
import BackBtn from '../common/ui/button/BackBtn';
import MpHeader from '../pages_layout/Mypage/MpHeader';
import UserBanner from '../pages_layout/Mypage/UserBanner';
import UserBanner2 from '../pages_layout/Mypage/UserBanner2';
import UserManage from '../pages_layout/Mypage/UserManage';
import UserMenu from '../pages_layout/Mypage/UserMenu';
import UserOrder from '../pages_layout/Mypage/UserOrder';
import UserReview from '../pages_layout/Mypage/UserReview';
import axios from 'axios';
import { useContext } from 'react';
import { useEffect } from 'react';
import loginContext from '../../context/login.context';

import LogIn from './LogIn';
import PfMemInfo from '../common/widget/mypage/Profile/PfMemInfo';
import PfManage from '../common/widget/mypage/Profile/PfManage';
import PfBenefit from '../common/widget/mypage/Profile/PfBenefit';

import Server from '../../server/server';
import Loading from './Loading';



function MyPage() {

    const [loading, setLoading] = useState(false);
    const auth = useContext(loginContext);
    const [user, setUser] = useState({
        name:"",
        membershipLevel:""
    });
    const [myOrder, setMyOrder] = useState();
    const [coupon, setCoupon] = useState();
    useEffect(()=>{
        
    },[auth])
    useEffect(()=>{
        const token = auth.token;
        axios.all
        ([
            axios.get(`${Server.baseUrl}api/user/get`,{headers:{"Authorization":token}}),
            axios.get(`${Server.baseUrl}api/coupon/get`,{headers:{"Authorization":token}}),
            axios.get(`${Server.baseUrl}api/orders/get`,{headers:{"Authorization":token}})
        ])
        .then(axios.spread((Response,Response2,Response3) => {
            setUser({
                name:Response.data.name,
                membershipLevel:Response.data.membershipLevel
            });
            setCoupon(Response2.data);
            setMyOrder(Response3.data);
            setLoading(!false)
            }
    ))},[auth])

    console.log(auth)
    return (
<>
    {
    auth.auth ? (loading ?
        (myOrder && user && coupon &&

    <div>
        <div id="m_wrap" className="mcom_wrap ssg">
            <header id="m_header" className="mcom_header react-area">
                <div className="cgsearch cgsearch_v3">
                    <div className="cgsearch_cover" id="m_sch_top">
                        <div className="cgsearch_inpbox_wrap">
                            <BackBtn />
                            <div className="cgsearch_inpbox_util">
                                <a id="mHeaderCartBtn_search" href="" className="cgsearch_util_mn ty_cart">
                                    <i className="icon icon_cart">
                                        <span id="mHeaderCartNm_search" className="blind">장바구니</span>
                                    </i>
                                    <span className="cmnoti_cartshare" id="cmnoti_cartshare_search"
                                        style={{display:'none'}}><span className="blind">함께
                                            장보기</span></span>
                                    <span className="cmnoti_push" id="cartCnt_search"><span className="blind"
                                            id="searchCartCntSpan">담은 상품 수</span></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


            <div id="m_container" className="mcom_container" data-iframe-height="">
                <MpHeader />

                <div id="m_content" className="myssg_main react-area">
                    <div className="myssg_user_sec">
                        <div className="myssg_user_profile">
                            <div className="myssg_profile_info">
                                <div className="myssg_user_name">
                                    <a href="" className="clickable">{user.name}</a>
                                </div>
                                <div className="myssg_user_grade" data-react-unit-type="text">
                                    <a href="" className="clickable">
                                        <p>
                                            <strong className="myssg_primary_text">{user.membershipLevel}</strong>
                                            등급입니다.
                                        </p>
                                    </a>
                                </div>
                                <div className="myssg_user_grade"></div>
                            </div>
                        </div>
                        <PfMemInfo />
                        <PfManage />
                        <PfBenefit coupon={coupon} />
                    </div>
                    <UserOrder myOrder={myOrder} />
                    <UserMenu />
                    <UserReview />
                    <UserBanner />
                    <UserManage />
                    <UserBanner2 />
                </div>
                <span className="dimmed">&nbsp;</span>
                <div className="mcom_modal myssg_modal myssg_modal_profile" role="dialog" aria-hidden="true">
                    <div className="mcom_modal_wrap" role="document">
                        <div className="mcom_modal_cont">
                            <div className="myssg_profile_thmb">
                                <img src="//sui.ssgcdn.com/ui/m_ssg/img/@100x100.png" alt="프로필 이미지" id="talkImgSub" />
                                <form id="talkPorfileForm" name="talkPorfileForm" method="post">
                                    <span className="myssg_btn_change_thmb">
                                        <label>
                                            <span className="myssg_btn_profile_setting"><span className="blind">프로필 이미지
                                                    변경</span></span>
                                        </label>
                                        <input className="blind" type="file" id="_uploadProfileImage" name="file"
                                            accept="image/*" />
                                    </span>
                                </form>
                            </div>
                            <div className="myssg_profile_titarea">
                                <h1 className="myssg_profile_tit">프로필 관리</h1>
                                <p className="myssg_profile_subtit">
                                    등록하신 프로필은 쓱톡, 함께 장보기 등<br />SSG.COM 서비스에
                                    적용됩니다.
                                </p>
                            </div>
                            <div className="myssg_profile_sec">
                                <div className="myssg_form_tit">이름</div>
                                <div className="myssg_inp_txt">
                                    <input type="text" id="talkNickName" name="talkNickName"
                                        placeholder="이름을 입력해주세요." />
                                </div>
                                <div className="myssg_form_tit">소개</div>
                                <div className="myssg_inp_txtarea">
                                    <textarea id="talkMessage" name="talkMessage" placeholder="소개를 입력해주세요." cols="30"
                                        rows="2"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="mcom_modal_foot">
                            <div className="mcom_modal_btnarea">
                                <button type="button" className="mcom_modal_btn ty_gray modal-profile-close-btn">
                                    <span>취소</span>
                                </button>
                                <button type="button" className="mcom_modal_btn ty_red">
                                    <span>수정완료</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button type="button" id="_layerLikeCouponBtn" className="store-modal-alert-open blind">
            스토어 좋아요
        </button>
    </div>):<Loading/>)
    :
    <LogIn />
    }
</>
    );
}

export default MyPage;