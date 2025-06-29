import "./Filters.scss";
import { mnfctrs } from "./utils";
import Select from "react-select";

const options = mnfctrs.sort().map((mcfctr) => ({
  label: mcfctr,
  value: mcfctr,
}));

const Filters = ({ selected, setSelected }) => {
  const onChange = (mnfctr) => setSelected(mnfctr.map(({ value }) => value));

  return (
    <div className="filters">
      <Select
        value={selected.map((value) => ({ label: value, value }))}
        isMulti
        options={options}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={onChange}
      />
    </div>
  );
};

export default Filters;
