import cached from '../images/ic_cached.svg';
import BasicDatePicker from './BasicDatePicker';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import SearchItem from './SearchItem';
import { fetchRoutes } from '../redux/searchSlice';

export default function SearchFormHome() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cityFrom, cityTo } = useSelector((store) => store.searchSlice);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `https://fe-diplom.herokuapp.com/routes?from_city_id=${cityFrom._id}&to_city_id=${cityTo._id}`;
    dispatch(fetchRoutes(url));
    navigate('/booking');
  }

  return (
    <form data-id="search-form-main" onSubmit={handleSubmit}>
      <div>
        <label className="search__item-name">Направление</label>
        <div className="search-form__place-group d-flex justify-content-between">
          <SearchItem placeholder={'Откуда'} type={'from'}/>
          <img src={cached} alt="round"/>
          <SearchItem placeholder={'Куда'} type={'to'}/>
        </div>
      </div>
      <div>
        <label className="search__item-name">Дата</label>
        <div className="search-form__date-group d-flex justify-content-between">
          <BasicDatePicker label={"ДД/ММ/ГГ"}/>
          <BasicDatePicker label={"ДД/ММ/ГГ"}/>
        </div>
      </div>
      <button type="submit" className="btn btn-submit btn-outline-light text-uppercase py-2">найти билеты</button>
    </form>
  )
}