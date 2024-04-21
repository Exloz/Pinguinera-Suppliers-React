import { ReactElement } from 'react';
import { useLiterature } from '../core/hooks/useLiterature';
import { Card } from '../ui/components/LiteratureCard/index';

export const CardsContainer = (): ReactElement => {
  const { literatureCopies } = useLiterature();

  return (
    <>
      {literatureCopies.map((copy) => (
        <Card key={copy.literatureCopyId} literatureCopy={copy} />
      ))}
    </>
  );
};
