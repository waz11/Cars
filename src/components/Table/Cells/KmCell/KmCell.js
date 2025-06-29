import "./KmCell.scss";

const CURRENT_YEAR = new Date().getFullYear();

const KmCell = ({ year, km }) => {
  const calc = Math.floor(km / (CURRENT_YEAR - year));

  return (
    <div className="km-cell">
      <span>{km}</span>
      <span>({calc})</span>
    </div>
  );
};

export default KmCell;
