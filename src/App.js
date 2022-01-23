import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/booking' element={<Booking/>}></Route>
        {/* <Route path='*' element={<NotFound/>}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;



{/* <Router basename={process.env.PUBLIC_URL}>
      <Header/>
      <main className="container">
        <div className="row">
          <div className="col">
            <Banner/>
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/catalog.html' element={<Catalog/>}></Route>
              <Route path='/about.html' element={<About/>}></Route>
              <Route path='/contacts.html' element={<Contacts/>}></Route>
              <Route path='/catalog/:id.html' element={<Product/>}></Route>
              <Route path='/cart.html' element={<Cart/>}></Route>
              <Route path='*' element={<NotFound/>}></Route>
            </Routes>
          </div>
        </div>
      </main>
      <Footer/>
    </Router> */}