import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginService } from '../services/authServices/login.service';
import { AppContext } from '../state/AppContext';

export const useAuth = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string>();
  const { dispatch } = useContext(AppContext);

  const authenticate = (email: string, password: string) =>
    loginService({ email, password }).then((isAuthenticated) => {
      if (isAuthenticated) {
        dispatch({ type: 'USER_LOGGED' });
        navigate('save-literature');
      } else {
        setError('Las credenciales son incorrectas');
      }
    });

  return { authenticate, error };
};
