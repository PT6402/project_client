import PropTypes from "prop-types";

import MenuItem from "@mui/material/MenuItem";
import Icon from "@mui/material/Icon";
import Link from "@mui/material/Link";

import IBox from "components/common/IBox";
import ITypography from "components/common/ITypography";

import DefaultNavbarMenu from "../DefaultNavbarMenu";

function DocsMenu({ routes, open, close, mobileMenu }) {
  const renderDocsMenuRoute = (routeName) =>
    routes.map(
      ({ key, collapse }) =>
        key === routeName &&
        collapse.map(({ key: collapseKey, href, name, icon, description }) => (
          <MenuItem
            key={collapseKey}
            component={Link}
            href={href}
            target="_blank"
            rel="noreferrer"
            onClick={mobileMenu ? undefined : close}
          >
            <IBox display="flex" py={0.25}>
              {typeof icon === "string" ? <Icon>{icon}</Icon> : <IBox mt={0.5}>{icon}</IBox>}
              <IBox pl={2} lineHeight={0}>
                <ITypography variant="h6" fontWeight="bold">
                  {name}
                </ITypography>
                <ITypography variant="button" fontWeight="regular" color="text">
                  {description}
                </ITypography>
              </IBox>
            </IBox>
          </MenuItem>
        ))
    );

  return mobileMenu ? (
    renderDocsMenuRoute("docs")
  ) : (
    <DefaultNavbarMenu open={open} close={close}>
      {renderDocsMenuRoute("docs")}
    </DefaultNavbarMenu>
  );
}

DocsMenu.defaultProps = {
  mobileMenu: false,
  open: false,
  close: false,
};

DocsMenu.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  open: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  close: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  mobileMenu: PropTypes.bool,
};

export default DocsMenu;
