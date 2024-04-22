import React from 'react';

interface SelectFieldProps {
  label: string;
  name: string;
  options: { label: string; value: string | number }[];
}

const SelectField: React.FC<SelectFieldProps> = ({ label, name, options }) => {
  return (
    <div className='form__group'>
      <label className='form__label'>
        {label}
        <select className='form__input' name={name} required>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default SelectField;
