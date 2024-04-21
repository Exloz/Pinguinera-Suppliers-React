import { ReactElement } from 'react';
import { ILiteratureCopy } from '../../../core/models/literature-copy';

interface ICardProps {
  literatureCopy: ILiteratureCopy;
}

export const Card = ({ literatureCopy }: ICardProps): ReactElement => {
  return (
    <article className='card'>
      <header>
        <h4 className='literature__title'>{literatureCopy.title}</h4>
      </header>
      <main>
        <h5>{literatureCopy.type === 0 ? 'Book' : 'Novel'}</h5>
        <h6>{literatureCopy.basePrice}</h6>
      </main>
    </article>
  );
};
