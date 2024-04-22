import React from 'react';
import './style.css';

interface InputFieldProps {
  label: string;
  type: string;
  name: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, type, name }) => {
  return (
    <div className='form__group'>
      <label className='form__label'>
        {label}
        <input className='form__input' type={type} name={name} required />
      </label>
    </div>
  );
};

export default InputField;
