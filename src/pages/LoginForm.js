import React from 'react';
import '../pages/Homepage.css';
function LoginForm({ handleSubmit, errors,setName, setPassword  }) {
  return (
    <div className="form-container login-container">
      <form onSubmit={handleSubmit}>
        <h1>Login here</h1>
        <div className="form-control">
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={(event)=>{setName(event.target.value)}}
            
            
          />
          <small>{errors.email}</small>
        </div>
        <div className="form-control">
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(event)=>{setPassword(event.target.value)}}
            
          />
          <small>{errors.password}</small>
        </div>
        <button type="submit"  onClick={handleSubmit}>Login</button>
        <span>or use your account</span>
        {/* Social media buttons */}
      </form>
    </div>
  );
}

export default LoginForm;
