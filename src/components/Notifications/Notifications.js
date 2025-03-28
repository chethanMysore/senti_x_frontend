/* eslint-disable react/prop-types */
import { NotificationOptions } from "constants/DefaultValues";
import { NotificationTypes } from "constants/DefaultValues";
import React from "react";

import { ToastContainer, toast } from "react-toastify";

const Notifications = ({ message, messageType, options }) => {
  React.useEffect(() => {
    if (message && message !== "") {
      let messageOptions = { ...NotificationOptions, ...options };
      switch (messageType) {
        case NotificationTypes.INFO: {
          toast.info(message, messageOptions);
          break;
        }
        case NotificationTypes.SUCCESS: {
          toast.success(message, messageOptions);
          break;
        }
        case NotificationTypes.WARNING: {
          toast.warning(message, messageOptions);
          break;
        }
        case NotificationTypes.ERROR: {
          toast.error(message, messageOptions);
          break;
        }
        default:
          toast(message, messageOptions);
      }
    }
  });
  return (
    <div>
      <ToastContainer />
    </div>
  );
};
export default Notifications;
