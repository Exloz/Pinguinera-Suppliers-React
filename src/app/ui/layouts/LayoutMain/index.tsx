import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderContainer } from '../../../containers/HeaderContainer';
import { Footer } from '../../components/Footer';

export const LayoutMain = (): ReactElement => {
  return (
    <>
      <HeaderContainer />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
