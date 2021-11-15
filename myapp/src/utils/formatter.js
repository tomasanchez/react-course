import { ValueState } from "@ui5/webcomponents-react/dist/ValueState";

const Formatter = {
  stockState: (state) => {
    const stockTable = {
      "In Stock": ValueState.Success,
      "Out of Stock": ValueState.Error,
      "Low in Stock": ValueState.Warning,
    };

    return stockTable[state];
  },

  localeNumber: (number) => {
    return Intl.NumberFormat().format(number);
  },
};

export default Formatter;
