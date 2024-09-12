import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ type = 'default', value, html }) => {
  if (html) {
    return (
      <li
        className={`notification-item ${type}`}
        data-priority={type}
      >
      <span dangerouslySetInnerHTML={{ __html: html.__html }} />
      </li>
    );
  }
  return (
    <li className={`notification-item ${type}`} data-priority={type}>
      {value}
    </li>
  );
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
};

export default NotificationItem;