import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import LoginContext from '../../../../context/login.context';
import Server from "../../../../server/server";
import {cartCountState} from '../../../../recoil/atom/cartCountState';

function HeaderCrtBtn() {

    const [cartC, setCartC] = useRecoilState(cartCountState);
    const auth = useContext(LoginContext);
    const token = auth.token;
    const [cartCount, setCartCount] = useState();
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
        <Link to="/cart"><div className="btn_cate btn_cart">
       <button type="button" className="clickable">
            <span className="sp_ctg_icon ctg_icon_cart">
                <span className="cmnoti_push">
                    <span className="blind" id="topCartCnt">
                        담은 상품 수
                    </span>
                    {cartCount !== 0?cartCount:""}
                </span>
            </span>
        </button>
    </div></Link>
     );
}

export default HeaderCrtBtn;