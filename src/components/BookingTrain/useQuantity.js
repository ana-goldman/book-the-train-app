import { useSelector } from "react-redux";

const useQuantity = () => {
  const { seatsOneWay, seatsWayBack} = useSelector((store) => store.routeSlice);

  let adults = [];
  let children = [];
  let babies = [];

  let adultsBack = [];
  let childrenBack = [];
  let babiesBack = [];


  seatsOneWay.forEach(a => {
    a.is_child === false && adults.push(a);
    (a.is_child === true && a.include_children_seat === true) && children.push(a);
    (a.is_child === true && a.include_children_seat === false) && babies.push(a);
  })
  
  seatsWayBack.forEach(a => {
    a.is_child === false && adultsBack.push(a);
    (a.is_child === true && a.include_children_seat === true) && childrenBack.push(a);
    (a.is_child === true && a.include_children_seat === false) && babiesBack.push(a);
  })

  return [ adults, children, babies, adultsBack, childrenBack, babiesBack ]
}

export { useQuantity }