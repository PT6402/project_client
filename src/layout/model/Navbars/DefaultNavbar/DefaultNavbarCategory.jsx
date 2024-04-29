import PropTypes from "prop-types";

import Icon from "@mui/material/Icon";

import IBox from "components/common/IBox";
import ITypography from "components/common/ITypography";

function DefaultNavbarCategory({ color, icon, title }) {
  return (
    <IBox width="100%" display="flex" alignItems="center" py={1}>
      <IBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="1.5rem"
        height="1.5rem"
        borderRadius="md"
        color="white"
        bgColor={color}
        variant="gradient"
        mr={1}
      >
        {typeof icon === "string" ? <Icon>{icon}</Icon> : icon}
      </IBox>
      <ITypography variant="button" fontWeight="bold">
        {title}
      </ITypography>
    </IBox>
  );
}

DefaultNavbarCategory.defaultProps = {
  color: "info",
};

DefaultNavbarCategory.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default DefaultNavbarCategory;
