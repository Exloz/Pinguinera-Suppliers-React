import { ReactElement, useState } from 'react';
import { useLiterature } from '../core/hooks/useLiterature';
import { Card } from '../ui/components/LiteratureCard/index';

export const CardsContainer = (): ReactElement => {
  const { literatureCopies } = useLiterature();
  const [selectedCopies, setSelectedCopies] = useState({});

  const handleSelect = (copyId) => {
    setSelectedCopies((prev) => ({
      ...prev,
      [copyId]: !prev[copyId] ? 1 : 0,
    }));
  };

  return (
    <>
      {literatureCopies.map((copy) => (
        <Card
          key={copy.literatureCopyId}
          literatureCopy={copy}
          onSelect={handleSelect}
          selected={!!selectedCopies[copy.copyId]}
        />
      ))}
    </>
  );
};
