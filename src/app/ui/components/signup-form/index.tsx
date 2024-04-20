import { ReactElement } from 'react';

export const Form = ({ handleSubmit }: any): ReactElement => {
  return (
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
  );
};
