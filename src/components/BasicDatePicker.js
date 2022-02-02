import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { useDispatch } from "react-redux";
import { searchActions } from '../redux/searchSlice';

export default function BasicDatePicker(props) {
  const [value, setValue] = React.useState(null);
  const dispatch = useDispatch();
  
  const {
    label,
    type,
  } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label={label}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          const date = newValue.toISOString().substr(0, 10);
          type === 'dateThere' ? dispatch(searchActions.setDateThere(date)) : dispatch(searchActions.setDateBack(date))
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}