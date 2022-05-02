import React from "react";
import { Footer } from "../../pages/Footer/Footer";
import AppNavigation from "../../components/appNavigation/appNavigation.component";

export const Common = () => {
  return (
    <div>
      {/* <AppNavigation /> */}
      <div className="Main_Content_Wrapper" style={{ height: "100vh" }}></div>
      <Footer />
    </div>
  );
};
