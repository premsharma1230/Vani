import React from "react";
import AppNavigation from "../../components/appNavigation/appNavigation.component";
import { Outlet } from "react-router-dom";

export default function WebRoutes() {
  return (
    <>
      <AppNavigation />
      <Outlet />
    </>
  );
}
