import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import { AppBar } from '../AppBar/AppBar';
import { Spiner } from 'components/Spiner/Spiner';

export const Layout = () => {
    return (
      <div>
        <AppBar />
        <Suspense fallback={<Spiner />}>
          <Outlet />
        </Suspense>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    );
};
