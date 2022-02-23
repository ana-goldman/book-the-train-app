import { useState, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BodyContainerPassengers() {
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(true);
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    patronymic: '',
    phone: '',
    email: '',
    payment_method: ''
  });

  return (
    <Fragment>
      <section className="body-container">
        <div className='payment-container'>
          <div className='payment-container__header d-flex justify-content-between'>
            <div className='payment-container__header-title d-flex align-items-center'>
              <span className='payment-title'>Персональные данные</span>
            </div>
          </div>
          <form className='payment-container__body'>
            <div className='payment-body__info d-flex flex-column'>
              <div className='payment__main-info d-flex justify-content-between'>
                <div className='main-info__item'>
                  <label htmlFor="last-name" className="form-label">Фамилия</label>
                  <input className="form-control" id="last-name" placeholder="" value={user.last_name} onChange={(e) => setUser({...user,  last_name: e.target.value})} required/>
                </div>
                <div className='main-info__item'>
                  <label htmlFor="first-name" className="form-label">Имя</label>
                  <input className="form-control" id="first-name" placeholder="" value={user.first_name} onChange={(e) => setUser({...user,  first_name: e.target.value})} required/>
                </div>
                <div className='main-info__item'>
                  <label htmlFor="patronymic" className="form-label">Отчество</label>
                  <input className="form-control" id="patronymic" placeholder="" value={user.patronymic} onChange={(e) => setUser({...user,  patronymic: e.target.value})}/>
                </div>
              </div>
              <div className='payment__side-info'>
                <div className='contacts__item'>
                  <label htmlFor="phone" className="form-label">Контактный телефон</label>
                  <input className="form-control" id="phone" type="tel" maxLength={4} placeholder="+7 ___ ___ __ __" required/>
                </div>
                <div className='contacts__item'>
                  <label htmlFor="email" className="form-label">E-mail</label>
                  <input className="form-control" id="email" type="email" placeholder="inbox@gmail.ru" required/>
                </div>
              </div>
            </div>
          </form>
          <div className='payment-container__header d-flex justify-content-between'>
            <div className='payment-container__header-title d-flex align-items-center'>
              <span className='payment-title'>Способ оплаты</span>
            </div>
          </div>
          <div className='payment-container__body'>
            <div className='payment-body__item d-flex flex-column'>
              <div className="payment form-check">
                <input className="form-check-input" type="checkbox" value="online" id="online"/>
                <label className="form-check-label" htmlFor="online">Онлайн</label>
              </div>
              <div className='payment-online d-flex'>
                <span>Банковской картой</span>
                <span>PayPal</span>
                <span>Visa QIWI Wallet</span>
              </div>
            </div>
            <div className='payment-body__item d-flex flex-column'>
              <div className="payment form-check">
                <input className="form-check-input" type="checkbox" value="cash" id="cash"/>
                <label className="form-check-label" htmlFor="cash">Наличными</label>
              </div>
            </div>
          </div>
        </div>

        <button 
          type="button" 
          className="btn btn-light text-uppercase btn-booking" 
          onClick={() => {
            navigate('/booking/check');
          }}
          // disabled={disabled}
          >КУПИТЬ БИЛЕТЫ</button>
      </section>
    </Fragment>
  )
}