const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
 userAddress: {
  name: String,
  number: String,
  address1: String,
  address2: String,
  address3: String,
  pincode: String,
  city: String,
  state: String,
  country: String,
  email: { type: String, required: true }   
},

  orderItems: [
    {
      name: String,
      price: Number,
      quantity: Number,
      img: String
    }
  ],
  totalPrice: Number,
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Orders_Details', orderSchema);
