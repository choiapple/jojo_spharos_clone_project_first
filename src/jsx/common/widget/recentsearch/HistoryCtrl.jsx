import axios from 'axios';
import React from 'react';
import { useRecoilState } from 'recoil';
import Swal from 'sweetalert2';
import { historyState } from '../../../../recoil/atom/historyState';
import Server from '../../../../server/server';

function HistoryCtrl() {

  /*   const swal = ()=>{
        Swal.fire({
          title: '환영합니다',  
              text: `${userName}님 즐거운 쇼핑되세요 `,
              icon: 'success'
        })
      } */
    const [isShow, setIsShow] = useRecoilState(historyState)
    const token = localStorage.getItem('token')
    const deleteRecent = () =>{
        axios.delete(`${Server.baseUrl}api/recently/delete/all`,{
            headers:{
                "Authorization":token
            }
        })
        .then(Response=>{
            console.log(Response)
            alert("삭제되었습니다.")
        })
    } 
    return ( 

        <div className="cmhistory_ctrl"> 
            {isShow.show ? 
                  <ul className="cmhistory_sort">
                      <li className="on" data-srch-div-cd="10,70,71"><button type="button">상품</button></li>
                      <li data-srch-div-cd="60"><button type="button">검색어</button></li>
                      <li data-srch-div-cd="20"><button type="button">카테고리</button></li>
                      <li data-srch-div-cd="50,51"><button type="button">이벤트</button></li>
                      <li data-srch-div-cd="30,32,35,36"><button type="button">기획전</button></li>
                      <li data-srch-div-cd="40"><button type="button">브랜드</button></li>
                      <li data-srch-div-cd="41"><button type="button">매장</button></li>
                  </ul>
                  :

                  <ul className="cmhistory_delete">
                      <li><span className="cmhistory_bt"><button type="button" className="cmhistory_bt_seldel"
                                  >선택삭제 </button></span></li>
                      <li onClick={deleteRecent}><span className="cmhistory_bt"><button type="button" className="cmhistory_bt_alldel"
                                  >전체삭제 </button></span></li>
                  </ul>
             }
          
           
        </div>
     );
}

export default HistoryCtrl;