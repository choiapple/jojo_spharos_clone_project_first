import React from 'react';
import { Link } from 'react-router-dom';
import PdtCttBn from './PdtCttBn';
import PdtCttGrid from './PdtCttGrid';
import PdtCttTop from './PdtCttTop';

function PdtListCtt() {
    
    return ( 
        <div id="m_content" className="react-area">
    
            <PdtCttTop />
            <PdtCttBn />
            <PdtCttGrid />
           
            <div className="cont_loading" style={{display:'none'}}>
                <span className="blind">로딩중</span>
            </div>
            <span className="dimmed">&nbsp;</span>
        </div>
     );
}

export default PdtListCtt;