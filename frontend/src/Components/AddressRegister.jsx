import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';




const AddressRegister = () => {


const [formData, setFormData] = useState({ country:'',name:'',number:'',address1:'',address2:'', address3:'',pincode:'',city:'', state:'', });
const navigate = useNavigate();

const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
};

const ServerURL= import.meta.env.REACT_APP_BACKEND_URL;

//onsubmit  suntion
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${ServerURL}/addressregister`, formData);
         
          navigate('/payment');
     
     
    } catch (err) {
      alert("upadate failed");
     
    }
};



  return (
    <div className='Sign-section'>
        <div className="container">
            <div className="row">
                <div className="col-12 text-center mt-3">
                    <h2>Update Delivery Address</h2>
                </div>
                 <div className="col-12 mt-5 pb-5" >
                  <form   onSubmit={handleSubmit} > 
                    <input type="text" name='country' onChange={handleChange} placeholder='Country/Region' required />
                    <input type="name" name='name'   onChange={handleChange} placeholder='Full name'  required />
                    <input type="number" name='number'  onChange={handleChange}  placeholder='mobile number'  required />
                 <input type="text" name='address1'   onChange={handleChange} placeholder='Flat,House no.,Building , Company, Apartment'  required />
                    <input type="text" name='address2'  onChange={handleChange}  placeholder='Area, Street, Sector, Village'  required />
                    <input type="text" name='address3'  onChange={handleChange}  placeholder='Landmark'  required />
                    <input type="text" name='pincode'   onChange={handleChange} placeholder='pincode'  required />
                    <input type="text" name='city'   onChange={handleChange} placeholder='Town/City'  required />
                    <input type="text" name='state'  onChange={handleChange}  placeholder='State'  required />       
                       <button type='submit' id='submit' className='mt-3 '> Use this Address </button>
                    </form>
                </div>
            </div>  
        </div>
    </div>
  )
}

export default AddressRegister