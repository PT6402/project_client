import { Fragment } from "react";

import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";

import IBox from "components/common/IBox";

import DefaultNavbarCategory from "examples/Navbars/DefaultNavbar/DefaultNavbarCategory";
import DefaultNavbarMenu from "examples/Navbars/DefaultNavbar/DefaultNavbarMenu";

function EcommerceMenu({ routes, open, close, mobileMenu }) {
  const renderEcommerceMenuRoute = (routeName) =>
    routes.map(
      ({ key, name, icon, collapse }) =>
        key === routeName && (
          <Fragment key={key}>
            <DefaultNavbarCategory icon={icon} title={name} />
            {collapse.map(({ key: collapseKey, route, name: collapseName }) => (
              <MenuItem
                key={collapseKey}
                component={Link}
                to={route}
                onClick={mobileMenu ? undefined : close}
              >
                <IBox color="text" pl={2}>
                  {collapseName}
                </IBox>
              </MenuItem>
            ))}
          </Fragment>
        )
    );

  const renderMenuContent = (
    <IBox py={1} px={2}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={5}>
          {renderEcommerceMenuRoute("orders")}
          <IBox mt={2}>{renderEcommerceMenuRoute("general")}</IBox>
        </Grid>
        <Grid item xs={12} lg={7} sx={{ display: "flex" }}>
          <IBox display={{ xs: "none", lg: "block" }}>
            <Divider orientation="vertical" />
          </IBox>
          <IBox width="100%">{renderEcommerceMenuRoute("products")}</IBox>
        </Grid>
      </Grid>
    </IBox>
  );

  return mobileMenu ? (
    renderMenuContent
  ) : (
    <DefaultNavbarMenu open={open} close={close}>
      {renderMenuContent}
    </DefaultNavbarMenu>
  );
}

EcommerceMenu.defaultProps = {
  mobileMenu: false,
  open: false,
  close: false,
};

EcommerceMenu.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  open: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  close: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  mobileMenu: PropTypes.bool,
};
export default EcommerceMenu;
