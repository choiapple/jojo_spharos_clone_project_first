import React from 'react';
import CategoryFooter from './CategoryFooter';
import CategoryLanguage from './CategoryLanguage';
import CategoryMain from './CategoryMain';
import CategoryServiceRecomand from './CategoryServiceRecomand';
import CategoryThemesRecomand from './CategoryThemesRecomand';
import SubCategory from './SubCategory';

function CategoryContent() {
    return (
        <div id="m_content">
              <div className="mcom_category_renew react-area">
                <div className="clnb_wrap">
                  <div className="clnb_sub_cate" id="mcom_clnb_cate">
                    <CategoryMain />
                    <h2 className="clnb_tit">
                      <span className="cm_mall_ic ty_circle_s">
                        <i className="sd"></i>
                      </span>
                      <span>신세계백화점</span>
                    </h2>
                    <SubCategory />
                  </div>

                  <CategoryThemesRecomand />

                  <CategoryServiceRecomand />
                </div>

                <CategoryFooter />
                <CategoryLanguage />
              </div>
            </div>
    );
}

export default CategoryContent;
