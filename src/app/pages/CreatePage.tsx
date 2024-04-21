import { ReactElement } from 'react';
import { CardsContainer } from '../containers/CardsContainer';
import { CreateLiteratureContainer } from '../containers/CreateLiteratureContainer';

export const CreateLiteraturePage = (): ReactElement => {
  return (
    <>
      <CardsContainer />;
      <CreateLiteratureContainer />
    </>
  );
};
