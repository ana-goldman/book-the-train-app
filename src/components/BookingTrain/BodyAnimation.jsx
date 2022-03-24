import animationData from '../../images/animationData.gif';

export default function BodyAnimation() {
  return(
    <div className='body-animation' style={{height: '774px', backgroundColor: '#3e3c41'}}>
      <div style={{marginRight: 'auto', marginLeft: 'auto', width: '550px', paddingTop: '167px'}}>
        <p style={{color: '#928F94',textAlign: 'center'}}>ИДЕТ ЗАГРУЗКА</p>
        <img src={animationData} alt="Loading..." />
      </div>
    </div>
  )
}