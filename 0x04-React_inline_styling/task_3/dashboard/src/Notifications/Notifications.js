import React, { Component } from "react";
import PropTypes from "prop-types";
import NotificationItem from "./NotificationItem";
import NotificationShape from "./NotificationItemShape";
import exit from "../assets/x.png";
import { StyleSheet, css } from "aphrodite";

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
            <ul className={css(styles.ul)}>
              {listNotifications.length === 0 ? (
                <li>No new notification for now</li>
              ) : (
                listNotifications.map(({ id, html, type, value }) => (
                  <li className={css(styles.notItem)} key={id}>
                    <NotificationItem
                      id={id}
                      type={type}
                      value={value}
                      html={html ? { __html: html } : undefined}
                      markAsRead={() => this.markAsRead(id)}
                    />
                  </li>
                
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
    float: 'right',
    '@media (max-width: 900px)': {
      width: '100%',
      height: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1000,
      backgroundColor: 'white',
      fontSize: '20px',
    },
  },
  MenuItem: {
    padding: '10px',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  notItem: {
    '@media (max-width: 900px)': {
      listStyleType: 'none',
      borderBottom: '1px solid black'
    },
  },
  ul: {
    '@media (max-width: 900px)': {
      padding: 0,
    },
  },
});

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;