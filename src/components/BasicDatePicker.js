// import { useState } from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { useSelector, useDispatch } from "react-redux";
import { searchActions } from '../redux/searchSlice';

export default function BasicDatePicker(props) {
  const { dateThere, dateBack } = useSelector((store) => store.searchSlice);
  // const [value, setValue] = useState(null);
  const dispatch = useDispatch();
  
  const {
    label,
    type,
  } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label={label}
        value={type === 'dateThere' ? dateThere : dateBack}
        onChange={(newValue) => {
          // setValue(newValue);
          const date = newValue.toISOString().substr(0, 10);
          type === 'dateThere' ? dispatch(searchActions.setDateThere(date)) : dispatch(searchActions.setDateBack(date))
        }}
        inputFormat={'dd/MM/yyyy'}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}