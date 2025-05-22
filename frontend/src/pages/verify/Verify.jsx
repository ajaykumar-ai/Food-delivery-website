import React, { useContext, useEffect, useState } from 'react'
import './Verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/Storecontext';
import axios from 'axios';

const Verify = () => {

    const [searchparams,setSearchParams] = useSearchParams();
    const success = searchparams.get("success")
    const orderId = searchparams.get("orderId")
    const {url} = useContext(StoreContext);
    const navigate = useNavigate();

    const verifypayment = async()=>{
        const response = await axios.post(url+"/api/order/verify",{success,orderId});
        if (response.data.success) {
            navigate('/myorders');
        }
        else{
            navigate("/")
        }
    }
    useEffect(()=>{
        verifypayment();
    },[])

  return (
  <div className='verify'>
    <div className="spinner">

    </div>
  </div>
  )
}

export default Verify