import React from 'react';
import {Link} from 'react-router-dom';

function CategoryThemesRecomand() {
    return (
        <div className="clnb_renew_theme_v2">
        <h2 className="clnb_tit">
          <span>테마추천</span>
        </h2>
        <div className="clnb_theme_warp">
          <ul>
            <li className="clnb_shdu_item">
              <Link
                to="https://m-shinsegaemall.ssg.com/page/ssgluxury.ssg"
                className="clnb_shdu_link clickable"
                data-react-tarea="카테고리_LNB|테마추천|배너_클릭|SSG Luxury"
              >
                <div className="clnb_shdu_thmb">
                  <div className="clnb_shdu_img">
                    <img
                      className="ssg_lazy loaded"
                      src="//sui.ssgcdn.com/cmpt/banner/202207/2022070515062822153723407372_375.jpg"
                      alt="/cmpt/banner/202207/2022070515062822153723407372_375.jpg"
                      data-src="//sui.ssgcdn.com/cmpt/banner/202207/2022070515062822153723407372_375.jpg"
                     
                      data-ll-status="loaded"
                    />
                  </div>
                </div>
                <div className="clnb_shdu_tx_thmb">
                  <span className="clnb_shdu_tit">
                    <span>SSG Luxury</span>
                  </span>
                </div>
              </Link>
            </li>
            <li className="clnb_shdu_item">
              <Link
                to="https://m.ssg.com/plan/planShop.ssg?dispCmptId=6000435602"
                className="clnb_shdu_link clickable"
                data-react-tarea="카테고리_LNB|테마추천|배너_클릭|제로웨이스트"
              >
                <div className="clnb_shdu_thmb">
                  <div className="clnb_shdu_img">
                    <img
                      className="ssg_lazy loaded"
                      src="//sui.ssgcdn.com/cmpt/banner/202204/2022041517155741312171025217_772.jpg"
                      alt="/cmpt/banner/202204/2022041517155741312171025217_772.jpg"
                      data-src="//sui.ssgcdn.com/cmpt/banner/202204/2022041517155741312171025217_772.jpg"
                      
                      data-ll-status="loaded"
                    />
                  </div>
                </div>
                <div className="clnb_shdu_tx_thmb">
                  <span className="clnb_shdu_tit">
                    <span>제로웨이스트</span>
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default CategoryThemesRecomand;