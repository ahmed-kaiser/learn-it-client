import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading";
import { AuthContext } from "../context/UserContext";

const AuthRequired = ({ children }) => {
  const { userData, isLoading } = useContext(AuthContext);
  const location = useLocation();

  if (isLoading) {
    return <Loading />;
  }

  if (userData) {
    return children;
  }

  return <Navigate to="/sign-in" state={{ from: location }} replace />;
};

export default AuthRequired;
