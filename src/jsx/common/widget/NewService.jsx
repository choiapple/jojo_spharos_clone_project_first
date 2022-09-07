import React from 'react';
import BannerTitle from '../../pages_layout/Home/BannerTitle';
import HeroSwiper from '../../pages_layout/Home/HeroSwiper';
import ItemBlank from '../../pages_layout/Home/ItemBlank';
import PromoBn from '../../pages_layout/Home/PromoBn';
import QuickCont from '../../pages_layout/Home/QuickCont';
import q1 from '../../../data/quickLst1.json'

function NewService() {
    return ( 
        <>
         <BannerTitle title = "New Service" txt = "새롭게 오픈한 서비스를 소개해드려요" isBtn={false} isV2={false}/>
         <HeroSwiper />
         <QuickCont data={q1} clname={"ty_view5"}/>
         <ItemBlank />
         <PromoBn />
         <ItemBlank />
        </>
     );
}

export default NewService;