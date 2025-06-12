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
