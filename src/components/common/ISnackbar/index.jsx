/* eslint-disable react/prop-types */
// @mui material components/common
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";
import Divider from "@mui/material/Divider";
import Fade from "@mui/material/Fade";

// Soft UI Dashboard PRO React components
import IBox from "components/common/IBox";
import ITypography from "components/common/ITypography";

// Soft UI Dashboard PRO React base styles
import typography from "assets/theme/base/typography";

// Custom styles for the ISnackbar
import ISnackbarIconRoot from "components/common/common/ISnackbar/ISnackbarIconRoot";

function ISnackbar({
  color,
  icon,
  title,
  dateTime,
  content,
  close,
  bgWhite,
  ...rest
}) {
  const { size } = typography;
  let titleColor;
  let dateTimeColor;
  let dividerColor;

  if (bgWhite) {
    titleColor = color;
    dateTimeColor = "dark";
    dividerColor = false;
  } else if (color === "light") {
    titleColor = "dark";
    dateTimeColor = "text";
    dividerColor = false;
  } else {
    titleColor = "white";
    dateTimeColor = "white";
    dividerColor = true;
  }

  return (
    <Snackbar
      TransitionComponent={Fade}
      autoHideDuration={5000}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      {...rest}
      action={
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={close}
        >
          <Icon fontSize="small">close</Icon>
        </IconButton>
      }
    >
      <IBox
        variant={bgWhite ? "contained" : "gradient"}
        bgColor={bgWhite ? "white" : color}
        minWidth="21.875rem"
        maxWidth="100%"
        shadow="md"
        borderRadius="md"
        p={1}
      >
        <IBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          color="dark"
          p={1.5}
        >
          <IBox display="flex" alignItems="center" lineHeight={0}>
            <ISnackbarIconRoot fontSize="small" ownerState={{ color, bgWhite }}>
              {icon}
            </ISnackbarIconRoot>
            <ITypography
              variant="button"
              fontWeight="medium"
              color={titleColor}
              textGradient={bgWhite}
            >
              {title}
            </ITypography>
          </IBox>
          <IBox display="flex" alignItems="center" lineHeight={0}>
            <ITypography variant="caption" color={dateTimeColor}>
              {dateTime}
            </ITypography>
            <Icon
              sx={{
                color: ({ palette: { dark, white } }) =>
                  bgWhite || color === "light" ? dark.main : white.main,
                fontWeight: ({ typography: { fontWeightBold } }) =>
                  fontWeightBold,
                cursor: "pointer",
                marginLeft: 2,
                transform: "translateY(-1px)",
              }}
              onClick={close}
            >
              close
            </Icon>
          </IBox>
        </IBox>
        <Divider sx={{ margin: 0 }} light={dividerColor} />
        <IBox
          p={1.5}
          color={bgWhite || color === "light" ? "text" : "white"}
          fontSize={size.sm}
        >
          {content}
        </IBox>
      </IBox>
    </Snackbar>
  );
}

// Setting default values for the props of ISnackbar
ISnackbar.defaultProps = {
  bgWhite: false,
  color: "info",
};

export default ISnackbar;
