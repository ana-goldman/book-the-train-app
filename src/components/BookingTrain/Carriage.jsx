import currency from '../../images/currency.svg';
import q1 from '../../images/q1.svg';
import q2 from '../../images/q2.svg';
import q3 from '../../images/q3.svg';
import q4 from '../../images/q4.svg';
import q11 from '../../images/q1-1.svg';
import q21 from '../../images/q2-1.svg';
import q31 from '../../images/q3-1.svg';
import q41 from '../../images/q4-1.svg';

import { useState, useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { routeActions } from '../../redux/routeSlice';
import { nanoid } from 'nanoid';

import CarriageFourth from './CarriageFourth';
import CarriageThird from './CarriageThird';
import CarriageSecond from './CarriageSecond';
import CarriageFirst from './CarriageFirst';

export default function Carriage(props) {
  const dispatch = useDispatch();
  const { train, coach } = useSelector((store) => store.routeSlice);
  const { total } = useSelector((store) => store.orderSlice);
  const [active, setActive] = useState([]);
  const [optional, setOptional] = useState([]);
  const [coachNum, setCoachNum] = useState('');

  const coachArr = [];
  train.forEach(o => o.coach.class_type === props.class ? coachArr.push(o) : null);

  useEffect(() => {
    dispatch(routeActions.setCoach(coachArr[0]));
    setCoachNum(coachArr[0].coach.name.replace( /[^\d.]*/g, ''));
  }, []);
  
  useEffect(() => {
    coach.coach.have_air_conditioning === true && setActive(prev => [...prev, 'aircon']);
    coach.coach.have_wifi === true && setActive(prev => [...prev, 'wifi']);
    coach.coach.is_linens_included === true && setActive(prev => [...prev, 'linens']);
  }, [coach]);

  const top = [];
  const bottom = [];

  coach.seats.map(o => o.index % 2 === 0 ? top.push(o) : bottom.push(o));

  return (
    <Fragment>{console.log(coach)}
      <div className='carriage-group__header d-flex justify-content-between'>
        <div className='d-flex select-carriage__group'>
          Вагоны
          {coachArr.map(o => {
            const num = o.coach.name.replace( /[^\d.]*/g, '');
            return (<span key={nanoid()} className={`select-carriage ${num === coachNum && 'active-carriage'}`} 
                          onClick={() => {
                            setCoachNum(num);
                            dispatch(routeActions.setCoach(o));
                          }}>{num}</span>)
          })}
        </div>
        <span>Нумерация вагонов начинается с головы поезда</span>
      </div>
      <div className='carriage-group__body d-flex justify-content-between'>
        <div className='selected-carriage__item-colored text-center'>
          <span className='number__zoom'>{coachNum}</span><br/>
          <span>вагон</span>
        </div>
        <div className='selected-carriage__seats'>
          <div className='selected-carriage__item d-flex flex-column'>
            <div className='carriage-all'>
              <span >Места </span>
              <span className='all-total'>{coach.coach.available_seats}</span>
            </div>
           {(props.class === 'third' || props.class === 'second') && <div className='carriage-top'>
              <span >Верхние </span>
              <span className='top-total'>{top && top.length}</span>
            </div>}
            {(props.class === 'third' || props.class === 'second') && <div className='carriage-bottom'>
              <span >Нижние </span>
              <span className='top-total'>{bottom && bottom.length}</span>
            </div>}
          </div>
        </div>
        <div className='selected-carriage__price'>
          <div className='selected-carriage__item d-flex flex-column'>
            <div className='carriage-price'>
              <span >Стоимость </span>
            </div>
            <div className='carriage-top'>
              <span>{props.class !== 'first' && coach.coach.top_price}
                    {props.class === 'first' && coach.coach.price}
              </span>
              <img src={currency} alt="" />
            </div>
            {props.class !== 'first' && <div className='carriage-bottom'>
              <span>{coach.coach.bottom_price}
              </span>
              <img src={currency} alt="" />
            </div>}
          </div>
        </div>
        <div className='selected-carriage__qualities'>
          <div className='selected-carriage__item d-flex flex-column'>
            <div className='carriage-qualities'>
              <span >Обслуживание </span>
              <span className='qualities-name'>ФПК </span>
            </div>
            <div className='qualities-range d-flex justify-content-between'>
              <img className={`qualities-item ${active.includes('aircon') && 'active'} ${optional.includes('aircon') && 'optional'}`} 
                   src={optional.includes('aircon') ? q11 :q1} alt='aircon'
                   onClick={() => 
                    active.includes('aircon') ? null : 
                    (optional.includes('aircon') ? setOptional(optional.filter(o => o !== 'aircon')) : 
                    setOptional(prev => [...prev, 'aircon'])
                    )}/>
              <img className={`qualities-item ${active.includes('wifi') && 'active'} ${optional.includes('wifi') && 'optional'}`} 
                   src={optional.includes('wifi') ? q21 :q2} alt='wifi'
                   onClick={() => 
                    active.includes('wifi') ? null : 
                    (optional.includes('wifi') ? setOptional(optional.filter(o => o !== 'wifi')) : 
                    setOptional(prev => [...prev, 'wifi'])
                    )}/>
              <img className={`qualities-item ${active.includes('linens') && 'active'} ${optional.includes('linens') && 'optional'}`} 
                   src={optional.includes('linens') ? q31 :q3} alt='linens'
                   onClick={() => 
                    active.includes('linens') ? null : 
                    (optional.includes('linens') ? setOptional(optional.filter(o => o !== 'linens')) : 
                    setOptional(prev => [...prev, 'linens'])
                    )}/>
              <img className={`qualities-item ${active.includes('food') && 'active'} ${optional.includes('food') && 'optional'}`} 
                   src={optional.includes('food') ? q41 :q4} alt='food'
                   onClick={() => 
                    active.includes('food') ? null : 
                    (optional.includes('food') ? setOptional(optional.filter(o => o !== 'food')) : 
                    setOptional(prev => [...prev, 'food'])
                    )}/>
            </div>
          </div>
        </div>
      </div>
      {props.class === 'fourth' && <CarriageFourth/>}
      {props.class === 'third' && <CarriageThird/>}
      {props.class === 'second' && <CarriageSecond/>}
      {props.class === 'first' && <CarriageFirst/>}
      <div className='carriage__total-price text-end'>
        {total}
        <img src={currency} alt="" />
      </div>
    </Fragment>
  )
}
