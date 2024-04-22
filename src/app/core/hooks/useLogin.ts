import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginService } from '../services/authServices/login.service';
import { AppContext } from '../state/AppContext';

export const useLogin = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string>();
  const { dispatch } = useContext(AppContext);

  const authenticate = async (email: string, password: string) => {
    try {
      const isAuthenticated = await loginService({ email, password });
      if (isAuthenticated) {
        dispatch({ type: 'USER_LOGGED' });
        navigate('/home/save-literature');
      } else {
        alert('Incorrect Email or Password');
      }
    } catch (error) {
      alert('Check your email and password');
    }
  };

  return { authenticate, error };
};
