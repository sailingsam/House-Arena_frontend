import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import Leaderboard from "./Pages/LEpage/LeaderboardAndEvents.jsx";
import LoginPage from "./Pages/login_signupPage/Login.jsx";
import SignupPage from "./Pages/login_signupPage/Signup.jsx";
import "./index.css";
import Layout from "./Layout.jsx";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<HomePage />} />
        <Route path="leaderboard&events" element={<Leaderboard />} />
      </Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/signup" element={<SignupPage />}></Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
