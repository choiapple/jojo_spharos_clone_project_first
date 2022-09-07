import React, { useState } from 'react';
import HeaderHideMenu from '../common/HeaderHideMenu.jsx';
import Logo from '../common/logo/Logo';
import LogoRBtn from '../common/logo/LogoRBtn';
import SearchBox from '../common/ui/SearchBox.jsx';
import {useLocation} from 'react-router-dom';
import CartBtn from '../common/ui/button/CartBtn.jsx';
import HideSearch from '../common/hide/HideSearch.jsx';

function Header() {

    
    const [isShow, setIsShow] = useState(false)
    
    let location = useLocation();
        if(location.pathname === '/login' 
        || location.pathname === '/mypage'
        || location.pathname === '/buypage' 
        || location.pathname === '/cart' 
        || location.pathname === '/signup'
        || location.pathname === '/subsignup'
        || location.pathname === '/subsignup2'
        || location.pathname === '/delivery'
        || location.pathname === '/deliveryadd'
        || location.pathname === '/recentsearch'
        || location.pathname === '/buycomplete'
        || location.pathname === '/BuyComplete'
      
        )
        {
         return null;
        } 
    return ( 
        <>

            <header id="m_header" className="mcom_header react-area">
                <div id="m_header_banner"></div>
                <div id="m_gnb" className="mcom_gnb v2">
                    <div className="gnb_mall">
                        <Logo />
                        <LogoRBtn isShow={isShow} setIsShow={setIsShow}/>
                        <HeaderHideMenu isShow={isShow}/>
                    </div>
                    <div className="gnb_util">
                        <SearchBox/>
                        <CartBtn />
                    </div>
                </div>

               
            </header>

        </>
    );
}

export default Header;