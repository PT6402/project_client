/* eslint-disable react/prop-types */
import { forwardRef } from "react";

// Soft UI Dashboard PRO React components
import ITypography from "components/common/ITypography";

// Custom styles for IProgress
import IProgressRoot from "components/common/IProgress/IProgressRoot";

const IProgress = forwardRef(
  ({ variant, color, value, label, ...rest }, ref) => (
    <>
      {label && (
        <ITypography variant="button" fontWeight="medium" color="text">
          {value}%
        </ITypography>
      )}
      <IProgressRoot
        {...rest}
        ref={ref}
        variant="determinate"
        value={value}
        ownerState={{ color, value, variant }}
      />
    </>
  )
);

// Setting default values for the props of IProgress
IProgress.defaultProps = {
  variant: "contained",
  color: "info",
  value: 0,
  label: false,
};
IProgress.displayName = "IProgress";

export default IProgress;
