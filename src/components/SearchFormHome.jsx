import cached from '../images/ic_cached.svg';
import BasicDatePicker from './BasicDatePicker';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { fetchCities } from "../redux/searchSlice";
import SearchItem from './SearchItem';

export default function SearchFormHome() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cities } = useSelector((store) => store.searchSlice);
  const [collabs, setCollabs] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate('/booking');
  }

  return (
    <form data-id="search-form-main" onSubmit={handleSubmit}>
      <div>
        <label className="search__item-name">Направление</label>
        <div className="search-form__place-group d-flex justify-content-between">
          <SearchItem setCollabs={setCollabs} placeholder={'Откуда'}/>
          <img src={cached} alt="round"/>
          <SearchItem setCollabs={setCollabs} placeholder={'Куда'}/>
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