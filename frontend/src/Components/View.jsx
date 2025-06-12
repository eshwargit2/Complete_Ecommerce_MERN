// ✅ View.jsx
import React, { useState } from 'react';
import './View.css';
import { useLocation, useNavigate } from 'react-router-dom';

const View = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const product = state?.product;

  const back = () => navigate('/dashome');

  const swap = () => {
    let up_scroll = document.getElementById('up_scroll');
    up_scroll.style.height = up_scroll.style.height === "60px" ? "700px" : "60px";
  };

  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingIndex = cart.findIndex(item => item.id === product.id);

    if (existingIndex !== -1) {
      cart[existingIndex].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
     setShowAlert(true);
     window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => setShowAlert(false), 3000);
  };
    const [showAlert, setShowAlert] = useState(false); 

  if (!product) return <h3>No Product Found</h3>;

  return (
    <div className='view-section'>
        {showAlert && (
          <div className="flex items-center p-4  mt-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50" role="alert">
            <svg className="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="font-medium">Item added!</span> Product successfully added to your cart.
          </div>
        )}  
      <div className="container d-flex justify-content-center">
        <button className='backbtn btn' onClick={back}>Back</button>
        <div className="row">
          <div className="col-12 mt-5 d-flex justify-content-center ani">
            <img src={product.img} alt="" width={200} />
          </div>
          <div className="col-12 mt-5 ani">
            <h3>{product.name}</h3>
            <button className='btn btn-success mt-3' onClick={addToCart}>Add to Cart</button>
            <p className='mt-2 text-black'>Product description...</p>
            <p className='text-black'> <summary><details> {product.description}</details></summary></p>
          </div>
          <hr className='mt-3' />
          <div className="col-12 text-black">
            <p className="text-black fs-5 font-weight-bold"> <span className='fs-3 bold' >Availability :</span> {product.Availability}</p>
              <p className="text-black fs-5 font-weight-bold">  <span  className='fs-3 bold' >Sold :</span> {product.Sold}</p>
              <p className="text-black fs-5 font-weight-bold">  <span className='fs-3 bold' >Weight :</span >  {product.Weight}</p>  
              <p className="text-black fs-5 font-weight-bold  "> <span  className='fs-3 bold' >Category :</span>  {product.Category}</p>   
          </div>
          <hr />
        </div>
      </div>

      <div className="container up-scroll" id='up_scroll'>
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <span className='text-center text-white fs-1' onClick={swap}>______________</span>
          </div>
          <div className="container m-5">
            <div className="col-12">
              <p className=""> Availability: {product.Availability}</p>
              <p className=""> Sold: {product.Sold}</p>
              <p className=""> Weight: {product.Weight}</p> 
              <p className=""> Category: {product.Category}</p>   

            </div>
            
            <div className="row mt-5">
              <div className="col-5 mt-5">
                <h6>Total Price</h6>
                <p>{product.price}</p>

              </div>
              <div className="col-6 mt-5">
                <button className='btn btn-success' onClick={addToCart}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;