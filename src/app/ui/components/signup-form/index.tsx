import { ReactElement } from 'react';

export const FormSignUp = ({ handleSubmit }: any): ReactElement => {
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>SignUp</legend>

        <label>
          UserName:
          <input type='text' name='userName' />
        </label>

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
  );
};
