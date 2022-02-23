import passengerIcon from '../../images/passenger-icon.svg';
import currency from '../../images/currency.svg';
import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import Route from './Route';

export default function BodyContainerCheck() {
  const navigate = useNavigate();
  const { total, totalBack } = useSelector((store) => store.seatsSlice);

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
                <div className='check-item__passenger d-flex'>
                  <div className='d-flex flex-column passenger-icon align-items-center'>
                    <img src={passengerIcon} alt="passengerIcon"/>
                    <span>Взрослый</span>
                  </div>
                  <div className='passenger-info'>
                    <span>Мартынюк Ирина Эдуардовна</span><br/>
                    <span>Пол женский</span><br/>
                    <span>Дата рождения 17.02.1985</span><br/>
                    <span>Паспорт РФ 4204 380694</span>
                  </div>
                </div>
                <div className='check-item__passenger d-flex'>
                  <div className='d-flex flex-column passenger-icon align-items-center'>
                    <img src={passengerIcon} alt="passengerIcon"/>
                    <span>Взрослый</span>
                  </div>
                  <div className='passenger-info'>
                    <span>Мартынюк Ирина Эдуардовна</span><br/>
                    <span>Пол женский</span><br/>
                    <span>Дата рождения 17.02.1985</span><br/>
                    <span>Паспорт РФ 4204 380694</span>
                  </div>
                </div>
                <div className='check-item__passenger d-flex'>
                  <div className='d-flex flex-column passenger-icon align-items-center'>
                    <img src={passengerIcon} alt="passengerIcon"/>
                    <span>Взрослый</span>
                  </div>
                  <div className='passenger-info'>
                    <span>Мартынюк Ирина Эдуардовна</span><br/>
                    <span>Пол женский</span><br/>
                    <span>Дата рождения 17.02.1985</span><br/>
                    <span>Паспорт РФ 4204 380694</span>
                  </div>
                </div>
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
                Наличными
              </div>
              <div className='check-item__body-aside d-flex flex-column justify-content-end'>
                <button type="button" className="btn btn-light btn-change" onClick={() => {
                  navigate('/booking/passengers');
                }}>Изменить</button>
              </div>
            </div>
          </div>
        </div>

        <button 
          type="button" 
          className="btn btn-light text-uppercase btn-booking" 
          onClick={() => {
            navigate('/complete');
          }}
          >подтвердить</button>
      </section>
    </Fragment>
  )
}