import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export const CheckAuth = () => {
  const [user, setUser] = useState({});

  if (!user) return <Navigate to="/start" replace />;

  return <Outlet />;
};
