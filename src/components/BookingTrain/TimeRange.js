import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useState } from 'react';

export default function TimeRange(props) {
  const createSliderWithTooltip = Slider.createSliderWithTooltip;
  const Range = createSliderWithTooltip(Slider.Range);
  const [sliderValues, setSliderValues] = useState([0, 24]);

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
    24: {
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
    return `${v}:00`;
    // for(let hour = 0; 0 < hour < 24; hour++) {
    //   if (Math.floor(v/3600) === hour) {
    //     return `${hour}:00`;
    //   }
    // }
  }
  
  return (
    <Range min={0}
           max={24}
           step={1}
           allowCross={false}
           dotStyle = {{display:'none'}}
           marks={marks} 
           onAfterChange={(value) => {
             setSliderValues(value);
             props.getRange(value);
           }}
           defaultValue={sliderValues}
           tipFormatter={tipFormatter}
    />
  )
}