import React from 'react';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import HistoryCtrl from '../../common/widget/recentsearch/HistoryCtrl';
import { historyState } from '../../../recoil/atom/historyState';

function HistoryTop() {

    const [isShow, setIsShow] = useRecoilState(historyState)
    const handleDelete = () => {
        setIsShow({...isShow,show :!isShow.show})
    }
  
    return ( 
          <div className="cmhistory_top">
              <div className="cmhistory_tit">
                  <h1><strong>최근 본 쇼핑정보</strong></h1>


                  {isShow.show ?
                  <button type="button" onClick={handleDelete} className="cmhistory_bt">
                      편집<i className="sp_cmhistory_ic cmhistory_ic_edit"></i>
                  </button>
                  :
                  <button onClick={handleDelete} type="button" className="cmhistory_bt">
                      취소<i className="sp_cmhistory_ic cmhistory_ic_cancel"></i>
                  </button>}
              </div>
              <HistoryCtrl />
          </div>
    );
}

export default HistoryTop;