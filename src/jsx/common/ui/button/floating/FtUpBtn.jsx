import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function FtUpBtn() {
    const [state, setState] = useState({
            
        y:0
    })
    const useScroll =()=>{
        //y좌표를 0으로 초기화
        const onScroll = () =>{
            setState({ y:window.scrollY
            })
        }
        //state값을 수정해주는 함수
        useEffect(()=>{
            window.addEventListener("scroll", onScroll);
            return ()=> window.removeEventListener("scroll", onScroll);
        },[])
       
        return state;
    };
    const {y} = useScroll();
     const handleTop = () =>{
        document.documentElement.scrollTop = 0;
    } 



  /*   const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    } */
    return ( 
        <>


        <div className={y > 300 ? "floating_top viewCom" : "floating_top"} onClick={handleTop}>
            <div  className="floating_btn ty_top clickable">
                <span className="blind">TOP</span>
                <i className="icon ty_sm icon_arrow_top" aria-hidden="true"></i>
            </div>
        </div>
        </>
     );
}

export default FtUpBtn;