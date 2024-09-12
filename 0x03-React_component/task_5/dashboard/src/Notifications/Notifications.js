import React from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import NotificationShape from './NotificationItemShape';
import exit from '../assets/x.png';
import './Notifications.css';

const Notifications = ({ displayDrawer, listNotifications = [] }) => {
  return (
    <>
      <div className="menuItem">
        Your notification
      </div>
      {displayDrawer && (
        <div className="Notifications">
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
                  key={id}
                  type={type}
                  value={value}
                  html={html ? { __html: html } : undefined}
                />
              ))
            )}
          </ul>
        </div>
      )}
    </>
  );
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;