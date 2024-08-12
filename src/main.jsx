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
import { Provider } from "react-redux";
import store from './redux/store.js';
import KongPage from "./Pages/HousePages/KongPage/KongPage.jsx";
import LeoPage from "./Pages/HousePages/LeoPages/LeoPage.jsx";
import PhoenixPage from "./Pages/HousePages/PhoenixPages/PhoenixPage.jsx";
import TuskerPage from "./Pages/HousePages/TuskerPage/TuskerPage.jsx";
import ProtectedRoute from "./Components/ProtectedRoute.js";
import { Analytics } from "@vercel/analytics/react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<HomePage />} />
        <Route path="leaderboardandevents" element={<Leaderboard />} />
      </Route>
      
      <Route path="/houseofkong" element={<KongPage />}></Route>
      <Route path="/houseofleo" element={<LeoPage />}></Route>
      <Route path="/houseofphoenix" element={<PhoenixPage />}></Route>
      <Route path="/houseoftusker" element={<TuskerPage />}></Route>

      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/signup" element={<SignupPage />}></Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <Analytics />
    </Provider>
  </React.StrictMode>
);
