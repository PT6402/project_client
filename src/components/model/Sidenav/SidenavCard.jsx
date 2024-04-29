import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Icon from "@mui/material/Icon";
import Link from "@mui/material/Link";

// Soft UI Dashboard PRO React components
import IButton from "components/common/IButton";
import IBox from "components/common/IBox";
import ITypography from "components/common/ITypography";

// Custom styles for the SidenavCard
import {
  card,
  cardContent,
  cardIconBox,
  cardIcon,
} from "components/model/Sidenav/styles/sidenavCard";

// Soft UI Dashboard PRO React context
import { useSelector } from "react-redux";

function SidenavCard() {
  const { miniSidenav } = useSelector((state) => state.SliceUI);
  const sidenavColor = "info";

  return (
    <Card sx={(theme) => card(theme, { miniSidenav })}>
      <CardContent sx={(theme) => cardContent(theme, { sidenavColor })}>
        <IBox
          bgColor="white"
          width="2rem"
          height="2rem"
          borderRadius="md"
          shadow="md"
          mb={2}
          sx={cardIconBox}
        >
          <Icon
            fontSize="medium"
            sx={(theme) => cardIcon(theme, { sidenavColor })}
          >
            star
          </Icon>
        </IBox>
        <IBox lineHeight={1}>
          <ITypography variant="h6" color="white">
            Need help?
          </ITypography>
          <IBox mb={1.825} mt={-1}>
            <ITypography variant="caption" color="white" fontWeight="medium">
              Please check our docs
            </ITypography>
          </IBox>
          <IButton
            component={Link}
            href="https://www.creative-tim.com/learning-lab/react/quick-start/soft-ui-dashboard/"
            target="_blank"
            rel="noreferrer"
            size="small"
            color="white"
            fullWidth
          >
            documentation
          </IButton>
        </IBox>
      </CardContent>
    </Card>
  );
}

export default SidenavCard;
