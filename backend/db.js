const mongoose = require('mongoose');
const dotenv= require('dotenv');
dotenv.config();
const objectId = mongoose.ObjectId
// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
  
  
});

// User Schema
const UserSchema = new mongoose.Schema({
  name:String,
  email: String,
  password: String
});


const address = new mongoose.Schema({
  email:String,
  country:String,
  name:String,
  number:String,
  address1:String,
  address2:String,
  address3:String,
  pincode:String,
  city:String, 
  state:String, 

});




const OrderAddress= mongoose.model('order_Address', address)
const User = mongoose.model('Login_details ', UserSchema);


module.exports = {User,objectId,OrderAddress};