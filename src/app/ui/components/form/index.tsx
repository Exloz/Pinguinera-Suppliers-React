import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

export const Form = ({ handleSubmit }: any): ReactElement => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Enter credentials</legend>

          <label>
            Email:
            <input type='text' name='email' />
          </label>

          <label>
            Password:
            <input type='password' name='password' />
          </label>
        </fieldset>
        <button>Send</button>
      </form>
      <h3>Don't have an accout? </h3>
      <Link to='/signup'>Sign Up</Link>
    </>
  );
};
