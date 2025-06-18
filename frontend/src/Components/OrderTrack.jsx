import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import axios from 'axios';

const OrderTrack = () => {
  const { state } = useLocation();
  const order = state?.order;
  
  const rediracte= useNavigate();

  if (!order) return <p className="text-center mt-5">No order data provided.</p>;
  
const handleCancel = async () => {
  const reason = prompt("Enter reason for cancelling this order:");
  if (!reason) return alert("Cancellation reason is required.");

  try {
    const res = await axios.post(`${import.meta.env.VITE_API_URL}/cancel-order`, {
      orderId: order._id,
      reason
    });

    alert(res.data.message || "Order cancelled successfully.");

   
    setOrder((prev) => ({
      ...prev,
      status: 'cancelled',
      cancelReason: reason,
    }));
   
  } catch (err) {
    console.error("Cancel Error:", err);
     rediracte('/order')
  }
};

const orderDetailsbtn=()=>{
  rediracte('/order')
}


  return (
    <div className=" container ">
      
      <section class=" m-3 col-9 antialiased dark:bg-gray-900 ">
 
      <div class="mt-6 grow sm:mt-8 lg:mt-0">
        <div class="space-y-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Order history</h3>

          <ol class="relative ms-3 border-s border-gray-200 dark:border-gray-700">
            <li class="mb-10 ms-6">
              <span class="absolute -start-3 flex h-6 w-6 items-center justify-center    rounded-full bg-gray-100 ring-8 ring-white dark:bg-gray-700 dark:ring-gray-800">
                <svg class="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"/>
                </svg>
              </span>
              <h4 class="mb-0.5 text-base font-semibold text-gray-900 dark:text-white">Estimated delivery in 19 july 2025</h4>
              <p class="text-sm font-normal text-black text-gray-500 text-gray-400">Products delivered</p>
            </li>

            <li class="mb-10 ms-6">
              <span class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white dark:bg-gray-700 dark:ring-gray-800">
                <svg class="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
                </svg>
              </span>
              <h4 class="mb-0.5 text-base font-semibold text-gray-900 dark:text-white">Today</h4>
              <p class="text-sm font-normal text-black text-gray-500 dark:text-gray-400">Products being delivered</p>
            </li>

            <li class="mb-10 ms-6 text-primary-700 dark:text-primary-500">
              <span class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 ring-8 ring-white dark:bg-primary-900 dark:ring-gray-800">
                <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
                </svg>
              </span>
              <h4 class="mb-0.5 font-semibold"> {new Date(order.date).toLocaleString()}</h4>
              <p class="text-sm text-black ">Products in the courier's warehouse</p>
            </li>

            <li class="mb-10 ms-6 text-primary-700 dark:text-primary-500">
              <span class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 ring-8 ring-white dark:bg-primary-900 dark:ring-gray-800">
                <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
                </svg>
              </span>
              <h4 class="mb-0.5 text-base font-semibold">{new Date(order.date).toLocaleString()}</h4>
              <p class="text-sm text-black">Products delivered to the courier - DHL Express</p>
            </li>

            <li class="mb-10 ms-6 text-primary-700 dark:text-primary-500">
              <span class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 ring-8 ring-white dark:bg-primary-900 dark:ring-gray-800">
                <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
                </svg>
              </span>
              <h4 class="mb-0.5 font-semibold">{new Date(order.date).toLocaleString()}</h4>
              <p class="text-sm text-black">Payment accepted - online</p>
            </li>

            <li class="ms-6 text-primary-700 dark:text-primary-500">
              <span class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 ring-8 ring-white dark:bg-primary-900 dark:ring-gray-800">
                <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
                </svg>
              </span>
              <div>
                <h4 class="mb-0.5 font-semibold">{new Date(order.date).toLocaleString()}</h4>
                <a href="#" class="text-sm font-medium hover:underline">Order placed - Receipt #647563</a>
              </div>
            </li>
          </ol>

          <div class="gap-4 sm:flex sm:items-center">
            <button type="button"  onClick={handleCancel} class="w-full rounded-lg  border border-gray-200  px-5  py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">Cancel the order</button>

            <button type="button" onClick={orderDetailsbtn} class="w-full rounded-lg  border border-gray-200  px-5  py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">View order Details</button>
          </div>
        </div>
      </div>
   

</section>
      
  <section class="b py-8 antialiased dark:bg-gray-900 md:py-16">
    
  <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
    <h2 class="text-xl text-white font-semibold text-gray-900 dark:text-white sm:text-2xl">
      Track the delivery of Order #{order._id.slice(-6)}
    </h2>

    <div class="mt-6 sm:mt-8 lg:flex lg:gap-8">
    
      <div class="w-full divide-y divide-gray-200 overflow-hidden rounded-lg border border-gray-200 dark:divide-gray-700 dark:border-gray-700 lg:max-w-xl xl:max-w-2xl">
        {order.orderItems.map((item, index) => (
          <div key={index} class="space-y-4 p-6">
            <div class="flex items-center gap-6">
              <img src={item.img} alt={item.name} class="h-14 w-14 object-cover rounded-md" />
              <span class="min-w-0 flex-1 font-medium text-gray-900 dark:text-white">{item.name}</span>
            </div>
            <div class="flex items-center justify-between gap-4">
              <p class="text-sm font-normal text-gray-500 dark:text-gray-400">
                <span class="font-medium text-gray-900 dark:text-white">Product ID:</span> {item._id || 'N/A'}
              </p>
              <div class="flex items-center gap-4">
                <p class="text-base font-normal text-gray-900 dark:text-white">x{item.quantity}</p>
                <p class="text-xl font-bold text-gray-900 dark:text-white">₹{item.price}</p>
              </div>
            </div>
          </div>
        ))}

        <div class="space-y-4 bg-gray-50 p-6 dark:bg-gray-800">
          <div class="space-y-2">
            <dl class="flex items-center justify-between gap-4">
              <dt class="font-normal text-gray-500 dark:text-gray-400">Subtotal</dt>
              <dd class="font-medium text-gray-900 dark:text-white">₹{order.totalPrice.toFixed(2)}</dd>
            </dl>
            <dl class="flex items-center justify-between gap-4">
              <dt class="font-normal text-gray-500 dark:text-gray-400">Shipping</dt>
              <dd class="font-medium text-gray-900 dark:text-white">₹{order.shippingFee || 0}</dd>
            </dl>
            <dl class="flex items-center justify-between gap-4">
              <dt class="font-normal text-gray-500 dark:text-gray-400">Tax</dt>
              <dd class="font-medium text-gray-900 dark:text-white">₹{order.tax || 0}</dd>
            </dl>
            <dl class="flex items-center justify-between gap-4 border-t pt-2 dark:border-gray-700">
              <dt class="text-lg font-bold text-gray-900 dark:text-white">Total</dt>
              <dd class="text-lg font-bold text-gray-900 dark:text-white">₹{(order.totalPrice + (order.tax || 0) + (order.shippingFee || 0)).toFixed(2)}</dd>
            </dl>
          </div>
        </div>
      </div>

     
      <div class="mt-6 grow sm:mt-8 lg:mt-0">
        <div class="space-y-6 rounded-lg border border-gray-200  p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <h3 class="text-xl font-semibold text-white text-gray-900 dark:text-white">Order Info</h3>

          <div class="text-sm text-gray-700 dark:text-gray-300">
            <p><strong>Order ID:</strong> {order._id}</p>
            <p><strong>Order Date:</strong> {new Date(order.date).toLocaleString()}</p>
            <p><strong>Status:</strong> <span className={order.status === 'cancelled' ? 'text-red-500' : 'text-green-500'}>{order.status}</span></p>
            {order.cancelReason && <p><strong>Cancel Reason:</strong> {order.cancelReason}</p>}
          </div>

          <h3 class="text-xl font-semibold text-white text-gray-900 dark:text-white mt-6">Shipping Address</h3>
          <div class="text-sm text-gray-700 dark:text-gray-300">
            <p>{order.userAddress.name}</p>
            <p>{order.userAddress.address1}, {order.userAddress.address2}</p>
            <p>{order.userAddress.city}, {order.userAddress.state} - {order.userAddress.pincode}</p>
            <p>{order.userAddress.country}</p>
            <p>📞 {order.userAddress.number}</p>
          </div>

          {order.status !== 'cancelled' && (
            <button type="button" class="w-full mt-4 rounded-lg border border-red-500 bg-white px-5 py-2.5 text-sm font-medium text-red-700 hover:bg-red-50" onClick={handleCancel}>
              Cancel the order
            </button>
          )}
        </div>
      </div>
    </div>
  </div>
</section>

      <Navbar />
    </div>
  );
};

export default OrderTrack;
