import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./screens/screenAuth/Login";
import Register from "./screens/screenAuth/Register";
import Auth from "./layouts/Auth";
import Akun from "./screens/screenDashboard/Akun";
import Dashboard from "./layouts/Dashboard";
import AkunUpdate from "./screens/screenDashboard/AkunUpdate";
import Home from "./screens/screenDashboard/Home";
import Topup from "./screens/screenDashboard/Topup";
import Transaksi from "./screens/screenDashboard/Transaksi";
import TransaksiHistory from "./screens/screenDashboard/TransaksiHistory";
import TransaksiBayar from "./screens/screenDashboard/TransaksiBayar";
import TransaksiDetail from "./screens/screenDashboard/TransaksiDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard/akun" element={<Akun />} />
            <Route path="/dashboard/akun/update" element={<AkunUpdate />} />
            <Route path="/dashboard/topup" element={<Topup />} />
            <Route path="/dashboard/transaksi" element={<Transaksi />} />
            <Route
              path="/dashboard/transaksi/detail"
              element={<TransaksiDetail />}
            />
            <Route
              path="/dashboard/transaksi/:id"
              element={<TransaksiBayar />}
            />
            <Route path="/dashboard/history" element={<TransaksiHistory />} />
          </Route>
          <Route path="/auth" element={<Auth />}>
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
