import { useState } from "react";
import Fade from "@mui/material/Fade";
import IBox from "components/common/IBox";
import AlertRoot from "components/common/IAlert/AlertRoot";
import IAlertCloseIcon from "components/common/IAlert/IAlertCloseIcon";

function IAlert({ color, dismissible, children, ...rest }) {
  const [alertStatus, setAlertStatus] = useState("mount");

  const handleAlertStatus = () => setAlertStatus("fadeOut");

  const alertTemplate = (mount = true) => (
    <Fade in={mount} timeout={300}>
      <AlertRoot ownerState={{ color }} {...rest}>
        <IBox display="flex" alignItems="center" color="white">
          {children}
        </IBox>
        {dismissible ? (
          <IAlertCloseIcon onClick={mount ? handleAlertStatus : null}>
            &times;
          </IAlertCloseIcon>
        ) : null}
      </AlertRoot>
    </Fade>
  );

  switch (true) {
    case alertStatus === "mount":
      return alertTemplate();
    case alertStatus === "fadeOut":
      setTimeout(() => setAlertStatus("unmount"), 400);
      return alertTemplate(false);
    default:
      alertTemplate();
      break;
  }

  return null;
}

IAlert.defaultProps = {
  color: "info",
  dismissible: false,
};

export default IAlert;
