import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './componentns/login';
import Register from './componentns/register';
import AddFaculty from './componentns/addFaculty';
import Faculties from './componentns/faculties';
import Departements from './componentns/Departements';
import AddDepartement from './componentns/addDepartement';
import ProtectedRoute from './componentns/routes/ProtectedRoute';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addFaculty" element={<ProtectedRoute allowedRoles={['superadmin']}><AddFaculty /></ProtectedRoute>} />
          <Route path="/faculties" element={<ProtectedRoute allowedRoles={['superadmin']}><Faculties /></ProtectedRoute>} />
          <Route path="/Departements" element={<ProtectedRoute allowedRoles={['doyen']}><Departements /></ProtectedRoute>} />
          <Route path="/addDepartement" element={<ProtectedRoute allowedRoles={['doyen']}><AddDepartement /></ProtectedRoute>} />
        </Routes>
      </Router>
    </div>
  );
}


