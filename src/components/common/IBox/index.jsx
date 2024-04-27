import { forwardRef } from "react";
import PropTypes from "prop-types";
import BoxRoot from "./BoxRoot";
const SoftBox = forwardRef(
  (
    { variant, bgColor, color, opacity, borderRadius, shadow, ...rest },
    ref
  ) => (
    <BoxRoot
      {...rest}
      ref={ref}
      ownerState={{ variant, bgColor, color, opacity, borderRadius, shadow }}
    />
  )
);

// Setting default values for the props of SoftBox
SoftBox.defaultProps = {
  variant: "contained",
  bgColor: "transparent",
  color: "dark",
  opacity: 1,
  borderRadius: "none",
  shadow: "none",
};

// Typechecking props for the SoftBox
SoftBox.propTypes = {
  variant: PropTypes.oneOf(["contained", "gradient"]),
  bgColor: PropTypes.string,
  color: PropTypes.string,
  opacity: PropTypes.number,
  borderRadius: PropTypes.string,
  shadow: PropTypes.string,
};
SoftBox.displayName = "SoftBox";
export default SoftBox;
