import React from 'react'
import NotificationItem from "./NotificationItem";
import { shallow } from 'enzyme';
describe('NotificationItem component', () => {
    it('rendering of the component works without crashing', () => {
        const wrapper = shallow(<NotificationItem/>);
        expect(wrapper.exists().toBe(true));
    });
    
});
