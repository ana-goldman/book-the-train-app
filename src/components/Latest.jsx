import trainIncludes from '../images/train-includes.svg';
import currency from '../images/currency.svg';

export default function Latest() {
  return (
    <div className="side__latest">
        <h3 className="text-uppercase">Последние билеты</h3>
        <div className="latest-group">
          <div className="latest-item d-flex flex-column justify-content-between">
            <div className="latest__body d-flex justify-content-between">
              <div className="latest__from text-start">
                <div className="latest__city">Санкт-Петербург</div>
                <div className="latest__station">Курский<br/>вокзал</div>
              </div>
              <div className="latest__to text-end">
                <div className="latest__city">Самара</div>
                <div className="latest__station">Московский<br/>вокзал</div>
              </div>
            </div>
            <div className="latest__footer d-flex justify-content-between align-items-center">
              <div className="latest__quality">
                <img src={trainIncludes} alt="quality"/>
              </div>
              <div className="latest__price">от
                <span>2 500</span>
                <img src={currency} alt="rub"/>
              </div>
            </div>
          </div>
          <div className="latest-item d-flex flex-column justify-content-between">
            <div className="latest__body d-flex justify-content-between">
              <div className="latest__from text-start">
                <div className="latest__city">Санкт-Петербург</div>
                <div className="latest__station">Курский<br/>вокзал</div>
              </div>
              <div className="latest__to text-end">
                <div className="latest__city">Самара</div>
                <div className="latest__station">Московский<br/>вокзал</div>
              </div>
            </div>
            <div className="latest__footer d-flex justify-content-between align-items-center">
              <div className="latest__quality">
              <img src={trainIncludes} alt="quality"/>
              </div>
              <div className="latest__price">от
                <span>2 500</span>
                <img src={currency} alt="rub"/>
              </div>
            </div>
          </div>
          <div className="latest-item d-flex flex-column justify-content-between">
            <div className="latest__body d-flex justify-content-between">
              <div className="latest__from text-start">
                <div className="latest__city">Санкт-Петербург</div>
                <div className="latest__station">Курский<br/>вокзал</div>
              </div>
              <div className="latest__to text-end">
                <div className="latest__city">Самара</div>
                <div className="latest__station">Московский<br/>вокзал</div>
              </div>
            </div>
            <div className="latest__footer d-flex justify-content-between align-items-center">
              <div className="latest__quality">
              <img src={trainIncludes} alt="quality"/>
              </div>
              <div className="latest__price">от
                <span>2 500</span>
                <img src={currency} alt="rub"/>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}