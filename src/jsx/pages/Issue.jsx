import React from 'react';
import { useState } from 'react';

function Issue({issue, checkedItemHandler}) {
    const [bChecked, setChecked] = useState(false);

    const checkHandler = ({target}) =>{
        setChecked(!bChecked)
        checkedItemHandler(issue.id, target.checked)
    }
    return ( 
        <>
            <div className="wrap">
            <input type="checkbox" checked={bChecked} onChange={(e) => checkHandler(e)} />
            </div>
        </>
     );
}

export default Issue;