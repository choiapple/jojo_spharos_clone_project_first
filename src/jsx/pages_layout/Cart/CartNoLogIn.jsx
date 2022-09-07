import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../layout/Footer';
import Login from '../../pages/LogIn';
import FooterBtm from '../Footer/FooterBtm';
import FooterMid01 from '../Footer/FooterMid01';
import FooterMid02 from '../Footer/FooterMid02';
import FooterTop from '../Footer/FooterTop';
import CartFooter from './CartFooter';
import CartHeader from './CartHeader';

function CartNoLogIn() {
	const handleShowLogin = () =>{
		
		
	}
    return (
        <>
			<div className="mnodr_nodata topPlus">
			<i className="mnodr_ic ic_basket"></i>
			<p className="mnodr_tx_tit">장바구니에 담긴 상품이 없습니다.</p>
			<p className="mnodr_tx_desc">로그인을 하시면 담긴 상품이 있는지 바로 확인하실 수 있습니다!</p>
			<div className="mnodr_btn_area ty_mgtop">
				<Link to="/login"><button type="button" name="loginBtn" className="mnodr_btn ty_point ty_lg codr_btn_login" onClick={handleShowLogin}>
						<span className="mnodr_btn_tx">로그인하기</span>
					</button></Link>
				</div>
			</div>
			<div class="mnodr_thickhr"></div>
           
        </>
    );
}

export default CartNoLogIn;