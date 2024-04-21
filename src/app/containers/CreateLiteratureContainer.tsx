import { useState } from 'react';
import { useCreateLiterature } from '../core/hooks/useCreateLiterature';

export const CreateLiteratureContainer = () => {
  const { createLiterature } = useCreateLiterature();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.elements.title.value;
    const type = form.elements.type.value;
    const price = form.elements.price.value;

    createLiterature({
      title: title,
      type: parseInt(type, 10),
      price: price,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='title' placeholder='Title' required />
      <input type='number' name='type' placeholder='Type (0 or 1)' required />
      <input type='text' name='price' placeholder='Price' required />
      <button type='submit'>Add Literature</button>
    </form>
  );
};
