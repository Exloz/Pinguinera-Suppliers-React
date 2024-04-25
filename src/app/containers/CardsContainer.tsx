import { useContext } from 'react';
import { useLiterature } from '../core/hooks/useLiterature';
import { Cards } from '../ui/components/LiteratureCard/index';
import { AppContext } from '../core/state/AppContext';

export const CardsContainer: React.FC = () => {
  const { literatureCopies } = useLiterature();
  const { state, dispatch } = useContext(AppContext);

  const handleSelect = (copyId: number) => {
    dispatch({ type: 'TOGGLE_LITERATURE_SELECTION', payload: copyId });
  };

  return (
    <>
      {literatureCopies.map((copy) => (
        <Cards
          key={copy.literatureCopyId}
          literatureCopy={copy}
          onSelect={handleSelect}
          selected={state.selectedLiterature[copy.literatureCopyId]}
        />
      ))}
    </>
  );
};
