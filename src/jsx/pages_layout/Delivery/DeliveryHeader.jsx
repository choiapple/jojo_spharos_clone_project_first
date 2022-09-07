import React from 'react';
import BackBtn from "../../common/ui/button/BackBtn";

function DeliveryHeader() {
    return (
        <div className="mcom_tit_renew react-area">
            <h2 className="mcom_tit_txt clickable">
              <a href="">배송지 관리</a>
            </h2>
            <BackBtn />
            <div className="mcom_tit_rgt"></div>
          </div>
    );
}

export default DeliveryHeader;