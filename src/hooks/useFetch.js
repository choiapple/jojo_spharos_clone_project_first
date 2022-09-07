import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function useFetch(url){
    const [data, setData] = useState([])

    useEffect(()=>{
        axios.get(url)
        .then(Response=>{
            setData(Response.data)
        })
    },[url])
    return data
}