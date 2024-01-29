import React from 'react';
import { Link } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../utils/helpers';

const Nav = ({ currentPage }) => {

  const pages = ['portfolio', 'contact', 'resume'];

  return (
    <nav>
      <ul className="flex-row">
        <li className={`mx-5 ${currentPage === '/' && 'navActive'}`} key="about">
          <Link to="/">About</Link>
        </li>
        {pages.map((page) => (
          <li
            key={page}
            className={`mx-5 ${currentPage === `/${page}` && 'navActive'}`}
          >
            <Link to={`/${page}`}>{capitalizeFirstLetter(page)}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
