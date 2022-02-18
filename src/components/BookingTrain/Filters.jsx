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
import { fetchRoutes, searchActions } from '../../redux/searchSlice';
import PriceRange from './PriceRange';
import TimeRange from './TimeRange';

export default function Filters() {  
  const dispatch = useDispatch();
  const [openThere, setOpenThere] = useState(false);
  const [openBack, setOpenBack] = useState(false);

  const { 
    cityFrom, 
    cityTo, 
    dateThere, 
    dateBack,
    haveFourthClass,
    haveThirdClass,
    haveSecondClass,
    haveFirstClass,
    haveWifi,
    haveExpress,
    priceFrom,
    priceTo,
    startDepartureHourFrom,
    startDepartureHourTo,
    startArrivalHourFrom,
    startArrivalHourTo,
    endDepartureHourFrom,
    endDepartureHourTo,
    endArrivalHourFrom,
    endArrivalHourTo, 
  } = useSelector((store) => store.searchSlice);

  useEffect(() => {
    let url = `https://fe-diplom.herokuapp.com/routes?from_city_id=${cityFrom._id}&to_city_id=${cityTo._id}`;

    dispatch(fetchRoutes(url));
  }, [dispatch,
    haveFourthClass,
    haveThirdClass,
    haveSecondClass,
    haveFirstClass,
    haveWifi,
    haveExpress,
    priceFrom,
    priceTo,
    startDepartureHourFrom,
    startDepartureHourTo,
    startArrivalHourFrom,
    startArrivalHourTo,
    endDepartureHourFrom,
    endDepartureHourTo,
    endArrivalHourFrom,
    endArrivalHourTo, ]);

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
                    onChange={(e) => dispatch(searchActions.setHaveSecondClass(e.target.checked))} />
          </div>
          <div className="item__train-type d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <img src={platskart} alt="Плацкарт"/>
              <span>Плацкарт </span>
            </div>
            <Switch sx={{ width: 72 }}
                    checked={haveThirdClass}
                    onChange={(e) => dispatch(searchActions.setHaveThirdClass(e.target.checked))} />
          </div>
          <div className="item__train-type d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <img src={sidyachii} alt="Сидячий"/>
              <span>Сидячий</span>
            </div>
            <Switch sx={{ width: 72 }}
                    checked={haveFourthClass}
                    onChange={(e) => dispatch(searchActions.setHaveFourthClass(e.target.checked))} />
          </div>
          <div className="item__train-type d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <img src={lux} alt="Люкс"/>
              <span>Люкс</span>
            </div>
            <Switch sx={{ width: 72 }}
                    checked={haveFirstClass}
                    onChange={(e) => dispatch(searchActions.setHaveFirstClass(e.target.checked))} />
          </div>
          <div className="item__train-type d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <img src={wifi} alt="Wi-Fi"/>
              <span>Wi-Fi </span>
            </div>
            <Switch sx={{ width: 72 }}
                    checked={haveWifi}
                    onChange={(e) => dispatch(searchActions.setHaveWifi(e.target.checked))} />
          </div>
          <div className="item__train-type d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <img src={express} alt="Экспресс"/>
              <span>Экспресс</span>
            </div>
            <Switch sx={{ width: 72 }}
                    checked={haveExpress}
                    onChange={(e) => dispatch(searchActions.setHaveExpress(e.target.checked))} />
          </div>
        </div>
 
        <div className="filters__item item__price d-flex flex-column">
          <span className="filters__item-name">Стоимость</span>
          <PriceRange getRange={(data) => {
            dispatch(searchActions.setPriceFrom(data[0]));
            dispatch(searchActions.setPriceTo(data[1]));
          }}/>
        </div>

        <div className="filters__item d-flex flex-column">
          <div className="item__direction">
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <img src={arrowThere} alt=""/>
                <span className="filters__item-name">Туда</span>
              </div>
              <div className={`drop-down-toggle ${openThere && 'open'}`} onClick={() => setOpenThere(openThere === false ? true : false)}></div>
            </div>
            <div className={`filters__drop-down ${openThere && 'show-filter'}`}>
              <div>
                <span>Время отбытия</span>
                <TimeRange getRange={(data) => {
                  dispatch(searchActions.setStartDepartureHourFrom(data[0]));
                  dispatch(searchActions.setStartDepartureHourTo(data[1]));
                }}/>
              </div>
              <div className='text-end mt-5'>
                <span className="">Время прибытия</span>
                <TimeRange getRange={(data) => {
                  dispatch(searchActions.setStartArrivalHourFrom(data[0]));
                  dispatch(searchActions.setStartArrivalHourTo(data[1]));
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
              <div className={`drop-down-toggle ${openBack && 'open'}`} onClick={() => setOpenBack(openBack === false ? true : false)}></div>
            </div>
            <div className={`filters__drop-down ${openBack && 'show-filter'}`}>
              <div>
                <span>Время отбытия</span>
                <TimeRange getRange={(data) => {
                  dispatch(searchActions.setEndDepartureHourFrom(data[0]));
                  dispatch(searchActions.setEndDepartureHourTo(data[1]));
                }}/>
              </div>
              <div className='text-end mt-5'>
                <span className="">Время прибытия</span>
                <TimeRange getRange={(data) => {
                  dispatch(searchActions.setEndArrivalHourFrom(data[0]));
                  dispatch(searchActions.setEndArrivalHourTo(data[1]));
                }}/>
              </div>  
            </div>
          </div>
        </div>

      </div>
  )
}