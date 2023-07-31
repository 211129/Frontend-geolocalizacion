import { Outlet } from "react-router-dom";

import { Navigate } from "react-router-dom";

const AdminRoute = () => {
  const { authState } = useAuth();

  return (authState.isAuthenticated ? <Outlet /> : <Navigate to="/login" />);
}

export default AdminRoute