import { ReactNode, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from '../core/state/AppContext';

interface IGuardProps {
  children: ReactNode;
}

export const Guard = ({ children }: IGuardProps) => {
  const { state } = useContext(AppContext);
  console.log(state);

  if (!state.isCustomerLogged) {
    return <Navigate to='/login' replace />;
  }

  return children;
};
