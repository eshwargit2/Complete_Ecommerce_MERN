// import React, { useEffect, useState } from 'react';
// import Navbar from './Navbar';
// import './Card.css';
// import Footer from '../Footer';
// import { useNavigate } from 'react-router-dom';

// const Card = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [totalAmount, setTotalAmount] = useState(0);
//   const navigate = useNavigate();

//   // Load cart items
//   useEffect(() => {
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];
//     setCartItems(cart);
//   }, []);

//   // Recalculate total whenever cart changes
//   useEffect(() => {
//     const total = cartItems.reduce((sum, item) => {
//       const price = parseFloat(item.price);
//       return sum + (price * item.quantity);
//     }, 0);
//     setTotalAmount(total);
//   }, [cartItems]);

//   const updateCart = (newCart) => {
//     setCartItems(newCart);
//     localStorage.setItem('cart', JSON.stringify(newCart));
//   };

//   const removeItem = (index) => {
//     const updated = [...cartItems];
//     updated.splice(index, 1);
//     updateCart(updated);
//   };

//   const increment = (index) => {
//     const updated = [...cartItems];
//     updated[index].quantity += 1;
//     updateCart(updated);
//   };

//   const decrement = (index) => {
//     const updated = [...cartItems];
//     if (updated[index].quantity > 1) {
//       updated[index].quantity -= 1;
//     } else {
//       updated.splice(index, 1);
//     }
//     updateCart(updated);
//   };

//   const handleCheckout = () => {
//     if (cartItems.length === 0) {
//       alert("Cart is empty!");
//       return;
//     }
//     navigate('/payment', { state: { items: cartItems } });
//   };

//   return (
//     <div className='card-item mt-3' style={{height:'100vh'}} >     
//       <div className="container">
//         <div className="row">
//           <div className="col-4">
//             <h1>My Cart</h1>
//           </div>
//           <div className="col-8 d-flex justify-content-center">
//             <button className='btn btn-primary ms-auto' onClick={handleCheckout}>Check Out</button>
//           </div>
//             <div className=" col-12 text-end pt-4">
//             <h3 className='ms-auto'>Total Amount: ₹{totalAmount.toFixed(2)}</h3>
//            </div> 
//           <hr />

//           <div className="col-12">
//             {cartItems.map((item, index) => (
//               <div className="card text-black mt-4 p-3" key={item.id}>
//                 <div className="row align-items-center">
//                   <div className="col-md-3 text-center">
//                     <img src={item.img} alt={item.name} width={150} />
//                   </div>
//                   <div className="col-md-6">
//                     <h5><strong>Name:</strong> {item.name}</h5>
//                     <p><strong>Price:</strong> ₹{item.price}</p>
//                     <p><strong>Quantity:</strong> {item.quantity}</p>
//                   </div>
//                   <div className="col-md-3">
//                     <button className='btn btn-outline-secondary m-1' onClick={() => decrement(index)}><i class="fa-solid fa-minus"></i></button>
//                     <button className='btn btn-outline-secondary m-1' onClick={() => increment(index)}><i class="fa-solid fa-plus"></i></button>
//                     <button className='btn btn-outline-danger m-1' onClick={() => removeItem(index)}><i class="fa-solid fa-trash"></i></button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
      
          
//         </div>

//       </div>
//         <div className="container mt-5 pb-4">
//           <div className="row ">
//             <div className="col-md-6 col-12">
//                <button className='btn btn-primary ' onClick={handleCheckout}>Check Out</button>
//             </div>
//             <div className="col-md-5 col-12 text-end pb-4">
//             <h3 className='mb-5'>Total Amount: ₹{totalAmount.toFixed(2)}</h3>
//             <hr />
//           </div>
//           </div>
//         </div>
//       <Navbar />
    
//     </div>
//   );
// };

// export default Card;



import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import './Card.css';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';

const Card = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cart);
  }, []);

  useEffect(() => {
    const total = cartItems.reduce((sum, item) => {
      const price = parseFloat(item.price);
      return sum + price * item.quantity;
    }, 0);
    setTotalAmount(total);
  }, [cartItems]);

  const updateCart = (newCart) => {
    setCartItems(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const removeItem = (index) => {
    const updated = [...cartItems];
    updated.splice(index, 1);
    updateCart(updated);
  };

  const increment = (index) => {
    const updated = [...cartItems];
    updated[index].quantity += 1;
    updateCart(updated);
  };

  const decrement = (index) => {
    const updated = [...cartItems];
    if (updated[index].quantity > 1) {
      updated[index].quantity -= 1;
    } else {
      updated.splice(index, 1);
    }
    updateCart(updated);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Cart is empty!");
      return;
    }
    navigate('/payment', { state: { items: cartItems } });
  };

  return (
    <div className="card-item mt-3" style={{ minHeight: '100vh' }}>
      <Navbar />

      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2>🛒 My Cart</h2>
          <button className="btn btn-success" onClick={handleCheckout}>Checkout</button>
        </div>

        {cartItems.length === 0 ? (
          <p className="text-center mt-5">Your cart is empty.</p>
        ) : (
          <>
            <div className="table-responsive">
              <table className="table table-bordered align-middle text-center">
                <thead className="table-light">
                  <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Price (₹)</th>
                    <th>Quantity</th>
                    <th>Total (₹)</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>
                        <img src={item.img} alt={item.name} width="60" height="60" style={{ objectFit: 'cover' }} />
                      </td>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>{item.quantity}</td>
                      <td>{(item.quantity * item.price).toFixed(2)}</td>
                      <td>
                        <div className="btn-group">
                          <button className="btn btn-outline-secondary" onClick={() => decrement(index)}><i className="fa-solid fa-minus"></i></button>
                          <button className="btn btn-outline-secondary" onClick={() => increment(index)}><i className="fa-solid fa-plus"></i></button>
                          <button className="btn btn-outline-danger" onClick={() => removeItem(index)}><i className="fa-solid fa-trash"></i></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  
                </tbody>
                
              </table>
              
            </div>

            <div className="text-end mt-4">
              <h4>Total Amount: ₹{totalAmount.toFixed(2)}</h4>
            </div>
          </>
        )}
      </div>
    
      <Footer />
    </div>
  );
};

export default Card;
