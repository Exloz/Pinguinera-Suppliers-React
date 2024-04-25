import { useContext, useEffect } from 'react';
import { AppContext } from '../state/AppContext';
import { literatureListService } from '../services/supplierServices/literatureList.service';

export const useLiterature = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    literatureListService(dispatch)
      .then((literatureCopies) => {
        dispatch({ type: 'LITERATURE_GOTTEN', payload: literatureCopies });
      })
      .catch((error) => {
        console.error('Failed to fetch literature:', error);
      });
  }, [dispatch]);

  return { literatureCopies: state.literatureList };
};
