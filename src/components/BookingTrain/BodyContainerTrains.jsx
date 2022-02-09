import wayArrow from '../../images/way-arrow.svg';
import wayClock from '../../images/way-clock.svg';
import wayTrain from '../../images/way-train.svg';
import fourthClass from '../../images/carriage-sidyachii.svg';
import thirdClass from '../../images/carriage-platckart.svg';
import secondClass from '../../images/carriage-kupe.svg';
import firstClass from '../../images/carriage-lux.svg';
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
import { dateConverter, toWordsTime } from '../common/timeConverters';
import { useSelector } from "react-redux";

export default function BodyContainerTrains() {
  const [open, setOpen] = useState('');
  const [active, setActive] = useState([]);
  const { route } = useSelector((store) => store.routeSlice);

  return (
    <Fragment>
      <section className="body-container">{console.log(route)}
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
              <div className={`carriage-type d-flex flex-column align-items-center ${open === 'Сидячий' && 'active'}`}
                   onClick={() => setOpen('Сидячий')}>
                <img src={fourthClass} alt="" />
                <span>Сидячий</span>
              </div>
              <div className={`carriage-type d-flex flex-column align-items-center ${open === 'Плацкарт' && 'active'}`}
                   onClick={() => setOpen('Плацкарт')}>
                <img src={thirdClass} alt="" />
                <span>Плацкарт</span>
              </div>
              <div className={`carriage-type d-flex flex-column align-items-center ${open === 'Купе' && 'active'}`}
                   onClick={() => setOpen('Купе')}>
                <img src={secondClass} alt="" />
                <span>Купе</span>
              </div>
              <div className={`carriage-type d-flex flex-column align-items-center ${open === 'Люкс' && 'active'}`}
                   onClick={() => setOpen('Люкс')}>
                <img src={firstClass} alt="" />
                <span>Люкс</span>
              </div>
            </div>
          </div>
          <div className='carriage-group'>
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
                  <div className='carriage-seats'>
                    <span >Места </span>
                    <span className='seats-total'>21</span>
                  </div>
                  <div className='carriage-top'>
                    <span >Верхние </span>
                    <span className='top-total'>10</span>
                  </div>
                  <div className='carriage-bottom'>
                    <span >Нижние </span>
                    <span className='top-total'>11</span>
                  </div>
                </div>
              </div>
              <div className='selected-carriage__price'>
                <div className='selected-carriage__item d-flex flex-column'>
                  <div className='carriage-price'>
                    <span >Стоимость </span>
                  </div>
                  <div className='carriage-top'>
                    <span >2 020 </span>
                    <img src={currency} alt="" />
                  </div>
                  <div className='carriage-bottom'>
                    <span >3 030 </span>
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
            <div className='carriage-group__train'>
              <div className='carriage-tip'>13 человек выбирают места в этом поезде</div>
              <div className='carriage-train'>
                <div className='carriage-seats'></div>
              </div>
              <div className='carriage-price'></div>
            </div>
          </div>
        </div>
        <div className='way-back-group'></div>
        <button type="button" className="btn btn-light text-uppercase btn-next">далее</button>
       
      </section>
    </Fragment>
  )
}