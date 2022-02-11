export default function CarriageFirst() {
  return (
    <div className='carriage-group__train'>
      <div className='carriage-tip'>13 человек выбирают места в этом поезде</div>
      <div className='carriage-train d-flex'>
        <div className='carriage-enter'></div>
        <div className='carriage-toilet'></div>
        <div className='carriage-crew'></div>
        <div className='carriage-seats d-flex justify-content-evenly'>
          <div className="seats-first-space d-flex">
            <div className="seats-space__top d-flex flex-column-reverse flex-wrap">
              <div className='seat-item-first'>1</div>
              <div className='seat-item-first'>2</div>
            </div>
          </div>
          <div className="seats-first-space d-flex">
            <div className="seats-space__top d-flex flex-column-reverse flex-wrap">
              <div className='seat-item-first seat-not-available'>3</div>
              <div className='seat-item-first seat-not-available'>4</div>
            </div>
          </div>
          <div className="seats-first-space d-flex">
            <div className="seats-space__top d-flex flex-column-reverse flex-wrap">
              <div className='seat-item-first seat-focus'>5</div>
              <div className='seat-item-first'>6</div>
            </div>
          </div>
          <div className="seats-first-space d-flex">
            <div className="seats-space__top d-flex flex-column-reverse flex-wrap">
              <div className='seat-item-first'>7</div>
              <div className='seat-item-first'>8</div>
            </div>
          </div>
          <div className="seats-first-space d-flex">
            <div className="seats-space__top d-flex flex-column-reverse flex-wrap">
              <div className='seat-item-first'>9</div>
              <div className='seat-item-first'>10</div>
            </div>
          </div>
          <div className="seats-first-space d-flex">
            <div className="seats-space__top d-flex flex-column-reverse flex-wrap">
              <div className='seat-item-first'>11</div>
              <div className='seat-item-first'>12</div>
            </div>
          </div>
          
        </div> 
        <div className='carriage-toilet'></div>
        <div className='carriage-enter enter-2'></div>
      </div>
      <div className='carriage-price'></div>
    </div>
  )
}