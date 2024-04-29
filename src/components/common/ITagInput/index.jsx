/* eslint-disable react/prop-types */
import { forwardRef } from "react";
// react-tag-input components
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";

// Custom styles for ITagInput
import ITagInputRoot from "components/ITagInput/ITagInputRoot";

const ITagInput = forwardRef(({ size, error, success, ...rest }, ref) => (
  <ITagInputRoot ownerState={{ size, error, success }}>
    <ReactTagInput {...rest} ref={ref} />
  </ITagInputRoot>
));

// Setting default values for the props of ITagInput
ITagInput.defaultProps = {
  size: "medium",
  error: false,
  success: false,
};
ITagInput.displayName = "ITagInput";

export default ITagInput;
