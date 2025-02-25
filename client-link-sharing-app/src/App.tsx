import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import ThemeWrapper from './theme/ThemeWrapper';
import { NavBar } from './components/Organisms/NavBar/NavBar';
import { AddLinks } from './components/Organisms/AddLinks/AddLinks';
import { ProfileDetails } from './components/Organisms/ProfileDetails/ProfileDetails';
import { Preview } from './components/Organisms/Preview/Preview';
import { useAuth } from './context/AuthContext';
import { Login } from './components/Organisms/Login/Login';
import { Signup } from './components/Organisms/Signup/Signup';
import { Layout } from './components/Organisms/Layout/Layout';

const App = () => {
  const { isAuthenticated } = useAuth(); // Get auth status
  return (
    <ThemeWrapper>
      <Routes>
        <Route path="/" element={<Navigate to={isAuthenticated ? '/add-links' : '/login'} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {isAuthenticated && (
          <Route element={<Layout />}>
            <Route path="/add-links" element={<AddLinks />} />
            <Route path="/profile" element={<ProfileDetails />} />
            <Route path="/preview" element={<Preview />} />
          </Route>
        )}
        {!isAuthenticated && <Route path="*" element={<Navigate to="/login" />} />}
      </Routes>
    </ThemeWrapper>
  );
};

export default App;
