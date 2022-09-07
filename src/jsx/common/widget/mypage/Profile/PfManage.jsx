import React from 'react';
import MyLikeBtn from '../../../ui/button/mypage/MyLikeBtn';
import MyNtcBtn from '../../../ui/button/mypage/MyNtcBtn';
import MyOderBtn from '../../../ui/button/mypage/MyOrderBtn';

function PfManage() {
    return (
        <div className="myssg_user_manage">
           
           <MyLikeBtn />
           <MyOderBtn />
           <MyNtcBtn />
        </div>
      );
}

export default PfManage;