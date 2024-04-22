import { ReactElement } from 'react';
import InputField from '../../forms/InputField';
import SelectField from '../../elements/SelectField/SelectField';
import FormButton from '../../forms/FormButton';
import './style.css';

export const FormAddLiterature = ({ handleSubmit }: any): ReactElement => {
  return (
    <form onSubmit={handleSubmit} className='form-literature'>
      <h1 className='form-literature__title'>Save a new copy and know its gross price! </h1>
      <InputField label='Title' type='text' name='title' />
      <SelectField
        label='Type'
        name='type'
        options={[
          { label: 'Book', value: 0 },
          { label: 'Novel', value: 1 },
        ]}
      />
      <InputField label='Price' type='number' name='price' />
      <FormButton>Add Literature</FormButton>
    </form>
  );
};
