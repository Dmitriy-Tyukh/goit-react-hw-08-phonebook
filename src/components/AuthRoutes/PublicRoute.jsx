import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { celectToken } from 'redux/auth/auth-selectors';

export const PublicRoute = () => {
  const token = useSelector(celectToken);
  const location = useLocation();

    return token ? <Navigate to={location?.state?.from ?? '/'} replace />
        : <Outlet />
  };
