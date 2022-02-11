export default function CarriageSecond() {
  return (
    <div className='carriage-group__train'>
      <div className='carriage-tip'>13 человек выбирают места в этом поезде</div>
      <div className='carriage-train d-flex'>
        <div className='carriage-enter'></div>
        <div className='carriage-toilet'></div>
        <div className='carriage-crew'></div>
        <div className='carriage-seats d-flex justify-content-evenly'>
          <div className="seats-third-space">
            <div className="seats-space__top d-flex flex-column-reverse flex-wrap">
              <div className='seat-item-third'>1</div>
              <div className='seat-item-third'>2</div>
              <div className='seat-item-third'>3</div>
              <div className='seat-item-third'>4</div>
            </div>
            <div className="seats-third-space__bottom d-flex justify-content-evenly"></div>
          </div>
          <div className="seats-third-space">
            <div className="seats-space__top d-flex flex-column-reverse flex-wrap">
              <div className='seat-item-third seat-not-available'>5</div>
              <div className='seat-item-third seat-not-available'>6</div>
              <div className='seat-item-third seat-focus'>7</div>
              <div className='seat-item-third seat-focus'>8</div>
            </div>
            <div className="seats-third-space__bottom d-flex justify-content-evenly"></div>
          </div>
          <div className="seats-third-space">
            <div className="seats-space__top  d-flex flex-column-reverse flex-wrap">
              <div className='seat-item-third'>9</div>
              <div className='seat-item-third'>10</div>
              <div className='seat-item-third'>11</div>
              <div className='seat-item-third'>12</div>
            </div>
            <div className="seats-third-space__bottom d-flex justify-content-evenly"></div>
          </div>
          <div className="seats-third-space">
            <div className="seats-space__top d-flex flex-column-reverse flex-wrap">
              <div className='seat-item-third'>13</div>
              <div className='seat-item-third'>14</div>
              <div className='seat-item-third'>15</div>
              <div className='seat-item-third'>16</div>
            </div>
            <div className="seats-third-space__bottom d-flex justify-content-evenly"></div>
          </div>
          <div className="seats-third-space">
            <div className="seats-space__top d-flex flex-column-reverse flex-wrap">
              <div className='seat-item-third'>17</div>
              <div className='seat-item-third'>18</div>
              <div className='seat-item-third'>19</div>
              <div className='seat-item-third'>20</div>
            </div>
            <div className="seats-third-space__bottom d-flex justify-content-evenly"></div>
          </div>
          <div className="seats-third-space">
            <div className="seats-space__top  d-flex flex-column-reverse flex-wrap">
              <div className='seat-item-third'>21</div>
              <div className='seat-item-third'>22</div>
              <div className='seat-item-third'>23</div>
              <div className='seat-item-third'>24</div>
            </div>
            <div className="seats-third-space__bottom d-flex justify-content-evenly"></div>
          </div>     
        </div> 
        <div className='carriage-toilet'></div>
        <div className='carriage-enter enter-2'></div>
      </div>
      <div className='carriage-price'></div>
    </div>
  )
}