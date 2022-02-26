import { useState, useEffect, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import PassengerInfo from './PassengerInfo';
import { nanoid } from 'nanoid';

export default function BodyContainerPassengers() {
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(true);
  const [passengerArr, setPassengerArr] = useState([]);
  const { seatsOneWay } = useSelector((store) => store.seatsSlice);
  const { passengers } = useSelector((store) => store.orderSlice);

  useEffect(() => {
    (passengers.length === seatsOneWay.length) && setDisabled(false);
    (passengers.length !== seatsOneWay.length) && setDisabled(true);
  }, [passengers, seatsOneWay])

  const handleDelete = (key) => {
    // delets everything below needed one
    setPassengerArr(passengerArr.filter(a => a.key !== key)); 
  }

  return (
    <Fragment>
      <section className="body-container">
        {passengerArr}
        <div className='passenger-container'>
          <div className='passenger-container__header d-flex justify-content-between'>
            <div className='passenger-container__header-title d-flex align-items-center'>
              <span className='passenger-title'>Добавить пассажира</span>
            </div>
            <div className='add-passenger' 
                onClick={() => {
                  const key = nanoid();          
                  setPassengerArr(passengerArr.concat(
                  <PassengerInfo key={key} index={passengerArr.length} handleDelete={() => handleDelete(key)}/>
                ))}}
            ></div>
          </div>
        </div>

        <button 
          type="button" 
          className="btn text-uppercase btn-next" 
          onClick={() => {
            navigate('/booking/payment');
          }}
          disabled={disabled}
          >далее</button>
      </section>
    </Fragment>
  )
}