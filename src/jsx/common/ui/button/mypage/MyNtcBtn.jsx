import React from 'react';

function MyNtcBtn() {
    return ( 
        <a href="" className="clickable"
            data-react-tarea="MYSSG|M_MY_SSG_PUSH메세지함">
            <span className="myssg_manage_text ty_alert">
                알림함<span className="myssg_alert_count" style={{display:'none'}} id="pushArea"><span id="pushCountArea"
                        className="blind">알림함 수</span>0</span>
            </span>
        </a>
     );
}

export default MyNtcBtn;