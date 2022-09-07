import React from 'react';

function PdtCttTop() {
    return ( 
        <div className="cm_plan_top">
        <div className="cm_plan_info">
            <span className="cm_mall_ic ty_text_s"><i className="">신세계몰</i></span>
        </div>

        <div className="cm_plan_tit">
            [S]쓱-신 품질보장제 더위타파 보양식모음
        </div>


        <div className="m_lyr_box" id="lySns" style={{display:'none'}}>
            <div className="m_lyr_con">
                <h2 className="t_tit">SNS 공유</h2>
                <div className="m_lyr_conin">
                    <span className="bg_bar"><span className="bul"></span><span className="bul bul2"></span></span>

                    <ul className="cm_sns">
                        <li>

                            <a className="kakao clickable"><span className="blind">카카오톡</span></a>
                        </li>
                        <li>
                            <a className="facebook clickable"><span className="blind">페이스북</span></a>
                        </li>
                        <li>
                            <a className="twitter clickable"><span className="blind">트위터</span></a>
                        </li>
                        <li>
                            <a className="sms clickable"><span className="blind">SMS 발송</span></a>
                        </li>
                        <li>
                            <a className="url clickable"><span className="blind">URL복사</span></a>

                        </li>
                    </ul>
                    <p className="cm_url_tip url_show">
                        아래의 URL을 전체선택하여 복사하세요
                    </p>
                    <div className="cm_url_txt url_show">

                        <input type="text" />

                    </div>
                </div>
                <a href="#" className="sp_com2 m_lyr_cls ssg-toggle-close"><span className="blind">레이어
                        닫기</span></a>
            </div>
        </div>

    </div>
     );
}

export default PdtCttTop;