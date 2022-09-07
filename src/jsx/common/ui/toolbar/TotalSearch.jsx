import React, { useContext } from 'react';

import {useRecoilState} from 'recoil';
import {searchState} from '../../../../recoil/atom/searchState';

function TotalSearch() {
    const [isShow, setIsShow] = useRecoilState(searchState);
    // const search = useContext(SearchContext)
    const handleShow = () => {
       setIsShow({...isShow, show:!isShow.show})
    }
    return ( 
        <>
          <li className="toolbar_item">
              <a href="#" className="toolbar_lnk ty_search" onClick={handleShow}>
                  <i className="icon ty_lg icon_search" aria-hidden="true"></i>
                  <span className="toolbar_txt">통합검색</span>
              </a>
          </li>
        </>
     );
}

export default TotalSearch;