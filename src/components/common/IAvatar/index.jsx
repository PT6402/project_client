import { forwardRef } from "react";

import AvatarRoot from "components/common/IAvatar/AvatarRoot";

const IAvatar = forwardRef(({ bgColor, size, shadow, ...rest }, ref) => (
  <AvatarRoot ref={ref} ownerState={{ shadow, bgColor, size }} {...rest} />
));

IAvatar.defaultProps = {
  bgColor: "transparent",
  size: "md",
  shadow: "none",
};

export default IAvatar;
