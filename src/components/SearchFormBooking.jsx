import cached from '../images/ic_cached.svg';
import BasicDatePicker from './BasicDatePicker';
import { useSelector, useDispatch } from "react-redux";
import { fetchRoutes } from '../redux/searchSlice';
import SearchItem from './SearchItem';

export default function SearchFormBooking() {
  const dispatch = useDispatch();
  const { cityFrom, cityTo, dateThere, dateBack } = useSelector((store) => store.searchSlice);

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `https://fe-diplom.herokuapp.com/routes?from_city_id=${cityFrom._id}&to_city_id=${cityTo._id}`;
    dispatch(fetchRoutes(url));
    console.log(cityFrom, cityTo, dateThere, dateBack)
  }

  return (
    <form data-id="search-form-booking" onSubmit={handleSubmit}>
      <div className="d-flex justify-content-between">
        <div className="search-form-booking__item">
          <label className="search__item-name">Направление</label>
          <div className="search-form__place-group d-flex justify-content-between">
            <SearchItem placeholder={cityFrom.name || 'Откуда'} type={'from'}/>
            <img src={cached} alt="round"/>
            <SearchItem placeholder={cityTo.name || 'Куда'} type={'to'}/>
          </div>
        </div>
        <div className="search-form-booking__item">
          <label className="search__item-name">Дата</label>
          <div className="search-form__date-group d-flex justify-content-between">
            <BasicDatePicker label={"ДД/ММ/ГГ"} type={'dateThere'}/>
            <BasicDatePicker label={"ДД/ММ/ГГ"} type={'dateBack'}/>
          </div>
        </div>
      </div>
      <button type="submit" className="btn btn-submit btn-outline-light text-uppercase py-2">найти билеты</button>
    </form>
  )
}