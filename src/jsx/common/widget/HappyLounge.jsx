import React from 'react';
import BannerTitle from '../../pages_layout/Home/BannerTitle';
import ItemGoods from '../../pages_layout/Home/ItemGoods';

function HappyLounge() {
    return ( 

        <>
            <BannerTitle title = "Happy Lounge" txt = "당신의 쇼핑이 특별해지는, 매일 오전 9시" isBtn={true} isV2={true}/>
            <ItemGoods />
        </>
    );
}

export default HappyLounge;