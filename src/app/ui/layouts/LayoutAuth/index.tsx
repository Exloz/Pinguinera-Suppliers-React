import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

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
