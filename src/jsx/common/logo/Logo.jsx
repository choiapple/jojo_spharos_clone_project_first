import React from 'react';
import { Link } from 'react-router-dom';


function Logo() {
    return ( 
        <h1>
         

            <Link to='./' className="gnb_mall_logo v3">
                <div href="https://m.ssg.com" className="gnb_logo_ssg clickable" data-react-tarea="웹공통_N|GNB|SSG">
                    <span className="blind">SSG</span>
                </div>
                <div className="gnb_logo_now clickable" data-react-tarea="웹공통_N|GNB|홈">
                    <span className="gnb_logo"><span className="blind">신세계몰</span></span>
                </div>
            </Link>
        </h1>
    );

}

export default Logo;