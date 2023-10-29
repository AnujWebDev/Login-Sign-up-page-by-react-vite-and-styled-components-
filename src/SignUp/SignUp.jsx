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

const SignUpLink = styled(Link)`
  margin-top: 20px;
  font-size: 16px;
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    isEmailValid: true,
    password: '',
    confirmPassword: '',
    passwordMatchError: false,
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
    } else if (name === 'confirmPassword') {
      setFormData({
        ...formData,
        [name]: value,
        passwordMatchError: value !== formData.password,
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

    if (formData.isEmailValid && !emailSubmitted && !formData.passwordMatchError) {
      console.log('Submitted:', formData);
      setEmailSubmitted(true);
    }
  };

  return (
    <Wrapper data-aos="fade-up" data-aos-duration="1000">
      <h1>Sign Up Here!</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          disabled={emailSubmitted}
        />
        <Input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          disabled={emailSubmitted}
        />
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
          disabled={emailSubmitted}
        />
        <Input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          disabled={emailSubmitted}
        />
        {!formData.isEmailValid && (
          <div style={{ color: 'red' }}>Enter a valid email address</div>
        )}
        {formData.passwordMatchError && (
          <div style={{ color: 'red' }}>Passwords do not match</div>
        )}
        <Button type="submit" disabled={emailSubmitted || formData.passwordMatchError}>
          Sign Up
        </Button>
      </Form>
      <SignUpLink to="/">Already have an account? Login here.</SignUpLink>
    </Wrapper>
  );
};

export default SignUp;
