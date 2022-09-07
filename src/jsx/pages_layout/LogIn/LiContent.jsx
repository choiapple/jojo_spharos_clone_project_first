import React from 'react';
import LoginForm from './LoginForm';
import LoginNoMemArea from './LoginNoMemArea';
import SnsLogin from './SnsLogin';

function LiContent() {
    return ( 
        <div id="m_content" className="cmem_ct_login v2">
        <LoginForm />
        <SnsLogin />
        <LoginNoMemArea />
    </div>
     );
}

export default LiContent;