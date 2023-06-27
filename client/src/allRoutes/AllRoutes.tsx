import React from "react";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/404/ErrorPage";

export default function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
