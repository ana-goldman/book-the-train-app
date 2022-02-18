import { Fragment } from 'react';
import HeaderBooking from '../components/BookingTrain/HeaderBooking';
import Footer from '../components/common/Footer';
import Filters from '../components/BookingTrain/Filters';
import Latest from '../components/BookingTrain/Latest';
import Details from '../components/BookingTrain/Details';
import BodyContainer from '../components/BookingTrain/BodyContainer';
import BodyContainerTrains from '../components/BookingTrain/BodyContainerTrains'
import BodyContainerPassengers from '../components/BookingTrain/BodyContainerPassengers';

export default function Booking(props) {
  return (
    <Fragment>
      <HeaderBooking type={props.type}/>
        {(props.type === 'main' || props.type === 'route') && <main className="main-booking d-flex justify-content-between">
          <aside className="side-container">
            <Filters/>
            <Latest/>
          </aside>
          {props.type === 'main' && <BodyContainer></BodyContainer>}
          {props.type === 'route' && <BodyContainerTrains></BodyContainerTrains>}       
        </main>}

        {(props.type === 'passengers' || props.type === 'payment' || props.type === 'check') && <main className="main-booking d-flex justify-content-between">
          <aside className="side-container">
            <Details/>
          </aside>
          {props.type === 'passengers' && <BodyContainerPassengers></BodyContainerPassengers>}       
        </main>}
      <Footer/>
    </Fragment>
  )
}