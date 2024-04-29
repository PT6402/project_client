/* eslint-disable react/prop-types */
import { forwardRef } from "react";

// Custom styles for ISocialButton
import ISocialButtonRoot from "components/common/ISocialButton/ISocialButtonRoot";

const ISocialButton = forwardRef(
  ({ color, size, iconOnly, circular, children, ...rest }, ref) => (
    <ISocialButtonRoot
      {...rest}
      ref={ref}
      variant="contained"
      color="primary"
      size={size}
      ownerState={{ color, size, iconOnly, circular }}
    >
      {children}
    </ISocialButtonRoot>
  )
);

// Setting default values for the props of ISocialButton
ISocialButton.defaultProps = {
  size: "medium",
  color: "facebook",
  iconOnly: false,
  circular: false,
};
ISocialButton.displayName = "ISocialButton";
// Typechecking props for the ISocialButton

export default ISocialButton;
