import React from 'react';
import BannerTitle from '../../pages_layout/Home/BannerTitle';
import ItemGrid from '../../pages_layout/Home/ItemGrid';
import More from '../../pages_layout/Home/More';

function SpecialGift() {
    return ( 
        <>
           <BannerTitle title="Special Gift" txt="포장으로 마음을 담은 백화점 선물" isBtn={false} isV2={false} />
           <ItemGrid />
           <More />
        </>
     );
}

export default SpecialGift;