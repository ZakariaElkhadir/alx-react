import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications component tests', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders three list items when listNotifications is provided', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } }
    ];
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find(NotificationItem).length).toBe(3);
  });

  it('renders the text "Here is the list of notifications" when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.Notifications p').text()).toBe('Here is the list of notifications');
  });

  it('renders correctly if you pass an empty array or if you don’t pass the listNotifications property', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(wrapper.find(NotificationItem).length).toBe(1);
    expect(wrapper.find(NotificationItem).prop('value')).toBe('No new notification for now');
  });

  it('renders correctly when you pass a list of notifications', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } }
    ];
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find(NotificationItem).length).toBe(3);

    // Check the first child
    expect(wrapper.find('ul').childAt(0).html()).toEqual(
      '<li class="notification-item default" data-priority="default">New course available</li>'
    );

    // Check the second child
    expect(wrapper.find('ul').childAt(1).html()).toEqual(
      '<li class="notification-item urgent" data-priority="urgent">New resume available</li>'
    );

    // Check the third child (which has HTML content)
    expect(wrapper.find('ul').childAt(2).html()).toEqual(
      '<li class="notification-item urgent" data-priority="urgent"><span><strong>Urgent requirement</strong> - complete by EOD</span></li>'
    );
  });

  it('the menu item is being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('.menuItem').exists()).toBeTruthy();
  });

  it('renders correctly if listNotifications is an empty array or not passed', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(wrapper.find(NotificationItem).length).toBe(1);
    expect(wrapper.find(NotificationItem).prop('value')).toBe('No new notification for now');
  });

  it('renders correctly when listNotifications is empty and displays "No new notification for now"', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(wrapper.find('.Notifications p').exists()).toBeFalsy();
    expect(wrapper.find(NotificationItem).prop('value')).toBe('No new notification for now');
  });
});