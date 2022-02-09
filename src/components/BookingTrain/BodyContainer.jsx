import { useState, Fragment } from 'react';
import { useSelector } from "react-redux";
import Route from './Route';

export default function BodyContainer() {
  const [sortBy, setSortBy] = useState('времени');
  const [open, setOpen] = useState(false);
  const [showNumber, setShowNumber] = useState(5);
  const { routes, total } = useSelector((store) => store.searchSlice);

  return (
    <Fragment>
      <section className="body-container">
        <div className="trains-header d-flex justify-content-between">
          <div className="trains-header__total">найдено {total}</div>
          <div className="trains-header__sorting d-flex">сортировать по:
            <span onClick={() => setOpen(open === true ? false : true)}>{sortBy}</span>
            <ul className={`select-sorting ${open === true ? 'open' : ''}`}>
              <li onClick={() => {
                setSortBy('времени');
                setOpen(false)
              }}>времени</li>
              <li onClick={() => {
                setSortBy('стоимости');
                setOpen(false)
              }}>стоимости</li>
              <li onClick={() => {
                setSortBy('длительности');
                setOpen(false)
              }}>длительности</li>
            </ul>
          </div>
          <div className="trains-header__page-quantity d-flex">показывать по:
            <span className={`select-quantity ${showNumber === 5 ? 'active' : ''}`} onClick={() => setShowNumber(5)}>5</span>
            <span className={`select-quantity ${showNumber === 10 ? 'active' : ''}`} onClick={() => setShowNumber(10)}>10</span>
            <span className={`select-quantity ${showNumber === 20 ? 'active' : ''}`} onClick={() => setShowNumber(20)}>20</span>
          </div>
        </div>
        {routes && <div className="trains-group">
          <Route/>
        </div>}
        <div className="pages-control d-flex justify-content-end text-center gap-4">
          <div className="pages-control__item arrows ">
            <div className="arrow-back"></div>
          </div>
          <span className="pages-control__item active">1</span>
          <span className="pages-control__item">2</span>
          <span className="pages-control__item">3</span>
          <div className="pages-control__item arrows">
            <div className="arrow-forward"></div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}