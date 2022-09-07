import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';



function FtBackBtn() {
    const navi = useNavigate();
    let location = useLocation();

    if(location.pathname === '/'){
         return null;
    } 
   
   
    const handleBack =()=>{
        navi(-1);
    }
    return ( 
        <>
          <div onClick={handleBack} className="floating_btn ty_back clickable hover"
              data-react-tarea="웹공통_N|버튼_영역|뒤로가기">
              <span className="blind">이전 페이지로 가기</span>
              <i className="icon ty_sm icon_arrow_left" aria-hidden="true"></i>
          </div>
        </>
     );
}

export default FtBackBtn;