import wayArrow from '../../images/way-arrow.svg';
import wayClock from '../../images/way-clock.svg';
import wayTrain from '../../images/way-train.svg';
import fourthClass from '../../images/carriage-sidyachii.svg';
import thirdClass from '../../images/carriage-platckart.svg';
import secondClass from '../../images/carriage-kupe.svg';
import firstClass from '../../images/carriage-lux.svg';
import { useState, useEffect, Fragment } from 'react';
import { dateConverter, toWordsTime } from '../common/timeConverters';
import { useSelector, useDispatch } from "react-redux";
import { fetchTrain } from '../../redux/routeSlice';
import Carriage from './Carriage';

export default function BodyContainerTrains() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState('');
  const { route, train } = useSelector((store) => store.routeSlice);

  useEffect(() => { 
    dispatch(fetchTrain(`${process.env.REACT_APP_BASE_URL}routes/${route.departure._id}/seats`));
  }, [dispatch, route.departure._id]);

  return (
    <Fragment>
      <section className="body-container">{console.log(train)}
        <h3 className='text-uppercase'>Выбор мест</h3>
        <div className='one-way-group'>
          <div className='way__go-back one-way__go-back'>
            <img src={wayArrow} alt="" />
            <button type="button" className="btn btn-light btn-back">Выбрать другой поезд</button>
          </div>
          <div className='way__route d-flex justify-content-between align-items-center'>
            <div className='d-flex align-items-center'>
              <img src={wayTrain} alt="" />
              <div>
                <div className="item__short-info__number">{route.departure.train.name}</div>
                <div className="item__short-info__direction">
                  <span className='direction-from text-capitalize'>{route.departure.from.city.name} &#x2192;<br/></span>
                  <span className='direction-to text-capitalize'>{route.departure.to.city.name}</span>
                </div>
              </div>
            </div>
            <div className="item__body__from">
              <div className="item__body__from__time">{dateConverter(route.departure.from.datetime)}</div>
              <div className="item__body__from__city text-capitalize">{route.departure.from.city.name}</div>
              <div className="item__body__from__station">{route.departure.from.railway_station_name}</div>
            </div>
            <div className="item__body__direction">
              <div className="item__body__direction__arrow"></div>
            </div>
            <div className="item__body__to">
              <div className="item__body__to__time">{dateConverter(route.departure.to.datetime)}</div>
              <div className="item__body__to__city text-capitalize">{route.departure.to.city.name}</div>
              <div className="item__body__to__station">{route.departure.to.railway_station_name}</div>
            </div>
            <div className='d-flex'>
              <img src={wayClock} alt="" />
              <div className='route-time'>{toWordsTime(route.departure.duration)}</div>
            </div>
          </div>
          <div className='way__quantity'>
            <h4>Количество билетов</h4>
            <div className='d-flex'>
              <div className='quantity-item item-first'>
                <div className='quantity-item__input-group d-flex'>
                  <p>Взрослых — </p>
                  <input type="text" />
                </div>
                <p className='input-group__text'>Можно добавить еще 3 пассажиров </p>
              </div>
              <div className='quantity-item item-second'>
                <div className='quantity-item__input-group d-flex'>
                  <p>Детских — </p>
                  <input type="text" />
                </div>
                <p className='input-group__text'>Можно добавить еще 3 детей до 10 лет.Свое место в вагоне, как у взрослых, но дешевле в среднем на 50-65%</p>
              </div>
              <div className='quantity-item item-third'>
                <div className='quantity-item__input-group d-flex'>
                  <p>Детских «без места» — </p>
                  <input type="text" />
                </div>
              </div>
            </div>
          </div>
          <div className='way__carriage-type'>
            <h4>Тип вагона</h4>
            <div className='d-flex justify-content-evenly'>
              <div className={`carriage-type d-flex flex-column align-items-center ${open === 'fourth' && 'active'}`}
                   onClick={() => setOpen('fourth')}>
                <img src={fourthClass} alt="" />
                <span>Сидячий</span>
              </div>
              <div className={`carriage-type d-flex flex-column align-items-center ${open === 'third' && 'active'}`}
                   onClick={() => setOpen('third')}>
                <img src={thirdClass} alt="" />
                <span>Плацкарт</span>
              </div>
              <div className={`carriage-type d-flex flex-column align-items-center ${open === 'second' && 'active'}`}
                   onClick={() => setOpen('second')}>
                <img src={secondClass} alt="" />
                <span>Купе</span>
              </div>
              <div className={`carriage-type d-flex flex-column align-items-center ${open === 'first' && 'active'}`}
                   onClick={() => setOpen('first')}>
                <img src={firstClass} alt="" />
                <span>Люкс</span>
              </div>
            </div>
          </div>
          <div className='carriage-group'>
            {open && <Carriage class={open}/>}
          </div>
        </div>
        <div className='way-back-group'></div>
        <button type="button" className="btn btn-light text-uppercase btn-next">далее</button>
       
      </section>
    </Fragment>
  )
}