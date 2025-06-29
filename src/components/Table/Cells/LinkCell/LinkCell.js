import "./LinkCell.scss";

const LinkCell = ({ Mnfctr, ItemName, ItemCode }) => {
  const src = `https://trademobile.co.il/cars/${Mnfctr}/${ItemName}/${ItemCode}`;

  return (
    <div className="link-cell">
      <a href={src} target="_blank" onClick={() => window.open(src, "name")}>
        Link
      </a>
    </div>
  );
};

export default LinkCell;
