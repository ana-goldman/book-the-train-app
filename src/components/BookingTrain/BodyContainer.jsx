import { useState, useEffect, Fragment } from 'react';
import { useSelector,useDispatch } from "react-redux";
import Route from './Route';
import { fetchRoutes } from '../../redux/searchSlice';
import { nanoid } from 'nanoid';

export default function BodyContainer() {
  const dispatch = useDispatch();
  const [sortBy, setSortBy] = useState('date');
  const [open, setOpen] = useState(false);
  const [limit, setLimit] = useState(5);
  const { 
    cityFrom, 
    cityTo,
    routes,
    total,
    haveFourthClass,
    haveThirdClass,
    haveSecondClass,
    haveFirstClass,
    haveWifi,
    haveExpress,
    priceFrom,
    priceTo,
    startDepartureHourFrom,
    startDepartureHourTo,
    startArrivalHourFrom,
    startArrivalHourTo,
    endDepartureHourFrom,
    endDepartureHourTo,
    endArrivalHourFrom,
    endArrivalHourTo, 
  } = useSelector((store) => store.searchSlice);
  const [pages, setPages] = useState(Math.floor((total / limit) % 2 === 0 ? total/limit : total/limit + 1));
  const [activePage, setActivePage] = useState(1);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let url = `https://fe-diplom.herokuapp.com/routes?from_city_id=${cityFrom._id}&to_city_id=${cityTo._id}`;
    
    // limit 
    if(limit) url = `${url}&limit=${limit}`;
    // sortBy 
    if(sortBy) url = `${url}&sort=${sortBy}`;
    // offset 
    if(offset !== 0) url = `${url}&offset=${offset}`;

    dispatch(fetchRoutes(url));    
    setPages(Math.floor((total / limit) % 2 === 0 ? total/limit : total/limit + 1));
  }, [dispatch,
    haveFourthClass,
    haveThirdClass,
    haveSecondClass,
    haveFirstClass,
    haveWifi,
    haveExpress,
    priceFrom,
    priceTo,
    startDepartureHourFrom,
    startDepartureHourTo,
    startArrivalHourFrom,
    startArrivalHourTo,
    endDepartureHourFrom,
    endDepartureHourTo,
    endArrivalHourFrom,
    endArrivalHourTo, 
    limit,
    sortBy,
    offset,
    total
  ]);

  return (
    <Fragment>
      <section className="body-container">
        <div className="trains-header d-flex justify-content-between">
          <div className="trains-header__total">найдено {total}</div>
          <div className="trains-header__sorting d-flex">сортировать по:
            <span onClick={() => setOpen(open === true ? false : true)}>
              {sortBy === 'date' && 'времени' }
              {sortBy === 'price' && 'цене'}
              {sortBy === 'duration' && 'длительности'}
            </span>
            <ul className={`select-sorting ${open === true ? 'open' : ''}`}>
              <li onClick={() => {
                setSortBy('date');
                setOpen(false)
              }}>времени</li>
              <li onClick={() => {
                setSortBy('price');
                setOpen(false)
              }}>стоимости</li>
              <li onClick={() => {
                setSortBy('duration');
                setOpen(false)
              }}>длительности</li>
            </ul>
          </div>
          <div className="trains-header__page-quantity d-flex">показывать по:
            <span className={`select-quantity ${limit === 5 ? 'active' : ''}`} onClick={() => setLimit(5)}>5</span>
            <span className={`select-quantity ${limit === 10 ? 'active' : ''}`} onClick={() => setLimit(10)}>10</span>
            <span className={`select-quantity ${limit === 20 ? 'active' : ''}`} onClick={() => setLimit(20)}>20</span>
          </div>
        </div>
        {routes && <div className="trains-group">
          <Route/>
        </div>}
        {pages && <div className="pages-control d-flex justify-content-end text-center gap-4">
          <div className="pages-control__item arrows " onClick={() => {
            activePage > 1 && setActivePage(activePage-1) 
            activePage > 1 && setOffset(offset-limit)
          }}>
            <div className="arrow-back"></div>
          </div>
          {[...Array(pages)].map((e, i) => <span key={nanoid()} 
            className={`pages-control__item ${activePage === i+1 && 'active'}`}
            onClick={() => {
              setOffset(limit*i);
              setActivePage(i+1);
            }}>{i+1}</span>)}
          <div className="pages-control__item arrows" onClick={() => {
            activePage < pages && setActivePage(activePage+1) 
            activePage < pages && setOffset(offset+limit)
          }}>
            <div className="arrow-forward"></div>
          </div>
        </div>}
      </section>
    </Fragment>
  )
}