import React from 'react';
import BackBtn from '../../common/ui/button/BackBtn';

function DeliveryAddHeader() {
    return (
        <div className="mcom_tit_renew react-area">
            <h2 className="mcom_tit_txt clickable">
              <a href="">배송지 추가</a>
            </h2>
            <BackBtn />
            <div className="mcom_tit_rgt"></div>
          </div>
    );
}

export default DeliveryAddHeader;