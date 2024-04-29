/* eslint-disable react/prop-types */
import { forwardRef } from "react";

import InputRoot from "components/common/IInput/InputRoot";
import InputWithIconRoot from "components/common/IInput/InputWithIconRoot";
import InputIconBoxRoot from "components/common/IInput/InputIconBoxRoot";
import InputIconRoot from "components/common/IInput/InputIconRoot";

const IInput = forwardRef(
  ({ size, icon, error, success, disabled, ...rest }, ref) => {
    let template;
    const direction = "ltr";
    const iconDirection = icon.direction;

    if (icon.component && icon.direction === "left") {
      template = (
        <InputWithIconRoot ref={ref} ownerState={{ error, success, disabled }}>
          <InputIconBoxRoot ownerState={{ size }}>
            <InputIconRoot fontSize="small" ownerState={{ size }}>
              {icon.component}
            </InputIconRoot>
          </InputIconBoxRoot>
          <InputRoot
            {...rest}
            ownerState={{
              size,
              error,
              success,
              iconDirection,
              direction,
              disabled,
            }}
          />
        </InputWithIconRoot>
      );
    } else if (icon.component && icon.direction === "right") {
      template = (
        <InputWithIconRoot ref={ref} ownerState={{ error, success, disabled }}>
          <InputRoot
            {...rest}
            ownerState={{
              size,
              error,
              success,
              iconDirection,
              direction,
              disabled,
            }}
          />
          <InputIconBoxRoot ownerState={{ size }}>
            <InputIconRoot fontSize="small" ownerState={{ size }}>
              {icon.component}
            </InputIconRoot>
          </InputIconBoxRoot>
        </InputWithIconRoot>
      );
    } else {
      template = (
        <InputRoot
          {...rest}
          ref={ref}
          ownerState={{ size, error, success, disabled }}
        />
      );
    }

    return template;
  }
);

// Setting default values for the props of SoftInput
IInput.defaultProps = {
  size: "medium",
  icon: {
    component: false,
    direction: "none",
  },
  error: false,
  success: false,
  disabled: false,
};

IInput.displayName = "IInput";

export default IInput;
