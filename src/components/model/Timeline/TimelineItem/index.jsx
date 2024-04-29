import Icon from "@mui/material/Icon";

import IBox from "components/common/IBox";
import ITypography from "components/common/ITypography";
import IBadge from "components/common/IBadge";

import { useTimeline } from "../context";

import { timelineItem, timelineItemIcon } from "./styles";

function TimelineItem({ color, icon, title, dateTime, description, badges, lastItem }) {
  const isDark = useTimeline();

  const renderBadges =
    badges.length > 0
      ? badges.map((badge, key) => {
          const badgeKey = `badge-${key}`;

          return (
            <IBox key={badgeKey} mr={key === badges.length - 1 ? 0 : 0.5}>
              <IBadge color={color} size="xs" badgeContent={badge} container />
            </IBox>
          );
        })
      : null;

  return (
    <IBox position="relative" sx={(theme) => timelineItem(theme, { lastItem })}>
      <IBox
        bgColor={isDark ? "dark" : "white"}
        width="1.625rem"
        height="1.625rem"
        borderRadius="50%"
        position="absolute"
        top="3.25%"
        left="2px"
        zIndex={2}
      >
        <Icon sx={(theme) => timelineItemIcon(theme, { color })}>{icon}</Icon>
      </IBox>
      <IBox ml={5.75} pt={description ? 0.7 : 0.5} lineHeight={0} maxWidth="30rem">
        <ITypography variant="button" fontWeight="medium" color={isDark ? "white" : "dark"}>
          {title}
        </ITypography>
        <IBox mt={0.5}>
          <ITypography
            variant="caption"
            fontWeight="medium"
            color={isDark ? "secondary" : "text"}
          >
            {dateTime}
          </ITypography>
        </IBox>
        <IBox mt={2} mb={1.5}>
          {description ? (
            <ITypography variant="button" fontWeight="regular" color="text">
              {description}
            </ITypography>
          ) : null}
        </IBox>
        {badges.length > 0 ? (
          <IBox display="flex" pb={lastItem ? 1 : 2}>
            {renderBadges}
          </IBox>
        ) : null}
      </IBox>
    </IBox>
  );
}

TimelineItem.defaultProps = {
  color: "info",
  badges: [],
  lastItem: false,
  description: "",
};

export default TimelineItem;
