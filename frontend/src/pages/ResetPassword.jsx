// import React, { useState, useEffect, useContext } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { UserContext } from "../context/UserContext";


// function NewPassword() {
//   const [password, setPassword] = useState("");
//   const [repeatPassword, setRepeatPassword] = useState("");
//   const { resetPassword } = useContext(UserContext);
  

 

//   return (
//     <div className="mt-25">
//       <h1>Reset Your Password</h1>
//       {error && <p>{error}</p>}
//       {validToken ? (
//         <form >
//           <label>
//             New Password:
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </label>
//           <div>
//               <label className="text-white text-sm mb-2 block">Repeat Password</label>
//               <div className="relative flex items-center">
//                 <input
//                   type="password"
//                   value={repeatPassword}
//                   onChange={(e) => setRepeatPassword(e.target.value)}
//                   required
//                   className="text-white bg-transparent border-2 border-white w-full text-sm pl-4 pr-8 py-2.5 rounded-md outline-blue-300 placeholder-white"
//                   placeholder="Confirm password"
//                 />
//               </div>
//             </div>
//           <button type="submit">Reset Password</button>
//         </form>
//       ) : (
//         <p>Invalid or expired token. Please request a new reset link.</p>
//       )}
//     </div>
//   );
// }

// export default NewPassword;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Package, Eye, EyeOff, Lock, AlertCircle, CheckCircle, ArrowLeft } from 'lucide-react';

function ResetPassword() {
  const [token, setToken] = useState(null);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const tokenParam = searchParams.get('token');
    setToken(tokenParam);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      setIsLoading(false);
      return;
    }

    if (newPassword.length < 8) {
      setError('Password must be at least 8 characters long.');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/reset_password', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: token,
          new_password: newPassword,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setError('');
        setTimeout(() => {
          navigate('/login'); // Redirect to login after successful reset.
        }, 3000); // Redirect after 3 seconds.
      } else {
        setError(data.error || 'An error occurred. Please try again.');
        setMessage('');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      setMessage('');
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const getPasswordStrength = (password) => {
    if (password.length === 0) return '';
    if (password.length < 8) return 'Weak';
    if (password.length < 12) return 'Medium';
    return 'Strong';
  };

  const getPasswordStrengthClass = (strength) => {
    if (strength === 'Weak') return 'password-strength-weak';
    if (strength === 'Medium') return 'password-strength-medium';
    if (strength === 'Strong') return 'password-strength-strong';
    return '';
  };

  const passwordStrength = getPasswordStrength(newPassword);
  const strengthClass = getPasswordStrengthClass(passwordStrength);

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center py-5">
      <div className="form-container bg-white">
        <div className="sendit-bg logo-container">
          <div className="d-flex justify-content-center align-items-center mb-3">
            <Package size={40} />
          </div>
          <h1 className="logo-text mb-2">SENDIT</h1>
          <p className="quote-text mb-0">We deliver</p>
        </div>

        <div className="p-4 p-md-5">
          <h2 className="text-center mb-4 fw-bold">Reset Your Password</h2>

          {token ? (
            <>
              {message ? (
                <div className="alert alert-success d-flex align-items-center" role="alert">
                  <CheckCircle size={20} className="me-2" />
                  <div>
                    <strong>{message}</strong>
                    <p className="mb-0 small">Redirecting you to login page...</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="newPassword" className="form-label">New Password</label>
                    <div className="position-relative">
                      <Lock size={18} className="input-icon" />
                      <input
                        type={showPassword ? "text" : "password"}
                        className="form-control"
                        id="newPassword"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Enter your new password"
                        required
                      />
                      <button
                        type="button"
                        className="password-toggle"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>

                    {newPassword && (
                      <div className="mt-2">
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <small className="text-muted">Password strength:</small>
                          <small className={`fw-medium ${
                            passwordStrength === 'Weak' ? 'text-danger' : 
                            passwordStrength === 'Medium' ? 'text-warning' : 'text-success'
                          }`}>
                            {passwordStrength}
                          </small>
                        </div>
                        <div className="progress" style={{ height: '6px' }}>
                          <div 
                            className={`progress-bar ${strengthClass}`}
                            role="progressbar" 
                            aria-valuenow={
                              passwordStrength === 'Weak' ? 33 : 
                              passwordStrength === 'Medium' ? 66 : 100
                            }
                            aria-valuemin={0} 
                            aria-valuemax={100}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    <div className="position-relative">
                      <Lock size={18} className="input-icon" />
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        className="form-control"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm your new password"
                        required
                      />
                      <button
                        type="button"
                        className="password-toggle"
                        onClick={toggleConfirmPasswordVisibility}
                      >
                        {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>

                    {confirmPassword && newPassword !== confirmPassword && (
                      <div className="mt-1 text-danger d-flex align-items-center">
                        <AlertCircle size={16} className="me-1" />
                        <small>Passwords do not match</small>
                      </div>
                    )}
                  </div>

                  {error && (
                    <div className="alert alert-danger d-flex align-items-center mb-4" role="alert">
                      <AlertCircle size={20} className="me-2" />
                      <div>{error}</div>
                    </div>
                  )}

                  <div className="d-grid">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="btn btn-primary py-2"
                    >
                      {isLoading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Processing...
                        </>
                      ) : (
                        'Reset Password'
                      )}
                    </button>
                  </div>
                </form>
              )}
            </>
          ) : (
            <div className="alert alert-danger d-flex align-items-center" role="alert">
              <AlertCircle size={20} className="me-2" />
              <div>
                <strong>Invalid reset link</strong>
                <p className="mb-0 small">The password reset link is invalid or has expired.</p>
              </div>
            </div>
          )}

          <div className="text-center mt-4">
            <button 
              onClick={() => navigate('/login')}
              className="btn btn-link back-to-login p-0 d-inline-flex align-items-center"
            >
              <ArrowLeft size={16} className="me-1" />
              Back to Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
