import { ReactElement } from 'react';
import { useSignUp } from '../core/hooks/useSignUp';
import { FormSignUp } from '../ui/components/SignupForm';

export const SignUpContainer = (): ReactElement => {
  const { authenticate } = useSignUp();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const userName = event.target.elements.password.value;
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    authenticate(userName, email, password);
  };

  return <FormSignUp handleSubmit={handleSubmit} />;
};
