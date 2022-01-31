import { useState } from 'react';
import trainIncludes from '../images/train-includes.svg';
import currency from '../images/currency.svg';

export default function BodyContainer() {
  const [sortBy, setSortBy] = useState('времени');
  const [open, setOpen] = useState(false);
  const [showNumber, setShowNumber] = useState(5);

  return (
    <section className="trains-container">
      <div className="trains-header d-flex justify-content-between">
        <div className="trains-header__total">найдено 20</div>
        <div className="trains-header__sorting d-flex">сортировать по:
          <span onClick={() => setOpen(open === true ? false : true)}>{sortBy}</span>
          <ul className={`select-sorting ${open === true ? 'open' : ''}`}>
            <li onClick={() => {
              setSortBy('времени');
              setOpen(false)
            }}>времени</li>
            <li onClick={() => {
              setSortBy('стоимости');
              setOpen(false)
            }}>стоимости</li>
            <li onClick={() => {
              setSortBy('длительности');
              setOpen(false)
            }}>длительности</li>
          </ul>
        </div>
        <div className="trains-header__page-quantity d-flex">показывать по:
          <span className={`select-quantity ${showNumber === 5 ? 'active' : ''}`} onClick={() => setShowNumber(5)}>5</span>
          <span className={`select-quantity ${showNumber === 10 ? 'active' : ''}`} onClick={() => setShowNumber(10)}>10</span>
          <span className={`select-quantity ${showNumber === 20 ? 'active' : ''}`} onClick={() => setShowNumber(20)}>20</span>
        </div>
      </div>
      <div className="trains-group">
        <div className="trains-group__item d-flex">
          <div className="item__short-info d-flex flex-column align-items-center justify-content-evenly">
            <div className="item__short-info__logo"></div>
            <div className="item__short-info__number">116C</div>
            <div className="item__short-info__direction">Адлер &#x2192; <br/> Москва &#x2192; <br/>Санкт-Петербург</div>
          </div>
          <div className="item__body">
            <div className="item__body__one-way d-flex justify-content-between">
              <div className="item__body__from">
                <div className="item__body__from__time">00:10</div>
                <div className="item__body__from__city">Москва</div>
                <div className="item__body__from__station">Курский вокзал</div>
              </div>
              <div className="item__body__direction">
                <div className="item__body__direction__time">9 : 42</div>
                <div className="item__body__direction__arrow"></div>
              </div>
              <div className="item__body__to">
                <div className="item__body__to__time">09:52</div>
                <div className="item__body__to__city">Санкт-Петербург</div>
                <div className="item__body__to__station">Ладожский вокзал</div>
              </div>
            </div>
            <div className="item__body__way-back d-flex justify-content-between">
              <div className="item__body__from">
                <div className="item__body__from__time">00:10</div>
                <div className="item__body__from__city">Москва</div>
                <div className="item__body__from__station">Курский вокзал</div>
              </div>
              <div className="item__body__direction">
                <div className="item__body__direction__time">9 : 42</div>
                <div className="item__body__direction__arrow-back"></div>
              </div>
              <div className="item__body__to">
                <div className="item__body__to__time">09:52</div>
                <div className="item__body__to__city">Санкт-Петербург</div>
                <div className="item__body__to__station">Ладожский вокзал</div>
              </div>
            </div>
          </div>
          <div className="item__options-info">
            <div className="item__options-info__carriages">
              <div className="item__options-info__carriage d-flex align-items-end">
                <span className="carriage__type">Сидячий</span>
                <div className="carriage__available">88</div>
                <div className="carriage__price">от
                  <span>1920</span>
                  <img src={currency} alt="rub"/>
                </div>
              </div>
              <div className="item__options-info__carriage d-flex align-items-end">
                <span className="carriage__type">Плацкарт</span>
                <div className="carriage__available">52</div>
                <div className="carriage__price">от
                  <span>2530</span>
                  <img src={currency} alt="rub"/>
                </div>
              </div>
              <div className="item__options-info__carriage d-flex align-items-end">
                <span className="carriage__type">Купе</span>
                <div className="carriage__available">24</div>
                <div className="carriage__price">от
                  <span>3820</span>
                  <img src={currency} alt="rub"/>
                </div>
              </div>
              <div className="item__options-info__carriage d-flex align-items-end">
                <span className="carriage__type">Люкс</span>
                <div className="carriage__available">15</div>
                <div className="carriage__price">от
                  <span>4950</span>
                  <img src={currency} alt="rub"/>
                </div>
              </div>
            </div>
            <div className="item__options-info__quality d-flex justify-content-end">
              <img src={trainIncludes} alt="" />
            </div>
            <button type="button" className="btn btn-light">Выбрать места</button>
          </div>
        </div>
      </div>
      <div className="pages-control d-flex justify-content-end text-center gap-4">
        <div className="pages-control__item arrows ">
          <div className="arrow-back"></div>
        </div>
        <span className="pages-control__item active">1</span>
        <span className="pages-control__item">2</span>
        <span className="pages-control__item">3</span>
        <div className="pages-control__item arrows">
          <div className="arrow-forward"></div>
        </div>
      </div>
    </section>
  )
}