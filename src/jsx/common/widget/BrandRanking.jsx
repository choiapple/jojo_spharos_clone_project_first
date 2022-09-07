import React from 'react';
import BannerTitle from '../../pages_layout/Home/BannerTitle';
import BrdRanking from '../../pages_layout/Home/BrdRanking';
import CtgNav from '../../pages_layout/Home/CtgNav';
import Dummy from '../../pages_layout/Home/Dummy';

function BrandRanking() {
    return ( 
        <>
           <BannerTitle title="Brand Ranking" txt="" isBtn={true} isV2={true} />
           <Dummy />
           <CtgNav />
           <BrdRanking />
           <BrdRanking />
           <BrdRanking />
           <BrdRanking />
           <BrdRanking />
        </>
     );
}

export default BrandRanking;