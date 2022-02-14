import { Fragment } from "react";
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom'

export default function TopNav() {
  return (
    <Fragment>
      <nav className="navbar-brand" id='top'>
        <NavLink to='/'><span>Лого</span></NavLink>
        </nav>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <div className="collapase navbar-collapse" id="navbarMain">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <HashLink smooth to="/#about">О нас</HashLink>
              </li>
              <li className="nav-item active">
                <HashLink smooth to="/#about-process">Как это работает</HashLink>
              </li>
              <li className="nav-item active">
                <HashLink smooth to="/#feedback">Отзывы</HashLink>
              </li>
              <li className="nav-item active">
                <HashLink smooth to="/#contacts">Контакты</HashLink>
              </li>
            </ul>
          </div>
        </nav>
    </Fragment>
  )
}