import React from 'react';

function PfMemInfo() {
    return ( 
        <div className="myssg_membership_info" data-react-tarea-cd="00040_000000233">
            <a href="https://member.ssg.com/m/membership/gate.ssg" data-react-tarea-dtl-cd="t00001"
                data-react-unit-type="banr" data-react-unit-id=""
                data-react-unit-text='[{"type":"text","value":"스마일클럽미가입자배너"}]' className="clickable">
                <div className="myssg_membership_header">
                    <div className="myssg_membership_header_title justify_center">
                        <i className="badge">
                            <span className="blind">스마일클럽</span>
                        </i>
                        <p>
                            회원은,
                            <strong>15,000원만 담아도 쓱/새벽배송 무료</strong>
                        </p>
                    </div>
                </div>
                <div className="myssg_membership_content">
                    <div className="myssg_membership_btn_join">
                        <span className="myssg_membership_btn_content">
                            지금 가입하시면 1개월 무료<i className="icon ty_xs" aria-hidden="true"></i>
                        </span>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default PfMemInfo;