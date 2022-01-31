import cached from '../images/ic_cached.svg';
import BasicDatePicker from './BasicDatePicker';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { fetchCities } from "../redux/searchSlice";

export default function SearchFormHome() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cities } = useSelector((store) => store.searchSlice);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  useEffect(() => { 
    if (from) {
      dispatch(fetchCities(`${process.env.REACT_APP_BASE_URL}routes/cities?name=${from}`));
    } 
  }, [dispatch, from]);

  useEffect(() => { 
    if (to) {
      dispatch(fetchCities(`${process.env.REACT_APP_BASE_URL}routes/cities?name=${to}`));
    }
  }, [dispatch, to]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(from, to);
    
    navigate('/booking');
  }

  return (
    <form data-id="search-form-main" onSubmit={handleSubmit}>
      <div>
        <label className="search__item-name">Направление</label>
        <div className="search-form__place-group d-flex justify-content-between">
          <input className="form-control search-form-place" 
                 value={from}
                 onChange={e => setFrom(e.target.value)}
                 placeholder="Откуда"
                 />
          {cities && <ul className="search-form__tooltip">{cities.map(o => <li key={o._id} onClick={(e) => setFrom(e.target.value)}>{o.name}</li>)}</ul>}
          <img src={cached} alt="round"/>
          <input className="form-control search-form-place" 
                 value={to}
                 onChange={e => setTo(e.target.value)}
                 placeholder="Куда"/>
          {cities && <ul className="search-form__tooltip" style={{right: '0'}}>{cities.map(o => <li key={o._id}>{o.name}</li>)}</ul>}
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