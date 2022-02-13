import { useSelector } from "react-redux";
import { useState } from 'react';
import { nanoid } from 'nanoid';

export default function CarriageFirst() {
  const { coach } = useSelector((store) => store.routeSlice);
  const [active, setActive] = useState([]);

  return (
    <div className='carriage-group__train'>
      <div className='carriage-tip'>{Math.floor(Math.random() * 15)} человек выбирают места в этом поезде</div>
      <div className='carriage-train d-flex'>
        <div className='carriage-enter'></div>
        <div className='carriage-toilet'></div>
        <div className='carriage-crew'></div>
        <div className='carriage-seats d-flex justify-content-evenly'>
          {coach.seats.reduce(
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
                              ${active.includes(p[0]) && 'seat-focus'}`}
                    onClick={() => p[0].available === false ? null : (
                      active.includes(p[0]) ? setActive(active.filter(a => a !== p[0])) : setActive(prev => [...prev, p[0]])
                    )}
                    >{p[0].index}</div>}
                  {p[1] && <div 
                  className={`seat-item-first 
                              ${p[1].available === false && 'seat-not-available'} 
                              ${active.includes(p[1]) && 'seat-focus'}`}
                  onClick={() => p[1].available === false ? null : (
                    active.includes(p[1]) ? setActive(active.filter(a => a !== p[1])) : setActive(prev => [...prev, p[1]])
                  )}
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