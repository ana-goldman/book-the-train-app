import trainIncludes from '../images/train-includes.svg';
import currency from '../images/currency.svg';
import { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchLatest } from "../redux/latestSlice";

export default function Latest() {
  const dispatch = useDispatch();
  const { latest } = useSelector((store) => store.latestSlice);

  useEffect(() => { 
    dispatch(fetchLatest(`${process.env.REACT_APP_BASE_URL}routes/last`));
  }, [dispatch]);

  return (
    <Fragment>{ latest && 
      <div className="side__latest">
        <h3 className="text-uppercase">Последние билеты</h3>
        <div className="latest-group">
          {latest.map(o => { return (
            <div className="latest-item d-flex flex-column justify-content-between" key={o.departure._id}>
            <div className="latest__body d-flex justify-content-between">
              <div className="latest__from text-start">
                <div className="latest__city text-capitalize">{o.departure.from.city.name}</div>
                <div className="latest__station">{o.departure.from.railway_station_name}</div>
              </div>
              <div className="latest__to text-end">
                <div className="latest__city text-capitalize">{o.departure.to.city.name}</div>
                <div className="latest__station">{o.departure.to.railway_station_name}</div>
              </div>
            </div>
            <div className="latest__footer d-flex justify-content-between align-items-center">
              <div className="latest__quality">
                <img src={trainIncludes} alt="quality"/>
              </div>
              <div className="latest__price">от
                <span>{o.min_price}</span>
                <img src={currency} alt="rub"/>
              </div>
            </div>
          </div>)
          })}
        </div>
      </div>}
    </Fragment>
  )
}