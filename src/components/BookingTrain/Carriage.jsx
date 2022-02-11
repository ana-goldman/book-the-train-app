import currency from '../../images/currency.svg';
import q1 from '../../images/q1.svg';
import q2 from '../../images/q2.svg';
import q3 from '../../images/q3.svg';
import q4 from '../../images/q4.svg';
import q11 from '../../images/q1-1.svg';
import q21 from '../../images/q2-1.svg';
import q31 from '../../images/q3-1.svg';
import q41 from '../../images/q4-1.svg';

import { useState, Fragment } from 'react';
import { useSelector } from "react-redux";

import CarriageFourth from './CarriageFourth';
import CarriageThird from './CarriageThird';
import CarriageSecond from './CarriageSecond';
import CarriageFirst from './CarriageFirst';

export default function Carriage(props) {
  const [active, setActive] = useState([]);
  const { route, train } = useSelector((store) => store.routeSlice);
  
  return (
    <Fragment>
      <div className='carriage-group__header d-flex justify-content-between'>
        <div className='d-flex select-carriage__group'>
          Вагоны
          <span className='select-carriage'>10</span>
          <span className='select-carriage'>12</span>
          <span className='select-carriage'>15</span>
        </div>
        <span>Нумерация вагонов начинается с головы поезда</span>
      </div>
      <div className='carriage-group__body d-flex justify-content-between'>
        <div className='selected-carriage__item-colored text-center'>
          <span className='number__zoom'>12</span><br/>
          <span>вагон</span>
        </div>
        <div className='selected-carriage__seats'>
          <div className='selected-carriage__item d-flex flex-column'>
            <div className='carriage-all'>
              <span >Места </span>
              <span className='all-total'>
                {props.class === 'fourth' && route.available_seats_info.fourth}
                {props.class === 'third' && route.available_seats_info.third}
                {props.class === 'second' && route.available_seats_info.second}
                {props.class === 'first' && route.available_seats_info.first}
              </span>
            </div>
            <div className='carriage-top'>
              <span >Верхние </span>
              <span className='top-total'>??</span>
            </div>
            <div className='carriage-bottom'>
              <span >Нижние </span>
              <span className='top-total'>??</span>
            </div>
          </div>
        </div>
        <div className='selected-carriage__price'>
          <div className='selected-carriage__item d-flex flex-column'>
            <div className='carriage-price'>
              <span >Стоимость </span>
            </div>
            <div className='carriage-top'>
              <span>{props.class === 'fourth' && route.departure.price_info.fourth.top_price}
                    {props.class === 'third' && route.departure.price_info.third.top_price}
                    {props.class === 'second' && route.departure.price_info.second.top_price}
                    {/* {props.class === 'first' && route.departure.price_info.first.price} */}
              </span>
              <img src={currency} alt="" />
            </div>
            <div className='carriage-bottom'>
              <span>{props.class === 'fourth' && route.departure.price_info.fourth.bottom_price}
                    {props.class === 'third' && route.departure.price_info.third.bottom_price}
                    {props.class === 'second' && route.departure.price_info.second.bottom_price}
                    {/* {props.class === 'first' && route.departure.price_info.first.price} */}
              </span>
              <img src={currency} alt="" />
            </div>
          </div>
        </div>
        <div className='selected-carriage__qualities'>
          <div className='selected-carriage__item d-flex flex-column'>
            <div className='carriage-qualities'>
              <span >Обслуживание </span>
              <span className='qualities-name'>ФПК </span>
            </div>
            <div className='qualities-range d-flex justify-content-between'>
              <img className={`qualities-item ${active.includes(1) && 'active'}`} 
                   src={active.includes(1) ? q11 :q1} alt=""
                   onClick={() => active.includes(1) ? setActive(active.filter(o => o !== 1)) : setActive(prev => [...prev, 1])}/>
              <img className={`qualities-item ${active.includes(2) && 'active'}`} 
                   src={active.includes(2) ? q21 :q2} alt=""
                   onClick={() => active.includes(2) ? setActive(active.filter(o => o !== 2)) : setActive(prev => [...prev, 2])}/>
              <img className={`qualities-item ${active.includes(3) && 'active'}`} 
                   src={active.includes(3) ? q31 :q3} alt=""
                   onClick={() => active.includes(3) ? setActive(active.filter(o => o !== 3)) : setActive(prev => [...prev, 3])}/>
              <img className={`qualities-item ${active.includes(4) && 'active'}`} 
                   src={active.includes(4) ? q41 :q4} alt=""
                   onClick={() => active.includes(4) ? setActive(active.filter(o => o !== 4)) : setActive(prev => [...prev, 4])}/>
            </div>
          </div>
        </div>
      </div>
      {props.class === 'fourth' && <CarriageFourth/>}
      {props.class === 'third' && <CarriageThird/>}
      {props.class === 'second' && <CarriageSecond/>}
      {props.class === 'first' && <CarriageFirst/>}
    </Fragment>
  )
}
