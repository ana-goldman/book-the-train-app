import arrowThere from '../../images/arrow-there.svg';
import arrowBack from '../../images/arrow-back.svg';
import passenger from '../../images/passenger.svg';
import currency from '../../images/currency.svg';
import { useState } from 'react';
import { useSelector } from "react-redux";
import { dateConverter, getDate, formatDate, secConverter } from '../common/timeConverters';

export default function Details() {
  const [openThere, setOpenThere] = useState(false);
  const [openBack, setOpenBack] = useState(false);
  const [openPass, setOpenPass] = useState(false);
  const { dateThere, dateBack } = useSelector((store) => store.searchSlice);
  const { total, totalBack } = useSelector((store) => store.seatsSlice);
  const { route, train, trainBack, coach, coachBack } = useSelector((store) => store.routeSlice);

  return (
    <div className='details__wrap'>{console.log(route)}
      <h3 className='details__title text-uppercase'>Детали поездки</h3>
      <div className="details__item d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <img src={arrowThere} alt=""/>
            <span className="details__item-name">Туда</span>
          </div>
          <span className='details__date'>{formatDate(dateThere)}</span>
          <div className={`drop-down-toggle ${openThere && 'open'}`} onClick={() => setOpenThere(openThere === false ? true : false)}></div>
        </div>
        <div className={`details__drop-down ${openThere && 'show'}`}>
          <div className='d-flex justify-content-between'>
            <span>№ Поезда</span>
            <span className='drop-down__number'>{route.departure.train.name}</span>
          </div>
          <div className='d-flex justify-content-between'>
            <span>Название</span>
            <span className='drop-down__name text-capitalize text-end'>{route.departure.from.city.name}<br/>{route.departure.to.city.name}</span>
          </div>
          <div className='drop-down__time d-flex justify-content-between'>
            <div className='d-flex flex-column'>
              <span className='drop-down__time-time text-capitalize'>{dateConverter(route.departure.from.datetime)}</span>
              <span className='drop-down__time-date drop-down__station-name'>{getDate(route.departure.from.datetime)}</span>
            </div>
            <div className='d-flex flex-column'>
              <div className="item__body__direction__time">{secConverter(route.departure.duration)}</div>
              <div className="item__body__direction__arrow"></div>
            </div>
            <div className='d-flex flex-column'>
              <span className='drop-down__time-time text-capitalize text-end'>{dateConverter(route.departure.to.datetime)}</span>
              <span className='drop-down__time-date drop-down__station-name text-end'>{getDate(route.departure.to.datetime)}</span>
            </div>
          </div>
          <div className='d-flex justify-content-between'>
            <div className='d-flex flex-column'>
              <span className='text-capitalize'>{route.departure.from.city.name}</span>
              <span className='drop-down__station-name'>{route.departure.from.railway_station_name}</span>
            </div>
            <div className='d-flex flex-column'>
              <span className='text-capitalize text-end'>{route.departure.to.city.name}</span>
              <span className='drop-down__station-name text-end'>{route.departure.to.railway_station_name}</span>
            </div>
          </div>
        </div>
      </div>

      {route.arrival && <div className="details__item d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <img src={arrowBack} alt=""/>
            <span className="details__item-name">Обратно</span>
          </div>
          <span className='details__date'>{formatDate(dateBack)}</span>
          <div className={`drop-down-toggle ${openBack && 'open'}`} onClick={() => setOpenBack(openBack === false ? true : false)}></div>
        </div>
        <div className={`details__drop-down ${openBack && 'show'}`}>
          <div className='d-flex justify-content-between'>
            <span>№ Поезда</span>
            <span className='drop-down__number'>{route.arrival.train.name}</span>
          </div>
          <div className='d-flex justify-content-between'>
            <span>Название</span>
            <span className='drop-down__name text-capitalize text-end'>{route.arrival.from.city.name}<br/>{route.arrival.to.city.name}</span>
          </div>
          <div className='drop-down__time d-flex justify-content-between'>
            <div className='d-flex flex-column'>
              <span className='drop-down__time-time text-capitalize'>{dateConverter(route.arrival.from.datetime)}</span>
              <span className='drop-down__time-date drop-down__station-name'>{getDate(route.arrival.from.datetime)}</span>
            </div>
            <div className='d-flex flex-column'>
              <div className="item__body__direction__time">{secConverter(route.arrival.duration)}</div>
              <div className="item__body__direction__arrow"></div>
            </div>
            <div className='d-flex flex-column'>
              <span className='drop-down__time-time text-capitalize text-end'>{dateConverter(route.arrival.to.datetime)}</span>
              <span className='drop-down__time-date drop-down__station-name text-end'>{getDate(route.arrival.to.datetime)}</span>
            </div>
          </div>
          <div className='d-flex justify-content-between'>
            <div className='d-flex flex-column'>
              <span className='text-capitalize'>{route.arrival.from.city.name}</span>
              <span className='drop-down__station-name'>{route.arrival.from.railway_station_name}</span>
            </div>
            <div className='d-flex flex-column'>
              <span className='text-capitalize text-end'>{route.arrival.to.city.name}</span>
              <span className='drop-down__station-name text-end'>{route.arrival.to.railway_station_name}</span>
            </div>
          </div>
        </div>
      </div>}

      <div className="details__item d-flex flex-column">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <img src={passenger} alt=""/>
            <span className="details__item-name">Пассажиры</span>
          </div>
          <div className={`drop-down-toggle ${openPass && 'open'}`} onClick={() => setOpenPass(openPass === false ? true : false)}></div>
        </div>
        <div className={`details__drop-down ${openPass && 'show'}`}>
          <div className='d-flex justify-content-between'>
            <span>2 Взрослых</span>
            <div>
              <span className='drop-down__total'>5 840</span>
              <img src={currency} alt="" />
            </div>
          </div>
          <div className='d-flex justify-content-between'>
            <span>1 Ребенок</span>
            <div>
              <span className='drop-down__total'>1 920</span>
              <img src={currency} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="details__footer d-flex flex-column">
        <div className="d-flex justify-content-between align-items-baseline">
          ИТОГ
          <div>
            <span className='details__footer-price'>{total + totalBack}</span>
            <img src={currency} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}