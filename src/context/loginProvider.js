import React, { useState } from 'react';

import LoginContext from "./login.context";

import axios from "axios";

const LoginProvider = ({children}) => {

    const onLogIn = (token) => {

        if(token){
            // localStorage.setItem('id', data.id);
            // localStorage.setItem('userId', data.userId);
            // localStorage.setItem('name', data.name);
            // setAuth({...auth,auth:true, id:String(data.id),userId:String(data.userId),name:String(data.name)});
            localStorage.setItem('token',token);
            setAuth({...auth,auth:true,token:String(token)})

        }else{
            // localStorage.removeItem('id', data.id);
            // localStorage.removeItem('userId', data.userId);
            // localStorage.removeItem('name', data.name);
            // setAuth({...auth,auth:false, id:'',userId:'',name:''});
            localStorage.removeItem('token');
            setAuth({...auth,auth:false,token:''})
        }
       
    }
    const onLogOut = () => {
        // const token = localStorage.getItem("token");
        // axios.post(`${process.IP}:9090/users/logout`, {}, {
        //     headers: {
        //         "AccessToken": `Bearer ${token}`
        //     }
        // });
        setAuth(prevState => {
            return {
                ...prevState,
                auth: false,
                // id:'',
                // userId:'',
                // name:''
                token:''
            }
        })
        // localStorage.removeItem('id');
        // localStorage.removeItem('userId');
        // localStorage.removeItem('name');
        localStorage.removeItem('token');
    }

    let initalState = {
        auth:false,
        // id:"",
        // userId:"",
        // name:"",
        token:'',
        onLogIn,
        onLogOut,
    };
    if(localStorage.getItem('token') !== null){
        initalState = {
            ...initalState,
            auth:true,
            // id: String(localStorage.getItem('id')),
            // userId : String(localStorage.getItem('userId')),
            // name: String(localStorage.getItem('name'))
            token:String(localStorage.getItem('token'))
        };
    }

    const [auth, setAuth] = useState(initalState);

    return (
        <LoginContext.Provider value={auth}>
            {children}
        </LoginContext.Provider>
    )
   
}
export default LoginProvider;
