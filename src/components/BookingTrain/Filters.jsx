import kupe from '../../images/kupe.svg';
import platskart from '../../images/platskart.svg';
import sidyachii from '../../images/sidyachii.svg';
import lux from '../../images/lux.svg';
import wifi from '../../images/wifi.svg';
import express from '../../images/express.svg';
import arrowThere from '../../images/arrow-there.svg';
import arrowBack from '../../images/arrow-back.svg';
import BasicDatePicker from '../common/BasicDatePicker';
import { Switch } from '@mui/material';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchRoutes } from '../../redux/searchSlice';
import PriceRange from './PriceRange';
import TimeRange from './TimeRange';

export default function Filters() {  
  const dispatch = useDispatch();
  const [openThere, setOpenThere] = useState(false);
  const [openBack, setOpenBack] = useState(false);
  // switches 
  const [haveSecondClass, setHaveSecondClass] = useState(false);
  const [haveThirdClass, setHaveThirdClass] = useState(false);
  const [haveFourthClass, setHaveFourthClass] = useState(false);
  const [haveFirstClass, setHaveFirstClass] = useState(false);
  const [haveWifi, setHaveWifi] = useState(false);
  const [haveExpress, setHaveExpress] = useState(false);
  // price 
  const [priceFrom, setPriceFrom] = useState();
  const [priceTo, setPriceTo] = useState();
  // time there 
  const [startDepartureHourFrom, setStartDepartureHourFrom] = useState();
  const [startDepartureHourTo, setStartDepartureHourTo] = useState();
  const [startArrivalHourFrom, setStartArrivalHourFrom] = useState();
  const [startArrivalHourTo, setStartArrivalHourTo] = useState();
  // time back 
  const [endDepartureHourFrom, setEndDepartureHourFrom] = useState();
  const [endDepartureHourTo, setEndDepartureHourTo] = useState();
  const [endArrivalHourFrom, setEndArrivalHourFrom] = useState();
  const [endArrivalHourTo, setEndArrivalHourTo] = useState();

  const { cityFrom, cityTo, dateThere, dateBack } = useSelector((store) => store.searchSlice);

  useEffect(() => {
    let url = `https://fe-diplom.herokuapp.com/routes?from_city_id=${cityFrom._id}&to_city_id=${cityTo._id}`;

    // date
    if(dateThere) url = `${url}&date_start=${dateThere}`;
    if(dateBack) url = `${url}&date_end=${dateBack}`;
    // switches
    if(haveSecondClass) url = `${url}&have_second_class=${haveSecondClass}`;
    if(haveThirdClass) url = `${url}&have_third_class=${haveThirdClass}`;
    if(haveFourthClass) url = `${url}&have_fourth_class=${haveFourthClass}`;
    if(haveFirstClass) url = `${url}&have_first_class=${haveFirstClass}`;
    if(haveWifi) url = `${url}&have_wifi=${haveWifi}`;
    if(haveExpress) url = `${url}&have_express=${haveExpress}`;
    // price 
    if(priceFrom) url = `${url}&price_from=${priceFrom}`;
    if(priceTo) url = `${url}&price_to=${priceTo}`;
    // time there 
    if(startDepartureHourFrom) url = `${url}&start_departure_hour_from=${startDepartureHourFrom}`;
    if(startDepartureHourTo) url = `${url}&start_departure_hour_to=${startDepartureHourTo}`;
    if(startArrivalHourFrom) url = `${url}&start_arrival_hour_from=${startArrivalHourFrom}`;
    if(startArrivalHourTo) url = `${url}&start_arrival_hour_to=${startArrivalHourTo}`;
    // time back 
    if(endDepartureHourFrom) url = `${url}&end_departure_hour_from=${endDepartureHourFrom}`;
    if(endDepartureHourTo) url = `${url}&end_departure_hour_to=${endDepartureHourTo}`;
    if(endArrivalHourFrom && dateBack) url = `${url}&end_arrival_hour_from=${endArrivalHourFrom}`;
    if(endArrivalHourTo && dateBack) url = `${url}&end_arrival_hour_to=${endArrivalHourTo}`;

    dispatch(fetchRoutes(url));
  }, [dispatch, endArrivalHourFrom, endArrivalHourTo, endDepartureHourFrom, endDepartureHourTo, haveExpress, haveFirstClass, haveFourthClass, haveSecondClass, haveThirdClass, haveWifi, priceFrom, priceTo, startArrivalHourFrom, startArrivalHourTo, startDepartureHourFrom, startDepartureHourTo]);

  return (
    <div className='filters__wrap'>
        <div className="filters__item search-form-filter d-flex flex-column">
          <span className="filters__item-name">Дата поездки</span>
          <BasicDatePicker type={'dateThere'}/>
          <span className="filters__item-name">Дата возвращения</span>
          <BasicDatePicker type={'dateBack'}/>
        </div>
        <div className="filters__item d-flex flex-column">
          <div className="item__train-type d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <img src={kupe} alt="Купе"/>
              <span>Купе </span>
            </div>
            <Switch sx={{ width: 72 }} 
                    checked={haveSecondClass}
                    onChange={(e) => setHaveSecondClass(e.target.checked)} />
          </div>
          <div className="item__train-type d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <img src={platskart} alt="Плацкарт"/>
              <span>Плацкарт </span>
            </div>
            <Switch sx={{ width: 72 }}
                    checked={haveThirdClass}
                    onChange={(e) => setHaveThirdClass(e.target.checked)} />
          </div>
          <div className="item__train-type d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <img src={sidyachii} alt="Сидячий"/>
              <span>Сидячий</span>
            </div>
            <Switch sx={{ width: 72 }}
                    checked={haveFourthClass}
                    onChange={(e) => setHaveFourthClass(e.target.checked)} />
          </div>
          <div className="item__train-type d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <img src={lux} alt="Люкс"/>
              <span>Люкс</span>
            </div>
            <Switch sx={{ width: 72 }}
                    checked={haveFirstClass}
                    onChange={(e) => setHaveFirstClass(e.target.checked)} />
          </div>
          <div className="item__train-type d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <img src={wifi} alt="Wi-Fi"/>
              <span>Wi-Fi </span>
            </div>
            <Switch sx={{ width: 72 }}
                    checked={haveWifi}
                    onChange={(e) => setHaveWifi(e.target.checked)} />
          </div>
          <div className="item__train-type d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <img src={express} alt="Экспресс"/>
              <span>Экспресс</span>
            </div>
            <Switch sx={{ width: 72 }}
                    checked={haveExpress}
                    onChange={(e) => setHaveExpress(e.target.checked)} />
          </div>
        </div>
 
        <div className="filters__item item__price d-flex flex-column">
          <span className="filters__item-name">Стоимость</span>
          <PriceRange getRange={(data) => {
            setPriceFrom(data[0]);
            setPriceTo(data[1]);
          }}/>
        </div>

        <div className="filters__item d-flex flex-column">
          <div className="item__direction">
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <img src={arrowThere} alt=""/>
                <span className="filters__item-name">Туда</span>
              </div>
              <div className="drop-down-toggle" onClick={() => setOpenThere(openThere === false ? true : false)}></div>
            </div>
            <div className={`filters__drop-down ${openThere === true ? 'show-filter' : ''}`}>
              <div>
                <span>Время отбытия</span>
                <TimeRange getRange={(data) => {
                  setStartDepartureHourFrom(data[0]);
                  setStartDepartureHourTo(data[1]);
                }}/>
              </div>
              <div className='text-end mt-5'>
                <span className="">Время прибытия</span>
                <TimeRange getRange={(data) => {
                  setStartArrivalHourFrom(data[0]);
                  setStartArrivalHourTo(data[1]);
                }}/>
              </div>
            </div>
          </div>
        </div>

        <div className="filters__item d-flex flex-column">
          <div className="item__direction">
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <img src={arrowBack} alt=""/>
                <span className="filters__item-name">Обратно</span>
              </div>
              <div className="drop-down-toggle" onClick={() => setOpenBack(openBack === false ? true : false)}></div>
            </div>
            <div className={`filters__drop-down ${openBack === true ? 'show-filter' : ''}`}>
              <div>
                <span>Время отбытия</span>
                <TimeRange getRange={(data) => {
                  setEndDepartureHourFrom(data[0]);
                  setEndDepartureHourTo(data[1]);
                }}/>
              </div>
              <div className='text-end mt-5'>
                <span className="">Время прибытия</span>
                <TimeRange getRange={(data) => {
                  setEndArrivalHourFrom(data[0]);
                  setEndArrivalHourTo(data[1]);
                }}/>
              </div>  
            </div>
          </div>
        </div>

      </div>
  )
}