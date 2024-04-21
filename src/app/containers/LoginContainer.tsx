import { ReactElement } from 'react';
import { Form } from '../ui/components/Form/index';
import { useLogin } from '../core/hooks/useLogin';

export const LoginContainer = (): ReactElement => {
  const { authenticate } = useLogin();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    authenticate(email, password);
  };

  return <Form handleSubmit={handleSubmit} />;
};
