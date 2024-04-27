/* eslint-disable react/prop-types */
// @mui material components
import Collapse from "@mui/material/Collapse";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import IBox from "components/common/IBox";

// Custom styles for the SidenavItem
import {
  item,
  itemContent,
  itemArrow,
} from "components/model/Sidenav/styles/sidenavItem";
import { useSelector } from "react-redux";

// Soft UI Dashboard PRO React contexts

function SidenavItem({ name, active, nested, children, open, ...rest }) {
  const { miniSidenav } = useSelector((state) => state.SliceUI);

  return (
    <>
      <ListItem {...rest} component="li" sx={item}>
        <IBox
          sx={(theme) =>
            itemContent(theme, { active, miniSidenav, name, nested })
          }
        >
          <ListItemText primary={name} />
          {children && (
            <Icon
              component="i"
              sx={(theme) => itemArrow(theme, { open, miniSidenav })}
            >
              expand_less
            </Icon>
          )}
        </IBox>
      </ListItem>
      {children && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          {children}
        </Collapse>
      )}
    </>
  );
}

// Setting default values for the props of SidenavItem
SidenavItem.defaultProps = {
  active: false,
  nested: false,
  children: false,
  open: false,
};

export default SidenavItem;
