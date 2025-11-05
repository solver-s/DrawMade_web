import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const RouteHandler = () => {
  const { isLogin } = useAuth();

  if (!isLogin) return <Navigate to="/start" />;
  return <Navigate to="/home" />;
};
