const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const Mongodbmodule = require('./db');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');

dotenv.config();

const app = express();
const User = Mongodbmodule.User;
const SECRET_KEY = process.env.JWT_SECRET || 'secretkey';

app.use(cors());
app.use(express.json());

// For OTP storage (in-memory)
const otpStore = {};


//find name from display
let dbname;
let dbemail;

// Nodemailer transporter setup 
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});



// Register
app.post('/register', async (req, res) => {
  const {name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).send('User already exists');

    const newUser = new User({name, email, password });
    await newUser.save();
    res.send('User registered');
  } catch (err) {
    res.status(500).send('Error registering user');
  }
});

// Sign (Login)
app.post('/sign', async (req, res) => {
  const { email, password } = req.body;
  try {
    
    const user = await User.findOne({ email, password });
    dbname=user.name;
    dbemail=user.email
     
    if (user) {
      const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: '1h' });
      res.json({ token });
    } else {
      res.status(401).send('Invalid credentials');
    }
  } catch (err) {
    res.status(500).send('Error logging in');
  }
});

// Protected Dashboard
app.get('/dashome', (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).send('No token provided');
  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    res.send('Access granted to dashboard');
  } catch (err) {
    res.status(403).send('Invalid token');
  }
});



//data send to frotend for account page 
app.get('/account', (req,res)=>{
 // console.log(dbname,dbemail);
res.json({
   userName:dbname,
   userEmail:dbemail
})})


// 1) Send OTP
app.post('/resetpass/send-otp', async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).send('Email required');

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).send('Email not registered');
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    otpStore[email] = { otp, expiresAt: Date.now() + 5 * 60 * 1000 };

    // Send email with OTP
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Password Reset OTP',
      //text: `Your OTP for password reset is: ${otp}. It is valid for 5 minutes.`,
      html:` <div>
        <h1 style="color:rgb(0, 55, 255); text-shadow: 2px 0px 3px rgb(254, 254, 254);" >Password Reset OTP</h1>
        <span style="font-size: 30px; background-color: rgb(21, 210, 21);color: white; padding: 10px 20px;
        border-radius: 10px;  " >${otp}</span>
        <p style="font-size: 20px; color: rgb(255, 0, 217); " >Your OTP for password reset . it is valid for <span>5</span> minutes </p>
    </div>`
    };
    await transporter.sendMail(mailOptions);
    res.status(200).send('OTP sent to your email');
  } catch (err) {
    console.error('Send OTP error:', err);
    res.status(500).send('Error sending OTP');
  }
});

// 2) Verify OTP
app.post('/resetpass/verify-otp', (req, res) => {
  const { email, OTP } = req.body;
  if (!email || !OTP) return res.status(400).send('Email and OTP required');
  const record = otpStore[email];
  if (!record) return res.status(400).send('OTP not requested');
  if (Date.now() > record.expiresAt) {
    delete otpStore[email];
    return res.status(400).send('OTP expired');
  }
  if (OTP !== record.otp) return res.status(400).send('Invalid OTP');
  res.status(200).send('OTP verified');
});

// 3) Update Password
app.post('/resetpass/update-password', async (req, res) => {
  const { email, newPassword } = req.body;
  if (!email || !newPassword) return res.status(400).send('Email and new password required');
  if (!otpStore[email]) return res.status(400).send('OTP verification required');
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).send('User not found');
  await User.updateOne({ _id: user._id }, { $set: { password: newPassword } });
    delete otpStore[email];
    res.status(200).send('Password reset successful');
  } catch (err) {
    console.error('Password reset error:', err);
    res.status(500).send('Error resetting password');
  }
});


//Order address Register API
const OrderAddress = Mongodbmodule.OrderAddress;
app.post('/addressregister', async (req, res) => {
  const {  country,name,number,address1,address2, address3,pincode,city, state, } = req.body;
  try {
    
    const email = dbemail;
    console.log(email);
    const Orderaddress = new OrderAddress({ email, country,name,number,address1,address2, address3,pincode,city, state,  });
    await Orderaddress.save();
    res.send('User registered');
  } catch (err) {
    res.status(500).send('Error registering user');
  }
});

app.get('/address', async (req, res) => {
 
  try {
    const getaddress = await OrderAddress.findOne({ email:dbemail });
    res.json({getaddress})

  } catch (err) {
    res.status(500).send('Error logging in');
  }
});


//order details stored in database
const OrderDetails = require('./Order');
app.post('/order', async (req, res) => {
  try {
    const { userAddress, orderItems, totalPrice } = req.body;

    const email = dbemail;

    const newOrder = new OrderDetails({
      userAddress: {
        ...userAddress,
        email: email
      },
      orderItems,
      totalPrice,
      date: new Date()
    });

    await newOrder.save();


    //  Send confirmation mail
const mailOptions = {
  from: process.env.EMAIL_USER,
  to: email,
  subject: 'Order Confirmation ',
  html: `
    <h2 style="color:green;">✅ Order Confirmed</h2>
    <p>Hi <strong>${userAddress.name}</strong>,</p>
    <p>Thank you for your order! Here are your order details:</p>
    <table border="1" cellpadding="10" cellspacing="0" style="border-collapse: collapse; width: 100%; font-family: Arial;">
      <thead style="background-color: #f2f2f2;">
        <tr>
          <th>Product</th>
          <th>Image</th>
          <th>Qty</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        ${orderItems.map(item => `
          <tr>
            <td>${item.name}</td>
            <td><img src="${item.img}" alt="Product Image" width="80"/></td>
            <td style="text-align:center;">${item.quantity}</td>
            <td>₹${item.price}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>

    <p><strong>Total Price:</strong> ₹${totalPrice}</p>

    <p><strong>Shipping Address:</strong><br>
      ${userAddress.address1}, ${userAddress.address2},<br>
      ${userAddress.city}, ${userAddress.state} - ${userAddress.pincode}<br>
      ${userAddress.country}
    </p>

    <p>📩 You’ll receive further updates on this email.</p>
    <hr>
    <p style="font-size:13px; color:#888;">This is an auto-generated confirmation. Please do not reply.</p>
  `
};


    await transporter.sendMail(mailOptions);
    console.log(` Order confirmation mail sent to ${email}`);

    res.status(200).json({ message: 'Order placed and email sent' });

  } catch (error) {
    console.error("BACKEND ORDER ERROR:", error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});









//order item show on a frontent api 
app.get('/orders', async (req, res) => {
  try {
    const userEmail = dbemail;  

    if (!userEmail) {
      return res.status(401).json({ error: 'User not logged in' });
    }
    const orders = await OrderDetails.find({ 'userAddress.email': userEmail }).sort({ date: -1 });  
    res.status(200).json({ orders });
  } catch (error) {
    console.error(' Error fetching user orders:', error);
    res.status(500).json({ error: 'Error fetching orders' });
  }
});



//cancel api in fronted updated in states database update
app.post('/cancel-order', async (req, res) => {
  const { orderId, reason } = req.body;

  try {
    const order = await OrderDetails.findById(orderId);
    if (!order) return res.status(404).json({ message: 'Order not found' });

    order.status = 'cancelled';
    order.cancelReason = reason;
    await order.save();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: dbemail,
      subject: 'Order Cancelled',
      html: `
        <h3 style="color:red;">❌ Order Cancelled</h3>
        <p>Your order placed on <strong>${new Date(order.date).toLocaleString()}</strong> has been cancelled.</p>
        <p><strong>Reason:</strong> ${reason}</p>
        <p>If this was a mistake, please contact support.</p>
      `
    };

    
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Order cancelled and email sent' });
  } catch (err) {
    console.error('Cancel order error:', err);
    res.status(500).json({ error: 'Failed to cancel order' });
  }
});




app.listen(5000, () => {
  console.log(`Server runn  ing on http://localhost:5000`);
});
