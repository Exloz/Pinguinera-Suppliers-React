import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../../components/Footer';

export const LayoutAuth = (): ReactElement => {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
