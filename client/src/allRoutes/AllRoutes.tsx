import React from "react";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/404/ErrorPage";
import LoginPage from "../pages/Login/LoginPage";
import SignUpPage from "../pages/SignUp/SignUpPage";
import Home from "../pages/Home/Home";
import Group from "../pages/Group/Group";
import Setting from "../pages/Setting/Setting";
import Loader from "../Loader";
import ChatPage from "../pages/Home/Chat";
import UserChat from "../pages/Home/Chat/UserChat";
import MakePrivate from "../hoc/MakePrivate";

export default function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MakePrivate><Home /></MakePrivate>}>
          <Route index element={<MakePrivate><ChatPage /></MakePrivate>} />
          <Route path={`chat/:id`} element={<MakePrivate><UserChat /></MakePrivate>} />
        </Route>
        <Route path="/group" element={<MakePrivate><Group /></MakePrivate>} />
        <Route path="/setting" element={<MakePrivate><Setting /></MakePrivate>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/loading" element={<Loader />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
