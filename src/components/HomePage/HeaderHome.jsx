import BannerHome from './BannerHome';
import SearchFormHome from './SearchFormHome';
import TopNav from '../common/TopNav';

export default function HeaderHome() {
  return (
    <header className="container-fluid px-0">
      <div className="row">
        <div className="col">
          <TopNav/>
          <BannerHome/>
          <SearchFormHome/>
        </div>
      </div>
    </header>
  )
}