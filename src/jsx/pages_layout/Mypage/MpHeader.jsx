import React from 'react';
import BackBtn from '../../common/ui/button/BackBtn';
import CartBtn from '../../common/ui/button/CartBtn';
import HeaderCrtBtn from '../../common/ui/button/HeaderCrtBtn';
import HeaderHomeBtn from '../../common/ui/button/HeaderHomeBtn';

function MpHeader() {
    return ( 
        <div className="mcom_tit_renew react-area">
            <h2 className="mcom_tit_txt clickable">
                <a href="">MY SSG</a>
            </h2>
            <BackBtn />
            <div className="mcom_tit_rgt">
                <HeaderCrtBtn />
                <HeaderHomeBtn />
            </div>
        </div>
     );
}

export default MpHeader;