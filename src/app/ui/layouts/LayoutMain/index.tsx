import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

export const LayoutMain = (): ReactElement => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
