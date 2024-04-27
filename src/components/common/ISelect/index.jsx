/* eslint-disable react/prop-types */
import { forwardRef } from "react";

import Select from "react-select";
import colors from "assets/theme/base/colors";

// Custom styles for ISelect
import styles from "components/common/ISelect/styles";

const ISelect = forwardRef(({ size, error, success, ...rest }, ref) => {
  const { light } = colors;

  return (
    <Select
      {...rest}
      ref={ref}
      styles={styles(size, error, success)}
      theme={(theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary25: light.main,
          primary: light.main,
        },
      })}
    />
  );
});

// Setting default values for the props of ISelect
ISelect.defaultProps = {
  size: "medium",
  error: false,
  success: false,
};
ISelect.displayName = "ISelect";

export default ISelect;
