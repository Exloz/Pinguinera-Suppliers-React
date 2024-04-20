import { ReactElement } from 'react';
import { Form } from '../ui/components/form/index';
import { useAuth } from '../core/hooks/useAuth';

export const LoginContainer = (): ReactElement => {
  const { authenticate } = useAuth();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    authenticate(email, password);
  };

  return <Form handleSubmit={handleSubmit} />;
};
