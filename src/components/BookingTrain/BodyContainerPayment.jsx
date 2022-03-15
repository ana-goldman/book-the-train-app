import { useState, useEffect, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { orderActions } from '../../redux/orderSlice';

export default function BodyContainerPassengers() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.orderSlice);
  const [disabled, setDisabled] = useState(true);
  const [firstName, setFirstName] = useState((user && user.first_name) || '');
  const [lastName, setLastName] = useState((user && user.last_name) || '');
  const [patronymic, setPatronymic] = useState((user && user.patronymic) || '');
  const [phone, setPhone] = useState((user && user.phone) || '');
  const [email, setEmail] = useState((user && user.email) || '');
  const [paymentMethod, setPaymentMethod] = useState((user && user.payment_method) || '');

  useEffect(() => {
    if (firstName && lastName && phone && email && paymentMethod) setDisabled(false); 
    else setDisabled(true);
  }, [email, firstName, lastName, paymentMethod, phone])

  const newUser = {
    first_name: firstName,
    last_name: lastName,
    patronymic: patronymic,
    phone: phone,
    email: email,
    payment_method: paymentMethod
  }

  const handleCheck = (e) => {
    e.preventDefault();
    dispatch(orderActions.setUser(newUser)); 
    navigate('/booking/check');
  }

  return (
    <Fragment>
      <section className="body-container">
        <form className='payment-container' onSubmit={handleCheck}>
          <div className='payment-container__header d-flex justify-content-between'>
            <div className='payment-container__header-title d-flex align-items-center'>
              <span className='payment-title'>Персональные данные</span>
            </div>
          </div>
          <div className='payment-container__body'>
            <div className='payment-body__info d-flex flex-column'>
              <div className='payment__main-info d-flex justify-content-between'>
                <div className='main-info__item'>
                  <label htmlFor="last-name" className="form-label">Фамилия</label>
                  <input className="form-control" id="last-name" placeholder="" value={lastName} onChange={(e) => setLastName(e.target.value)} required/>
                </div>
                <div className='main-info__item'>
                  <label htmlFor="first-name" className="form-label">Имя</label>
                  <input className="form-control" id="first-name" placeholder="" value={firstName} onChange={(e) => setFirstName(e.target.value)} required/>
                </div>
                <div className='main-info__item'>
                  <label htmlFor="patronymic" className="form-label">Отчество</label>
                  <input className="form-control" id="patronymic" placeholder="" value={patronymic} onChange={(e) => setPatronymic(e.target.value)}/>
                </div>
              </div>
              <div className='payment__side-info'>
                <div className='contacts__item'>
                  <label htmlFor="phone" className="form-label">Контактный телефон</label>
                  <input className="form-control" id="phone" type="tel" maxLength={12} value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+7 ___ ___ __ __" required/>
                </div>
                <div className='contacts__item'>
                  <label htmlFor="email" className="form-label">E-mail</label>
                  <input className="form-control" id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="inbox@gmail.ru" required/>
                </div>
              </div>
            </div>
          </div>
          <div className='payment-container__header d-flex justify-content-between'>
            <div className='payment-container__header-title d-flex align-items-center'>
              <span className='payment-title'>Способ оплаты</span>
            </div>
          </div>
          <div className='payment-container__body'>
            <div className='payment-body__item d-flex flex-column'>
              <div className="payment form-check">
                <input className="form-check-input" type="checkbox" value="online" id="online" onChange={(e) => setPaymentMethod(e.target.value)} checked={paymentMethod === 'online'}/>
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
                <input className="form-check-input" type="checkbox" value="cash" id="cash" onChange={(e) => setPaymentMethod(e.target.value)} checked={paymentMethod === 'cash'}/>
                <label className="form-check-label" htmlFor="cash">Наличными</label>
              </div>
            </div>
          </div>

          <button 
            type="submit" 
            className="btn text-uppercase btn-booking" 
            onClick={handleCheck}
            disabled={disabled}
          >КУПИТЬ БИЛЕТЫ</button>
        </form>
      </section>
    </Fragment>
  )
}