/* eslint-disable react/prop-types */
// @mui material components
import Collapse from "@mui/material/Collapse";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import IBox from "components/common/IBox";

// Custom styles for the SidenavCollapse
import {
  collapseItem,
  collapseIconBox,
  collapseIcon,
  collapseText,
  collapseArrow,
} from "components/model/Sidenav/styles/sidenavCollapse";
import { useSelector } from "react-redux";

// Soft UI Dashboard PRO React context

function SidenavCollapse({
  icon,
  name,
  children,
  active,
  noCollapse,
  open,
  ...rest
}) {
  const { miniSidenav } = useSelector((state) => state.SliceUI);
  const transparentSidenav = true;
  const sidenavColor = "info";

  return (
    <>
      <ListItem component="li">
        <IBox
          {...rest}
          sx={(theme) => collapseItem(theme, { active, transparentSidenav })}
        >
          <ListItemIcon
            sx={(theme) =>
              collapseIconBox(theme, {
                active,
                transparentSidenav,
                sidenavColor,
              })
            }
          >
            {typeof icon === "string" ? (
              <Icon sx={(theme) => collapseIcon(theme, { active })}>
                {icon}
              </Icon>
            ) : (
              icon
            )}
          </ListItemIcon>

          <ListItemText
            primary={name}
            sx={(theme) =>
              collapseText(theme, { miniSidenav, transparentSidenav, active })
            }
          />

          <Icon
            sx={(theme) =>
              collapseArrow(theme, {
                noCollapse,
                transparentSidenav,
                miniSidenav,
                open,
              })
            }
          >
            expand_less
          </Icon>
        </IBox>
      </ListItem>
      {children && (
        <Collapse in={open} unmountOnExit>
          {children}
        </Collapse>
      )}
    </>
  );
}

// Setting default values for the props of SidenavCollapse
SidenavCollapse.defaultProps = {
  color: "info",
  active: false,
  noCollapse: false,
  children: false,
  open: false,
};

export default SidenavCollapse;
