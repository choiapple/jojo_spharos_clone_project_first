import React from 'react';
import {Link} from "react-router-dom";

function CartTab(){
    return (
        <ul className="mnodr_tab" id="cartTab">
            <li className="on">
                <Link to="/" className="cartTracking">
                    <span className="mnodr_tab_tx">일반배송(0)</span>
                </Link>
            </li>
            <li>
                <Link to="/" className="cartTracking">
                    <span className="mnodr_tab_tx">정기배송(0)</span>
                </Link>
            </li>
            <li className="new">
                <Link to="/" className="mnodr_bn mnodr_cartshare_banner layer_filter2">
                    <span className="mnodr_tab_tx">함께장보기(0)</span>
                </Link>
                {/* <Link to="/" className="modal-alert-open"></Link> */}
            </li>
        </ul>
    );
}

export default CartTab;





