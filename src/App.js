import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/booking' element={<Booking type={'main'}/>}></Route>
        <Route path='/booking/route' element={<Booking type={'route'}/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
