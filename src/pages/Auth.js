import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import { useAuth } from '../context/AuthContext';

const Auth = () => {
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();

  const handleLoginClick = () => {
    login();
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Authentication Page</h1>
      <div style={{ marginTop: '20px' }}>
        <Button onClick={handleLoginClick} tabIndex={0}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Auth;