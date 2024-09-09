import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import React from "react";

function App() {
  return (
    <>
      <Notifications />
      <Header />
      <hr />
      <Login />
      <Footer />
    </>
  );
}

export default App;
