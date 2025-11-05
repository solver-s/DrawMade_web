import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const CheckAuth = () => {
  const { isLogin } = useAuth();

  if (!isLogin) return <Navigate to="/start" replace />;
  return <Outlet />;
};
