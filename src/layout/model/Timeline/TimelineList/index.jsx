import Card from "@mui/material/Card";

import IBox from "components/common/IBox";
import ITypography from "components/common/ITypography";

import { TimelineProvider } from "examples/Timeline/context";

function TimelineList({ title, dark, children }) {
  return (
    <TimelineProvider value={dark}>
      <Card>
        <IBox bgColor={dark ? "dark" : "white"} variant="gradient">
          <IBox pt={3} px={3}>
            <ITypography variant="h6" fontWeight="medium" color={dark ? "white" : "dark"}>
              {title}
            </ITypography>
          </IBox>
          <IBox p={2}>{children}</IBox>
        </IBox>
      </Card>
    </TimelineProvider>
  );
}

TimelineList.defaultProps = {
  dark: false,
};

export default TimelineList;
