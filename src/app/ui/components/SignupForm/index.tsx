import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import FormButton from '../../forms/FormButton';
import InputField from '../../forms/InputField';
import '../../forms/formsStyle.css';

export const FormSignUp = ({ handleSubmit }: any): ReactElement => {
  return (
    <>
      <form onSubmit={handleSubmit} className='form'>
        <fieldset className='form__fieldset'>
          <legend className='form__legend'>SignUp</legend>

          <InputField label='UserName:' type='text' name='userName' />
          <InputField label='Email:' type='text' name='email' />
          <InputField label='Password:' type='password' name='password' />
        </fieldset>
        <FormButton>Send</FormButton>
      </form>
      <h3 className='form__heading'>Already have an account?</h3>
      <Link to='/login' className='form__link'>
        Login
      </Link>
    </>
  );
};
