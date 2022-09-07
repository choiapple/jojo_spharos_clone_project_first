import React from 'react';
import BuyPageCtt from '../pages_layout/BuyPage/BuyPageCtt';
import BuyPageFooter from '../pages_layout/BuyPage/BuyPageFooter';
import BuyPageHeader from '../pages_layout/BuyPage/BuyPageHeader';
import '../../css/product.css'

function BuyPage({pdtDetail, selectedData}) {

    
    return ( 
        <div id="m_wrap" className="reveal-left-wrap reveal-right-wrap mcom_wrap ssg v3 positionAbsolute" style={{backgroundColor: '#f5f5f5'}}>
            <BuyPageHeader />
            <BuyPageCtt  pdtDetail={pdtDetail} selectedData={selectedData}/>
            <BuyPageFooter />
        </div>
     );
}

export default BuyPage;