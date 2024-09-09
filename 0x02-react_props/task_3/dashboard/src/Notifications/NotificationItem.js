import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ type = 'default', value = '', html = null }) {
  return (
    <li className={`notification-item ${type}`} data-notification-type={type}>
      {html ? (
        <span dangerouslySetInnerHTML={html}></span>
      ) : (
        value
      )}
    </li>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
};

export default NotificationItem;
