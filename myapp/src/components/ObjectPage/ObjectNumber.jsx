import React from "react";

import Formatter from "../../utils/formatter";
import ObjectAttribute from "./ObjectAttribute";

function ObjectNumber({
  label,
  number,
  stateFormatter,
  formatValue,
  icon,
  state,
  direction,
}) {
  return (
    <ObjectAttribute
      label={label}
      text={Formatter.localeNumber(number)}
      stateFormatter={stateFormatter}
      stateValue={formatValue}
      icon={icon}
      state={state}
      direction={direction}
    />
  );
}

export default ObjectNumber;
