import React from "react";
import MainSlider from "../pages_layout/Home/MainSlider";
import TopNav from "../pages_layout/Home/TopNav";
import MainCategory from "../pages_layout/Home/MainCategory";
import ItemBlank from "../pages_layout/Home/ItemBlank";
import HappyLounge from "../common/widget/HappyLounge";
import NewService from "../common/widget/NewService";
import CardPromo from "../common/widget/CardPromo";
import HotBrand from "../common/widget/HotBrand";
import BrandRanking from "../common/widget/BrandRanking";
import LetsTryOn from "../common/widget/LetsTryOn";
import SsgLuxury from "../common/widget/SsgLuxury";
import PremiumNA from "../common/widget/PremiumNA";
import BrandLookbook from "../common/widget/BrandLookbook";
import SmartOS from "../common/widget/SmartOS";
import SpecialGift from "../common/widget/SpecialGift";
import LifeMagazine from "../common/widget/LifeMagazine";
import DeBestItem from "../common/widget/DeBestItem";
import BestItem from "../common/widget/BestItem";
import { useContext } from "react";

import loginContext from "../../context/login.context";


import { useEffect } from "react";

function Home() {

    const auth = useContext(loginContext);
    useEffect(()=>{
      
    },[auth])
    return ( 
            <div id="m_container" className='mcom_container' data-iframe-height>
                <MainSlider />
                <TopNav />
                <div id="m_content" className="react-area" data-globalid="홈" data-areaid="ad_list">
                    <div className="cmgrid_module">
                        <div className="cmgrid_list" data-equal-height="false">
                            <ItemBlank />
                            <MainCategory />
                            <HappyLounge />
                            <NewService />
                            <CardPromo />
                            <HotBrand />
                            <BrandRanking />
                            <LetsTryOn />
                            <DeBestItem />
                            <SsgLuxury />
                            <PremiumNA />
                            <SmartOS />
                            <BrandLookbook />
                            <SpecialGift />
                            <LifeMagazine />
                            <BestItem />
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Home;
