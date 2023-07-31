import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
//import MapPage from "./Pages/Mapa";
import Mapa from "./Pages/Mapa";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import AdminRoute from "./Components/AuthRoute";


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mapa" element={<Mapa />} />
          <Route element={<AdminRoute />}>
            
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

