import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import SearchBtn from '../button/SearchBtn';
import Category from './Category';
import HomeBtn from './HomeBtn';
import MypageBtn from './MypageBtn';
import RecentSearchBtn from './RecentSearchBtn';
import TotalSearch from './TotalSearch';

function ToolBar() {
    let location = useLocation();
   

    const checkUrl = location.pathname.split('/')[1]

    if(checkUrl === 'login' 
            || checkUrl === 'signup' 
            || checkUrl === 'subsignup'
            || checkUrl === 'subsignup2'
            || checkUrl === 'product'
            || checkUrl === 'cart'
            || checkUrl === 'buycomplete'
            || checkUrl === 'loading'

            ){
        return null;
      }
    
    return ( 
        <>
        <div id="m_toolbar" className="mcom_toolbar_v2 react-area">
            <ul className="toolbar_menu" role="navigation">
                <Category />
                <TotalSearch />
                <HomeBtn />
                <MypageBtn />
                <RecentSearchBtn />
            </ul>
        </div>
        </>
     );
}

export default ToolBar;