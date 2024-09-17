import React from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends React.PureComponent {
  handleClick = () => {
    this.props.markAsRead(this.props.id);
  };

  render() {
    const { type = 'default', value, html } = this.props;

    if (html) {
      return (
        <li
          className={`notification-item ${type}`}
          data-priority={type}
          onClick={this.handleClick}
        >
          <span dangerouslySetInnerHTML={{ __html: html.__html }} />
        </li>
      );
    }

    return (
      <li
        className={`notification-item ${type}`}
        data-priority={type}
        onClick={this.handleClick}
      >
        {value}
      </li>
    );
  }
}

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