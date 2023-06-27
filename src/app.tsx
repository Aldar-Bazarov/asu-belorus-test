import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MainLayout from "./layouts/MainLayout";
import { UpdateIM } from "./pages/UpdateIM";
import { SelectionGNO } from "./pages/SelectionGNO";
import { Calculation } from "./pages/Calculation";

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
      <Route path="" element={<MainPage />} />
      <Route path="/updateIM" element={<UpdateIM />} />
      <Route path="/selectionGNO" element={<SelectionGNO />} />
      <Route path="/calculation" element={<Calculation />} />
      </Route>
    </Routes>
  );
};
