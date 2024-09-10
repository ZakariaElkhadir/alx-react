import React from "react";
import "./Notifications.css";
import PropTypes from "prop-types";
import exit from "../assets/x.png";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";

const Notifications = ({ displayDrawer }) => {
  return (
    <>
      <div className="menuItem">
        Your notification
      </div>
      {displayDrawer && (
        <div className="Notifications">
          <button
            style={{
              float: "right",
              border: "none",
              background: "none",
              padding: 0,
            }}
            aria-label="Close"
            onClick={() => console.log("Close button has been clicked")}
          >
            <img src={exit} alt="Close" width={10} />
          </button>
          <p>Here is the list of notifications</p>
          <ul>
            <NotificationItem type="default" value="New course available" />
            <NotificationItem type="urgent" value="New resume available" />
            <NotificationItem
              type="urgent"
              html={{
                __html: "<strong>Urgent requirement</strong> - complete by EOD",
              }}
            />
          </ul>
        </div>
      )}
    </>
  );
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;