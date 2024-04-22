import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderContainer } from '../../../containers/HeaderContainer';
import { Footer } from '../../components/Footer';
import { CreateLiteraturePage } from '../../../pages/CreatePage';
import { CardsContainer } from '../../../containers/CardsContainer';

export const LayoutMain = (): ReactElement => {
  return (
    <>
      <HeaderContainer />
      <main>
        <CardsContainer />;
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
