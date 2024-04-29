import Flatpickr from "react-flatpickr";

import "flatpickr/dist/flatpickr.css";

import IInput from "components/common/IInput";

function IDatePicker({ input, ...rest }) {
  return (
    <Flatpickr
      {...rest}
      render={({ defaultValue }, ref) => (
        <IInput {...input} defaultValue={defaultValue} inputRef={ref} />
      )}
    />
  );
}

IDatePicker.defaultProps = {
  input: {},
};

export default IDatePicker;
