import { Fragment } from 'react';
import HeaderHome from '../components/HeaderHome';
import Footer from '../components/Footer';
import About from '../components/About';
import AboutProcess from '../components/AboutProcess';
import Feedback from '../components/Feedback';

export default function Home() {
  return (
    <Fragment>
      <HeaderHome/>
        <main style={{borderTop: '9px solid #FFA800'}}>
          <About/>
          <AboutProcess/>
          <Feedback/>
        </main>
      <Footer/>
    </Fragment>
  )
}