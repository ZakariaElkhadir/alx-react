import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList"; // Assuming you have a CourseList component
import React, { useState } from "react";
import propTypes from "prop-types";

function App({isLoggedIn}) {

  return (
    <>
      <Notifications />
      <Header />
      <hr />
      {isLoggedIn ? <CourseList /> : <Login />}
      <Footer />
    </>
  );
}

App.propTypes = {
  isLoggedIn: propTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
};

export default App;