import { Fragment } from 'react';
import { useSelector } from "react-redux";
import HeaderBooking from '../components/BookingTrain/HeaderBooking';
import Footer from '../components/common/Footer';
import Filters from '../components/BookingTrain/Filters';
import Latest from '../components/BookingTrain/Latest';
import Details from '../components/BookingTrain/Details';
import BodyContainer from '../components/BookingTrain/BodyContainer';
import BodyContainerTrains from '../components/BookingTrain/BodyContainerTrains'
import BodyContainerPassengers from '../components/BookingTrain/BodyContainerPassengers';
import BodyContainerPayment from '../components/BookingTrain/BodyContainerPayment';
import BodyContainerCheck from '../components/BookingTrain/BodyContainerCheck';
import BodyAnimation from '../components/BookingTrain/BodyAnimation';

export default function Booking(props) {
  const { status } = useSelector((store) => store.searchSlice);

  return (
    <Fragment>{console.log(status)}
      {status === 'loading' ? <HeaderBooking/> : <HeaderBooking type={props.type}/>}
      {status === 'loading' && <BodyAnimation/>}
      <main className="main-booking d-flex justify-content-between" style={{display: status === 'loading' ? 'none' : 'flex'}}>
        <aside className="side-container">
          <Filters/>
          <Latest/>
        </aside>
        {props.type === 'main' && <BodyContainer></BodyContainer>}
        {props.type === 'route' && <BodyContainerTrains></BodyContainerTrains>}
      </main>

      {(props.type === 'passengers' || props.type === 'payment' || props.type === 'check') && <main className="main-booking d-flex justify-content-between">
        <aside className="side-container">
          <Details/>
        </aside>
        {props.type === 'passengers' && <BodyContainerPassengers></BodyContainerPassengers>}
        {props.type === 'payment' && <BodyContainerPayment></BodyContainerPayment>}
        {props.type === 'check' && <BodyContainerCheck></BodyContainerCheck>}  
      </main>}
      <Footer/>
    </Fragment>
  )
}