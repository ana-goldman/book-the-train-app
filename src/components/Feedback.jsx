import feedback1 from '../images/feedback1.svg';
import feedback2 from '../images/feedback2.svg';
import quote1 from '../images/“.svg';
import quote2 from '../images/”.svg';

export default function Feedback() {
  return (
    <section className="feedback d-flex flex-column justify-content-between" id='feedback'>
      <h2 className="text-start text-uppercase mb-4">Отзывы</h2>
      <div className="d-flex flex-row justify-content-between">
        <div className="feedback-item d-flex flex-row mx-3">
          <img className="feedback-item-img rounded-circle" src={feedback1} alt="feedback-person"/>
          <div className="d-flex flex-column px-5">
            <span className="feedback-name fw-bold py-4">Екатерина Вальнова</span>
            <span className="feedback-quote fst-italic">
              <img src={quote1} alt=""/>
              Доброжелательные подсказки
              на всех этапах помогут правильно заполнить 
              поля и без затруднений купить авиа или ж/д 
              билет, даже если вы заказываете онлайн билет 
              впервые.
              <img src={quote2} alt=""/>
            </span>
          </div>
        </div>
        <div className="feedback-item d-flex flex-row mx-3">
          <img className="feedback-item-img rounded-circle" src={feedback2} alt="feedback-person"/>
          <div className="d-flex flex-column px-5">
            <span className="feedback-name fw-bold py-4">Евгений Стрыкало</span>
            <span className="feedback-quote fst-italic">
              <img src={quote1} alt=""/>
              СМС-сопровождение до посадки
              Сразу после оплаты ж/д билетов 
              и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке.
              <img src={quote2} alt=""/>
            </span>
          </div>
        </div>
      </div>
      <div className="feedback-slider d-flex flex-row justify-content-center my-5">
        <div className="slider-item active"></div>
        <div className="slider-item"></div>
        <div className="slider-item"></div>
        <div className="slider-item"></div>
        <div className="slider-item"></div>
      </div>
    </section>
  )
}