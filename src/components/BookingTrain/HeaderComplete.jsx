import BannerComplete from './BannerComplete';
import TopNav from '../common/TopNav';

export default function HeaderComplete() {
  return (
    <header className="container-fluid px-0">
    <div className="row">
      <div className="col">
        <TopNav/>
        <BannerComplete/>        
      </div>
    </div>
  </header>
  )
}