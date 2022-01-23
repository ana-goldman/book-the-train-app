import cached from '../images/ic_cached.svg';

export default function SearchFormHome() {
  return (
    <form data-id="search-form-main">
      <div>
        <label>Направление</label>
        <div className="search-form__group d-flex justify-content-between">
          <input className="form-control search-form-place" placeholder="Откуда"/>
          <img src={cached} alt="round"/>
          <input className="form-control search-form-place" placeholder="Куда"/>
        </div>
      </div>
      <div>
        <label>Дата</label>
        <div className="search-form__group d-flex justify-content-between">
          <input type="text" className="form-control search-form-date" placeholder="ДД/ММ/ГГ"/>
          <input type="text" className="form-control search-form-date" placeholder="ДД/ММ/ГГ"/>
        </div>
      </div>
      <button type="button" className="btn btn-outline-light text-uppercase py-2">найти билеты</button>
    </form>
  )
}