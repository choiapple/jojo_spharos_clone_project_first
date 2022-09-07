import React from 'react';
import { useRecoilState } from 'recoil';
import { historyState } from '../../../recoil/atom/historyState';

function HistoryCt({data}) {
    const [isShow, setIsShow] = useRecoilState(historyState)

    return ( 
        <>
        
        </>
     );
}

export default HistoryCt;