import React, { useState } from 'react';
import Issue from './Issue';

function IssueList() {

    
    const issues = [...Array(10).keys()];
    const [checkedItems, setCheckedItems] = useState(new Set())
    const checkedItemHandler = (id, isChecked) => {
        if(isChecked) {
            checkedItems.add(id);
            setCheckedItems(checkedItems)
        }else if(!isChecked && checkedItems.has(id)){
            checkedItems.delete(id);
            setCheckedItems(checkedItems)
        }
    };
   
    return ( 
        <>
            <div className="header">
                <input type="checkbox" />
            </div>
            <div className="list">
                {issues.map((issue, index)=>(
                    <Issue key={index} issue={issue} checkedItemHandler={checkedItemHandler}/>
                ))}
            </div>
        </>
     );
}

export default IssueList;