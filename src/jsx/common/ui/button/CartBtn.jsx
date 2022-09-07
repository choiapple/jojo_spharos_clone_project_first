import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import {Link} from 'react-router-dom';
import {useRecoilState} from 'recoil';
import LoginContext from '../../../../context/login.context';
import {searchState} from "../../../../recoil/atom/searchState"
import Server from '../../../../server/server';
import {cartCountState} from '../../../../recoil/atom/cartCountState';
import '../../../../css/hideSearch.css'
function CartBtn() {
    const [isShow, setIsShow] = useRecoilState(searchState);
    const handleShow = () =>{
        if(isShow.show === true){
            setIsShow({...isShow, show:!isShow.show});
        }
    }
    const [cartC, setCartC] = useRecoilState(cartCountState);
    const [cartCount, setCartCount] = useState();
    const auth = useContext(LoginContext);
    const token = auth.token;
    useEffect(()=>{
        if(auth.auth){
            axios.get(`${Server.baseUrl}api/cart/get`,{
                headers:{"Authorization":token}
            }).then(Response=>(
                setCartCount(Response.data.length)
            ))
        }

    },[cartC])
    return (  
        <Link onClick={handleShow} id="mHeaderCartBtn"
        to="/cart"
        className="gnb_util_mn ty_cart clickable" data-react-tarea="웹공통_N|GNB|장바구니">
        <i className="icon icon_cart">
            <span id="mHeaderCartNm" className="blind">장바구니</span>
        </i>
        <span className="cmnoti_cartshare" id="cmnoti_cartshare" style={{display:'none'}}>
            <span className="blind">함께 장보기</span>
        </span> 
        <span className="cmnoti_push" id="cartCnt_header">
            <span className="blind" id="cartCntSpan">담은 상품 수</span>
            {cartCount !== 0?cartCount:""}
        </span> 
    </Link>
    );
}

export default CartBtn;