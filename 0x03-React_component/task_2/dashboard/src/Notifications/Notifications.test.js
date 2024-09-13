import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: '<strong>Urgent requirement</strong> - complete by EOD' }
];

describe('Notifications component', () => {
  it('renders the correct number of items and the correct HTML for each', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);

    // Check if the ul contains exactly 3 children
    expect(wrapper.find('ul').children().length).toBe(3);

    // Check if the first NotificationItem has the correct value
    expect(wrapper.find(NotificationItem).at(0).prop('value')).toBe('New course available');
  });

  it('calls console.log with the correct message when markAsRead is called', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    const instance = wrapper.instance();

    // Call the markAsRead function
    instance.markAsRead(1);

    // Check if console.log was called with the correct message
    expect(consoleSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');

    // Restore the console.log function
    consoleSpy.mockRestore();
  });
});