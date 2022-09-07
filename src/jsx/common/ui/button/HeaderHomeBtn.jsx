import React from 'react';
import { Link } from 'react-router-dom';

function HeaderHomeBtn() {
    return ( 
        <div className="btn_cate btn_home">
            <Link to="/">

                <span className="sp_ctg_icon ctg_icon_home"><span className="blind">홈</span></span>
            </Link>
        </div>
     );
}

export default HeaderHomeBtn;