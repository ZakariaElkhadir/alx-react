import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ id, type = 'default', value, html, markAsRead }) => {
  const handleClick = () => {
    markAsRead(id);
  };

  if (html) {
    return (
      <li
        className={`notification-item ${type}`}
        data-priority={type}
        onClick={handleClick}
      >
        <span dangerouslySetInnerHTML={{ __html: html.__html }} />
      </li>
    );
  }

  return (
    <li
      className={`notification-item ${type}`}
      data-priority={type}
      onClick={handleClick}
    >
      {value}
    </li>
  );
};

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  markAsRead: PropTypes.func.isRequired,
};

export default NotificationItem;