import { Routes, Route, Navigate } from 'react-router-dom';
import ThemeWrapper from './theme/ThemeWrapper';
import { AddLinks } from './components/Organisms/AddLinks/AddLinks';
import { ProfileDetails } from './components/Organisms/ProfileDetails/ProfileDetails';
import { Preview } from './components/Organisms/Preview/Preview';
import { useAuth } from './context/AuthContext';
import { Login } from './components/Organisms/Login/Login';
import { Layout } from './components/Organisms/Layout/Layout';
import { Signup } from './components/Organisms/Signup/Signup';

const App = () => {
  const { isAuthenticated } = useAuth(); // Get auth status from context
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
