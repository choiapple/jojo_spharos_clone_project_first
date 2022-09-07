import React from 'react';
import { useLocation } from 'react-router-dom';
import myMenu from '../../data/hideMenuDatas.json'
import { searchState } from '../../recoil/atom/searchState';
import {useRecoilValue} from 'recoil';

function HeaderHideMenu({isShow}) {

    // const search = useRecoilValue(searchState);

    return ( 
        <div className={isShow ? "gnb_mall_layer v2 viewCom" : "gnb_mall_layer v2"}>
            <h2 className="gnb_mall_ssg">
                <a href="https://m.ssg.com" className="gnb_mall_ssglnk clickable" data-react-tarea="웹공통_N|GNB|SSG">
                    <span className="blind">SSG.COM</span>
                </a>
            </h2>
            <ul className="gnb_mall_lst">
                {
                    

                    myMenu && myMenu.map( menu => (
                        <li key={menu.id}>
                            <a href={menu.url} className="gnb_mall_lnk clickable"
                                data-react-tarea={menu.tarea}
                            >
                                <span className="cm_mall_ic ty_circle_s">
                                    <i className={menu.iClassName}></i>
                                </span>
                                <span className="gnb_mall_name">{menu.name}</span>
                                {menu.ad ? <span className="gnb_mall_bedge ty_ad">AD</span> : ""}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
     );
}

export default HeaderHideMenu;