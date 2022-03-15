import currency from '../../images/currency.svg';
import order1 from '../../images/order1.svg';
import order2 from '../../images/order2.svg';
import order3 from '../../images/order3.svg';
import star from '../../images/Star.svg';
import { Fragment } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { orderActions } from '../../redux/orderSlice'; 

export default function BodyComlete() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { total, totalBack } = useSelector((store) => store.seatsSlice);
  const { user } = useSelector((store) => store.orderSlice);

  return (
    <Fragment>
      <section className='body-container-complete'>
        <span className='complete-logo'>Благодарим Вас за заказ!</span>
        <div className='complete-modal'>
          <div className='order-summary d-flex justify-content-between'>
            <span className='order-summary__number'>№ Заказа 285АА</span>
            <div>
              сумма
              <span className='order-summary__price'>{total + totalBack}</span>
              <img src={currency} alt="" />
            </div>
          </div>
          <div className='order-steps d-flex justify-content-evenly'>
            <div className='steps-item d-flex flex-column text-center align-items-center'>
              <img src={order1} alt="" />
              <span>билеты будут <br/> отправлены <br/> на ваш e-mail</span>
            </div>
            <div className='steps-item d-flex flex-column text-center align-items-center'>
              <img src={order2} alt="" />
              <span>распечатайте <br/> и сохраняйте билеты <br/> до даты поездки</span>
            </div>
            <div className='steps-item d-flex flex-column text-center align-items-center'>
              <img src={order3} alt="" />
              <span>предьявите <br/> распечатанные <br/> билеты при посадке</span>
            </div>
          </div>
          <div className='order-main'>
            <span className='order-main__name'>{user.first_name + ' ' + user.patronymic}!</span><br/>
            <p className='order-main__middle'>Ваш заказ успешно оформлен. <br/> В ближайшее время с вами свяжется наш оператор для подтверждения.</p><br/>
            <p className='order-main__tanks'>Благодарим Вас за оказанное доверие и желаем приятного путешествия!</p>
          </div>
          <div className='order-footer d-flex justify-content-between'>
            <div className='d-flex align-items-center'>
              Оценить сервис
              <div className='star-container'>
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
            </div>
            <button type="button" className="btn btn-back-to-main text-uppercase" onClick={() => {
                  navigate('/');
                  dispatch(orderActions.reset());
            }}>вернуться на главную</button>
          </div>
        </div>
      </section>
    </Fragment>
  )
}