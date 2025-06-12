import axios from 'axios';
import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {

const [formData, setFormData] = useState({name:'', username: '', password: '' });
const navigate = useNavigate();

const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
};
 
const status = document.getElementById('s-email');

//Server Url
const ServerURL= import.meta.env.VITE_API_URL;


//onsubmit  suntion
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${ServerURL}/register`, formData);
      setloading(true);
      setTimeout(() => {
          navigate('/sign');
      }, 2000);
     
    } catch (err) {
     // alert("Registration failed");
     status.style.display="block"
    }
};

//page navigation and loading animation
const [loading , setloading] =useState(false);

//password show and hidden funtion
const pass_input= document.getElementById('password');
const icon = document.getElementById('icon')
const showUnshow=()=>{
const isHidden = pass_input.type==="password";
     pass_input.type = isHidden ? "text" :"password";
     icon.textContent = isHidden ? "🔒" : "👁"
}


return (
    <div style={{ backgroundColor:'rgb(187, 209, 255)' }} className='Sign-section'  >
         <div className="container mt-2 ">
            <div className="row">
              
                <div className="col-12 text-center mt-3 ">
                    <h4>Let's Get <span className='text-success' >Started! </span>  </h4> <br /> 
                    <h1>Register your Account</h1>
                </div>
                <div className="col-12 d-flex justify-content-center mt-5  align-items-center  ">
                    <form onSubmit={handleSubmit}> 
                    <input type="name" name='name' onChange={handleChange} placeholder='Enter your Name'  required />
                    <input type="email" name='email' onChange={handleChange} placeholder='Enter your Email'  required />

                   <div className="show-pass">
                        <input type="password" name='password' id='password' onChange={handleChange} placeholder='Enter your Password'  />
                        <i id='icon'  onClick={showUnshow} >👁</i>
                          {/* <i class="fa-solid fa-eye-slash"></i> */}
                   </div>
                    

                   

                     <p className='text-danger s-email ' id='s-email' >this email already registerd</p>
                

                    
                    {!loading?(
                       <button type='submit' id='submit' className='mt-3' > Sign up </button>
                    ):(
                      <div className="spinner-border text-success mt-5 "  id='spiner' role="status">
                            <span className="sr-only">Loading...</span>
                  </div> 
                    )}
                 
                   
                
                    
               
                  
                    


                    </form>
                </div>
            </div>
        </div>
        <div className="container continue-btns  d-flex justify-content-center mt-2  ">
            <div className="row  d-flex justify-content-center mt-3 ">
                <div className="col-12  d-flex justify-content-center mt-3 ">
                    <p style={{fontFamily:'cursive'}} >_____________Or sign in with ____________</p>
                </div>
                <div className="col-12 d-flex justify-content-center mt-3 ">
                    <button className='text-center d-flex justify-content-center p-2'   >  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" id="google">
  <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path>
  <path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path>
  <path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path>
  <path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path>
</svg>  Continue with Google</button>
                </div >
                <div className="col-12 d-flex justify-content-center mt-3">
                      <button className='text-center d-flex justify-content-center p-2 '> 
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="30px" height="30px" id="apple">
  <path d="M30.54 26.24a14 14 0 0 1-1.41 2.52 13.16 13.16 0 0 1-1.8 2.24A3.55 3.55 0 0 1 25 32a5.94 5.94 0 0 1-2.15-.51 6.13 6.13 0 0 0-2.31-.49 6.42 6.42 0 0 0-2.38.51 6.49 6.49 0 0 1-2.05.54A3.35 3.35 0 0 1 13.73 31a14 14 0 0 1-1.89-2.27 15.54 15.54 0 0 1-2-4A14.55 14.55 0 0 1 9 20a8.6 8.6 0 0 1 1.14-4.52A6.6 6.6 0 0 1 12.51 13a6.44 6.44 0 0 1 3.22-.91 7.7 7.7 0 0 1 2.49.58 7.67 7.67 0 0 0 2 .58 12 12 0 0 0 2.19-.68 7.23 7.23 0 0 1 3-.53 6.34 6.34 0 0 1 4.95 2.61 5.48 5.48 0 0 0-2.92 5 5.52 5.52 0 0 0 1.81 4.16A6.18 6.18 0 0 0 31 25c-.15.42-.3.82-.46 1.21ZM25.5 6.4a5.59 5.59 0 0 1-1.43 3.66 4.85 4.85 0 0 1-4 2 3.79 3.79 0 0 1 0-.49 5.7 5.7 0 0 1 1.51-3.69 5.85 5.85 0 0 1 1.85-1.39 5.65 5.65 0 0 1 2.11-.6 4.67 4.67 0 0 1 0 .52Z"></path>
</svg>  Continue with Apple</button>
                </div>
                   <div className="col-12 no-account mt-3 ">
                        <p className='text-center' >Already have an account? <Link to="/sign" className='text-success' >Sign up</Link> </p>   
                   </div>
            </div>
            
        </div>
    </div>
  )
}

export default Register