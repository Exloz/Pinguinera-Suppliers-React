import { useContext } from 'react';
import { AppContext } from '../state/AppContext';
import { ICreateCopy } from '../models/literature-copy-create';
import { createLiteratureService } from '../services/authServices/saveLiterature.service';

export const useCreateLiterature = () => {
  const { dispatch } = useContext(AppContext);

  const createLiterature = async (literatureData: ICreateCopy) => {
    try {
      const newLiterature = await createLiteratureService(literatureData);
      dispatch({ type: 'ADD_LITERATURE', payload: newLiterature });
    } catch (error) {
      console.error('Error creating literature:', error);
    }
    [dispatch];
  };

  return { createLiterature };
};
