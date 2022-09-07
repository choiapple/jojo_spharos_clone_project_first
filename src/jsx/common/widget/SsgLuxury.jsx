import React from 'react';
import BannerTitle from '../../pages_layout/Home/BannerTitle';
import BmrPromo from '../../pages_layout/Home/BmrPromo';
import ItemBlank from '../../pages_layout/Home/ItemBlank';
import ItemGrid from '../../pages_layout/Home/ItemGrid';
import More from '../../pages_layout/Home/More';

function SsgLuxury() {
    return ( 
        <>
         <BannerTitle title="SSG Luxury" txt="명품이 신세계를 만나다" isBtn={false} isV2={false} />
         <ItemBlank />
         <BmrPromo />
         <ItemGrid />
         <More />

        </>
     );
}

export default SsgLuxury;