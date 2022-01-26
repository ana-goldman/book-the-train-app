import kupe from '../images/kupe.svg';
import platskart from '../images/platskart.svg';
import sidyachii from '../images/sidyachii.svg';
import lux from '../images/lux.svg';
import wifi from '../images/wifi.svg';
import express from '../images/express.svg';
import arrowThere from '../images/arrow-there.svg';
import arrowBack from '../images/arrow-back.svg';

import { Switch } from '@mui/material';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

export default function Filters() {  

  return (
    <div className='filters__wrap'>
        <div className="filters__item d-flex flex-column">
          <span className="filters__item-name">Дата поездки</span>
          <input type="text" className="form-control filter-form-date" placeholder="ДД/ММ/ГГ"/>
          <span className="filters__item-name">Дата возвращения</span>
          <input type="text" className="form-control filter-form-date" placeholder="ДД/ММ/ГГ"/>
        </div>
        <div className="filters__item d-flex flex-column">
          <div className="item__train-type d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <img src={kupe} alt="Купе"/>
              <span>Купе </span>
            </div>
            <Switch sx={{ width: 72 }} defaultChecked />
          </div>
          <div className="item__train-type d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <img src={platskart} alt="Плацкарт"/>
              <span>Плацкарт </span>
            </div>
            <Switch sx={{ width: 72 }} />
          </div>
          <div className="item__train-type d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <img src={sidyachii} alt="Сидячий"/>
              <span>Сидячий</span>
            </div>
            <Switch sx={{ width: 72 }} />
          </div>
          <div className="item__train-type d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <img src={lux} alt="Люкс"/>
              <span>Люкс</span>
            </div>
            <Switch sx={{ width: 72 }} />
          </div>
          <div className="item__train-type d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <img src={wifi} alt="Wi-Fi"/>
              <span>Wi-Fi </span>
            </div>
            <Switch sx={{ width: 72 }} defaultChecked />
          </div>
          <div className="item__train-type d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <img src={express} alt="Экспресс"/>
              <span>Экспресс</span>
            </div>
            <Switch sx={{ width: 72 }} />
          </div>
        </div>
 
        <div className="filters__item item__price d-flex flex-column">
          <span className="filters__item-name">Стоимость</span>
          <Range/>
        </div>

        <div className="filters__item d-flex flex-column">
          <div className="item__direction">
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <img src={arrowThere} alt=""/>
                <span className="filters__item-name">Туда</span>
              </div>
              <div className="drop-down-toggle"></div>
            </div>
            <div>
              <span>Время отбытия</span>
              <Range />
            </div>
            <div class='text-end'>
              <span className="">Время прибытия</span>
              <Range />
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
              <div className="drop-down-toggle"></div>
            </div>
            <div>
              <span>Время отбытия</span>
              <Range />
            </div>
            <div class='text-end'>
              <span className="">Время прибытия</span>
              <Range />
            </div>
          </div>
        </div>

      </div>
  )
}