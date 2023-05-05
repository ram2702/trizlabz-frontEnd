import React from "react";
import "./css/core.css";
import CompPop from "./popups/comp.health";
import Monitoring from "./pages/monitoring";
import MotorPop from "./popups/motor.health";
import PowerPop from "./popups/power.health";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import System from "./pages/system";
import Navbar from "./components/navbar";
import Health from "./components/health.monitoring";
import Administration from "./pages/administration";
import Vehicle from "./components/vehicle.admin";

export default function App() {
  React.useEffect(() => {
    console.log(document.all);
  }, []);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route index element={<Monitoring />} />
        <Route path="/monitoring/health" element={<Monitoring props={1} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/teleoperations" element={<System />} />
        <Route
          path="/administration/customer"
          element={<Administration props={"Customer"} />}
        />
        <Route
          path="/administration/user"
          element={<Administration props={"user"} />}
        />
        <Route
          path="/administration/vehicle"
          element={<Administration props={"Vehicle"} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
