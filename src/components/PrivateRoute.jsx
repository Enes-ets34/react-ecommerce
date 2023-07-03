import { useSelector } from "react-redux";
import { Route, Navigate } from "react-router-dom";

export default function PrivateRoute({ element }) {
  const user = useSelector((state) => state.auth.user);

  if (!user) {
    // Kullanıcı oturum açmamış, giriş yapılmasını yönlendir
    return <Navigate to="/login" replace={true} />;
  }
  return element;
}
