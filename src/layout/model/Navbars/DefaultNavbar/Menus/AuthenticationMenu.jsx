import { useState } from "react";

import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import MenuItem from "@mui/material/MenuItem";
import Icon from "@mui/material/Icon";

import IBox from "components/common/IBox";
import ITypography from "components/common/ITypography";

import DefaultNavbarMenu from "examples/Navbars/DefaultNavbar/DefaultNavbarMenu";

import curved8 from "assets/images/curved-images/curved8.jpg";

function Menu({ collapse, name, mobileMenu }) {
  const [menu, setMenu] = useState(false);

  const openMenu = ({ currentTarget }) => setMenu(currentTarget);
  const closeMenu = () => setMenu(false);

  return (
    <MenuItem onMouseEnter={openMenu} onMouseLeave={closeMenu}>
      {name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Icon sx={{ fontWeight: "bold", ml: "auto" }}>chevron_right</Icon>
      <DefaultNavbarMenu
        placement="right-start"
        open={menu}
        close={closeMenu}
        style={{ paddingLeft: "1.25rem" }}
      >
        {collapse.map(({ key: collapseKey, name: collapseName, route }) => (
          <MenuItem
            component={Link}
            to={route}
            key={collapseKey}
            onClick={mobileMenu ? undefined : close}
          >
            {collapseName}
          </MenuItem>
        ))}
      </DefaultNavbarMenu>
    </MenuItem>
  );
}

function AuthenticationMenu({ routes, open, close, mobileMenu }) {
  const renderAuthenticationMenuRoute = (routeName) =>
    routes.map(({ key, name, collapse }) => {
      let template;

      if (key === routeName && !mobileMenu) {
        template = <Menu collapse={collapse} mobileMenu={mobileMenu} name={name} />;
      } else if (key === routeName && mobileMenu) {
        template = (
          <IBox key={key} pr={2} mt={0} mb={2}>
            <ITypography variant="h6" fontWeight="bold" gutterBottom>
              {name}
            </ITypography>
            {collapse.map(({ key: collapseKey, name: collapseName, route }) => (
              <MenuItem
                component={Link}
                to={route}
                key={collapseKey}
                onClick={mobileMenu ? undefined : close}
              >
                {collapseName}
              </MenuItem>
            ))}
          </IBox>
        );
      }

      return template;
    });

  const renderMenuContent = (
    <IBox display={mobileMenu ? "block" : "flex"}>
      {!mobileMenu && (
        <IBox
          width="10rem"
          display="flex"
          justifyContent="center"
          alignItems="center"
          position="relative"
          borderRadius="lg"
          overflow="hidden"
        >
          <IBox
            component="img"
            src={curved8}
            alt="background-image"
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
          />
          <IBox
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            opacity={0.8}
            bgColor="info"
            variant="gradient"
          />
          <IBox position="relative" textAlign="center">
            <IBox
              bgColor="white"
              width="3rem"
              height="3rem"
              borderRadius="50%"
              shadow="md"
              display="flex"
              justifyContent="center"
              alignItems="center"
              mx="auto"
              mb={1}
            >
              <Icon
                sx={({ functions: { linearGradient }, palette: { gradients, transparent } }) => ({
                  backgroundImage: `${linearGradient(
                    gradients.info.main,
                    gradients.info.state
                  )} !important`,
                  WebkitBackgroundClip: "text !important",
                  WebkitTextFillColor: `${transparent.main} !important`,
                })}
              >
                star
              </Icon>
            </IBox>
            <ITypography variant="body1" fontWeight="medium" color="white">
              Explore our utilities pages
            </ITypography>
          </IBox>
        </IBox>
      )}
      <IBox py={1} pl={2}>
        {renderAuthenticationMenuRoute("sign-in")}
        {renderAuthenticationMenuRoute("sign-up")}
        {renderAuthenticationMenuRoute("reset-password")}
        {renderAuthenticationMenuRoute("lock")}
        {renderAuthenticationMenuRoute("2-step-verification")}
        {renderAuthenticationMenuRoute("error")}
      </IBox>
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

AuthenticationMenu.defaultProps = {
  mobileMenu: false,
  open: false,
  close: false,
};

AuthenticationMenu.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  open: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  close: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  mobileMenu: PropTypes.bool,
};

export default AuthenticationMenu;
