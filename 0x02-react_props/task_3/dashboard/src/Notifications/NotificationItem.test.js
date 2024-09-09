import React from 'react'
import NotificationItem from "./NotificationItem";
import { shallow } from 'enzyme';
describe('NotificationItem component', () => {
    it('renders the correct html with dummy props', () => {
        const wrapper = shallow(<NotificationItem type="default" value="test" />);
        expect(wrapper.find('.notification-item').length).toBe(1);
        expect(wrapper.find('.default').length).toBe(1)
        expect(wrapper.text()).toBe('test');
    });
});
