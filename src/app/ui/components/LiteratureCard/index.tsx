import { ReactElement } from 'react';
import { ILiteratureCopy } from '../../../core/models/literature-copy';
import { LiteratureCard } from '../../elements/LiteratureCard/LiteratureCard';
import './style.css';

interface ICardProps {
  literatureCopy: ILiteratureCopy;
  onSelect: (literatureCopy: number) => void;
  selected: boolean;
}

export const Cards: React.FC<ICardProps> = ({ literatureCopy, onSelect, selected }) => {
  const handleCardClick = () => {
    onSelect(literatureCopy.literatureCopyId);
  };

  return (
    <LiteratureCard
      literatureCopy={literatureCopy}
      isSelected={selected}
      onClick={handleCardClick}
    />
  );
};
