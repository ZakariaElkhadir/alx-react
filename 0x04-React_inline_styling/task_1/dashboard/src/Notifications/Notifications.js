import React, { Component } from "react";
import PropTypes from "prop-types";
import NotificationItem from "./NotificationItem";
import NotificationShape from "./NotificationItemShape";
import exit from "../assets/x.png";
import { StyleSheet, css } from "aphrodite";
import "./Notifications.css";

class Notifications extends Component {
  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
    );
  }

  render() {
    const { displayDrawer, listNotifications = [] } = this.props;

    return (
      <>
        <div className={`menuItem ${css(styles.MenuItem)}`}>Your notification</div>
        {displayDrawer && (
          <div className={`Notifications ${css(styles.Notification)}`}>
            <button
              aria-label="Close"
              onClick={() => console.log("Close button has been clicked")}
            >
              <img src={exit} alt="Close" width={10} />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
              {listNotifications.length === 0 ? (
                <li>No new notification for now</li>
              ) : (
                listNotifications.map(({ id, html, type, value }) => (
                  <NotificationItem
                    id={id}
                    key={id}
                    type={type}
                    value={value}
                    html={html ? { __html: html } : undefined}
                    markAsRead={() => this.markAsRead(id)}
                  />
                ))
              )}
            </ul>
          </div>
        )}
      </>
    );
  }
}
const styles = StyleSheet.create({
  Notification: {
    border: 'dashed 1px #e0354b',
    padding: '5px',
    width: '300px',
    float: 'right'
  },
  MenuItem: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
})
Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;
