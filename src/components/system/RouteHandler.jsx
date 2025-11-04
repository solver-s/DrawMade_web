import { useState } from "react";
import { Navigate } from "react-router-dom";

export const RouteHandler = () => {
  const [isLogin, setIsLogin] = useState(false);

  if (!isLogin) return <Navigate to="/start" />;
  return <Navigate to="/home" />;
};
