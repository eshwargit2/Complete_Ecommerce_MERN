import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Resetpass = () => {
  const [formData, setFormData] = useState({
    email: '',
    otp: '',
    newPassword: '',
  });
  const [step, setStep] = useState(1); // 1 = email, 2 = verify otp, 3 = new password
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const ServerURL = import.meta.env.VITE_API_URL;

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrorMsg('');
  };

  // Step 1: Send OTP
  const handleSendOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    try {
      await axios.post(`${ServerURL}/resetpass/send-otp`, { email: formData.email });
      setStep(2);
    } catch (err) {
      setErrorMsg(err.response?.data || 'Failed to send OTP');
    }
    setLoading(false);
  };

  // Step 2: Verify OTP
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    try {
      await axios.post(`${ServerURL}/resetpass/verify-otp`, { email: formData.email, OTP: formData.otp });
      setStep(3);
    } catch (err) {
      setErrorMsg(err.response?.data || 'Invalid OTP');
    }
    setLoading(false);
  };

  // Step 3: Reset Password
  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    try {
      await axios.post(`${ServerURL}/resetpass/update-password`, {
        email: formData.email,
        newPassword: formData.newPassword,
      });
      // Redirect to sign-in page after success
       
      setspin(true);

     setTimeout(() => {
      
       navigate('/sign');
     }, 2000);

    } catch (err) {
      setErrorMsg(err.response?.data || 'Failed to reset password');
    }
    setLoading(false);
  };

  const [spin, setspin]=useState(false);

  return (
    <div className=" d-flex justify-content-center align-items-center Sign-section" style={{ minHeight: '80vh' }}  >
      <div className="col-12 col-md-6">
        <h2 className="text-center mb-4">Reset Password</h2>
        <form onSubmit={
          step === 1
            ? handleSendOtp
            : step === 2
            ? handleVerifyOtp
            : handleResetPassword
        }>
          {/* Email input shown always */}
          <div className="mb-3">
            <input
              type="email"
              name="email"
             
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={step > 1} // disable after OTP sent
            />
          </div>

          {/* OTP input shown on Step 2 */}
          {step >= 2 && (
            <div className="mb-3">
              <input
                type="number"
                name="otp"
               
                placeholder="Enter OTP"
                value={formData.otp}
                onChange={handleChange}
                required={step === 2}
              />
            </div>
          )}

          {/* New password input shown on Step 3 */}
          {step === 3 && (
            <div className="mb-3">
              <input
                type="password"
                name="newPassword"
               
                placeholder="Enter new password"
                value={formData.newPassword}
                onChange={handleChange}
                required
              />
            </div>
          )}

          {/* Error message */}
          {errorMsg && <p className="text-danger">{errorMsg}</p>}

          {/* Button */}
          {!spin?(
             <button type="submit" className="submit " disabled={loading}>
            {loading
              ? <span className="spinner-border spinner-border-sm"></span>
              : step === 1
              ? 'Send OTP'
              : step === 2
              ? 'Verify OTP'
              : 'Reset Password'}
          </button>
          ):(
            <span className="spinner-border "></span>
          )}
         

        </form>
      </div>
    </div>
  );
};

export default Resetpass;
