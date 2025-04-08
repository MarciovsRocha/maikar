import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import CarsPage from './pages/CarsPage';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cars" element={
            <PrivateRoute>
              <CarsPage />
            </PrivateRoute>
          } />
          <Route path="*" element={<LoginPage />} />
        </Routes>
      </Router>
  );
}

export default App;
