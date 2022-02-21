import { useState, useEffect, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import PassengerInfo from './PassengerInfo';
import { nanoid } from 'nanoid';

export default function BodyContainerPassengers() {
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(true);
  const [passengerArr, setPassengerArr] = useState([{}]);
  const { seatsOneWay } = useSelector((store) => store.seatsSlice);

  useEffect(() => {
    (passengerArr.length === seatsOneWay.length) && setDisabled(true);
  }, [passengerArr, seatsOneWay])

  const handleDelete = (index) => {
    setPassengerArr(passengerArr.filter(a => passengerArr.indexOf(a) !== index)); 
  }

  return (
    <Fragment>
      <section className="body-container">
        {passengerArr.map((a) => 
          <PassengerInfo key={nanoid()}
                         index={passengerArr.indexOf(a) + 1} 
                         handleDelete={() => handleDelete(passengerArr.indexOf(a))}/>)}
        <div className='passenger-container'>
          <div className='passenger-container__header d-flex justify-content-between'>
            <div className='passenger-container__header-title d-flex align-items-center'>
              <span className='passenger-title'>Добавить пассажира</span>
            </div>
            <div className='add-passenger' onClick={() => setPassengerArr(prev => [...prev, {}])}></div>
          </div>
        </div>

        <button 
          type="button" 
          className="btn btn-light text-uppercase btn-next" 
          onClick={() => {
            // navigate('/booking/payment');
          }}
          disabled={disabled}
          >далее</button>
      </section>
    </Fragment>
  )
}