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
    expect(wrapper.find('ul').children()).toHaveLength(3);

    // Check if the first child has the expected HTML content with class and data attributes
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

  it('renders correctly with an empty listNotifications array', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(0);
    expect(wrapper.find(NotificationItem).exists()).toBeFalsy();
    
    expect(wrapper.find(NotificationItem).exists()).toBeFalsy();
  });

  it('the menu item is being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('.menuItem').exists()).toBeTruthy();
  });
});
