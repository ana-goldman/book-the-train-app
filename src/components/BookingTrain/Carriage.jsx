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
  const { train, trainBack, coach, coachBack } = useSelector((store) => store.routeSlice);
  const { total, totalBack } = useSelector((store) => store.seatsSlice);
  const [active, setActive] = useState([]);
  const [optional, setOptional] = useState([]);
  const [coachNum, setCoachNum] = useState('');

  let chosenCoach;
  if(props.type === 'oneWay') chosenCoach = coach;
  if(props.type === 'wayBack') chosenCoach = coachBack;
  const coaches = [];
  props.type === 'oneWay' && train.map(o => o.coach.class_type === props.class ? coaches.push(o) : null);
  props.type === 'wayBack' && trainBack.forEach(o => o.coach.class_type === props.class ? coaches.push(o) : null);

  useEffect(() => {
    setCoachNum(chosenCoach.coach.name.replace( /[^\d.]*/g, ''));
  }, []);
  
  useEffect(() => {
    setActive([]);
  
    chosenCoach.coach.have_air_conditioning === true && setActive(prev => [...prev, 'aircon']);
    chosenCoach.coach.have_wifi === true && setActive(prev => [...prev, 'wifi']);
    chosenCoach.coach.is_linens_included === true && setActive(prev => [...prev, 'linens']);
  }, []);

  const top = [];
  const bottom = [];

  chosenCoach.seats.map(o => o.index % 2 === 0 ? top.push(o) : bottom.push(o));

  const handleClick = (data) => {
    if(active.includes(data)) return;
    optional.includes(data) ? setOptional(optional.filter(o => o !== data)) : 
    setOptional(prev => [...prev, data])
  }

  return (
    <Fragment>
      <div className='carriage-group__header d-flex justify-content-between'>
        <div className='d-flex select-carriage__group'>
          Вагоны
          {coaches.map(o => {
            const num = o.coach.name.replace( /[^\d.]*/g, '');
            return (
              <span key={nanoid()} className={`select-carriage ${num === coachNum && 'active-carriage'}`} 
                    onClick={() => {
                      setCoachNum(num);
                      props.type === 'oneWay' && dispatch(routeActions.setCoach(o));
                      props.type === 'wayBack' && dispatch(routeActions.setCoachBack(o));
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
              <span className='all-total'>
                {chosenCoach.coach.available_seats}
              </span>
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
              <span>{props.class !== 'first' && chosenCoach.coach.top_price}
                    {props.class === 'first' && chosenCoach.coach.price}
              </span>
              <img src={currency} alt="" />
            </div>
            {props.class !== 'first' && <div className='carriage-bottom'>
              <span>
                {chosenCoach.coach.bottom_price}
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
                   onClick={() => handleClick('aircon')}/>
              <img className={`qualities-item ${active.includes('wifi') && 'active'} ${optional.includes('wifi') && 'optional'}`} 
                   src={optional.includes('wifi') ? q21 :q2} alt='wifi'
                   onClick={() => handleClick('wifi')}/>
              <img className={`qualities-item ${active.includes('linens') && 'active'} ${optional.includes('linens') && 'optional'}`} 
                   src={optional.includes('linens') ? q31 :q3} alt='linens'
                   onClick={() => handleClick('linens')}/>
              <img className={`qualities-item ${active.includes('food') && 'active'} ${optional.includes('food') && 'optional'}`} 
                   src={optional.includes('food') ? q41 :q4} alt='food'
                   onClick={() => handleClick('food')}/>
            </div>
          </div>
        </div>
      </div>
      {props.class === 'fourth' && <CarriageFourth type={props.type}/>}
      {props.class === 'third' && <CarriageThird type={props.type}/>}
      {props.class === 'second' && <CarriageSecond type={props.type}/>}
      {props.class === 'first'&& <CarriageFirst type={props.type}/>}
      <div className='carriage__total-price text-end'>
        {props.type === 'oneWay' && total !== 0 && total}
        {props.type === 'wayBack' && totalBack !== 0 && totalBack}
        {props.type === 'oneWay' && total !== 0 &&<img src={currency} alt="" />}
        {props.type === 'wayBack' && totalBack !== 0 &&<img src={currency} alt="" />}
      </div>
    </Fragment>
  )
}
