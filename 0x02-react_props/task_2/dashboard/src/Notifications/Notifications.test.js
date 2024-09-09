import NotificationItem from './NotificationItem';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import { getLatestNotification } from '../utils/utils';
import React from 'react'

describe('Notifications component', () => {
    it('renders the correct number of items and the correct HTML for each', () => {
      const wrapper = shallow(<Notifications />);
  
      // Check if the ul contains exactly 3 children
      expect(wrapper.find('ul').children()).toHaveLength(3);
  
      // Check if the first child has the expected HTML content with class and data attributes
      expect(wrapper.find('ul').childAt(0).html()).toEqual(
        '<li class="notification-item default" data-notification-type="default">New course available</li>'
      );
  
      // Check the second child
      expect(wrapper.find('ul').childAt(1).html()).toEqual(
        '<li class="notification-item urgent" data-notification-type="urgent">New resume available</li>'
      );
  
      // Check the third child (which has HTML content)
      expect(wrapper.find('ul').childAt(2).html()).toEqual(
        '<li class="notification-item urgent" data-notification-type="urgent"><span><strong>Urgent requirement</strong> - complete by EOD</span></li>'
      );
    });
  });