import React from 'react';

function SignUpForm({ handleSubmit, errors,setName,setEmail,setPassword,setDate}) {
  return (
    <div className="form-container register-container">
        <form onSubmit={handleSubmit}>
          <h1>Register here</h1>
          <div className="form-control">
            <input
              type="text"
              name="username"
              placeholder="Name"
              onChange={(event)=>{setName(event.target.value)}}
            />
            <small>{errors.username}</small>
          </div>
          <div className="form-control">
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={(event)=>{setEmail(event.target.value)}}
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
            {/* New Date of Birth field */}
            <div className="form-control">
            <input
              type="date"
              name="date_of_birth"
              placeholder="Date of Birth"
              onChange={(event)=>{setDate(event.target.value)}}
            />
            <small>{errors.dateOfBirth}</small>
          </div>
          <button type="submit" onClick={handleSubmit}>Register</button>
          <span>or use your account</span>
          {/* Social media buttons */}
        </form>
      </div>
  );
}

export default SignUpForm;
