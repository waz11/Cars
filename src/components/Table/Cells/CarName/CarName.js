import "./CarName.scss";

const CarName = ({ Mnfctr, ItemName }) => (
  <div className="car-name-cell">
    <span> {Mnfctr} </span>
    <span> {ItemName}</span>
  </div>
);

export default CarName;
