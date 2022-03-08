import { useState, useEffect, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import PassengerInfo from './PassengerInfo';
import { nanoid } from 'nanoid';
import { orderActions } from '../../redux/orderSlice';

export default function BodyContainerPassengers() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(true);
  const [passengerArr, setPassengerArr] = useState([]);
  const { seatsOneWay } = useSelector((store) => store.seatsSlice);
  const { passengers } = useSelector((store) => store.orderSlice);

  useEffect(() => {
    (passengers.length === seatsOneWay.length) && setDisabled(false);
    (passengers.length !== seatsOneWay.length) && setDisabled(true);
  }, [passengers, seatsOneWay])

  const handleDelete = (pass, id) => {
    // delets everything below needed one
    const filteredArr = passengerArr.filter(item => item.props.id !== id);
    setPassengerArr(filteredArr);
    dispatch(orderActions.removePassenger(pass)); 
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
                  const id = nanoid();          
                  setPassengerArr(passengerArr.concat(
                  <PassengerInfo key={id} index={passengerArr.length} id={id} handleDelete={(pass, id) => handleDelete(pass, id)}/>
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