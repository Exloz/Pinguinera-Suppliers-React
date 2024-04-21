import { useState } from 'react';
import { useCreateLiterature } from '../core/hooks/useCreateLiterature';
import { FormAddLiterature } from '../ui/components/AddLiteratureForm';

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

  return <FormAddLiterature handleSubmit={handleSubmit} />;
};
