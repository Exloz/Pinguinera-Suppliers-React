import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../state/AppContext';
import { signUpService } from '../services/authServices/signup.Service';

export const useSignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string>();
  const { dispatch } = useContext(AppContext);

  const authenticate = async (userName: string, email: string, password: string) => {
    try {
      const isAuthenticated = await signUpService({ userName, email, password });
      if (isAuthenticated) {
        dispatch({ type: 'USER_LOGGED' });
        navigate('/home/save-literature');
      } else {
        setError('Incorrect or missing information.');
      }
    } catch (error) {
      setError('Please check your submission and try again.');
    }
  };

  return { authenticate, error };
};
