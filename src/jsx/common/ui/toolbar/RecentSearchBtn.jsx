import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import LoginContext from '../../../../context/login.context';
import Server from '../../../../server/server';

function RecentSearchBtn() {
    const auth = useContext(LoginContext);
    const [recentPdt, setRecentPdt] = useState([]);
    const token = localStorage.getItem('token')
    useEffect(()=>{
        if(auth.token){
            axios.get(`${Server.baseUrl}api/recently/list`,{
                headers:{
                    "Authorization":token
                }
            })
            .then(Response=>{
                setRecentPdt(Response.data)
            })
        }
        
    },[auth]) 
    const a = recentPdt.length
    return ( 
        <>
         <li className="toolbar_item" id="bottomHistryLi">
             <Link to='/recentsearch' className="toolbar_lnk ty_history clickable" id="_btn_history"
                 data-react-tarea="웹공통_N|웹바|최근본">
              

                {a > 0 ? 
                 <span id="mHistory_toolbar_thumb" className="toolbar_thumb">
                        <img src={recentPdt[0].thumbnailUri} alt="" />
                   </span>
                :
                <>
                    <i className="icon ty_lg icon_eye" aria-hidden="true"></i>
                    <span id="mHistory_toolbar_txt" className="toolbar_txt">최근본</span>
                </>
            
                }  
                 
             </Link>
         </li> 
        </>
     );
}

export default RecentSearchBtn;