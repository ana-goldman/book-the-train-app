import wayArrow from '../../images/way-arrow.svg';
import wayClock from '../../images/way-clock.svg';
import wayTrain from '../../images/way-train.svg';
import fourthClass from '../../images/carriage-sidyachii.svg';
import thirdClass from '../../images/carriage-platckart.svg';
import secondClass from '../../images/carriage-kupe.svg';
import firstClass from '../../images/carriage-lux.svg';
import { useState, useEffect, Fragment } from 'react';
import { dateConverter, toWordsTime } from '../common/timeConverters';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { fetchTrain, fetchTrainBack } from '../../redux/routeSlice';
import Carriage from './Carriage';
import { routeActions } from '../../redux/routeSlice';
import { useQuantity } from './useQuantity';

export default function BodyContainerTrains() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(true);
  const [open, setOpen] = useState('');
  const [openBack, setOpenBack] = useState('');
  const { route, train, trainBack, activeType, activeTypeBack } = useSelector((store) => store.routeSlice);
  const { seatsOneWay, seatsWayBack } = useSelector((store) => store.seatsSlice);

  useEffect(() => {
    (seatsOneWay.length < 1 || seatsWayBack.length < 1) && setDisabled(true);
    (seatsOneWay.length === 1 || seatsWayBack.length === 1) && setDisabled(false);
  }, [seatsOneWay.length, seatsWayBack.length])

  const coaches = [];
  const coachesBack = [];

  useEffect(() => { 
    dispatch(fetchTrain(`${process.env.REACT_APP_BASE_URL}routes/${route.departure._id}/seats`));
    route.arrival && dispatch(fetchTrainBack(`${process.env.REACT_APP_BASE_URL}routes/${route.arrival._id}/seats`));
  }, [dispatch, route]);

  const handleClickThere = (data) => {
    setOpen(data);
    train.map(o => o.coach.class_type === data ? coaches.push(o) : null);
    dispatch(routeActions.setCoach(coaches[0]));
  }

  const handleClickBack = (data) => {
    setOpenBack(data);
    trainBack.forEach(o => o.coach.class_type === data ? coachesBack.push(o) : null);
    dispatch(routeActions.setCoachBack(coachesBack[0]));
  }

  const [ adults, children, babies, adultsBack, childrenBack, babiesBack ] = useQuantity();
  
  return (
    <Fragment>
      <section className="body-container">
        <h3 className='text-uppercase'>Выбор мест</h3>
        <div className='one-way-group'>
          <div className='way__go-back one-way__go-back'>
            <img src={wayArrow} alt=""/>
            <button type="button" className="btn btn-light btn-back" onClick={() => navigate('/booking')}>Выбрать другой поезд</button>
          </div>
          <div className='way__route d-flex justify-content-between align-items-center'>
            <div className='d-flex align-items-center'>
              <img src={wayTrain} alt="" />
              <div>
                <div className="item__short-info__number">{route.departure.train.name}</div>
                <div className="item__short-info__direction">
                  <span className='direction-from text-capitalize'>{route.departure.from.city.name} &#x2192;<br/></span>
                  <span className='direction-to text-capitalize'>{route.departure.to.city.name}</span>
                </div>
              </div>
            </div>
            <div className="item__body__from">
              <div className="item__body__from__time">{dateConverter(route.departure.from.datetime)}</div>
              <div className="item__body__from__city text-capitalize">{route.departure.from.city.name}</div>
              <div className="item__body__from__station">{route.departure.from.railway_station_name}</div>
            </div>
            <div className="item__body__direction">
              <div className="item__body__direction__arrow"></div>
            </div>
            <div className="item__body__to">
              <div className="item__body__to__time">{dateConverter(route.departure.to.datetime)}</div>
              <div className="item__body__to__city text-capitalize">{route.departure.to.city.name}</div>
              <div className="item__body__to__station">{route.departure.to.railway_station_name}</div>
            </div>
            <div className='d-flex'>
              <img src={wayClock} alt="" />
              {/* no key */}
              <div className='route-time'>{toWordsTime(route.departure.duration)}</div> 
            </div>
          </div>
          <div className='way__quantity'>
            <h4>Количество билетов</h4>
            <div className='d-flex'>
              <div className={`quantity-item ${activeType === 'adult' && 'active'}`} onClick={() => dispatch(routeActions.setActiveType('adult'))}>
                <div className='quantity-item__input-group d-flex'>
                  <p>Взрослых — {adults.length}</p>
                </div>
                <p className='input-group__text'>Можно добавить еще {5 - adults.length} пассажиров </p>
              </div>
              <div className={`quantity-item ${activeType === 'child' && 'active'}`} onClick={() => dispatch(routeActions.setActiveType('child'))}>
                <div className='quantity-item__input-group d-flex'>
                  <p>Детских — {children.length}</p>
                </div>
                <p className='input-group__text'>Можно добавить еще {4 - children.length} детей до 10 лет.Свое место в вагоне, как у взрослых, но дешевле в среднем на 50-65%</p>
              </div>
              <div className={`quantity-item ${activeType === 'baby' && 'active'}`} onClick={() => dispatch(routeActions.setActiveType('baby'))}>
                <div className='quantity-item__input-group d-flex'>
                  <p>Детских «без места» — {babies.length}</p>
                </div>
              </div>
            </div>
          </div>
          <div className='way__carriage-type'>
            <h4>Тип вагона</h4>
            <div className='d-flex justify-content-evenly'>
              <div className={`carriage-type d-flex flex-column align-items-center ${open === 'fourth' && 'active'}`}
                   onClick={() => handleClickThere('fourth')}>
                <img src={fourthClass} alt="" />
                <span>Сидячий</span>
              </div>
              <div className={`carriage-type d-flex flex-column align-items-center ${open === 'third' && 'active'}`}
                   onClick={() => handleClickThere('third')}>
                <img src={thirdClass} alt="" />
                <span>Плацкарт</span>
              </div>
              <div className={`carriage-type d-flex flex-column align-items-center ${open === 'second' && 'active'}`}
                   onClick={() => handleClickThere('second')}>
                <img src={secondClass} alt="" />
                <span>Купе</span>
              </div>
              <div className={`carriage-type d-flex flex-column align-items-center ${open === 'first' && 'active'}`}
                   onClick={() => handleClickThere('first')}>
                <img src={firstClass} alt="" />
                <span>Люкс</span>
              </div>
            </div>
          </div>
          <div className='carriage-group'>
            {open === 'first' && route.departure.have_first_class && <Carriage class={open} type={'oneWay'}/>}
            {open === 'second' && route.departure.have_second_class && <Carriage class={open} type={'oneWay'}/>}
            {open === 'third' && route.departure.have_third_class && <Carriage class={open} type={'oneWay'}/>}
            {open === 'fourth' && route.departure.have_fourth_class && <Carriage class={open} type={'oneWay'}/>}
          </div>
        </div>
        {route.arrival && <div className='way-back-group'>
          <div className='way__go-back way-back__go-back justify-content-end'>
            <img src={wayArrow} alt=""/>
            <button type="button" className="btn btn-light btn-back" onClick={() => navigate('/booking')}>Выбрать другой поезд</button>
          </div>
          <div className='way__route d-flex justify-content-between align-items-center'>
            <div className='d-flex align-items-center'>
              <img src={wayTrain} alt="" />
              <div>
                <div className="item__short-info__number">{route.arrival.train.name}</div>
                <div className="item__short-info__direction">
                  <span className='direction-from text-capitalize'>{route.arrival.from.city.name} &#x2192;<br/></span>
                  <span className='direction-to text-capitalize'>{route.arrival.to.city.name}</span>
                </div>
              </div>
            </div>
            <div className="item__body__to">
              <div className="item__body__to__time">{dateConverter(route.arrival.to.datetime)}</div>
              <div className="item__body__to__city text-capitalize">{route.arrival.to.city.name}</div>
              <div className="item__body__to__station">{route.arrival.to.railway_station_name}</div>
            </div>
            <div className="item__body__direction">
              <div className="item__body__direction__arrow-back"></div>
            </div>
            <div className="item__body__from">
              <div className="item__body__from__time">{dateConverter(route.arrival.from.datetime)}</div>
              <div className="item__body__from__city text-capitalize">{route.arrival.from.city.name}</div>
              <div className="item__body__from__station">{route.arrival.from.railway_station_name}</div>
            </div>
            <div className='d-flex'>
              <img src={wayClock} alt="" />
              <div className='route-time'>{toWordsTime(route.arrival.duration)}</div> 
            </div>
          </div>
          <div className='way__quantity'>
            <h4>Количество билетов</h4>
            <div className='d-flex'>
              <div className={`quantity-item ${activeTypeBack === 'adult' && 'active'}`} onClick={() => dispatch(routeActions.setActiveTypeBack('adult'))}>
                <div className='quantity-item__input-group d-flex'>
                  <p>Взрослых — {adultsBack.length}</p>
                </div>
                <p className='input-group__text'>Можно добавить еще {5 - adultsBack.length} пассажиров </p>
              </div>
              <div className={`quantity-item ${activeTypeBack === 'child' && 'active'}`} onClick={() => dispatch(routeActions.setActiveTypeBack('child'))}>
                <div className='quantity-item__input-group d-flex'>
                  <p>Детских — {childrenBack.length}</p>
                </div>
                <p className='input-group__text'>Можно добавить еще {4 - childrenBack.length} детей до 10 лет.Свое место в вагоне, как у взрослых, но дешевле в среднем на 50-65%</p>
              </div>
              <div className={`quantity-item ${activeTypeBack === 'baby' && 'active'}`} onClick={() => dispatch(routeActions.setActiveTypeBack('baby'))}>
                <div className='quantity-item__input-group d-flex'>
                  <p>Детских «без места» — {babiesBack.length}</p>
                </div>
              </div>
            </div>
          </div>
          <div className='way__carriage-type'>
            <h4>Тип вагона</h4>
            <div className='d-flex justify-content-evenly'>
              <div className={`carriage-type d-flex flex-column align-items-center ${openBack === 'fourth' && 'active'}`}
                   onClick={() => handleClickBack('fourth')}>
                <img src={fourthClass} alt="" />
                <span>Сидячий</span>
              </div>
              <div className={`carriage-type d-flex flex-column align-items-center ${openBack === 'third' && 'active'}`}
                   onClick={() => handleClickBack('third')}>
                <img src={thirdClass} alt="" />
                <span>Плацкарт</span>
              </div>
              <div className={`carriage-type d-flex flex-column align-items-center ${openBack === 'second' && 'active'}`}
                   onClick={() => handleClickBack('second')}>
                <img src={secondClass} alt="" />
                <span>Купе</span>
              </div>
              <div className={`carriage-type d-flex flex-column align-items-center ${openBack === 'first' && 'active'}`}
                   onClick={() => handleClickBack('first')}>
                <img src={firstClass} alt="" />
                <span>Люкс</span>
              </div>
            </div>
          </div>
          <div className='carriage-group'>
            {(openBack === 'first' && route.arrival.have_first_class) && <Carriage class={openBack} type={'wayBack'}/>}
            {(openBack === 'second' && route.arrival.have_second_class) && <Carriage class={openBack} type={'wayBack'}/>}
            {(openBack === 'third' && route.arrival.have_third_class) && <Carriage class={openBack} type={'wayBack'}/>}
            {(openBack === 'fourth' && route.arrival.have_fourth_class) && <Carriage class={openBack} type={'wayBack'}/>}
          </div>
        </div>}
        <button 
          type="button" 
          className="btn btn-light text-uppercase btn-next" 
          onClick={() => {
            navigate('/booking/passengers');
          }}
          disabled={disabled}
          >далее</button>
      </section>
    </Fragment>
  )
}