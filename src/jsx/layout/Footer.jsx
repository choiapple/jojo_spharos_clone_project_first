import React from 'react';
import FooterBtm from '../pages_layout/Footer/FooterBtm';
import FooterMid01 from '../pages_layout/Footer/FooterMid01';
import FooterMid02 from '../pages_layout/Footer/FooterMid02';
import FooterTop from '../pages_layout/Footer/FooterTop';
import {useLocation} from 'react-router-dom'

function Footer() {
    let location = useLocation();
    if(    location.pathname === '/buypage' 
        || location.pathname === "/category" 
        || location.pathname === '/signup' 
        || location.pathname === '/cart'
        || location.pathname === '/recentsearch'
        || location.pathname === '/buycomplete'
        || location.pathname === '/BuyComplete'
        || location.pathname === '/categoryproductlist'

      ){
      return null;
    }
    return ( 
        <>
          <footer id="m_footer" className="mcom_footer react-area">
              
              <FooterTop />
              <FooterMid01 />
              <FooterMid02 />
              <FooterBtm />
            </footer>
        </>
     )
}

export default Footer;