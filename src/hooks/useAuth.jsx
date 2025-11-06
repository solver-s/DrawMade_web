import { useState, createContext, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { loadLocalStorage } from "../utils/loadLocalStorage";

const AuthContext = createContext({
  isLogin: false,
  user: null,
  handleLogin: () => {},
});

const loadIsLogin = () => {
  const isLogin = loadLocalStorage("isLogin");
  if (isLogin === null) return false;
  return isLogin;
};

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(loadIsLogin());
  const [user, setUser] = useState({ uuid: 0, name: "사용자" });
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("isLogin", isLogin);
  }, [isLogin]);

  const handleLogin = () => {
    setIsLogin((prev) => !prev);
    navigate("/", { replace: true });
  };

  return <AuthContext.Provider value={{ isLogin, user, handleLogin }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
