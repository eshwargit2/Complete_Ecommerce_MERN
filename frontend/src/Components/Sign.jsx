import React from 'react'
import './Sign.css' 
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';


const Sign = () => {

const [formData, setFormData] = useState({ username: '', password: '' });
const navigate = useNavigate();
  
//input onchange funtion
const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
};

const status = document.getElementById('s-email');


//Server Url
const ServerURL = import.meta.env.VITE_API_URL;
 

  
//onsubmit funtion
// const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(`${ServerURL}/sign`, formData);
      
//        setloading(true);
//         status.style.display="none"
//        setTimeout(() => {
//          navigate('/dashome'); 
//        }, 2000);

//     } catch (err) {
      
//        status.style.display="inline-block"
//     }
// };

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    setloading(true);
    
    const response = await axios.post(`${ServerURL}/sign`, formData);
    const token = response.data.token;
    localStorage.setItem('token', token); // Save JWT token
    status.style.display = "none";

    setTimeout(() => {
      navigate('/dashome');
    }, 300);
  } catch (err) {
     setloading(false);
    status.style.display = "inline-block";
  }
};


//page navigation and loading animation
const [loading , setloading]=useState(false);

//password show and hidden funtion
const pass_input= document.getElementById('password');
const icon = document.getElementById('icon')
const showUnshow=()=>{
const isHidden = pass_input.type==="password";
     pass_input.type = isHidden ? "text" :"password";
     icon.textContent = isHidden ? "🔒" : "👁"
}


  return (
    <div className='Sign-section ' >
        <div className="container mt-5 mt-5 " >
            
            <div className="row">
                <div className="col-12 text-center ">
                    <h4>Crazy <span className='text-success' >Robo</span>  </h4> <br /> 
                    <h1>Sign in </h1>
                </div>
                <div className="col-12 d-flex justify-content-center mt-5  align-items-center  ">
                    <form onSubmit={handleSubmit}> 
                    <input type="email" name='email' onChange={handleChange} placeholder='Enter your Email'  required />
                       <div className="show-pass">
                        <input type="password" name='password' id='password' onChange={handleChange}  placeholder='Enter your Password'  />
                            <i id='icon' onClick={showUnshow} >👁</i>
                    </div>
                     <p className='text-danger s-email ' id='s-email' >Invalid username or password</p>
                    <p className='ms-5 fp' > <Link to='/reset' >Forgot Password?</Link></p>

                  {!loading ?(
                        <button type='submit' id='submit'  className='mt-5 submit' > Sign up </button>
                  ):(
                    <div className="spinner-border text-success mt-5 "   id='spiner' role="status">
                 <span className="sr-only">Loading...</span>
                  </div> 
                  )}  
                  
                    


                    </form>
                </div>
            </div>
        </div>
       
                   <div className="col-12 no-account mt-3 text-center ">
                       <p className='text-center text-black ' >Don't have an account?  <Link to="/register" className='text-success' >Sign up</Link> </p>   
                   </div>
            {/* </div> */}
            
        {/* // </div> */}
     
    </div>
  )
}

export default Sign