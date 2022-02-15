import { useSelector } from "react-redux";
import { useState } from 'react';
import { nanoid } from 'nanoid';

export default function CarriageFourth(props) {
  const { coach, coachBack } = useSelector((store) => store.routeSlice);
  const [active, setActive] = useState([]);

  let chosenCoach;
  if(props.type === 'oneWay') chosenCoach = coach;
  if(props.type === 'wayBack') chosenCoach = coachBack;

  const middle = Math.round(chosenCoach.seats.length / 2);
  const topArr = chosenCoach.seats.slice(0, middle);
  const bottomArr = chosenCoach.seats.slice(middle);

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
                              ${active.includes(o) && 'seat-focus'}`}
                   onClick={() => o.available === false ? null : (
                    active.includes(o) ? setActive(active.filter(a => a !== o)) : setActive(prev => [...prev, o])
                   )}
              >{o.index}</div>)}
          </div>
          <div className='seats-fourth__bottom d-flex flex-column-reverse flex-wrap'>
          {bottomArr.map(o => 
              <div key={nanoid()} 
                   className={`seat-item-fourth 
                              ${o.available === false && 'seat-not-available'} 
                              ${active.includes(o) && 'seat-focus'}`}
                   onClick={() => o.available === false ? null : (
                    active.includes(o) ? setActive(active.filter(a => a !== o)) : setActive(prev => [...prev, o])
                   )}
              >{o.index}</div>)}
          </div>
        </div>
        <div className='carriage-toilet'></div>
        <div className='carriage-enter enter-2'></div>
      </div>
    </div>
  )
}