import cached from '../images/ic_cached.svg';
import BasicDatePicker from './BasicDatePicker';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import SearchItem from './SearchItem';
import { fetchRoutes } from '../redux/searchSlice';
import { searchActions } from '../redux/searchSlice';
import dateConverter from './dateConverter'; 

export default function SearchFormHome() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cityFrom, cityTo, dateThere, dateBack } = useSelector((store) => store.searchSlice);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let there;
    let back;
    let url = `https://fe-diplom.herokuapp.com/routes?from_city_id=${cityFrom._id}&to_city_id=${cityTo._id}`;

    if (dateThere) {
      there = dateConverter(dateThere);
    }

    if (dateBack) {
      back = dateConverter(dateBack);
    }

    if (there && !back) {
      url = `https://fe-diplom.herokuapp.com/routes?from_city_id=${cityFrom._id}&to_city_id=${cityTo._id}&date_start=${there}`;
    } else if(back && !there) {
      url = `https://fe-diplom.herokuapp.com/routes?from_city_id=${cityFrom._id}&to_city_id=${cityTo._id}&date_end=${back}`;
    } else if (there && back) {
      url = `https://fe-diplom.herokuapp.com/routes?from_city_id=${cityFrom._id}&to_city_id=${cityTo._id}&date_start=${there}&date_end=${back}`;
    }

    dispatch(fetchRoutes(url));
    navigate('/booking');
  }

  return (
    <form data-id="search-form-main" onSubmit={handleSubmit}>
      <div>
        <label className="search__item-name">Направление</label>
        <div className="search-form__place-group d-flex justify-content-between">
          <SearchItem type={'from'}/>
          <img src={cached} alt="round" onClick={() => dispatch(searchActions.changeDirection())}/>
          <SearchItem type={'to'}/>
        </div>
      </div>
      <div>
        <label className="search__item-name">Дата</label>
        <div className="search-form__date-group d-flex justify-content-between">
          <BasicDatePicker label={"ДД/ММ/ГГ"} type={'dateThere'}/>
          <BasicDatePicker label={"ДД/ММ/ГГ"} type={'dateBack'}/>
        </div>
      </div>
      <button type="submit" className="btn btn-submit btn-outline-light text-uppercase py-2">найти билеты</button>
    </form>
  )
}