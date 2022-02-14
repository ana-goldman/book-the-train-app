import trainIncludes from '../../images/train-includes.svg';
import currency from '../../images/currency.svg';
import { Fragment } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { dateConverter, secConverter } from '../common/timeConverters';
import { routeActions } from '../../redux/routeSlice';

export default function Route() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { routes } = useSelector((store) => store.searchSlice);

  return (
    <Fragment>
      {routes.map( o => {
        return (
          <div className="trains-group__item d-flex" key={o.departure._id}>
            <div className="item__short-info d-flex flex-column align-items-center justify-content-evenly">
              <div className="item__short-info__logo"></div>
              <div className="item__short-info__number">{o.departure.train.name}</div>
              <div className="item__short-info__direction">
                <span className='direction-from text-capitalize'>{o.departure.from.city.name} &#x2192;<br/></span>
                <span className='direction-to text-capitalize'>{o.departure.to.city.name}</span>
              </div>
            </div>
            <div className="item__body">
              <div className="item__body__one-way d-flex justify-content-between">
                <div className="item__body__from">
                  <div className="item__body__from__time">{dateConverter(o.departure.from.datetime)}</div>
                  <div className="item__body__from__city text-capitalize">{o.departure.from.city.name}</div>
                  <div className="item__body__from__station">{o.departure.from.railway_station_name}</div>
                </div>
                <div className="item__body__direction">
                  <div className="item__body__direction__time">{secConverter(o.departure.duration)}</div>
                  <div className="item__body__direction__arrow"></div>
                </div>
                <div className="item__body__to">
                  <div className="item__body__to__time">{dateConverter(o.departure.to.datetime)}</div>
                  <div className="item__body__to__city text-capitalize">{o.departure.to.city.name}</div>
                  <div className="item__body__to__station">{o.departure.to.railway_station_name}</div>
                </div>
              </div>
              {o.arrival && <div className="item__body__way-back d-flex justify-content-between">
                <div className="item__body__from">
                  <div className="item__body__from__time">{dateConverter(o.arrival.from.datetime)}</div>
                  <div className="item__body__from__city text-capitalize">{o.arrival.from.city.name}</div>
                  <div className="item__body__from__station">{o.arrival.from.railway_station_name}</div>
                </div>
                <div className="item__body__direction">
                  <div className="item__body__direction__time">{secConverter(o.arrival.duration)}</div>
                  <div className="item__body__direction__arrow-back"></div>
                </div>
                <div className="item__body__to">
                  <div className="item__body__to__time">{dateConverter(o.arrival.to.datetime)}</div>
                  <div className="item__body__to__city text-capitalize">{o.arrival.to.city.name}</div>
                  <div className="item__body__to__station">{o.arrival.to.railway_station_name}</div>
                </div>
              </div>}
            </div>
            <div className="item__options-info d-flex flex-column justify-content-between">
              <div className="item__options-info__carriages">
                {o.departure.have_fourth_class && <div className="item__options-info__carriage d-flex align-items-end">
                  <span className="carriage__type">Сидячий</span>
                  <div className="carriage__available">
                    {o.departure.available_seats_info.fourth}
                    <ul className='available-breakdown'>
                      <li className='d-flex justify-content-between align-items-center'>верхние
                        <div className="carriage__price">
                          <span>{o.departure.price_info.fourth.top_price}</span>
                          <img src={currency} alt="rub"/>
                        </div>
                      </li>
                      <li className='d-flex justify-content-between align-items-center'>нижние
                        <div className="carriage__price">
                          <span>{o.departure.price_info.fourth.bottom_price}</span>
                          <img src={currency} alt="rub"/>
                        </div>
                      </li>
                    </ul>
                    </div>
                  <div className="carriage__price">от
                    <span>{o.departure.price_info.fourth.top_price}</span>
                    <img src={currency} alt="rub"/>
                  </div>
                </div>}
                {o.departure.have_third_class && <div className="item__options-info__carriage d-flex align-items-end">
                  <span className="carriage__type">Плацкарт</span>
                  <div className="carriage__available">
                    {o.departure.available_seats_info.third}
                    <ul className='available-breakdown'>
                      <li className='d-flex justify-content-between align-items-center'>верхние
                        <div className="carriage__price">
                          <span>{o.departure.price_info.third.top_price}</span>
                          <img src={currency} alt="rub"/>
                        </div>
                      </li>
                      <li className='d-flex justify-content-between align-items-center'>нижние
                        <div className="carriage__price">
                          <span>{o.departure.price_info.third.bottom_price}</span>
                          <img src={currency} alt="rub"/>
                        </div>
                      </li>
                      <li className='d-flex justify-content-between align-items-center'>боковое
                        <div className="carriage__price">
                          <span>{o.departure.price_info.third.side_price}</span>
                          <img src={currency} alt="rub"/>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="carriage__price">от
                    <span>{o.departure.price_info.third.top_price}</span>
                    <img src={currency} alt="rub"/>
                  </div>
                </div>}
                {o.departure.have_second_class && <div className="item__options-info__carriage d-flex align-items-end">
                  <span className="carriage__type">Купе</span>
                  <div className="carriage__available">
                    {o.departure.available_seats_info.second}
                    <ul className='available-breakdown'>
                      <li className='d-flex justify-content-between align-items-center'>верхние
                        <div className="carriage__price">
                          <span>{o.departure.price_info.second.top_price}</span>
                          <img src={currency} alt="rub"/>
                        </div>
                      </li>
                      <li className='d-flex justify-content-between align-items-center'>нижние
                        <div className="carriage__price">
                          <span>{o.departure.price_info.second.bottom_price}</span>
                          <img src={currency} alt="rub"/>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="carriage__price">от
                    <span>{o.departure.price_info.second.top_price}</span>
                    <img src={currency} alt="rub"/>
                  </div>
                </div>}
                {o.departure.have_first_class && <div className="item__options-info__carriage d-flex align-items-end">
                  <span className="carriage__type">Люкс</span>
                  <div className="carriage__available">
                    {o.departure.available_seats_info.first}
                    <ul className='available-breakdown'>
                      <li className='d-flex justify-content-between align-items-center'>верхние
                        <div className="carriage__price">
                          <span>{o.departure.price_info.first.top_price}</span>
                          <img src={currency} alt="rub"/>
                        </div>
                      </li>
                      <li className='d-flex justify-content-between align-items-center'>нижние
                        <div className="carriage__price">
                          <span>{o.departure.price_info.first.bottom_price}</span>
                          <img src={currency} alt="rub"/>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="carriage__price">от
                    <span>{o.departure.price_info.first.price}</span>
                    <img src={currency} alt="rub"/>
                  </div>
                </div>}
              </div>
              <div className="item__options-info__quality d-flex justify-content-end">
                <img src={trainIncludes} alt="" />
              </div>
              <button type="button" className="btn btn-light" onClick={() => {
                dispatch(routeActions.setRoute(o));
                navigate('/booking/route');
              }}>Выбрать места</button>
            </div>
          </div>
        )
      })}
    </Fragment>
  )
}