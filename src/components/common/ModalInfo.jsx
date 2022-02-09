import { useState } from 'react';

export default function ModalInfo(props) {
  const [show, setShow] = useState(props.show);

  return (
    <div className= "modal modal-info" 
         tabIndex="-1" 
         style={{display: show === true ? 'block' : 'none'}}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-title"></div>
          </div>
          <div className="modal-body text-center">
            <p>Спасибо за Вашу подписку!</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-light" data-bs-dismiss="modal" onClick={() => setShow(false)}>Понятно</button>
          </div>
        </div>
      </div>
    </div>
  )
}