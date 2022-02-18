import { useState, useEffect, Fragment } from 'react';

export default function BodyContainerPassengers() {
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    // (seatsOneWay.length < 1 || seatsWayBack.length < 1) && setDisabled(true);
    // (seatsOneWay.length === 1 || seatsWayBack.length === 1) && setDisabled(false);
  }, [])

  return (
    <Fragment>
      <section className="body-container">
      <button 
          type="button" 
          className="btn btn-light text-uppercase btn-next" 
          onClick={() => {
            // navigate('/booking/passengers');
          }}
          disabled={disabled}
          >далее</button>
      </section>
    </Fragment>
  )
}