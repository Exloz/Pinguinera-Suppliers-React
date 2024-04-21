import { ReactElement } from 'react';
import { ILiteratureCopy } from '../../../core/models/literature-copy';

interface ICardProps {
  literatureCopy: ILiteratureCopy;
  onSelect: (literatureCopy: number) => void;
  selected: boolean;
}

export const Card: React.FC<ICardProps> = ({ literatureCopy, onSelect, selected }) => {
  const handleCardClick = () => {
    onSelect(literatureCopy.literatureCopyId);
  };

  return (
    <article className={`card ${selected ? 'selected' : ''}`} onClick={handleCardClick}>
      <header>
        <h4 className='literature__title'>{literatureCopy.title}</h4>
        <img src={literatureCopy.coverUrl} alt={`Cover for ${literatureCopy.title}`} />
      </header>
      <main>
        <h5>{literatureCopy.type === 0 ? 'Book' : 'Novel'}</h5>
        <h6>{literatureCopy.basePrice}</h6>
      </main>
    </article>
  );
};
