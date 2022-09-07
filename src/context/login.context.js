import {createContext} from 'react';

const LoginContext = createContext({
    auth:false,
    token:"",
    authToken:"",
    onLogIn: () => {},
    onLogOut: () => {},
    });

export default LoginContext;
