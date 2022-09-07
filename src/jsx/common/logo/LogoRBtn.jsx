import React from 'react';
import { searchState } from '../../../recoil/atom/searchState';
import {useRecoilState} from 'recoil';
function LogoRBtn({isShow, setIsShow}) {

    
    const handleShow = () => {
        setIsShow(!isShow) 
    }

    return ( 
        <button className="gnb_mall_gate clickable" type="button" aria-expanded="false" onClick={handleShow}>
            {
                isShow ? <span className="btn_label ty_on"><span className="blind">몰 목록 접기</span></span> : <span className="btn_label ty_off"><span className="blind">몰 목록 펼치기</span></span>
            }
        </button>
    );
}

export default LogoRBtn;