import React, { useState } from 'react';
import { useEffect } from 'react';
import {Link}from 'react-router-dom';

function CartTopBtn() {
    const [state, setState] = useState({
        y : 0
    })
    const useScroll = () =>{
        const onScroll = () =>{
            setState({y:window.scrollY})
        }
        useEffect(()=>{
            window.addEventListener("scroll", onScroll);
            return () => window.removeEventListener("scroll",onScroll);
        },[])
        return state;
    };
    const handleTop = () =>{
        document.documentElement.scrollTop = 0;
    }
    const {y} = useScroll();

    return (
        <div className="mnodr_toolbar_float">
        <div className="mnodr_toolbar_floatlt">
          <div className={y > 93 ? "mnodr_toolbar_fitem topbtn on":"mnodr_toolbar_fitem topbtn"} onClick={handleTop}>
            <Link to=""
              id="cartTopBtn"
              className="floating_btn topbtn on cartTracking">
              <span className="blind">TOP</span>
              <i className="icon ty_sm icon_arrow_top"></i>
            </Link>
          </div>
        </div>
      </div>
    );
}

export default CartTopBtn;