"use client";

import axios from "axios";
import { toast } from "react-toastify";

const instance = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
    withCredentials: true
});

instance.interceptors.response.use(response=>response.data, async (error)=>{
    toast.error(error?.response.data.message)

    if(error?.response?.status===401){
        window.location.href='/login'
    }
    return Promise.reject(error)
})

export default instance;