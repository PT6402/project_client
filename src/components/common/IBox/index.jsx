import { forwardRef } from "react";
import BoxRoot from "./BoxRoot";
const IBox = forwardRef(
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

IBox.defaultProps = {
  variant: "contained",
  bgColor: "transparent",
  color: "dark",
  opacity: 1,
  borderRadius: "none",
  shadow: "none",
};

IBox.displayName = "IBox";

export default IBox;
