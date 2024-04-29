import { useState } from "react";

import PropTypes from "prop-types";

import Popper from "@mui/material/Popper";
import Grow from "@mui/material/Grow";

import IBox from "components/common/IBox";

function DefaultNavbarMenu({ open, close, placement, children, style }) {
  const [anchor, setAnchor] = useState(false);

  const openMenu = () => setAnchor(open);
  const closeMenu = () => setAnchor(false);
  return (
    <Popper
      anchorEl={anchor || open}
      popperRef={null}
      open={Boolean(anchor) || Boolean(open)}
      placement={placement}
      transition
      style={{ zIndex: 10, ...style }}
    >
      {({ TransitionProps }) => (
        <Grow {...TransitionProps} sx={{ transformOrigin: "left top" }}>
          <IBox
            bgColor="white"
            shadow="lg"
            borderRadius="xl"
            p={2}
            onMouseEnter={openMenu}
            onMouseLeave={(close, closeMenu)}
          >
            {children}
          </IBox>
        </Grow>
      )}
    </Popper>
  );
}

DefaultNavbarMenu.defaultProps = {
  placement: "bottom-start",
  style: {},
};

DefaultNavbarMenu.propTypes = {
  open: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
  close: PropTypes.oneOfType([PropTypes.func, PropTypes.bool, PropTypes.object]).isRequired,
  placement: PropTypes.string,
  children: PropTypes.node.isRequired,
  style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
};

export default DefaultNavbarMenu;
