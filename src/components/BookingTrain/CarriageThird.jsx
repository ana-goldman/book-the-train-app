import { useSelector } from "react-redux";
import { useState } from 'react';
import { nanoid } from 'nanoid';

export default function CarriageThird() {
  const { coach } = useSelector((store) => store.routeSlice);
  const [active, setActive] = useState([]);

  const seatSpaces = Math.floor((coach.seats.length / 6) % 2 === 0 ? coach.seats.length / 6 : coach.seats.length / 6 + 1);
  const topArr = (coach.seats.slice(0, seatSpaces * 4)).reduce(
    function(accumulator, currentValue, currentIndex, array) {
      if (currentIndex % 4 === 0)
        accumulator.push(array.slice(currentIndex, currentIndex + 4));
      return accumulator;
    }, []
  );

  const bottomArr = (coach.seats.slice(seatSpaces * 4)).reduce(
    function(accumulator, currentValue, currentIndex, array) {
      if (currentIndex % 2 === 0)
        accumulator.push(array.slice(currentIndex, currentIndex + 2));
      return accumulator;
    }, []
  );

  const arrToMap = [];
  topArr.forEach(a => {
    arrToMap.push(a.concat(bottomArr[topArr.indexOf(a)]))
  })
  console.log(arrToMap)

  return (
    <div className='carriage-group__train'>
      <div className='carriage-tip'>{Math.floor(Math.random() * 15)} человек выбирают места в этом поезде</div>
      <div className='carriage-train d-flex'>
        <div className='carriage-enter'></div>
        <div className='carriage-toilet'></div>
        <div className='carriage-crew'></div>
        <div className='carriage-seats d-flex justify-content-evenly'>
          {arrToMap.map(o => {
            return ( <div key={nanoid()} className="seats-third-space">
                <div className="seats-space__top d-flex flex-column-reverse flex-wrap">
                  {o[0] && <div 
                    className={`seat-item-third 
                              ${o[0].available === false && 'seat-not-available'} 
                              ${active.includes(o[0]) && 'seat-focus'}`}
                    onClick={() => o[0].available === false ? null : (
                      active.includes(o[0]) ? setActive(active.filter(a => a !== o[0])) : setActive(prev => [...prev, o[0]])
                    )}>{o[0].index}</div>}
                  {o[1] && <div 
                    className={`seat-item-third 
                              ${o[1].available === false && 'seat-not-available'} 
                              ${active.includes(o[1]) && 'seat-focus'}`}
                    onClick={() => o[1].available === false ? null : (
                      active.includes(o[1]) ? setActive(active.filter(a => a !== o[1])) : setActive(prev => [...prev, o[1]])
                    )}>{o[1].index}</div>}
                  {o[2] && <div 
                    className={`seat-item-third 
                              ${o[2].available === false && 'seat-not-available'} 
                              ${active.includes(o[2]) && 'seat-focus'}`}
                    onClick={() => o[2].available === false ? null : (
                      active.includes(o[2]) ? setActive(active.filter(a => a !== o[2])) : setActive(prev => [...prev, o[2]])
                    )}>{o[2].index}</div>}
                  {o[3] && <div 
                    className={`seat-item-third 
                              ${o[3].available === false && 'seat-not-available'} 
                              ${active.includes(o[3]) && 'seat-focus'}`}
                    onClick={() => o[3].available === false ? null : (
                      active.includes(o[3]) ? setActive(active.filter(a => a !== o[3])) : setActive(prev => [...prev, o[3]])
                    )}>{o[3].index}</div>}
                </div>
                <div className="seats-space__bottom d-flex justify-content-evenly">
                  {o[4] && <div 
                    className={`seat-item-third 
                              ${o[4].available === false && 'seat-not-available'} 
                              ${active.includes(o[4]) && 'seat-focus'}`}
                    onClick={() => o[4].available === false ? null : (
                      active.includes(o[4]) ? setActive(active.filter(a => a !== o[4])) : setActive(prev => [...prev, o[4]])
                    )}>{o[4].index}</div>}
                  {o[5] && <div 
                    className={`seat-item-third 
                              ${o[5].available === false && 'seat-not-available'} 
                              ${active.includes(o[5]) && 'seat-focus'}`}
                    onClick={() => o[5].available === false ? null : (
                      active.includes(o[5]) ? setActive(active.filter(a => a !== o[5])) : setActive(prev => [...prev, o[5]])
                    )}>{o[5].index}</div>}
                </div>
              </div>)
          })}
        </div> 
        <div className='carriage-toilet'></div>
        <div className='carriage-enter enter-2'></div>
      </div>
    </div>
  )
}