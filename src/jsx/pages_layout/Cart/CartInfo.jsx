import React from "react";
import { useContext } from "react";
import { useState } from "react";
import {Link, Route} from "react-router-dom";
import LoginContext from "../../../context/login.context";

function CartInfo({userDelivery}){
	const auth = useContext(LoginContext);
    return (
        <>
        {
            userDelivery
            ?
            <div className="mnodr_info2">
            	<div className="mnodr_info2_header">
            		<div className="mnodr_info2_row">
            			<i className="icon ty_sm icon_location" aria-hidden="true"></i>
            			<h3 className="mnodr_info2_tit">{userDelivery.addressName}</h3>
            			<span className="mnodr_info2_subtit">{userDelivery.whetherOnlyThisTime === true
            				&&userDelivery.whetherDefaultAddress===false?"이번만 배송지":"기본배송지"}</span>
            		</div>
            		<p className="mnodr_info2_desc"><span className="blind">배송지 주소</span>[{userDelivery.zipCode}]
            			{userDelivery.address}</p>
            		<p className="mnodr_info2_desc mnodr_tx_point" id="delicoText"></p>
            	</div>
            	<div className="mnodr_info2_contents">
            		<div className="mnodr_info2_btnarea">
            			<button className="mnodr_info2_btn cartTracking" type="button" name="btnReqMultShpp"
            				data-tracking-cd="00044_000000195_t00060">
            				여러곳으로 한방에</button>

							<Link to='/delivery' className="mnodr_info2_btn layer_filter cartTracking">
								<button type="button" id="changeAddressBtn"
            					className="mnodr_info2_btn layer_filter cartTracking" data-type="shpploc"
            					data-tracking-cd="00044_000000195_t00060">
            					배송지 변경</button>
							</Link>
            		

            			<a style={{display:"none"}} className="modal-fix-open"
            				data-layer-target="#_layerChangeAddr"></a>


            			<div className="mnodr_modal ty_full mnodr_changeaddr" role="dialog" aria-hidden="true"
            				id="_layerChangeAddr">
            				<div className="mnodr_modal_wrap" role="document">
            					<div className="mnodr_modal_head">
            						<h3 className="mnodr_modal_tit">배송지 변경</h3>
            						<button type="button" className="mnodr_modal_close modal-close-btn">
            							<i className="mnodr_ic ic_close"><span className="blind">팝업닫기</span></i>
            						</button>
            					</div>
            					<div className="mnodr_modal_cont">
            						<div className="mnodr_modal_scroll">
            							<ul className="mnodr_rdotablist">

            								<li className="mnodr_rdotab ty_full">
            									<input type="radio" className="blind mnodr_rdotab_inp payTracking"
            										id="ui_test0" data-zipcd="48531" name="mbrShpplocRadio"
            										data-pt-click="배송지변경_레이어|배송지 목록|배송지" />
            									<label className="mnodr_rdotab_label">

            										<div className="mnodr_rdotab_ctn">
            											<div className="mnodr_rdotab_left">
            												<i className="mnodr_rdotab_btn"></i>
            											</div>
            											<div className="mnodr_rdotab_right">
            												<div className="mnodr_rdotab_row">
            													<div className="mnodr_tx_wrap2">
            														<strong
            															className="mnodr_tx mnodr_tx_primary">민광식</strong>
            													</div>
            												</div>
            												<p className="mnodr_tx mnodr_tx_primary">[48531] 부산광역시 남구
            													유엔평화로137-1, 201호 (용당동, 유림빌)</p>
            												<p className="mnodr_tx mnodr_tx_gray">민광식 / 010-4218-4601
            												</p>
            											</div>
            										</div>

            									</label>
            								</li>
            							</ul>
            							<div className="mnodr_sec">
            								<button className="mnodr_btn ty_m ty_grayline payTracking" type="button"
            									name="btnAddMbrNshpploc" data-pt-click="배송지변경_레이어|배송지 목록|주소추가하기">
            									<span className="mnodr_btn_tx4">+ 주소 추가하기</span>
            								</button>
            							</div>
            						</div>
            					</div>
            					<footer className="mnodr_modal_foot">
            						<div className="mnodr_btn_area">
            							<button id="onceAddrChange" type="button"
            								className="mnodr_btn ty_lg ty_gray5 payTracking"
            								data-pt-click="배송지변경_레이어|하단 버튼|이번만 배송지 변경">
            								<strong className="mnodr_btn_tx">
            									이번만 배송지 변경</strong>
            							</button>
            							<button id="basicAddrChange" type="button"
            								className="mnodr_btn ty_lg ty_point payTracking"
            								data-pt-click="배송지변경_레이어|하단 버튼|기본 배송지 변경">
            								<strong>
            									기본배송지 변경</strong>
            							</button>
            						</div>
            					</footer>
            				</div>
            			</div>


            		</div>
            	</div>
            </div>
            :
            <div className="mnodr_info">
        <div className="mnodr_info_header">
            <div className="mnodr_info_row">
                <i className="mnodr_ic ic_location"></i>
                <h3 className="mnodr_info_tit ty2">배송지를 등록해주세요</h3>
            </div>
            <p className="mnodr_tx_desc mnodr_tx_gray">고객님의 배송지에서 구매 가능한 상품인지 알려드릴게요.</p>
        </div>
        <div className="mnodr_info_contents">
            <div className="mnodr_info_btnarea">
                <button type="button" className="mnodr_info_btn" name="btnAddMbrNshpploc">
                    배송지 등록
                </button>
                <Link to="/" className="modal-fix-open"></Link>
                    <div className="mnodr_modal ty_full mnodr_changeaddr" id="_layerChangeAddr">
                        <div className="mnodr_modal_wrap" role="document">
                            <div className="mnodr_modal_head">
                                <h3 className="mnodr_modal_tit">배송지 변경</h3>
                                <button type="button" className="mnodr_modal_close modal-close-btn">
                                    <i className="mnodr_ic ic_close"><span className="blind">팝업닫기</span></i>
                                </button>
                            </div>
                            <div className="mnodr_modal_cont">
                                <div className="mnodr_modal_scroll">
                                    <ul className="mnodr_rdotablist">
                                        
                                    </ul>
                                    <div className="mnodr_sec">
                                        <button className="mnodr_btn ty_m ty_grayline payTracking" type="button" name="btnAddMbrNshpploc" data-pt-click="배송지변경_레이어|배송지 목록|주소추가하기">
                                            <span className="mnodr_btn_tx4">+ 주소 추가하기</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <footer className="mnodr_modal_foot">
                            <div className="mnodr_btn_area">
                                <button id="onceAddrChange" type="button" className="mnodr_btn ty_lg ty_gray5 payTracking" data-pt-click="배송지변경_레이어|하단 버튼|이번만 배송지 변경">
                                    <strong className="mnodr_btn_tx">
                                        이번만 배송지 변경
                                    </strong>
                                </button>
                                <button id="basicAddrChange" type="button" className="mnodr_btn ty_lg ty_point payTracking" data-pt-click="배송지변경_레이어|하단 버튼|기본 배송지 변경">
                                    <strong>
                                        기본배송지 변경
                                    </strong>
                                </button>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
            </div>
            
            
        }
        </>
    );

}

export default CartInfo;








