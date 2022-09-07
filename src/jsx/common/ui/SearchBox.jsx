
import React, { useContext } from 'react';

import { searchState } from '../../../recoil/atom/searchState';
import SearchBtn from './button/SearchBtn';
import {useRecoilState} from 'recoil';
function SearchBox() {
    const [search, setSearch] = useRecoilState(searchState);
    // const search = useContext(SearchContext)
    const handleShow = () => {
        setSearch({...search,show:!search.show})

    }
    return ( 
        <>
            <div className="gnb_util_search">
               <fieldset>
                   <form id="m_sch_bottom_form" >

                       <div className="gnb_search_inpbox" onClick={handleShow}>
                           <div className="gnb_search_inpbox_sbox">
                               <input type="search" id="globalSearchInput" className="gnb_search_inpbox_inp"
                                    />
                               <SearchBtn />
                           </div>
                       </div>

                   </form>
               </fieldset>
            </div>
            
        </>

     );

}

export default SearchBox;