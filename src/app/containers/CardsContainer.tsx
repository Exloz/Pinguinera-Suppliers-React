import { useState } from 'react';
import { useLiterature } from '../core/hooks/useLiterature';
import { Card } from '../ui/components/LiteratureCard/index';

export const CardsContainer: React.FC = () => {
  const { literatureCopies } = useLiterature();
  const [selectedCopies, setSelectedCopies] = useState({});

  const handleSelect = (copyId: number) => {
    setSelectedCopies((prev) => ({
      ...prev,
      [copyId]: !prev[copyId],
    }));
  };

  return (
    <>
      {literatureCopies.map((copy) => (
        <Card
          key={copy.literatureCopyId}
          literatureCopy={copy}
          onSelect={handleSelect}
          selected={!!selectedCopies[copy.literatureCopyId]}
        />
      ))}
    </>
  );
};
