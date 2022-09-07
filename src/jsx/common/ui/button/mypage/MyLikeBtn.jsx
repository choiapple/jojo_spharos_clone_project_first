
import React from 'react';
import { Link } from 'react-router-dom';

function MyLikeBtn() {
    return ( 
        <Link to="/" className="clickable"
            data-react-tarea="MYSSG|M_MY_SSG_MY클립">
            <span className="myssg_manage_text ty_like">
                좋아요</span>
        </Link>
     );
}

export default MyLikeBtn;

