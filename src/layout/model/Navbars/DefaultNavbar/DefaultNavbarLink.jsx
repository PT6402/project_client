import PropTypes from "prop-types";

import Collapse from "@mui/material/Collapse";
import Icon from "@mui/material/Icon";

import IBox from "components/common/IBox";
import ITypography from "components/common/ITypography";

function DefaultNavbarLink({
  name,
  openHandler,
  closeHandler,
  children,
  collapseStatus,
  light,
  ...rest
}) {
  return (
    <>
      <IBox
        {...rest}
        mx={1}
        p={1}
        onMouseEnter={children ? undefined : openHandler}
        onMouseLeave={children ? undefined : closeHandler}
        display="flex"
        alignItems="baseline"
        color={light ? "white" : "dark"}
        sx={{ cursor: "pointer", userSelect: "none" }}
      >
        <ITypography
          variant="button"
          fontWeight="regular"
          textTransform="capitalize"
          color="inherit"
          sx={{ fontWeight: "100%" }}
        >
          {name}
        </ITypography>
        <ITypography variant="body2" color={light ? "white" : "dark"}>
          <Icon sx={{ fontWeight: "bold", verticalAlign: "middle" }}>keyboard_arrow_down</Icon>
        </ITypography>
      </IBox>
      {children && (
        <Collapse in={Boolean(collapseStatus)} timeout="auto" unmountOnExit>
          {children}
        </Collapse>
      )}
    </>
  );
}

DefaultNavbarLink.defaultProps = {
  openHandler: false,
  closeHandler: false,
  children: false,
  collapseStatus: false,
  light: false,
};

DefaultNavbarLink.propTypes = {
  name: PropTypes.string.isRequired,
  openHandler: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  closeHandler: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  children: PropTypes.node,
  collapseStatus: PropTypes.bool,
  light: PropTypes.bool,
};

export default DefaultNavbarLink;
