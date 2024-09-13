import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

describe('App component tests', () => {
  it('should render without crashing', () => {
    const component = shallow(<App />);
    expect(component.exists()).toBe(true);
  });

  it('should render Notifications component', () => {
    const component = shallow(<App />);
    expect(component.find(Notifications).length).toBe(1);
  });

  it('should call logOut and alert when Control and h keys are pressed', () => {
    const logOutMock = jest.fn();
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    const component = shallow(<App logOut={logOutMock} />);
    
    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
    document.dispatchEvent(event);

    expect(alertMock).toHaveBeenCalledWith('Logging you out');
    expect(logOutMock).toHaveBeenCalled();

    alertMock.mockRestore();
  });
  afterAll(() => {
    // Clean up the mock
    delete global.document;
  });
});