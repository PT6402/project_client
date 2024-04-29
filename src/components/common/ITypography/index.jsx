/* eslint-disable react/prop-types */
import { forwardRef } from "react";

// Custom styles for ITypography
import ITypographyRoot from "components/common/ITypography/ITypographyRoot";

const ITypography = forwardRef(
  (
    {
      color,
      fontWeight,
      textTransform,
      verticalAlign,
      textGradient,
      opacity,
      children,
      ...rest
    },
    ref
  ) => (
    <ITypographyRoot
      {...rest}
      ref={ref}
      ownerState={{
        color,
        textTransform,
        verticalAlign,
        fontWeight,
        opacity,
        textGradient,
      }}
    >
      {children}
    </ITypographyRoot>
  )
);

// Setting default values for the props of ITypography
ITypography.defaultProps = {
  color: "dark",
  fontWeight: false,
  textTransform: "none",
  verticalAlign: "unset",
  textGradient: false,
  opacity: 1,
};

ITypography.displayName = "ITypography";

export default ITypography;
