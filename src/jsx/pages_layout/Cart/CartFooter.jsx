import React from 'react';

function CartFooter() {
    return (
        <div>
            <div className="mnodr_cartinfo">
                <div className="mnodr_form_sec">
                    <h3 className="mnodr_form_tit"><strong>장바구니 상품안내</strong></h3>
                    <ul className="mnodr_bullst ty2">
                        <li>장바구니에 담은 상품은 최대 150개까지 보관됩니다.</li>
                        <li>상품 우측 상단의 핀셋 아이콘으로 ‘계속 담아두기’를 설정해 두시면 시간이 지나도 상품이 삭제되지 않습니다.</li>
                    </ul>
                </div>
            </div>
            <div id="mcom_footer">
                <div className="mcom_footer mcom_footer_order mcom_footer_order_v2 ty_bg ty_space_lg">
                    <div className="mcom_mall_wrap v2">
                        <div className="mcom_noti_wrap">
                            <p className="mcom_noti_txt">㈜에스에스지닷컴에서 판매되는 상품 중에는 개별 판매자가 판매하는 오픈마켓 상품이 포함되어 있습니다.</p>
                            <p className="mcom_noti_txt">오픈마켓 상품의 경우, ㈜에스에스지닷컴은 통신판매중개자로서 거래 당사자가 아니며, 입점 판매사가 등록한 상품정보 및 거래 등에 대해 책임을 지지 않습니다.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
}

export default CartFooter;