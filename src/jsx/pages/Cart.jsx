import React from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import CartHeader from '../pages_layout/Cart/CartHeader';
import CartFooter from '../pages_layout/Cart/CartFooter';
import CartTab from '../pages_layout/Cart/CartTab';
import CartInfo from '../pages_layout/Cart/CartInfo';
import CartData from '../pages_layout/Cart/CartData';
import CartEmptyarea from '../pages_layout/Cart/CartEmptyarea';
import CartNoLogIn from '../pages_layout/Cart/CartNoLogIn';
import { useState } from 'react';
import { useContext } from 'react';

import loginContext from '../../context/login.context';

import { useEffect } from 'react';
import CartModalToolbar from '../pages_layout/Cart/CartModalToolbar';
import Server from '../../server/server';

function Cart() {

    const auth = useContext(loginContext);
    const [toggle, setToggle] = useState(false);
    const [userData, setUserData] = useState();
    const [userDelivery, setUserDelivery] = useState();
    useEffect(()=>{
        if(auth.auth === true){
            const token = auth.token;
            axios.all([
            axios.get(`${Server.baseUrl}api/cart/get`,{headers:{"Authorization":token}}),
            axios.get(`${Server.baseUrl}api/deliveryaddress/get`,{headers:{"Authorization":token}})
            ])
            .then(axios.spread((Response1, Response2) =>{
            
                setUserData(Response1.data);
                let tmp = 0;
                Response2.data.forEach((data)=>{
                    if(data.whetherOnlyThisTime === true){
                    setUserDelivery(data);
                    tmp = 1;
                    }
                })
                if(tmp === 0){
                    Response2.data.forEach((data)=>{
                    if(data.whetherDefaultAddress === true){
                        setUserDelivery(data);
                    }
                    })
                }

            }))
        }
       
    },[toggle]);
    console.log(userData);
    return (
        <>

			<CartHeader />
            <>
            {
                auth.auth ? userDelivery&&
                <>
                    <CartTab />
                    <CartInfo userDelivery={userDelivery}/>
                    {
                        userData && userData.length !== 0?
                        <>
                            <CartData userData={userData} setUserData={setUserData} toggle ={toggle} setToggle={setToggle}/>
                            {/* <CartModalToolbar userData={userData} toggle={toggle} setToggle={setToggle}/> */}
                        </>
                        :
                        <>
                            <CartEmptyarea userData={userData}/>
                        </>
                    }
                </>
                :
                <CartNoLogIn />
            }
            </>
             <CartFooter />
            
			
        </>
    );
}

export default Cart;