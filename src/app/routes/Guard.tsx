//import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

//TODO: check type

interface IGuardProps {
  children: any;
}

export const Guard = ({ children }: IGuardProps) => {
  const { currenteUser } = { currenteUser: true };

  if (!currenteUser) {
    return <Navigate to='/login' replace />;
  }

  return children;
};
