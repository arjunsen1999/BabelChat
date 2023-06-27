import React from "react";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/404/ErrorPage";
import LoginPage from "../pages/Login/LoginPage";
import SignUpPage from "../pages/SignUp/SignUpPage";

export default function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
