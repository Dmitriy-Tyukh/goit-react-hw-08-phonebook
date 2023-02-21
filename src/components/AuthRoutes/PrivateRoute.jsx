import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { celectToken } from 'redux/auth/auth-selectors';

export const PrivateRoute = () => {
  const token = useSelector(celectToken);

  return token ? <Outlet /> : <Navigate to="/login" replace />;
};
