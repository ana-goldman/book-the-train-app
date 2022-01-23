import BannerBooking from './BannerBooking';
import TopNav from './TopNav';
import SearchFormBooking from './SearchFormBooking';

export default function HeaderBooking() {
  return (
    <header className="container-fluid px-0">
    <div className="row">
      <div className="col">
        <TopNav/>
        <BannerBooking/>        
        <SearchFormBooking/>
      </div>
    </div>
  </header>
  )
}