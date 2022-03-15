import checkError from '../../images/check-error.svg';
import checkOk from '../../images/check-ok.svg';
import { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { orderActions } from '../../redux/orderSlice';

export default function PassengerInfo(props) {
  const dispatch = useDispatch();
  const [openPass, setOpenPass] = useState(false);
  const [error, setError] = useState(false);
  const [ok, setOk] = useState(false);
  const [isAdult, setIsAdult] = useState((props.passenger && props.passenger.is_adult) ?? true);
  const [firstName, setFirstName] = useState((props.passenger && props.passenger.first_name) ?? '');
  const [lastName, setLastName] = useState((props.passenger && props.passenger.last_name ) ?? '');
  const [patronymic, setPatronymic] = useState((props.passenger && props.passenger.patronymic) ?? '');
  const [gender, setGender] = useState((props.passenger && props.passenger.gender) ?? true);
  const [birthday, setBirthday] = useState((props.passenger && props.passenger.birthday) ?? '');
  const [documentType, setDocumentType] = useState((props.passenger && props.passenger.document_type) ?? 'Паспорт');
  const [documentSeries, setDocumentSeries] = useState((props.passenger && props.passenger.document_data.slice(0,4)) ?? '');
  const [documentNumber, setDocumentNumber] = useState((props.passenger && props.passenger.document_data.slice(5)) ?? '');

  const passenger = {
      is_adult: isAdult,
      first_name: firstName,
      last_name: lastName,
      patronymic: patronymic,
      gender: gender,
      birthday: birthday,
      document_type: documentType,
      document_data: (documentSeries && documentSeries + ' ' + documentNumber) || documentNumber
    };

  useEffect(() => {
    setOk(false)
    setError(false)
  }, [documentType, documentNumber, documentSeries])

  useEffect(() => {
    if (ok) dispatch(orderActions.addPassenger(passenger));
  }, [ok])
  

  const handleCheck = (e) => {
    e.preventDefault();
    if (passenger.document_type === 'Свидетельство') {
      /[XIVLMC][XIVLMC][XIVLMC][XIVLMC]-[а-яА-Я][а-яА-Я]-[0-9][0-9][0-9][0-9][0-9][0-9]/.test(passenger.document_data) ?
      (setOk(true) && setError(false)) : setError(true);
    }

    if (passenger.document_type === 'Паспорт') {
      passenger.document_data.length === 11 ? 
      (setOk(true) && setError(false)) : (setError(true) && setOk(false));
    }
  }

  // const handleDelete = () => {
  //   props.handleDelete(props.id)
  //   dispatch(orderActions.removePassenger(passenger)); 
  // }

  return (
    <div className='passenger-container'>
      <div className={`passenger-container__header d-flex justify-content-between ${openPass && 'show'}`}>
        <div className='passenger-container__header-title d-flex align-items-center'>
          <div className={`drop-down-toggle__passenger ${openPass && 'open'}`} onClick={() => setOpenPass(openPass === false ? true : false)}></div>
          <span className='passenger-title'>Пассажир {props.index + 1}</span>
        </div>
        <div className='remove-passenger' onClick={() => props.handleDelete(passenger, props.id)}></div>
      </div>
      <form className='passenger-container__body' onSubmit={handleCheck}>
        <div className='passenger-body__info d-flex flex-column'>
          <select className="form-select" value={isAdult} onChange={(e) => setIsAdult(e.target.value === 'true' ? true : false)}>
            <option value={true}>Взрослый</option>
            <option value={false}>Детский</option>
          </select>
          <div className='passenger__main-info d-flex justify-content-between'>
            <div className='main-info__item'>
              <label htmlFor="last-name" className="form-label">Фамилия</label>
              <input className="form-control" id="last-name" type='text' placeholder="" value={lastName} onChange={(e) => setLastName(e.target.value)} required/>
            </div>
            <div className='main-info__item'>
              <label htmlFor="first-name" className="form-label">Имя</label>
              <input className="form-control" id="first-name" placeholder="" value={firstName} onChange={(e) => setFirstName( e.target.value)} required/>
            </div>
            <div className='main-info__item'>
              <label htmlFor="patronymic" className="form-label">Отчество</label>
              <input className="form-control" id="patronymic" placeholder="" value={patronymic} onChange={(e) => setPatronymic(e.target.value)}/>
            </div>
          </div>
          <div className='passenger__sub-info d-flex'>
            <div className='sub-info__item'>
              <label htmlFor="gender" className="form-label">Пол</label>
              <div className='gender gender-group'>
                <label>
                  <input type="radio" value={true} checked={gender === true} onChange={(e) => setGender(e.target.value === 'true' ? true : false)} name="options" />
                  <span>М</span>
                </label>
                <label>
                  <input className='female' type="radio" value={false} checked={gender === false} onChange={(e) => setGender(e.target.value === 'true' ? true : false)} name="options"/>
                  <span>Ж</span>
                </label>
                </div>
              </div>
            <div className='sub-info__item'>
              <label htmlFor="birth-date" className="form-label">Дата рождения</label>
              <input className="form-control" id="birth-date" placeholder="ДД/ММ/ГГ" value={birthday} maxLength={10}
                onChange={(e) => setBirthday(e.target.value)} 
                onKeyDown={(e) => {
                  if (e.key !== 'Backspace' && (e.target.value.length === 2 || e.target.value.length === 5)){
                    e.target.value += '.';
                    setBirthday(e.target.value);
                  }
                }} required/>
            </div>
          </div>
          <div className="disabled form-check">
            <input className="form-check-input" type="checkbox" value="" id="disabled"/>
            <label className="form-check-label" htmlFor="disabled">ограниченная подвижность</label>
          </div>
        </div>

        <div className='passenger-body__document d-flex'>
          <div className='document__item'>
            <label htmlFor="birth-date" className="form-label">Тип документа</label>
            <select className="form-select" value={documentType} onChange={(e) => setDocumentType(e.target.value)}>
              <option value="Паспорт">Паспорт РФ</option>
              <option value="Свидетельство">Свидетельство о рождении</option>
            </select>
          </div>
          {documentType === 'Паспорт' && <div className='document__item'>
            <label htmlFor="series" className="form-label">Серия</label>
            <input className="form-control" id="series" type="tel" value={documentSeries} maxLength={4} placeholder="_ _ _ _" onChange={(e) => setDocumentSeries( e.target.value)} required/>
          </div>}
          {documentType === 'Паспорт' && <div className='document__item'>
            <label htmlFor="number" className="form-label">Номер</label>
            <input className="form-control" id="number" type="tel" value={documentNumber} maxLength={6} placeholder="_ _ _ _ _ _" onChange={(e) => setDocumentNumber(e.target.value)} required/>
          </div>}
          {documentType === 'Свидетельство' && <div className='document__item'>
            <label htmlFor="number" className="form-label">Номер</label>
            <input className="form-control" id="number" type="text" maxLength={14} 
              onChange={(e) =>  {
                setOk(false);
                setError(false);
                setDocumentNumber(e.target.value)
              }}
              onKeyDown={(e) => {
                if (e.key !== 'Backspace' && (e.target.value.length === 4 || e.target.value.length === 7)){
                  e.target.value += '-';
                  setDocumentNumber(e.target.value);
                }
              }} required/>
          </div>}
        </div>

        <div className={`passenger-body__next d-flex justify-content-between ${error && 'check-error'} ${ok && 'check-ok'}`}>
          {error && <div className='d-flex align-items-center'>
            <img src={checkError} alt="" />
            {documentType === 'Свидетельство' && <span>Номер свидетельства о рожденни указан некорректно<br/>Пример: <b>VIII-ЫП-123456</b></span>}
            {documentType === 'Паспорт' && <span>Номер паспорта указан некорректно<br/>Пример: <b>1234 567890</b></span>}
          </div>}
          {ok && <div className='d-flex align-items-center'>
            <img src={checkOk} alt="" />
            <span>Готово</span>
          </div>}
          <button 
            type="submit" 
            className="btn btn-next-passenger" 
          >Следующий пассажир</button>
        </div>
      </form>
    </div>
  )
}