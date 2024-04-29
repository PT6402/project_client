import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import MenuItem from "@mui/material/MenuItem";
import Icon from "@mui/material/Icon";

import IBox from "components/common/IBox";

import DefaultNavbarMenu from "examples/Navbars/DefaultNavbar/DefaultNavbarMenu";

function ApplicationsMenu({ routes, open, close, mobileMenu }) {
  const renderApplicationsMenuRoute = (routeName) =>
    routes.map(
      ({ key, collapse }) =>
        key === routeName &&
        collapse.map(({ key: collapseKey, route, name, icon }) => (
          <MenuItem
            key={collapseKey}
            component={Link}
            to={route}
            onClick={mobileMenu ? undefined : close}
          >
            <IBox display="flex" alignItems="center" py={0.25}>
              {typeof icon === "string" ? (
                <Icon
                  sx={({ functions: { linearGradient }, palette: { gradients, transparent } }) => ({
                    backgroundImage: `${linearGradient(
                      gradients.info.main,
                      gradients.info.state
                    )} !important`,
                    WebkitBackgroundClip: "text !important",
                    WebkitTextFillColor: `${transparent.main} !important`,
                  })}
                  fontSize="small"
                >
                  {icon}
                </Icon>
              ) : (
                icon
              )}
              <IBox color="text" pl={2} lineHeight={0}>
                {name}
              </IBox>
            </IBox>
          </MenuItem>
        ))
    );

  return mobileMenu ? (
    <IBox px={1.5}>{renderApplicationsMenuRoute("applications")}</IBox>
  ) : (
    <DefaultNavbarMenu open={open} close={close}>
      {renderApplicationsMenuRoute("applications")}
    </DefaultNavbarMenu>
  );
}

ApplicationsMenu.defaultProps = {
  mobileMenu: false,
  open: false,
  close: false,
};

ApplicationsMenu.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  open: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  close: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  mobileMenu: PropTypes.bool,
};
export default ApplicationsMenu;
