import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useState } from 'react';

export default function PriceRange() {
  const createSliderWithTooltip = Slider.createSliderWithTooltip;
  const Range = createSliderWithTooltip(Slider.Range);
  const [sliderValues, setSliderValues] = useState([0, 7000]);

  const marks = {
    0: {
      style: {
        left: 0,
        paddingTop: '10px',
        color: '#E5E5E5',
        fontSize: '16px',
      },
      label: 0,
    },
    100: {
      style: {
        left: '95%',
        paddingTop: '10px',
        color: '#E5E5E5',
        fontSize: '16px',
      },
      label: 7000,
    },
  };  
  
  return (
    <Range min={0}
           max={7000}
           allowCross={false}
           dotStyle = {{display:'none'}}
           marks={marks} 
           onAfterChange={(value) => setSliderValues(value)}
           defaultValue={sliderValues}
           tipProps={{visible:true}}
    />
  )
}