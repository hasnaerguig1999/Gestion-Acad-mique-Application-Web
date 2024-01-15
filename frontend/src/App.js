import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './componentns/login';
import Register from './componentns/register';
import AddFaculty from './componentns/addFaculty';
import Faculties from './componentns/faculties';
import Departements from './componentns/departements';
import AddDepartement from './componentns/addDepartement';

function App() {
  return (
    <div className="App">
    <Router>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/addFaculty" element={<AddFaculty />}></Route>
            <Route path="/faculties" element={<Faculties />}></Route>
            <Route path="/departements" element={<Departements />}></Route>
            <Route path="/addDepartement" element={<AddDepartement />}></Route>
            
          </Routes>
        </Router>
    </div>
  );
}

export default App;
