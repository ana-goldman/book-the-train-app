import about1 from '../../images/about1.svg';
import about2 from '../../images/about2.svg';
import about3 from '../../images/about3.svg';

export default function AboutProcess() {
  return (
    <section className="about-process d-flex flex-column justify-content-between" id="about-process">
      <div className="d-flex flex-row justify-content-between">
        <h2 className="text-start text-uppercase mb-4">Как это работает</h2>
        <button type="button" className="btn btn-outline-light">Узнать больше</button>
      </div>
      <div className="d-flex justify-content-evenly">
        <div className="about-item d-flex flex-column text-center align-items-center">
          <img className="about-item-img" src={about1} alt="about"/>
          <span>Удобный заказ<br/>на сайте</span>
        </div>
        <div className="about-item d-flex flex-column text-center align-items-center">
          <img className="about-item-img" src={about2} alt="about"/>
          <span>Нет необходимости<br/>ехать в офис</span>
        </div>
        <div className="about-item d-flex flex-column text-center align-items-center">
          <img className="about-item-img" src={about3} alt="about"/>
          <span>Огромный выбор<br/>направлений</span>
        </div>
      </div>
    </section>
  )
}