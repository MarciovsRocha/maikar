import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import CarsPage from './pages/CarsPage';
import MaintenancePage from './pages/MaintenancePage';
import HomePage from './pages/HomePage';
import PrivateRoute from './components/PrivateRoute';
import Layout from './components/Layout';
import CarEditPage from "./pages/CarEditPage";
import CarNewPage from "./pages/CarNewPage";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />

          <Route element={<PrivateRoute><Layout /></PrivateRoute>}>
            <Route path="/" element={<HomePage />} />
            <Route path="/cars" element={<CarsPage />} />
            <Route path="/cars/:car_id/edit" element={<CarEditPage />} />
            <Route path="/cars/new" element={<CarNewPage />} />
            <Route path="/maintenances" element={<MaintenancePage />} />
          </Route>

          <Route path="*" element={<LoginPage />} />
        </Routes>
      </Router>
  );
}

export default App;
