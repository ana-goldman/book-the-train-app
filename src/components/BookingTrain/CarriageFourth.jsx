import { useDispatch, useSelector } from "react-redux";
import { nanoid } from 'nanoid';
import { seatsActions } from "../../redux/seatsSlice";
import { useQuantity } from './useQuantity';

export default function CarriageFourth(props) {
  const dispatch = useDispatch();
  const { coach, coachBack, activeType, activeTypeBack } = useSelector((store) => store.routeSlice);
  const { seatsOneWay, seatsWayBack } = useSelector((store) => store.seatsSlice);

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
      let price = 0;
    
      if(data.index % 2 === 0) price = chosenCoach.coach.top_price; 
      else price = chosenCoach.coach.bottom_price;
  
      if(props.type === 'oneWay') {
        if(seats.some(a => a.seat_number === seat.seat_number && a.coach_id === seat.coach_id)) {
          dispatch(seatsActions.addSeatWay(seat));
          dispatch(seatsActions.subtractFromTotal(price));
        } else {
          adults.length !== 5 && seat.is_child !== true && dispatch(seatsActions.addSeatWay(seat)) && dispatch(seatsActions.addToTotal(price));
          children.length !== 4 && seat.is_child !== false && dispatch(seatsActions.addSeatWay(seat));
        }
      }
  
      if(props.type === 'wayBack') {
        if(seats.some(a => a.seat_number === seat.seat_number && a.coach_id === seat.coach_id)) {
          dispatch(seatsActions.addSeatBack(seat));
          dispatch(seatsActions.subtractFromTotalBack(price));
        } else {
          adultsBack.length !== 5 && seat.is_child !== true && dispatch(seatsActions.addSeatBack(seat)) && dispatch(seatsActions.addToTotalBack(price));
          childrenBack.length !== 4 && seat.is_child !== false && dispatch(seatsActions.addSeatBack(seat));
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