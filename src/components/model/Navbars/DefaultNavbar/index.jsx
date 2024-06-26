import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import Container from "@mui/material/Container";
import Icon from "@mui/material/Icon";

import IBox from "components/common/IBox";
import ITypography from "components/common/ITypography";
import IButton from "components/common/IButton";

import DefaultNavbarLink from "./DefaultNavbarLink";
import DefaultNavbarMobile from "./DefaultNavbarMobile";

import breakpoints from "assets/theme/base/breakpoints";

import PagesMenu from "./Menus/PagesMenu";
import AuthenticationMenu from "./Menus/AuthenticationMenu";
import EcommerceMenu from "./Menus/EcommerceMenu";
import ApplicationsMenu from "./Menus/ApplicationsMenu";
import DocsMenu from "./Menus/DocsMenu";

function DefaultNavbar({ routes, transparent, light, action }) {
  const [pagesMenu, setPagesMenu] = useState(false);
  const [authenticationMenu, setAuthenticationMenu] = useState(false);
  const [ecommerceMenu, setEcommerceMenu] = useState(false);
  const [applicationsMenu, setApplicationsMenu] = useState(false);
  const [docsMenu, setDocsMenu] = useState(false);
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  const openPagesMenu = ({ currentTarget }) => setPagesMenu(currentTarget);
  const closePagesMenu = () => setPagesMenu(false);
  const openAuthenticationMenu = ({ currentTarget }) => setAuthenticationMenu(currentTarget);
  const closeAuthenticationMenu = () => setAuthenticationMenu(false);
  const openEcommerceMenu = ({ currentTarget }) => setEcommerceMenu(currentTarget);
  const closeEcommerceMenu = () => setEcommerceMenu(false);
  const openApplicationsMenu = ({ currentTarget }) => setApplicationsMenu(currentTarget);
  const closeApplicationsMenu = () => setApplicationsMenu(false);
  const openDocsMenu = ({ currentTarget }) => setDocsMenu(currentTarget);
  const closeDocsMenu = () => setDocsMenu(false);
  const openMobileNavbar = ({ currentTarget }) => setMobileNavbar(currentTarget.parentNode);
  const closeMobileNavbar = () => setMobileNavbar(false);

  useEffect(() => {
    function displayMobileNavbar() {
      if (window.innerWidth < breakpoints.values.lg) {
        setMobileView(true);
        setMobileNavbar(false);
      } else {
        setMobileView(false);
        setMobileNavbar(false);
      }
    }

    window.addEventListener("resize", displayMobileNavbar);

    displayMobileNavbar();

    return () => window.removeEventListener("resize", displayMobileNavbar);
  }, []);

  return (
    <Container>
      <IBox
        py={1}
        px={{ xs: transparent ? 4 : 5, sm: transparent ? 2 : 5, lg: transparent ? 0 : 5 }}
        my={2}
        mx={3}
        width="calc(100% - 48px)"
        borderRadius="section"
        shadow={transparent ? "none" : "md"}
        color={light ? "white" : "dark"}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        position="absolute"
        left={0}
        zIndex={3}
        sx={({ palette: { transparent: transparentColor, white }, functions: { rgba } }) => ({
          backgroundColor: transparent ? transparentColor.main : rgba(white.main, 0.8),
          backdropFilter: transparent ? "none" : `saturate(200%) blur(30px)`,
        })}
      >
        <IBox component={Link} to="/" py={transparent ? 1.5 : 0.75} lineHeight={1}>
          <ITypography variant="button" fontWeight="bold" color={light ? "white" : "dark"}>
            Soft UI Dashboard PRO
          </ITypography>
        </IBox>
        <IBox color="inherit" display={{ xs: "none", lg: "flex" }} m={0} p={0}>
          <DefaultNavbarLink
            name="pages"
            openHandler={openPagesMenu}
            closeHandler={closePagesMenu}
            light={light}
          />
          <DefaultNavbarLink
            name="authentication"
            openHandler={openAuthenticationMenu}
            closeHandler={closeAuthenticationMenu}
            light={light}
          />

          <DefaultNavbarLink
            name="application"
            openHandler={openApplicationsMenu}
            closeHandler={closeApplicationsMenu}
            light={light}
          />
          <DefaultNavbarLink
            name="ecommerce"
            openHandler={openEcommerceMenu}
            closeHandler={closeEcommerceMenu}
            light={light}
          />
          <DefaultNavbarLink
            name="docs"
            openHandler={openDocsMenu}
            closeHandler={closeDocsMenu}
            light={light}
          />
        </IBox>
        {action &&
          (action.type === "internal" ? (
            <IBox display={{ xs: "none", lg: "inline-block" }}>
              <IButton
                component={Link}
                to={action.route}
                variant="gradient"
                color={action.color ? action.color : "info"}
                size="small"
                circular
              >
                {action.label}
              </IButton>
            </IBox>
          ) : (
            <IBox display={{ xs: "none", lg: "inline-block" }}>
              <IButton
                component="a"
                href={action.route}
                target="_blank"
                rel="noreferrer"
                variant="gradient"
                color={action.color ? action.color : "info"}
                size="small"
                circular
              >
                {action.label}
              </IButton>
            </IBox>
          ))}
        <IBox
          display={{ xs: "inline-block", lg: "none" }}
          lineHeight={0}
          py={1.5}
          pl={1.5}
          color="inherit"
          sx={{ cursor: "pointer" }}
          onClick={openMobileNavbar}
        >
          <Icon fontSize="default">{mobileNavbar ? "close" : "menu"}</Icon>
        </IBox>
      </IBox>
      <PagesMenu routes={routes} open={pagesMenu} close={closePagesMenu} />
      <AuthenticationMenu
        routes={routes}
        open={authenticationMenu}
        close={closeAuthenticationMenu}
      />
      <EcommerceMenu routes={routes} open={ecommerceMenu} close={closeEcommerceMenu} />
      <ApplicationsMenu routes={routes} open={applicationsMenu} close={closeApplicationsMenu} />
      <DocsMenu routes={routes} open={docsMenu} close={closeDocsMenu} />
      {mobileView && (
        <DefaultNavbarMobile routes={routes} open={mobileNavbar} close={closeMobileNavbar} />
      )}
    </Container>
  );
}

DefaultNavbar.defaultProps = {
  transparent: false,
  light: false,
  action: false,
};

DefaultNavbar.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  transparent: PropTypes.bool,
  light: PropTypes.bool,
  action: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      type: PropTypes.oneOf(["external", "internal"]).isRequired,
      route: PropTypes.string.isRequired,
      color: PropTypes.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "dark",
        "light",
      ]),
      label: PropTypes.string.isRequired,
    }),
  ]),
};

export default DefaultNavbar;
