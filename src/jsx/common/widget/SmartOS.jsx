import React from 'react';
import BannerTitle from '../../pages_layout/Home/BannerTitle';
import CtgNav from '../../pages_layout/Home/CtgNav';
import Dummy from '../../pages_layout/Home/Dummy';
import ItemGrid from '../../pages_layout/Home/ItemGrid';
import More from '../../pages_layout/Home/More';

function SmartOS() {
    return ( 
        <>
             <BannerTitle title="스마트한 해외 직구 쇼핑" txt="" isBtn={false} isV2={false} />
             <CtgNav />
             <Dummy />
             <ItemGrid />
             <More />

        </>
     );
}

export default SmartOS;