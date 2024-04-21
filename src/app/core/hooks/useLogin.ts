import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginService } from '../services/authServices/login.service';
import { AppContext } from '../state/AppContext';

export const useLogin = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string>();
  const { dispatch } = useContext(AppContext);

  const authenticate = (email: string, password: string) =>
    loginService({ email, password }).then((isAuthenticated) => {
      if (isAuthenticated) {
        dispatch({ type: 'USER_LOGGED' });
        navigate('/home/save-literature');
      } else {
        setError('Incorrect email or password, try again');
      }
    });

  return { authenticate, error };
};
