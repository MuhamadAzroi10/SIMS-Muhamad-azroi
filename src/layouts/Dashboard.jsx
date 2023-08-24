import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import "./../assets/style/style_custom.css";
import ElementNavbar from "../components/ElementNavbar";

const Dashboard = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   navigate("/dashboard");
  // }, []);

  return (
    <>
      <ElementNavbar />
      <Outlet />
    </>
  );
};

export default Dashboard;
