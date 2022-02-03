import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useState } from 'react';

export default function TimeRange() {
  const createSliderWithTooltip = Slider.createSliderWithTooltip;
  const Range = createSliderWithTooltip(Slider.Range);
  const [sliderValues, setSliderValues] = useState([0, 86400]);

  const marks = {
    0: {
      style: {
        left: 0,
        paddingTop: '5px',
        color: '#E5E5E5',
        fontSize: '16px',
      },
      label: '00:00',
    },
    86400: {
      style: {
        left: '95%',
        paddingTop: '5px',
        color: '#E5E5E5',
        fontSize: '16px',
      },
      label: '24:00',
    },
  };  

  function tipFormatter(v) {
    let min;

    if (Math.floor(v/1800)%2 === 0) {
      min = '00'
    } else min = '30';

    for(let hour = 0; 0 < hour < 24; hour++) {
      if (Math.floor(v/3600) === hour) {
        return `${hour}:${min}`;
      }
    }

  }
  
  return (
    <Range min={0}
           max={86400} //24h in sec
           step={1800} //30min in sec
           allowCross={false}
           dotStyle = {{display:'none'}}
           marks={marks} 
           onAfterChange={(value) => setSliderValues(value)}
           defaultValue={sliderValues}
           tipFormatter={tipFormatter}
    />
  )
}