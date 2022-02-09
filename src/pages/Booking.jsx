import { Fragment } from 'react';
import HeaderBooking from '../components/BookingTrain/HeaderBooking';
import Footer from '../components/common/Footer';
import Filters from '../components/BookingTrain/Filters';
import Latest from '../components/BookingTrain/Latest';
import BodyContainer from '../components/BookingTrain/BodyContainer';
import BodyContainerTrains from '../components/BookingTrain/BodyContainerTrains'

export default function Booking(props) {
  return (
    <Fragment>
      <HeaderBooking/>
        <main className="main-booking d-flex justify-content-between">
          <aside className="side-container">
            <Filters/>
            <Latest/>
          </aside>
          {props.type === 'main' && <BodyContainer></BodyContainer>}
          {props.type === 'route' && <BodyContainerTrains></BodyContainerTrains>}       
        </main>
      <Footer/>
    </Fragment>
  )
}