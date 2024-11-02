import React, { Suspense, useEffect } from "react";
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
  Navigate,
} from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import store from './redux/store.js';
import KongPage from "./Pages/HousePages/KongPage/KongPage.jsx";
import LeoPage from "./Pages/HousePages/LeoPages/LeoPage.jsx";
import PhoenixPage from "./Pages/HousePages/PhoenixPages/PhoenixPage.jsx";
import TuskerPage from "./Pages/HousePages/TuskerPage/TuskerPage.jsx";
import { Analytics } from "@vercel/analytics/react";
import { setUser } from "./redux/actions/authActions.js";
import { isTokenValid } from "./utils/auth.js";
import ForgotPassword from "./Pages/login_signupPage/ForgotPassword.jsx";
import Loader from "./Components/Loader.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<HomePage />} />
        <Route path="leaderboardandevents" element={
          <Suspense fallback={<Loader />}>
            <Leaderboard />
          </Suspense>
        } />
      </Route>
      
      <Route path="/houseofkong" element={
        <Suspense fallback={<Loader />}>
          <KongPage />
        </Suspense>
      }></Route>
      <Route path="/houseofleo" element={
        <Suspense fallback={<Loader />}>
          <LeoPage />
        </Suspense>
      }></Route>
      <Route path="/houseofphoenix" element={
        <Suspense fallback={<Loader />}>
          <PhoenixPage />
        </Suspense>
      }></Route>
      <Route path="/houseoftusker" element={
        <Suspense fallback={<Loader />}>
          <TuskerPage />
        </Suspense>
      }></Route>

      <Route path="/login" element={
        <Suspense fallback={<Loader />}>
          {isTokenValid() ? <Navigate to='/' /> : <LoginPage />}
        </Suspense>
      }></Route>
      <Route path="/signup" element={
        <Suspense fallback={<Loader />}>
          {isTokenValid() ? <Navigate to='/' /> : <SignupPage />}
        </Suspense>
      }></Route>
      <Route path="/forgotpassword" element={
        <Suspense fallback={<Loader />}>
          <ForgotPassword />
        </Suspense>
      }></Route>  
    </>
  )
);

const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const user = isTokenValid();
    if (user) {
      dispatch(setUser(user.user));
    }
  }, [dispatch]);

  return <RouterProvider router={router} />;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
      <Analytics />
    </Provider>
  </React.StrictMode>
);
