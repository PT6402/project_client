import { useState } from "react";

import PropTypes from "prop-types";

import Menu from "@mui/material/Menu";

import IBox from "components/common/IBox";

import DefaultNavbarLink from "./DefaultNavbarLink";

import PagesMenu from "./Menus/PagesMenu";
import AuthenticationMenu from "./Menus/AuthenticationMenu";
import ApplicationsMenu from "./Menus/ApplicationsMenu";
import EcommerceMenu from "./Menus/EcommerceMenu";
import DocsMenu from "./Menus/DocsMenu";

function DefaultNavbarMobile({ routes, open, close }) {
  const { width } = open && open.getBoundingClientRect();
  const [openCollapse, setOpenCollapse] = useState(false);

  const handleSepOpenCollapse = (name) =>
    openCollapse === name ? setOpenCollapse(false) : setOpenCollapse(name);

  return (
    <Menu
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      anchorEl={open}
      open={Boolean(open)}
      onClose={close}
      MenuListProps={{ style: { width: `calc(${width}px - 4rem)` } }}
    >
      <IBox px={0.5}>
        <DefaultNavbarLink
          name="pages"
          collapseStatus={openCollapse === "pages"}
          onClick={() => handleSepOpenCollapse("pages")}
        >
          <IBox maxHeight="16rem" overflow="auto">
            <PagesMenu routes={routes} mobileMenu />
          </IBox>
        </DefaultNavbarLink>
        <DefaultNavbarLink
          name="authentication"
          collapseStatus={openCollapse === "authentication"}
          onClick={() => handleSepOpenCollapse("authentication")}
        >
          <IBox maxHeight="16rem" overflow="auto">
            <AuthenticationMenu routes={routes} mobileMenu />
          </IBox>
        </DefaultNavbarLink>
        <DefaultNavbarLink
          name="applications"
          collapseStatus={openCollapse === "applications"}
          onClick={() => handleSepOpenCollapse("applications")}
        >
          <IBox maxHeight="16rem" overflow="auto">
            <ApplicationsMenu routes={routes} mobileMenu />
          </IBox>
        </DefaultNavbarLink>
        <DefaultNavbarLink
          name="ecommerce"
          collapseStatus={openCollapse === "ecommerce"}
          onClick={() => handleSepOpenCollapse("ecommerce")}
        >
          <IBox maxHeight="16rem" overflow="auto">
            <EcommerceMenu routes={routes} mobileMenu />
          </IBox>
        </DefaultNavbarLink>
        <DefaultNavbarLink
          name="docs"
          collapseStatus={openCollapse === "docs"}
          onClick={() => handleSepOpenCollapse("docs")}
        >
          <IBox maxHeight="16rem" overflow="auto">
            <DocsMenu routes={routes} mobileMenu />
          </IBox>
        </DefaultNavbarLink>
      </IBox>
    </Menu>
  );
}

DefaultNavbarMobile.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  open: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
  close: PropTypes.oneOfType([PropTypes.func, PropTypes.bool, PropTypes.object]).isRequired,
};

export default DefaultNavbarMobile;
