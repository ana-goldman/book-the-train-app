import { useState } from 'react';

export default function ModalError(props) {
  const [show, setShow] = useState(props.show);

  return (
    <div className= "modal modal-error" 
         tabIndex="-1" 
         style={{display: show === true ? 'block' : 'none'}}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-title"></div>
          </div>
          <div className="modal-body text-center">
            <p>Упс... Кажется, что-то пошло не так.<br/>Попробуйте снова</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-light" data-bs-dismiss="modal" onClick={() => setShow(false)}>Понятно</button>
          </div>
        </div>
      </div>
    </div>
  )
}