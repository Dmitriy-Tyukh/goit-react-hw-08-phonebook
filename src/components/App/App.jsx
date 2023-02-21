import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { Layout } from '../Layout/Layout';
import { HelmetProvider } from 'react-helmet-async';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
import {PrivateRoute} from '../AuthRoutes/PrivateRoute';
import {PublicRoute} from '../AuthRoutes/PublicRoute';

const HomePage = lazy(() => import('../../pages/HomePage'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage'));

const App = () => {
  const dispatch = useDispatch();
  const helmetContext = {};

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

    return (
      <HelmetProvider context={helmetContext}>
        <Routes>
            <Route path="/" element={<Layout/> }>
                <Route index element={<HomePage />} />
                        
              <Route path="" element={<PublicRoute />}>
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
              </Route>

              <Route path="" element={<PrivateRoute />}>
                <Route path="/contacts" element={<ContactsPage />} />
              </Route>
                    
             </Route>
            </Routes>
      </HelmetProvider>
    );
};

export default App;
