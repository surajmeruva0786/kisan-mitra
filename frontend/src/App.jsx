import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useProfile } from './context/ProfileContext.jsx';
import AppShell from './layout/AppShell.jsx';
import OnboardingPage from './pages/OnboardingPage.jsx';
import ChatPage from './pages/ChatPage.jsx';
import SchemesPage from './pages/SchemesPage.jsx';
import CalendarPage from './pages/CalendarPage.jsx';
import PricesPage from './pages/PricesPage.jsx';
import WeatherPage from './pages/WeatherPage.jsx';
import SettingsPage from './pages/SettingsPage.jsx';

function RequireOnboarding() {
  const { profile } = useProfile();
  if (!profile.onboardingComplete) return <Navigate to="/onboarding" replace />;
  return <Outlet />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route element={<RequireOnboarding />}>
          <Route element={<AppShell />}>
            <Route path="/" element={<ChatPage />} />
            <Route path="/schemes" element={<SchemesPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/prices" element={<PricesPage />} />
            <Route path="/weather" element={<WeatherPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
