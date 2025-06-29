import { useState } from "react";

const useToggle = (initValue) => {
  const [value, setValue] = useState(!!initValue);

  const toggle = () => setValue((value) => !value);

  return [value, toggle];
};

export default useToggle;
