import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

export const Header = ({ userName }: any): ReactElement => {
  return (
    <>
      <h1>Welcome {userName}</h1>
      <nav className='header__menus'>
        <ul id='header-list' className='menu-hidden'>
          <li className='header__option'>
            <Link to='/home/save-literature'>Create literature copy</Link>
          </li>
          <li className='header__option'>
            <Link to='/home/quote-literature'>Quote</Link>
          </li>
          <li className='header__option'>
            <Link to='/contact'>Budeget Optimization</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
