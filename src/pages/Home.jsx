import { Fragment } from 'react';
import HeaderHome from '../components/HomePage/HeaderHome';
import Footer from '../components/common/Footer';
import About from '../components/HomePage/About';
import AboutProcess from '../components/HomePage/AboutProcess';
import Feedback from '../components/HomePage/Feedback';

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