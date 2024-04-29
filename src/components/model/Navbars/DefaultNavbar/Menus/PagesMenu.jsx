import { Fragment } from "react";

import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";

import IBox from "components/common/IBox";

import DefaultNavbarCategory from "../DefaultNavbarCategory";
import DefaultNavbarMenu from "../DefaultNavbarMenu";

function PagesMenu({ routes, open, close, mobileMenu }) {
  const renderPagesMenuRoute = (routeName) =>
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
        <Grid item xs={12} lg={3}>
          {renderPagesMenuRoute("dashboards")}
          <IBox mt={2}>{renderPagesMenuRoute("users")}</IBox>
        </Grid>
        <Grid item xs={12} lg={4} sx={{ display: "flex" }}>
          <IBox display={{ xs: "none", lg: "block" }}>
            <Divider orientation="vertical" />
          </IBox>
          <IBox>
            {renderPagesMenuRoute("extra")}
            <IBox mt={2}>{renderPagesMenuRoute("projects")}</IBox>
          </IBox>
        </Grid>
        <Grid item xs={12} lg={5} sx={{ display: "flex" }}>
          <IBox display={{ xs: "none", lg: "block" }}>
            <Divider orientation="vertical" />
          </IBox>
          <IBox width="100%">
            {renderPagesMenuRoute("account")}
            <IBox mt={2}>{renderPagesMenuRoute("profile")}</IBox>
          </IBox>
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

PagesMenu.defaultProps = {
  mobileMenu: false,
  open: false,
  close: false,
};

PagesMenu.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  open: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  close: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  mobileMenu: PropTypes.bool,
};

export default PagesMenu;
