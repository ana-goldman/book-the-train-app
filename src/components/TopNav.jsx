import { Fragment } from "react"

export default function TopNav() {
  return (
    <Fragment>
      <nav className="navbar-brand">
          <span>Лого</span>
        </nav>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <div className="collapase navbar-collapse" id="navbarMain">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">О нас</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/">Как это работает</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/">Отзывы</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/">Контакты</a>
              </li>
            </ul>
          </div>
        </nav>
    </Fragment>
  )
}