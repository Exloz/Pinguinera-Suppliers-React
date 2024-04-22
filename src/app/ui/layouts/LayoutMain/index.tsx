import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderContainer } from '../../../containers/HeaderContainer';
import { Footer } from '../../components/Footer';
import { CardsContainer } from '../../../containers/CardsContainer';
import '../../styles/index.css';

export const LayoutMain = (): ReactElement => {
  return (
    <div className='responsive'>
      <HeaderContainer />
      <main>
        <section className='cards-section'>
          <CardsContainer />
        </section>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
