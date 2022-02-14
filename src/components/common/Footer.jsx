import phone from '../../images/phone.svg';
import mail from '../../images/mail.svg';
import skype from '../../images/skype.svg';
import address from '../../images/address.svg';
import { HashLink } from 'react-router-hash-link';
import { useState, Fragment } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { subscribe } from "../../redux/subscriptionSlice";
import ModalInfo from './ModalInfo';
import ModalError from './ModalError';

export default function Footer() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const { status } = useSelector((store) => store.subscriptionSlice);

  const handleSubscribe = (e) => {
    e.preventDefault();
    dispatch(subscribe(email));
    status === 'success' && setEmail('');
  }

  return (
    <Fragment>
      {status === 'success' && <ModalInfo show={true}/>}
      {status === 'error' && <ModalError show={true}/>}
      <footer className="container-fluid bg-dark footer" id='contacts'>
        <div className="row footer-description">
          <div className="col">
            <section className="footer-contacts nav flex-column">
              <h5>Свяжитесь с нами</h5>
              <a className="footer-contacts-phone" href="tel:+7-800-000-00-00">
                <img src={phone} alt="phone"/>
                <span>8(800) 000 00 00</span>
              </a>
              <a className="footer-contacts-email" href="mailto:inbox@mail.ru">
                <img src={mail} alt="mail"/>
                <span>inbox@mail.ru</span>
              </a>
              <a className="footer-contacts-skype" href="skype:tu.train.tickets">
                <img src={skype} alt="skype"/>
                <span>tu.train.tickets</span>
              </a>
              <address className="footer-contacts-address">
                <img src={address} alt="address"/>
                <span>г. Москва<br/>ул. Московская 27-35<br/>555 555</span>
              </address>
            </section>
          </div>
          <div className="col">
            <section className="footer-subscription">
              <h5>Подписка</h5>
              <label htmlFor="subscription-form">Будьте в курсе событий</label>
              <form data-id="subscription-form" 
                    className="d-flex justify-content-between py-3" 
                    onSubmit={handleSubscribe}>
                <input className="form-control" 
                      placeholder="e-mail"
                      value={email}
                      onChange={e => setEmail(e.target.value)} 
                      required/>
                <button type="submit" className="btn btn-outline-light">ОТПРАВИТЬ</button>
              </form>
            </section>
            <section className="footer-social">
              <h5>Подписывайтесь на нас</h5>
              <div className="footer-social-links">
                <div className="footer-social-link footer-social-link-youtube"></div>
                <div className="footer-social-link footer-social-link-instagram"></div>
                <div className="footer-social-link footer-social-link-google"></div>
                <div className="footer-social-link footer-social-link-facebook"></div>
                <div className="footer-social-link footer-social-link-twitter"></div>
              </div>
            </section>
          </div>
        </div>
        <div className="row footer-copyright">
          <div className="col footer-copyright-section">
            <div>Лого</div>
            <HashLink smooth to="/#top"><div className="arrow-up"></div></HashLink>
            <div>2018 WEB</div>
          </div>
        </div>
      </footer>
    </Fragment>
  )
}