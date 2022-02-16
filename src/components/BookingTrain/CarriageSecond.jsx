import { useSelector } from "react-redux";
import { useState } from 'react';
import { nanoid } from 'nanoid';

export default function CarriageSecond(props) {
  const { coach, coachBack, seatsOneWay, seatsWayBack } = useSelector((store) => store.routeSlice);
  const [active, setActive] = useState([]);

  let chosenCoach;
  if(props.type === 'oneWay') chosenCoach = coach;
  if(props.type === 'wayBack') chosenCoach = coachBack;

  return (
    <div className='carriage-group__train'>{console.log(coach)}
      <div className='carriage-tip'>{Math.floor(Math.random() * 15)} человек выбирают места в этом поезде</div>
      <div className='carriage-train d-flex'>
        <div className='carriage-enter'></div>
        <div className='carriage-toilet'></div>
        <div className='carriage-crew'></div>
        <div className='carriage-seats d-flex justify-content-evenly'>
        {chosenCoach.seats.reduce(
            function(accumulator, currentValue, currentIndex, array) {
              if (currentIndex % 4 === 0)
                accumulator.push(array.slice(currentIndex, currentIndex + 4));
              return accumulator;
            }, []).map(p => {
              return ( <div key={nanoid()} className="seats-third-space">
                <div className="seats-space__top d-flex flex-column-reverse flex-wrap">
                  {p[0] && <div 
                    className={`seat-item-second 
                              ${p[0].available === false && 'seat-not-available'} 
                              ${active.includes(p[0]) && 'seat-focus'}`}
                    onClick={() => p[0].available === false ? null : (
                      active.includes(p[0]) ? setActive(active.filter(a => a !== p[0])) : setActive(prev => [...prev, p[0]])
                    )}>{p[0].index}</div>}
                  {p[1] && <div 
                    className={`seat-item-second 
                              ${p[1].available === false && 'seat-not-available'} 
                              ${active.includes(p[1]) && 'seat-focus'}`}
                    onClick={() => p[1].available === false ? null : (
                      active.includes(p[1]) ? setActive(active.filter(a => a !== p[1])) : setActive(prev => [...prev, p[1]])
                    )}>{p[1].index}</div>}
                  {p[2] && <div 
                    className={`seat-item-second 
                              ${p[2].available === false && 'seat-not-available'} 
                              ${active.includes(p[2]) && 'seat-focus'}`}
                    onClick={() => p[2].available === false ? null : (
                      active.includes(p[2]) ? setActive(active.filter(a => a !== p[2])) : setActive(prev => [...prev, p[2]])
                    )}>{p[2].index}</div>}
                  {p[3] && <div 
                    className={`seat-item-second 
                              ${p[3].available === false && 'seat-not-available'} 
                              ${active.includes(p[3]) && 'seat-focus'}`}
                    onClick={() => p[3].available === false ? null : (
                      active.includes(p[3]) ? setActive(active.filter(a => a !== p[3])) : setActive(prev => [...prev, p[3]])
                    )}>{p[3].index}</div>}
                </div>
                <div className="seats-space__bottom d-flex justify-content-evenly"></div>
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