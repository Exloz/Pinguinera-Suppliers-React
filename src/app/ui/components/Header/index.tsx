import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const Header = ({ userName }: any): ReactElement => {
  return (
    <header className='header'>
      <h1>Welcome to our store {userName}</h1>
      <nav className='header__menus'>
        <ul id='header-list' className='menu-hidden'>
          <li className='header__option'>
            <Link to='/home/save-literature'>Create Copy</Link>
          </li>
          <li className='header__option'>
            <Link to='/home/quote-literature'>Quote</Link>
          </li>
          <li className='header__option'>
            <Link to='/home/budget-literature'>Budget Optimization</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
