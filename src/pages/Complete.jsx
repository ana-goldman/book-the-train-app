import { Fragment } from "react";
import HeaderComplete from '../components/BookingTrain/HeaderComplete';
import BodyComlete from '../components/BookingTrain/BodyComplete';
import Footer from '../components/common/Footer';

export default function Complete() {
  return (
    <Fragment>
      <HeaderComplete/>
        <main style={{borderTop: '9px solid #FFA800'}}>
          <BodyComlete/>
        </main>
      <Footer/>
    </Fragment>
  )
}