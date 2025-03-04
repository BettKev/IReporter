import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";


function NewPassword() {
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const { resetPassword } = useContext(UserContext);
  

 

  return (
    <div className="mt-25">
      <h1>Reset Your Password</h1>
      {error && <p>{error}</p>}
      {validToken ? (
        <form >
          <label>
            New Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <div>
              <label className="text-white text-sm mb-2 block">Repeat Password</label>
              <div className="relative flex items-center">
                <input
                  type="password"
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                  required
                  className="text-white bg-transparent border-2 border-white w-full text-sm pl-4 pr-8 py-2.5 rounded-md outline-blue-300 placeholder-white"
                  placeholder="Confirm password"
                />
              </div>
            </div>
          <button type="submit">Reset Password</button>
        </form>
      ) : (
        <p>Invalid or expired token. Please request a new reset link.</p>
      )}
    </div>
  );
}

export default NewPassword;
