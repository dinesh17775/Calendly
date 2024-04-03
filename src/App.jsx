import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayOut from "./layouts/RootLayOut";
import { HomePage } from "./pages";
import {
  Enterprise,
  GetStarted,
  Login,
  Individuals,
  Pricing,
  Product,
  Resources,
  Teams,
  Error,
} from "./pages";

function App() {
  return (
    <Router>
      <RootLayOut />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/individuals" element={<Individuals />} />
        <Route path="/signup" element={<GetStarted />} />
        <Route path="/enterprise" element={<Enterprise />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
