import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  text-align: center;
  margin-top: 50px;
  color: white;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  padding: 10px;
  margin: 5px;
  width: 250px;
  font-size: 16px;
  border-radius: 20px;
  text-align: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 10px;
  font-size: 16px;
  transition: background-color 0.3s, color 0.3s;
  
  &:hover {
    background-color: #4285f4;
    color: #fff;
  }
`;

const GoogleButton = styled(Button)`
  background-color: #fff;
  color: #000;
  
  &:hover {
    background-color: #4285f4;
    color: #fff;
  }
`;

const ForgotPassword = styled(Link)`
  margin-top: 10px;
  font-size: 14px;
  color: #ccc;
  text-decoration: none;
`;

const SignUpLink = styled(Link)`
  margin-top: 20px;
  font-size: 16px;
  color: #fff;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    isEmailValid: true,
  });

  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'email') {
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      setFormData({
        ...formData,
        [name]: value,
        isEmailValid: isValid,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.isEmailValid && !emailSubmitted) {
      console.log('Submitted:', formData);
      setEmailSubmitted(true);
    }
  };

  return (
    <Wrapper  data-aos="fade-up"  data-aos-duration="1000">
      <h1>Login Here!</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          disabled={emailSubmitted}
        />
        <Input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        {!formData.isEmailValid && (
          <div style={{ color: 'red' }}>Enter a valid email address</div>
        )}
        <Button type="submit" disabled={emailSubmitted}>
          Login here
        </Button>
        <GoogleButton>
          Continue with Google
        </GoogleButton>
        <ForgotPassword to="#">Forgot Password?</ForgotPassword>
      </Form>
      <SignUpLink to="/signup">Don't have an account? Sign up here.</SignUpLink>
    </Wrapper>
  );
};

export default Login;
