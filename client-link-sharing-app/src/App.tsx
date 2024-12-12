import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ThemeWrapper from './theme/ThemeWrapper';
import { NavBar } from './components/Organisms/NavBar/NavBar';
import { AddLinks } from './components/Organisms/AddLinks/AddLinks';
import { ProfileDetails } from './components/Organisms/ProfileDetails/ProfileDetails';
import { Preview } from './components/Organisms/Preview/Preview';
import { AppProvider } from './context/AppContext';

const App = () => {
  return (
    <AppProvider>
      <ThemeWrapper>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Navigate to="/add-links" />} />
            <Route path="/add-links" element={<AddLinks />} />
            <Route path="/profile" element={<ProfileDetails />} />
            <Route path="/preview" element={<Preview />} />
          </Routes>
        </Router>
      </ThemeWrapper>
    </AppProvider>
  );
};

export default App;
