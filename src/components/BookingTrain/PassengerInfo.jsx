import { useState } from 'react';

export default function PassengerInfo(props) {
  const [openPass, setOpenPass] = useState(true);
  const [passenger, setPassenger] = useState({
    is_adult: true,
    first_name: '',
    last_name: '',
    patronymic: '',
    gender: true,
    birthday: '',
    document_type: 'Паспорт',
    document_data: ''
  });
  const {
    index,
    handleDelete
  } = props;

  return (
    <div className='passenger-container'>
      <div className={`passenger-container__header d-flex justify-content-between ${openPass && 'show'}`}>
        <div className='passenger-container__header-title d-flex align-items-center'>
          <div className={`drop-down-toggle__passenger ${openPass && 'open'}`} onClick={() => setOpenPass(openPass === false ? true : false)}></div>
          <span className='passenger-title'>Пассажир {index}</span>
        </div>
        <div className='remove-passenger' onClick={handleDelete}></div>
      </div>
      <form className='passenger-container__body'>
        <div className='passenger-body__info d-flex flex-column'>
          <select className="form-select" defaultValue={true} onChange={(e) => setPassenger({...passenger,  is_adult: e.target.value})}>
            <option value={true}>Взрослый</option>
            <option value={false}>Детский</option>
          </select>
          <div className='passenger__main-info d-flex justify-content-between'>
            <div className='main-info__item'>
              <label htmlFor="last-name" className="form-label">Фамилия</label>
              <input className="form-control" id="last-name" placeholder="" value={passenger.last_name} onChange={(e) => setPassenger({...passenger,  last_name: e.target.value})} required/>
            </div>
            <div className='main-info__item'>
              <label htmlFor="first-name" className="form-label">Имя</label>
              <input className="form-control" id="first-name" placeholder="" value={passenger.first_name} onChange={(e) => setPassenger({...passenger,  first_name: e.target.value})} required/>
            </div>
            <div className='main-info__item'>
              <label htmlFor="patronymic" className="form-label">Отчество</label>
              <input className="form-control" id="patronymic" placeholder="" value={passenger.patronymic} onChange={(e) => setPassenger({...passenger,  patronymic: e.target.value})}/>
            </div>
          </div>
          <div className='passenger__sub-info d-flex'>
            <div className='sub-info__item'>
              <label htmlFor="gender" className="form-label">Пол</label>
              <div className='gender gender-group' onChange={(e) => setPassenger({...passenger,  gender: e.target.value})}>
                <label>
                  <input type="radio" name="options" value={true} defaultChecked/>
                  <span>М</span>
                </label>
                <label>
                  <input className='female' type="radio" value={false} name="options"/>
                  <span>Ж</span>
                </label>
                </div>
              </div>
            <div className='sub-info__item'>
              <label htmlFor="birth-date" className="form-label">Дата рождения</label>
              <input className="form-control" id="birth-date" placeholder="ДД.ММ.ГГ" value={passenger.birthday} onChange={(e) => setPassenger({...passenger,  birthday: e.target.value})}/>
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
            <select className="form-select" defaultValue={"Паспорт"} value={passenger.document_type} onChange={(e) => setPassenger({...passenger,  document_type: e.target.value})}>
              <option value="Паспорт">Паспорт РФ</option>
              <option value="Свидетельство">Свидетельство о рождении</option>
            </select>
          </div>
          {passenger.document_type === 'Паспорт' && <div className='document__item'>
            <label htmlFor="series" className="form-label">Серия</label>
            <input className="form-control" id="series" type="tel" maxLength={4} placeholder="_ _ _ _" required/>
          </div>}
          {passenger.document_type === 'Паспорт' && <div className='document__item'>
            <label htmlFor="number" className="form-label">Номер</label>
            <input className="form-control" id="number" type="tel" maxLength={6} placeholder="_ _ _ _ _ _" required/>
          </div>}
          {passenger.document_type === 'Свидетельство' && <div className='document__item'>
            <label htmlFor="number" className="form-label">Номер</label>
            <input className="form-control" id="number" type="text" maxLength={12} required/>
          </div>}
        </div>

        <div className='passenger-body__next text-end'>
          <button 
            type="button" 
            className="btn btn-next-passenger" 
            onClick={() => console.log(passenger)}
          >Следующий пассажир</button>
        </div>
      </form>
    </div>
  )
}