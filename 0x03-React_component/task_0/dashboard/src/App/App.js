import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import React, { Component } from "react";
import propTypes from "prop-types";
import { getLatestNotification } from "../utils/utils";

// List of courses
const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 }
];

// List of notifications with unique IDs
const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
	{ id: 2, type: 'urgent', value: 'New resume available' },
	{ id: 3, type: 'urgent', html: getLatestNotification() },
];

class App extends Component{
  render(){
    const {isLoggedIn} = this.props;
  return (
    <>
      <Notifications listNotifications={listNotifications} />
      <Header />
      <hr />
      {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
      <Footer />
    </>
  );
}
}

App.propTypes = {
  isLoggedIn: propTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
};

export default App;
