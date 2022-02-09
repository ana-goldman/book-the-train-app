import banner from '../../images/banner.svg';

export default function BannerHome() {
  return (
    <div className="row">
      <div className="col">
        <div className="banner">
          <img src={banner} className="img-fluid" alt="banner"/>
          <h2 className="banner-header">Вся жизнь - <b>путешествие!</b></h2>
        </div>
      </div>
    </div>
  )
}