import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm'; // Import your LoginForm component
import SignUpForm from './SignUpForm';
import Axios from 'axios';

function AuthForm() {

  
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
   
  const [username, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [date_of_birth, setDate] = useState('');

  const addUsers = () => {
    Axios.post('http://localhost:3000/create', {
        username,
        password,
        email,
        date_of_birth
    }).then((response) => {
        console.log(response);
    }).catch((error) => {
        console.error("Error adding user:", error);
    });
};

const handleLogin = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:3000/login', { 
        username,
        password
    }).then((response) => {
        console.log("Login Response:", response);
        navigate('/home'); 
    }).catch((error) => {
        console.error("Error logging in:", error);
    });
  }



  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    dateOfBirth: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    dateOfBirth: '',
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    addUsers();
    
  };

  const switchForm = () => {
    setIsLogin(!isLogin);
    setFormData({
      username: '',
      email: '',
      password: '',
      dateOfBirth: '',
    });
    setErrors({
      username: '',
      email: '',
      password: '',
      dateOfBirth: '',
    });
  };

  return (
    <div className={`container ${isLogin ? '' : 'right-panel-active'}`}>
      {isLogin ? 
        <LoginForm 
           
          handleSubmit={handleLogin} 
          errors={errors}
          username={username}
          setName={setName}
          password={password}
          setPassword={setPassword}
          email={email}
          setEmail={setEmail}
          dateOfBirth={date_of_birth}
          setDate={setDate}
        /> 
        : 
        <SignUpForm  
          handleSubmit={handleSubmit} 
          errors={errors}
          setName={setName}
          password={password}
          setPassword={setPassword}
          email={email}
          setEmail={setEmail}
          dateOfBirth={date_of_birth}
          setDate={setDate}
        />
      }
      <div className="overlay-container">
        <div className="overlay">
          <div className={`overlay-panel overlay-${isLogin ? 'right' : 'left'}`}>
            <h1>{isLogin ? "Welcome Back!" : "Hello, Friend!"}</h1>
            <p>{isLogin ? "To keep connected with us please login with your personal info" : "Enter your personal details and start journey with us"}</p>
            <button className="ghost" onClick={switchForm}>{isLogin ? "Sign Up" : "Login"}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthForm;
