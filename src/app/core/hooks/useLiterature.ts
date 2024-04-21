import { useContext, useEffect } from 'react';
import { AppContext } from '../state/AppContext';
import { literatureListService } from '../services/authServices/literatureList.service';

export const useLiterature = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    literatureListService()
      .then((literatureCopies) => {
        console.log('literature hook');
        dispatch({ type: 'LITERATURE_GOTTEN', payload: literatureCopies });
      })
      .catch((error) => {
        console.error('Failed to fetch literature:', error);
      });
  }, [dispatch]);

  return { literatureCopies: state.literatureList };
};
