import React from 'react';
import {Link} from 'react-router-dom';

function Category() {
    return ( 
        <>
           <li className="toolbar_item">
               <Link to="/category" className="toolbar_lnk ty_category clickable"
                   data-react-tarea="웹공통_N|웹바|카테고리|신세계몰">
                   <i className="icon ty_lg icon_category" aria-hidden="true"></i>
                   <span className="toolbar_txt">카테고리</span>
               </Link>
           </li>
        </>
     );
}

export default Category;