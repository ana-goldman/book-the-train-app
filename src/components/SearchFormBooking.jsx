import cached from '../images/ic_cached.svg';
import BasicDatePicker from './BasicDatePicker';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchCities } from "../redux/searchSlice";
import SearchItem from './SearchItem';

export default function SearchFormBooking() {
  const dispatch = useDispatch();
  const { cities } = useSelector((store) => store.searchSlice);
  const [collabs, setCollabs] = useState("");

  return (
    <form data-id="search-form-booking">
      <div className="d-flex justify-content-between">
        <div className="search-form-booking__item">
          <label className="search__item-name">Направление</label>
          <div className="search-form__place-group d-flex justify-content-between">
            <SearchItem setCollabs={setCollabs} placeholder={'Откуда'}/>
            {/* <input className="form-control search-form-place" 
                 value={from}
                 onChange={e => setFrom(e.target.value)}
                 placeholder="Откуда"/>
            {cities && <ul className="search-form__tooltip">{cities.map(o => <li key={o._id} onClick={() => console.log(o.name)}>{o.name}</li>)}</ul>} */}
            <img src={cached} alt="round"/>
            <SearchItem setCollabs={setCollabs} placeholder={'Куда'}/>
            {/* <input className="form-control search-form-place" 
                 value={to}
                 onChange={e => setTo(e.target.value)}
                 placeholder="Куда"/>
            {cities && <ul className="search-form__tooltip" style={{right: '0'}}>{cities.map(o => <li key={o._id}>{o.name}</li>)}</ul>} */}
          </div>
        </div>
        <div className="search-form-booking__item">
          <label className="search__item-name">Дата</label>
          <div className="search-form__date-group d-flex justify-content-between">
            <BasicDatePicker label={"ДД/ММ/ГГ"}/>
            <BasicDatePicker label={"ДД/ММ/ГГ"}/>
          </div>
        </div>
      </div>
      <button type="button" className="btn btn-submit btn-outline-light text-uppercase py-2">найти билеты</button>
    </form>
  )
}