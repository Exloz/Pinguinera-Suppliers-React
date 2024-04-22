import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import '../../forms/formsStyle.css';
import FormButton from '../../forms/FormButton';
import InputField from '../../forms/InputField';

export const Form = ({ handleSubmit }: any): ReactElement => {
  return (
    <>
      <form onSubmit={handleSubmit} className='form'>
        <fieldset className='form__fieldset'>
          <legend className='form__legend'>SignUp</legend>

          <InputField label='Email:' type='text' name='email' />
          <InputField label='Password:' type='password' name='password' />
        </fieldset>
        <FormButton>Send</FormButton>
      </form>
      <h3 className='form__heading'>Already have an account?</h3>
      <Link to='/signup' className='form__link'>
        Sign
      </Link>
    </>
  );
};
