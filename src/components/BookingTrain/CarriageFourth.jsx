import { useDispatch, useSelector } from "react-redux";
import { nanoid } from 'nanoid';
import { routeActions } from "../../redux/routeSlice";
import { useQuantity } from './useQuantity';

export default function CarriageFourth(props) {
  const dispatch = useDispatch();
  const { coach, coachBack, activeType, activeTypeBack, seatsOneWay, seatsWayBack } = useSelector((store) => store.routeSlice);

  let chosenCoach;
  if(props.type === 'oneWay') chosenCoach = coach;
  if(props.type === 'wayBack') chosenCoach = coachBack;

  let chosenType;
  if(props.type === 'oneWay') chosenType = activeType;
  if(props.type === 'wayBack') chosenType = activeTypeBack;

  let seats;
  if(props.type === 'oneWay') seats = seatsOneWay;
  if(props.type === 'wayBack') seats = seatsWayBack;

  const middle = Math.round(chosenCoach.seats.length / 2);
  const topArr = chosenCoach.seats.slice(0, middle);
  const bottomArr = chosenCoach.seats.slice(middle);

  const [ adults, children, babies, adultsBack, childrenBack, babiesBack ] = useQuantity();

  const handleClick = (data) => {
    if(data.available) {
      const seat = {
        "coach_id": chosenCoach.coach._id,
        "seat_number": data.index,
        "is_child": chosenType === 'adult' ? false : true,
        "include_children_seat": chosenType === 'child' ? true : false,
      }
  
      if(props.type === 'oneWay') {
        if(seats.some(a => a.seat_number === seat.seat_number && a.coach_id === seat.coach_id)) {
          dispatch(routeActions.addSeatWay(seat));
        } else {
          adults.length !== 5 && seat.is_child !== true && dispatch(routeActions.addSeatWay(seat));
          children.length !== 4 && seat.is_child !== false && dispatch(routeActions.addSeatWay(seat));
        }
      }
  
      if(props.type === 'wayBack') {
        if(seats.some(a => a.seat_number === seat.seat_number && a.coach_id === seat.coach_id)) {
          dispatch(routeActions.addSeatBack(seat));
        } else {
          adultsBack.length !== 5 && seat.is_child !== true && dispatch(routeActions.addSeatBack(seat));
          childrenBack.length !== 4 && seat.is_child !== false && dispatch(routeActions.addSeatBack(seat));
        }
      }
    }
  }

  return (
    <div className='carriage-group__train'>
      <div className='carriage-tip'>{Math.floor(Math.random() * 15)} человек выбирают места в этом поезде</div>
      <div className='carriage-train d-flex'>
        <div className='carriage-enter'></div>
        <div className='carriage-toilet'></div>
        <div className='carriage-crew'></div>
        <div className='carriage-seats'>
          <div className='seats-fourth__top d-flex flex-column-reverse flex-wrap'>
            {topArr.map(o => 
              <div key={nanoid()} 
                   className={`seat-item-fourth 
                              ${o.available === false && 'seat-not-available'} 
                              ${seats.some(a => a.seat_number === o.index && a.coach_id === chosenCoach.coach._id) && 'seat-focus'}`}
                   onClick={() => handleClick(o)}
              >{o.index}</div>)}
          </div>
          <div className='seats-fourth__bottom d-flex flex-column-reverse flex-wrap'>
          {bottomArr.map(o => 
              <div key={nanoid()} 
                   className={`seat-item-fourth 
                              ${o.available === false && 'seat-not-available'} 
                              ${seats.some(a => a.seat_number === o.index && a.coach_id === chosenCoach.coach._id) && 'seat-focus'}`}
                   onClick={() => handleClick(o)}
              >{o.index}</div>)}
          </div>
        </div>
        <div className='carriage-toilet'></div>
        <div className='carriage-enter enter-2'></div>
      </div>
    </div>
  )
}