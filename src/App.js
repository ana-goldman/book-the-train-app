import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Complete from './pages/Complete';


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/booking' element={<Booking type={'main'}/>}></Route>
        <Route path='/booking/route' element={<Booking type={'route'}/>}></Route>
        <Route path='/booking/passengers' element={<Booking type={'passengers'}/>}></Route>
        <Route path='/booking/payment' element={<Booking type={'payment'}/>}></Route>
        <Route path='/booking/check' element={<Booking type={'check'}/>}></Route>
        <Route path='/complete' element={<Complete/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
