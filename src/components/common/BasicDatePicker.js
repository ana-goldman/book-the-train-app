import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useSelector, useDispatch } from "react-redux";
import { searchActions } from '../../redux/searchSlice';

export default function BasicDatePicker(props) {
  const { dateThere, dateBack } = useSelector((store) => store.searchSlice);
  const dispatch = useDispatch();
  
  const {
    type,
  } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={'ДД/ММ/ГГ'}
        value={type === 'dateThere' ? dateThere : dateBack}
        onChange={(newValue) => {
          if (newValue !== null) {
            newValue = newValue.toISOString().substr(0, 10);
          }
          type === 'dateThere' ? dispatch(searchActions.setDateThere(newValue)) : dispatch(searchActions.setDateBack(newValue))
          
        }}
        inputFormat={'DD/MM/YYYY'}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}