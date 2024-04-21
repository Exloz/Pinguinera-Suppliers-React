import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../state/AppContext';
import { signUpService } from '../services/authServices/signup.Service';

export const useSignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string>();
  const { dispatch } = useContext(AppContext);

  const authenticate = (userName: string, email: string, password: string) =>
    signUpService({ userName, email, password }).then((isAuthenticated) => {
      if (isAuthenticated) {
        dispatch({ type: 'USER_LOGGED' });
        navigate('/home/save-literature');
      } else {
        setError('Incorrect something');
      }
    });

  return { authenticate, error };
};
