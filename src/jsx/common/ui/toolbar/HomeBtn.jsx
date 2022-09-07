import React from 'react';
import {Link} from 'react-router-dom';

function HomeBtn() {
    return ( 
        <>
         <li className="toolbar_item">
             <Link to="/" className="toolbar_lnk ty_home clickable" data-react-tarea="웹공통_N|웹바|홈|신세계몰">
                 <i className="icon ty_lg icon_house" aria-hidden="true"></i>
                 <span className="toolbar_txt">홈</span>
             </Link>
         </li>
        </>
     );
}

export default HomeBtn;