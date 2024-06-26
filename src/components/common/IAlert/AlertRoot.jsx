import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const AlertRoot = styled(Box)(({ theme, ownerState }) => {
  const { palette, typography, borders, functions } = theme;
  const { color } = ownerState;

  const { white, alertColors } = palette;
  const { fontSizeRegular, fontWeightMedium } = typography;
  const { borderWidth, borderRadius } = borders;
  const { pxToRem, linearGradient } = functions;

  const backgroundImageValue = alertColors[color]
    ? linearGradient(alertColors[color].main, alertColors[color].state)
    : linearGradient(alertColors.info.main, alertColors.info.state);

  const borderValue = alertColors[color]
    ? `${borderWidth[1]} solid ${alertColors[color].border}`
    : `${borderWidth[1]} solid ${alertColors.info.border}`;

  return {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: pxToRem(60),
    backgroundImage: backgroundImageValue,
    color: white.main,
    position: "relative",
    padding: pxToRem(16),
    marginBottom: pxToRem(16),
    border: borderValue,
    borderRadius: borderRadius.md,
    fontSize: fontSizeRegular,
    fontWeight: fontWeightMedium,
  };
});

export default AlertRoot;
