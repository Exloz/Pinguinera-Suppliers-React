import { ReactElement } from 'react';

export const FormAddLiterature = ({ handleSubmit }: any): ReactElement => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Title'
        required
      />
      <input
        type='number'
        value={type}
        onChange={(e) => setType(e.target.value)}
        placeholder='Type (1 or 2)'
        required
      />
      <input
        type='text'
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder='Price'
        required
      />
      <button type='submit'>Add Book</button>
    </form>
  );
};
