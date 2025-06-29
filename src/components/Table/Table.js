import "./Table.scss";
import classNames from "classnames";
import LinkCell from "./Cells/LinkCell/LinkCell";
import CarName from "./Cells/CarName/CarName";
import KmCell from "./Cells/KmCell/KmCell";

const Table = ({ data, headers, isLoading, startIdx = 0 }) => (
  <table className="table">
    <thead>
      <tr>
        <th></th>
        <th>Car</th>
        {headers.map(({ key, label }) => (
          <th key={key}>{label || key}</th>
        ))}
        <th>KM / year</th>
        <th></th>
      </tr>
    </thead>

    <tbody className={classNames({ loading: isLoading })}>
      {data.map((row, i) => {
        const { _id, Mnfctr, ItemName, ItemCode, saved, Year, KM } = row;

        return (
          <tr key={_id} className={classNames({ saved })}>
            <th>{startIdx + i + 1}</th>

            <td>
              <CarName Mnfctr={Mnfctr} ItemName={ItemName} />
            </td>

            {headers.map(({ key }) => (
              <td key={_id + key}>{row[key]?.toString()}</td>
            ))}

            <td>
              <KmCell year={Year} km={KM} />
            </td>

            <td>
              <LinkCell
                Mnfctr={Mnfctr}
                ItemName={ItemName}
                ItemCode={ItemCode}
              />
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

export default Table;
