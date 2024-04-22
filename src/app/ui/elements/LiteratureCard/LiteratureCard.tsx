import React from 'react';
import { ILiteratureCopy } from '../../../core/models/literature-copy';
import './style.css';

interface LiteratureCardProps {
  literatureCopy: ILiteratureCopy;
  isSelected: boolean;
  onClick: () => void;
}

export const LiteratureCard: React.FC<LiteratureCardProps> = ({
  literatureCopy,
  isSelected,
  onClick,
}) => {
  return (
    <article
      className={`literature-card ${isSelected ? 'literature-card--selected' : ''}`}
      onClick={onClick}>
      <header className='literature-card__header'>
        <h4 className='literature-card__title'>{literatureCopy.title}</h4>
        <img
          className='literature-card__image'
          src={literatureCopy.coverUrl}
          alt={`Cover for ${literatureCopy.title}`}
        />
      </header>
      <main className='literature-card__main'>
        <h5 className='literature-card__type'>{literatureCopy.type === 0 ? 'Book' : 'Novel'}</h5>
        <h6 className='literature-card__price'>${literatureCopy.basePrice}</h6>
      </main>
    </article>
  );
};
