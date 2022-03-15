import passengerIcon from '../../images/passenger-icon.svg';
import currency from '../../images/currency.svg';
import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Route from './Route';
import { nanoid } from 'nanoid';
import { postOrder } from '../../redux/orderSlice';
import { routeActions } from '../../redux/routeSlice';
import { searchActions } from '../../redux/searchSlice';
import { seatsActions } from '../../redux/seatsSlice';

export default function BodyContainerCheck() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { route } = useSelector((store) => store.routeSlice);
  const { seatsOneWay, seatsWayBack } = useSelector((store) => store.seatsSlice);
  const { total, totalBack } = useSelector((store) => store.seatsSlice);
  const { user, passengers } = useSelector((store) => store.orderSlice);
  let body;

  const seats = seatsOneWay.map(seat => {
    return {
    ...seat,
    'person_info': passengers.find(pass => passengers.indexOf(pass) === seatsOneWay.indexOf(seat))
    }
  })

  const seatsBack = seatsWayBack.map(seat => {
    return {
    ...seat,
    'person_info': passengers.find(pass => passengers.indexOf(pass) === seatsWayBack.indexOf(seat))
    }
  })
  
  seatsWayBack === [] ?
  body = {
    "user": user,
    "departure": {
      "route_direction_id": route.departure._id,
      "seats": seats
    }
  } : 
  body = {
    "user": user,
    "departure": {
      "route_direction_id": route.departure._id,
      "seats": seats
    },
    "arrival": {
      "route_direction_id": route.arrival && route.arrival._id,
      "seats": seatsBack
    }
  }

  return (
    <Fragment>
      <section className="body-container">
        <div className='check-container'>
          <div className='check-item'>
            <div className='check-item__header'>
              <span className='check-title'>Поезд</span>
            </div>
            <div className='check-item__body'>
              <Route type={'check'}/>
            </div>
          </div>
          <div className='check-item'>
            <div className='check-item__header'>
              <span className='check-title'>Пассажиры</span>
            </div>
            <div className='check-item__body d-flex'>
              <div className='check-item__body-main'>
                {passengers && passengers.map( o => {
                  return (
                    <div key={nanoid()} className='check-item__passenger d-flex'>
                      <div className='d-flex flex-column passenger-icon align-items-center'>
                        <img src={passengerIcon} alt="passengerIcon"/>
                        <span>{o.is_adult === true ? 'Взрослый' : 'Детский'}</span>
                      </div>
                      <div className='passenger-info'>
                        <span>{o.last_name + ' ' + o.first_name + ' ' + o.patronymic}</span><br/>
                        <span>Пол {o.gender === true ? 'мужской' : 'женский'}</span><br/>
                        <span>Дата рождения {o.birthday}</span><br/>
                        <span>{o.document_type + ' ' + o.document_data}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className='check-item__body-aside d-flex flex-column justify-content-end'>
                <div className="d-flex justify-content-between align-items-baseline">
                  Всего
                  <div>
                    <span className='check-price'>{total + totalBack}</span>
                    <img src={currency} alt="" />
                  </div>
                </div>
                <button type="button" className="btn btn-light btn-change" onClick={() => {
                  navigate('/booking/passengers');
                }}>Изменить</button>
              </div>
            </div>
          </div>

          <div className='check-item'>
            <div className='check-item__header'>
              <span className='check-title'>Способ оплаты</span>
            </div>
            <div className='check-item__body d-flex'>
              <div className='check-item__body-main check-payment-method'>
                {user.payment_method === 'cash' ? 'Наличными' : 'Онлайн'}
              </div>
              <div className='check-item__body-aside d-flex flex-column justify-content-end'>
                <button type="button" className="btn btn-light btn-change" onClick={() => {
                  navigate('/booking/payment');
                }}>Изменить</button>
              </div>
            </div>
          </div>
        </div>

        <button 
          type="button" 
          className="btn text-uppercase btn-booking" 
          onClick={() => {
            dispatch(postOrder(body))
            dispatch(routeActions.reset());
            dispatch(searchActions.reset());
            dispatch(seatsActions.reset());
            navigate('/complete');
          }}
          >подтвердить</button>
      </section>
    </Fragment>
  )
}