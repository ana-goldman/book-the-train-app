import cached from '../../images/ic_cached.svg';
import BasicDatePicker from '../common/BasicDatePicker';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { fetchRoutes } from '../../redux/searchSlice';
import SearchItem from '../common/SearchItem';
import { searchActions } from '../../redux/searchSlice';

export default function SearchFormBooking() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cityFrom, cityTo, dateThere, dateBack } = useSelector((store) => store.searchSlice);

  const handleSubmit = (e) => {
    e.preventDefault();
    let url = `https://fe-diplom.herokuapp.com/routes?from_city_id=${cityFrom._id}&to_city_id=${cityTo._id}`;


    if (dateThere && !dateBack) {
      url = `https://fe-diplom.herokuapp.com/routes?from_city_id=${cityFrom._id}&to_city_id=${cityTo._id}&date_start=${dateThere}`;
    } else if(dateBack && !dateThere) {
      url = `https://fe-diplom.herokuapp.com/routes?from_city_id=${cityFrom._id}&to_city_id=${cityTo._id}&date_end=${dateBack}`;
    } else if (dateThere && dateBack) {
      url = `https://fe-diplom.herokuapp.com/routes?from_city_id=${cityFrom._id}&to_city_id=${cityTo._id}&date_start=${dateThere}&date_end=${dateBack}`;
    }
    
    navigate('/booking')
    dispatch(fetchRoutes(url));
  }

  return (
    <form data-id="search-form-booking" onSubmit={handleSubmit}>
      <div className="d-flex justify-content-between">
        <div className="search-form-booking__item">
          <label className="search__item-name">Направление</label>
          <div className="search-form__place-group d-flex justify-content-between">
            <SearchItem type={'from'}/>
            <img src={cached} alt="round" onClick={() => dispatch(searchActions.changeDirection())}/>
            <SearchItem type={'to'}/>
          </div>
        </div>
        <div className="search-form-booking__item">
          <label className="search__item-name">Дата</label>
          <div className="search-form__date-group d-flex justify-content-between">
            <BasicDatePicker type={'dateThere'}/>
            <BasicDatePicker type={'dateBack'}/>
          </div>
        </div>
      </div>
      <button type="submit" className="btn btn-submit btn-outline-light text-uppercase py-2">найти билеты</button>
    </form>
  )
}