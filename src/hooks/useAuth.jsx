import { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({
  isLogin: false,
  user: null,
  handleLogin: () => {},
});

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLogin((prev) => !prev);
    navigate("/", { replace: true });
  };

  return <AuthContext.Provider value={{ isLogin, handleLogin }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
