import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css'

const NotificationItem = ({ type, value, html }) => {
  return (
    <li className={`notification-item ${type}`} data-priority={type}>
      {html ? <span dangerouslySetInnerHTML={html} /> : value}
    </li>
  );
};

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
};

export default NotificationItem;