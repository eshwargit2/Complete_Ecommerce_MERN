// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import Navbar from './Navbar';

// const OrderPage = () => {
//   const location = useLocation(); 
//   const { product, items } = location.state || {};

//     window.scrollTo({ top: 0, behavior: 'smooth' });  

//   // Initial order items
//   const initialItems = product ? [{ ...product, quantity: product.quantity || 1 }] : (items || []);

//   const [orderItems, setOrderItems] = useState(initialItems);
//   const [totalPrice, setTotalPrice] = useState(0);

//   // Calculate total whenever orderItems change
//   useEffect(() => {
//     const total = orderItems.reduce((acc, item) => {
//       const price = parseFloat(item.price);
//       return acc + price * (item.quantity || 1);
//     }, 0);
//     setTotalPrice(total);
//   }, [orderItems]);

//   const increment = (index) => {
//     const updated = [...orderItems];
//     updated[index].quantity += 1;
//     setOrderItems(updated);
//   };

//   const decrement = (index) => {
//     const updated = [...orderItems];
//     if (updated[index].quantity > 1) {
//       updated[index].quantity -= 1;
//     } else {
//       updated.splice(index, 1); // remove item if quantity reaches 0
//     }
//     setOrderItems(updated);
//   };

//   return (
//     <div>
//     <div className="container">
//       <h1 className="mb-4">Your Order</h1>

//       {orderItems.length === 0 ? (
//         <p>No items to show</p>
//       ) : (
//         orderItems.map((item, index) => (
//           <div key={index} className="card m-2 p-3">
//             <h4>{item.name}</h4>
//             <p className='text-black'>Price: ₹{item.price}</p>
//             <p  className='text-black'>Quantity: {item.quantity}</p>
//             <div>
//               <button className="btn btn-outline-secondary me-2" onClick={() => decrement(index)}><i class="fa-solid fa-minus"></i></button>
//               <button className="btn btn-outline-secondary" onClick={() => increment(index)}><i class="fa-solid fa-plus"></i></button>
//             </div>
//             <img src={item.img} width="100" alt="product" className="mt-3" />
//           </div>
//         ))
//       )}

//       <hr />
//        <div className="container pb-5">
//         <div className="row">
//           <div className="col-12 pb-5">
//                 <h3 className="text-end">Total Price: ₹{totalPrice.toFixed(2)}</h3>
//           </div>
//         </div>
//        </div>
     
//       <Navbar/>
//     </div>
//     </div>
//   );
// };

// export default OrderPage;







import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const ServerURL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios.get(`${ServerURL}/orders`)
      .then((res) => {
        setOrders(res.data.orders);
      })
      .catch((err) => {
        console.error('Error fetching orders:', err);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">🧾 My Orders</h2>

      {orders.length === 0 ? (
        <p className="text-center mt-5">No orders yet!</p>
      ) : (
        orders.map((order, index) => (
          <div key={index} className="card mb-5 p-3 shadow-sm">
            <h5>Order #{index + 1}</h5>
            <p className="text-black">
              <strong>Date:</strong> {new Date(order.date).toLocaleString()}
            </p>
            <p className="text-black">
              <strong>Total:</strong> ₹{order.totalPrice.toFixed(2)}
            </p>
            <p className="text-black">
              <strong>Shipping To:</strong> {order.userAddress.name}, {order.userAddress.address1}, {order.userAddress.city}
            </p>

            {/* Items Table */}
            <div className="table-responsive mt-3 ">
              <table className="table table-bordered text-center align-middle">
                <thead className="table-light">
                  <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Price (₹)</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {order.orderItems.map((item, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>
                        <img src={item.img} alt={item.name} width="60" height="60" style={{ objectFit: 'cover' }} />
                      </td>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                      <td>{item.price}</td>
                      <td>{item.price * item.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))
      )}
      <Navbar/>
    </div>
  );
};

export default MyOrders;
