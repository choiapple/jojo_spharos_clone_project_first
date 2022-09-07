import React from 'react';
import BannerTitle from '../../pages_layout/Home/BannerTitle';
import CtgNav from '../../pages_layout/Home/CtgNav';
import Dummy from '../../pages_layout/Home/Dummy';
import Filter from '../../pages_layout/Home/Filter';
import Horizontal from '../../pages_layout/Home/HorizontalScroll';
import More from '../../pages_layout/Home/More';

function BestItem() {
    return ( 
        <>
             <BannerTitle title="Best Items" txt="" isBtn={false} isV2={false} />
             <Dummy />
             <CtgNav />
             <Filter />
             <Horizontal />
             <More />
        </>
     );
}

export default BestItem;