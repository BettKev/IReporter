import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import config from "../config";

function ResetPassword() {
  const [token, setToken] = useState(null);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false); 
  const navigate = useNavigate();

  const { apiURL } = config;

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
      const response = await fetch(`${apiURL}/reset_password`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: token,
          password: newPassword,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setError('');
        setIsSuccess(true); // Set success message flag to true
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      } else {
        setError(data.error || 'An error occurred. Please try again.');
        setMessage('');
        setIsSuccess(false); // Reset success flag if there's an error
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      setMessage('');
      setIsSuccess(false); // Reset success flag if there's an error
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

  // Password strength logic
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
  const passwordStrengthClass = getPasswordStrengthClass(passwordStrength);

  return (
    <div className="font-[sans-serif] bg-[#05051e] rounded-4xl border-2 border-pink-200 max-sm:px-4 mt-20">
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 m-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl border-2 border-white">
          <div className="md:max-w-md w-full px-4 py-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-12">
                <h3 className="text-white text-3xl font-extrabold">Reset Your Password</h3>
                <p className="text-sm mt-4 text-white">
                  Remember your password?{' '}
                  <span
                    onClick={() => navigate('/login')}
                    className="text-pink-300 hover:text-white font-semibold ml-2 cursor-pointer"
                  >
                    Back to Login
                  </span>
                </p>
              </div>

              <div>
                <label className="text-white text-ls block mb-2">New Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                    className="w-full text-white text-sm border-b border-gray-300 focus:border-blue-600 pl-2 py-3 outline-none placeholder-white"
                    placeholder="Enter your new password"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute top-3 right-2"
                  >
                    {showPassword ? <span>🙈</span> : <span>👁️</span>}
                  </button>
                </div>
                {newPassword && (
                  <div className={`mt-2 text-sm ${passwordStrengthClass}`}>
                    Password strength: {passwordStrength}
                  </div>
                )}
              </div>

              <div className="mt-8">
                <label className="text-white text-ls block mb-2">Confirm Password</label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="w-full text-white text-sm border-b border-gray-300 focus:border-blue-600 pl-2 py-3 outline-none placeholder-white"
                    placeholder="Confirm your new password"
                  />
                  <button
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                    className="absolute top-3 right-2"
                  >
                    {showConfirmPassword ? <span>🙈</span> : <span>👁️</span>}
                  </button>
                </div>
              </div>

              {error && (
                <div className="text-red-500 mt-4">
                  <p>{error}</p>
                </div>
              )}

              {isSuccess && (
                <div className="text-green-500 mt-4">
                  <p>Process was successful. Redirecting you to the login page...</p>
                </div>
              )}

              <div className="mt-12">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full shadow-xl py-2.5 px-4 text-sm tracking-wide rounded-md text-white bg-gray-700 hover:bg-white hover:text-black focus:outline-none"
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;