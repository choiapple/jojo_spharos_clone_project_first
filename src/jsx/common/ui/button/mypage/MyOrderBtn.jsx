import React from 'react';
import { Link } from 'react-router-dom';

function MyOderBtn() {
    return ( 
        <Link to="/delivery" className="clickable"
            data-react-tarea="MYSSG|M_MY_SSG_배송지관리"><span className="myssg_manage_text ty_devliery">배송지
                관리</span>
        </Link>
     );
}

export default MyOderBtn;