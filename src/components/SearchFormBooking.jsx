import cached from '../images/ic_cached.svg';

export default function SearchFormBooking() {
  return (
    <form data-id="search-form-booking">
      <div className="d-flex justify-content-between">
        <div className="search-form-booking__item">
          <label>Направление</label>
          <div className="search-form__group d-flex justify-content-between">
            <input className="form-control search-form-place" placeholder="Откуда"/>
            <img src={cached} alt="round"/>
            <input className="form-control search-form-place" placeholder="Куда"/>
          </div>
        </div>
        <div className="search-form-booking__item">
          <label>Дата</label>
          <div className="search-form__group d-flex justify-content-between">
            <input type="text" className="form-control search-form-date" placeholder="ДД/ММ/ГГ"/>
            <input type="text" className="form-control search-form-date" placeholder="ДД/ММ/ГГ"/>
          </div>
        </div>
      </div>
      <button type="button" className="btn btn-outline-light text-uppercase py-2">найти билеты</button>
    </form>
  )
}