import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AddressRegister from './AddressRegister';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Payment = () => {

const [userAddress, setUserAddress]=useState({
  country:'',name:'',number:'',address1:'',address2:'', address3:'',pincode:'',city:'', state:'',email:''
})   

const ServerURL = import.meta.env.VITE_API_URL;

 useEffect(()=>{ 
 axios.get(`${ServerURL}/address`)
 .then(res=>{
   setUserAddress({
    country:res.data.getaddress.country,
    name:res.data.getaddress.name,
    number:res.data.getaddress.number,
    address1:res.data.getaddress.address1,
    address2:res.data.getaddress.address2,
    address3:res.data.getaddress.address3,
    pincode:res.data.getaddress.pincode,
    city:res.data.getaddress.city,
    state:res.data.getaddress.state,
    email:res.data.getaddress.email
  })


console.log(res.data.getaddress.email);

 
  
 })
},[]);
  const location = useLocation(); 
  const { product, items } = location.state || {};

   // window.scrollTo({ top: 0, behavior: 'smooth' });  

  // Initial order items
  const initialItems = product ? [{ ...product, quantity: product.quantity || 1 }] : (items || []);

  const [orderItems, setOrderItems] = useState(initialItems);
  const [totalPrice, setTotalPrice] = useState(0);

  // Calculate total whenever orderItems change
  useEffect(() => {
    const total = orderItems.reduce((acc, item) => {
      const price = parseFloat(item.price);
      return acc + price * (item.quantity || 1);
    }, 0);
    setTotalPrice(total);
  }, [orderItems]);

  const increment = (index) => {
    const updated = [...orderItems];
    updated[index].quantity += 1;
    setOrderItems(updated);
  };

    const removeItem = (index) => {
    const updated = [...orderItems];
    updated.splice(index)
     setOrderItems(updated);
  };

  const decrement = (index) => {
    const updated = [...orderItems];
    if (updated[index].quantity > 1) {
      updated[index].quantity -= 1;
    } else {
      updated.splice(index, 1); 
    }
    setOrderItems(updated);
  };

  const navigator=useNavigate()


  const paynow=()=>{
    navigator('/conformpay', {
    state: {
      totalPrice,
      orderItems,
      userAddress
    }
  });
  } 


return (
  <div className="container mt-4">
    <div className="row">
      <div className="col-12 mb-4">
        <h1 className="text-center">💳 Payment Section</h1>
      </div>

      {/* ✅ Address as Paragraph/Card */}
      <div className="col-md-6 col-12 mb-4">
        <div className="card p-3 shadow-sm">
          <h4>📦 Shipping Address</h4>
          <p className="text-black mb-1"><strong>{userAddress.name}</strong></p>
          <p className="text-black mb-1">{userAddress.address1}, {userAddress.address2}, {userAddress.address3}</p>
          <p className="text-black mb-1">{userAddress.city}, {userAddress.state} - {userAddress.pincode}</p>
          <p className="text-black mb-1">{userAddress.country}</p>
          <p className="text-black mb-1">📞 {userAddress.number}</p>
          <Link to="/addressregister" className="btn btn-outline-primary mt-2">✏️ Update Address</Link>
        </div>
      </div>

      {/* ✅ Order Items in Table */}
      <div className="col-12 mb-4">
        <div className="card p-3 shadow-sm">
          <h4 className="mb-3">🛒 Order Summary</h4>
          {orderItems.length === 0 ? (
            <p>No items to show</p>
          ) : (
            <div className="table-responsive">
              <table className="table table-bordered text-center align-middle">
                <thead className="table-light">
                  <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Total</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {orderItems.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <img src={item.img} alt={item.name} width="60" height="60" style={{ objectFit: 'cover' }} />
                      </td>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                      <td>₹{item.price}</td>
                      <td>₹{(item.quantity * item.price).toFixed(2)}</td>
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
          )}
        </div>
      </div>
      <div className="col-12 text-end">
        <h3 className="mb-3">Total Price: ₹{totalPrice.toFixed(2)}</h3>
        <button className="btn btn-success btn-lg" onClick={paynow}> Pay Now</button>
      </div>
    </div>
  </div>
);;
}

export default Payment