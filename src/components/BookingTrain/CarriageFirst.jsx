import { useDispatch, useSelector } from "react-redux";
import { nanoid } from 'nanoid';
import { routeActions } from "../../redux/routeSlice";
import { useQuantity } from './useQuantity';

export default function CarriageFirst(props) {
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
        <div className='carriage-seats d-flex justify-content-evenly'>
          {chosenCoach.seats.reduce(
            function(accumulator, currentValue, currentIndex, array) {
              if (currentIndex % 2 === 0)
                accumulator.push(array.slice(currentIndex, currentIndex + 2));
              return accumulator;
            }, []).map(p => {
              return (<div key={nanoid()} className="seats-first-space d-flex">
                <div className="seats-space__top d-flex flex-column-reverse flex-wrap">
                  {p[0] && <div 
                    className={`seat-item-first 
                              ${p[0].available === false && 'seat-not-available'} 
                              ${seats.some(a => a.seat_number === p[0].index && a.coach_id === chosenCoach.coach._id) && 'seat-focus'}`}
                    onClick={() => handleClick(p[0])}
                    >{p[0].index}</div>}
                  {p[1] && <div 
                    className={`seat-item-first 
                              ${p[1].available === false && 'seat-not-available'} 
                              ${seats.some(a => a.seat_number === p[1].index && a.coach_id === chosenCoach.coach._id) && 'seat-focus'}`}
                    onClick={() => handleClick(p[1])}
                    >{p[1].index}</div>}
                </div>
              </div>)
            }
          )}     
        </div> 
        <div className='carriage-toilet'></div>
        <div className='carriage-enter enter-2'></div>
      </div>
    </div>
  )
}