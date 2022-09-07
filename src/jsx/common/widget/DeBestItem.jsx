import React from 'react';
import BannerTitle from '../../pages_layout/Home/BannerTitle';
import CtgNav from '../../pages_layout/Home/CtgNav';
import Dummy from '../../pages_layout/Home/Dummy';
import ItemGrid from '../../pages_layout/Home/ItemGrid';
import More from '../../pages_layout/Home/More';

function DeBestItem() {
    return ( 
        <>
           <BannerTitle title="백화점 BEST Items" txt="" isBtn={false} isV2={false} />
           <Dummy />
           <CtgNav />
           <ItemGrid />
           <More />
        </>
     );
}

export default DeBestItem;