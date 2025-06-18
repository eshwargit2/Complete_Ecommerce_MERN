import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import {Routes, Route, Link, useNavigate} from 'react-router-dom'
import './Account.css'
import axios from 'axios'
import Footer from '../Footer'

const Account = () => {

 //backend email and name state updated 
const [userDetail, setUserDetail]=useState({
  name:'',email:''
}) 

//serverurl envsecondary data
const ServerURL = import.meta.env.VITE_API_URL;

//backend API using get the data from email and  name
 useEffect(()=>{ 
 axios.get(`${ServerURL}/account`)
 .then(res=>{
   setUserDetail({
    name:res.data.userName,
    email:res.data.userEmail
   })
 },[])
})



   const navigate = useNavigate();
    const handleLogout = () => {
      setloading(true);
      setTimeout(() => {
          localStorage.removeItem('token');   // Clear JWT
    navigate('/home');                  // Go to Sign Page
      }, 2000);
  
  };

  const [loading, setloading]=useState(false)
     
  return (
    <div className='account-page mt-5'>

       <div className="container mt-5 ">
        <div className="row card m-5">
          <div className="banner" > </div>
          <div className="profile col-5 ms-5" >
               <div className="dp">
                   <img src="" alt="" />
               </div>
          </div>
          <div className="col-12 mt-5 ms-3">
            <p  className='text-secondary' >Name:</p>
            <h1>{userDetail.name}</h1>
          </div>
          <div className="col-12 text-black mt-3 ms-3 ">
            <p className='text-secondary'>Email ID: </p>
            <h5>{userDetail.email}</h5>
          </div>
          <div className="col-12"  >
               {!loading ? (
                 <button onClick={handleLogout} className='btn btn-danger m-3' >Sign Out</button>
               ):(
                 <div className="spinner-border text-danger  m-5 "   id='spiner' role="status">
                 <span className="sr-only">Loading...</span>
                  </div> 
               ) }
            </div>
        </div>
       </div>
     
      
            <Footer/>
        
        
         <Navbar/>
    </div>
  )
}

export default Account