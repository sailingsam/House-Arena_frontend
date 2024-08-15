import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("token");

    return children;
};

export default ProtectedRoute;