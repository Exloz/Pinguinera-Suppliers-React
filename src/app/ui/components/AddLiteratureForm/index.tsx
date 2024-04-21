import { ReactElement } from 'react';

export const FormAddLiterature = ({ handleSubmit }: any): ReactElement => {
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='title' placeholder='Title' required />
      <input type='number' name='type' placeholder='Type (0 or 1)' required />
      <input type='text' name='price' placeholder='Price' required />
      <button type='submit'>Add Literature</button>
    </form>
  );
};
