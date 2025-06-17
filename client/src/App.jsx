import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPageLayout from "./Layout/MainPageLayout";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import PropertydetailLayout from "./Layout/PropertydetailLayout";
import LoginAndSignUp from "./Component/LoginAndSignUp";

const App = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginAndSignUp />} />
      <Route path="/" element={<MainPageLayout />}>
        <Route index element={<Home />} />
        <Route path="property/:id" element={<PropertydetailLayout />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
