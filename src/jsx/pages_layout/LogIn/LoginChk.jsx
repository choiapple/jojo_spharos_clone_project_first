import React, { useState } from 'react';

function LoginChk() {
    const [checked, setChecked] = useState("");
    const handleChecked = () => {
        setChecked(!checked);
    }
    return ( 
        <div className="cmem_login_chk">
            <span className="cmem_inp_chk type3">
                <input type="checkbox" id="keep_id" name="chk_log" value="Y" checked={checked} onClick={handleChecked}/>
                <label>아이디 저장</label>
            </span>
        </div>
     );
}

export default LoginChk;