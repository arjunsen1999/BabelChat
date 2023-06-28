import React from "react";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/404/ErrorPage";
import LoginPage from "../pages/Login/LoginPage";
import SignUpPage from "../pages/SignUp/SignUpPage";
import Home from "../pages/Home/Home";
import Group from "../pages/Group/Group";
import Setting from "../pages/Setting/Setting";

export default function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/group" element={<Group />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
