import { Children } from 'react';
import { Outlet, Navigate} from 'react-router-dom';

function ProtectedRoute({ role, allowedRoles,children }) {
  const userRole = role || JSON.parse(localStorage.getItem('loginData'));
 


  if (allowedRoles.includes(userRole.role)) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}
export default ProtectedRoute;