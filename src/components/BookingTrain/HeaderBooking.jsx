import BannerBooking from './BannerBooking';
import TopNav from '../common/TopNav';
import SearchFormBooking from './SearchFormBooking';

export default function HeaderBooking() {
  return (
    <header className="container-fluid px-0">
    <div className="row">
      <div className="col">
        <TopNav/>
        <BannerBooking/>        
        <SearchFormBooking/>
      </div>
    </div>
    <div className="progress-line d-flex">
      <ol>
        <li className="progress-line__item active">
            <div className="d-flex justify-content-center align-items-center">
              <div className="progress-line__item-number">1</div>
              <span>Билеты</span>
            </div>
        </li>
        <li className="progress-line__item">
          <div className="d-flex justify-content-center align-items-center">
            <div className="progress-line__item-number">2</div>
            <span>Пассажиры</span>
          </div>
        </li>
        <li className="progress-line__item">
          <div className="d-flex justify-content-center align-items-center">
            <div className="progress-line__item-number">3</div>
            <span>Оплата</span>
          </div>
        </li>
        <li className="progress-line__item">
          <div className="d-flex justify-content-center align-items-center">
            <div className="progress-line__item-number">4</div>
            <span>Проверка</span>
          </div>
        </li>
      </ol>
    </div>
  </header>
  )
}