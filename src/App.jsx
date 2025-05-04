import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./i18n";


// home pages  & dashboard
//import Dashboard from "./pages/dashboard";
const Dashboard = lazy(() => import("./pages/dashboard"));
const Wedding = lazy(() => import("./pages/wedding.jsx"));
const Home = lazy(() => import("./pages/landing"));

import Layout from "./layout/Layout";
import AuthLayout from "./layout/AuthLayout";

// Import front office layout
import FOLayout from "./layout/FOLayout";


function App() {
  return (
    <main className="App  relative">
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>

        <Route path="/" element={<FOLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/wedding" element={<Wedding />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
