import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppShell from './layout/AppShell.jsx';
import ChatPage from './pages/ChatPage.jsx';
import SchemesPage from './pages/SchemesPage.jsx';
import CalendarPage from './pages/CalendarPage.jsx';
import PricesPage from './pages/PricesPage.jsx';
import WeatherPage from './pages/WeatherPage.jsx';
import SettingsPage from './pages/SettingsPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route path="/" element={<ChatPage />} />
          <Route path="/schemes" element={<SchemesPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/prices" element={<PricesPage />} />
          <Route path="/weather" element={<WeatherPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
