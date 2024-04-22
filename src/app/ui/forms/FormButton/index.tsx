import React from 'react';
import './style.css';

interface FormButtonProps {
  children: React.ReactNode;
}

const FormButton: React.FC<FormButtonProps> = ({ children }) => {
  return <button className='form__button'>{children}</button>;
};

export default FormButton;
