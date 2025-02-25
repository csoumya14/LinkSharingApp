import { FC } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';

interface LayoutProps {}
export const Layout: FC<LayoutProps> = () => {
  const location = useLocation(); // ✅ Now inside Router context

  // Define pages where NavBar should be hidden
  const hideNavBarRoutes = ['/login', '/signup', '/preview'];

  return (
    <>
      {!hideNavBarRoutes.includes(location.pathname) && <NavBar />}
      <Outlet /> {/* 🔹 This renders the current route's component */}
    </>
  );
};
