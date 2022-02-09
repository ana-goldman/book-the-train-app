import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { useSelector, useDispatch } from "react-redux";
import { searchActions } from '../../redux/searchSlice';

export default function BasicDatePicker(props) {
  const { dateThere, dateBack } = useSelector((store) => store.searchSlice);
  const dispatch = useDispatch();
  
  const {
    type,
  } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label={'ДД/ММ/ГГ'}
        value={type === 'dateThere' ? dateThere : dateBack}
        onChange={(newValue) => {
          if (newValue !== null) {
            newValue = newValue.toISOString().substr(0, 10);
          }
          type === 'dateThere' ? dispatch(searchActions.setDateThere(newValue)) : dispatch(searchActions.setDateBack(newValue))
          
        }}
        inputFormat={'dd/MM/yyyy'}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}