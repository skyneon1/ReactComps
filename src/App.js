import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Docs from "./pages/Docs";
import Playground from "./pages/Playground";
import Layout from "./components/Layout";
import ShowcasePage from "./pages/ShowcasePage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/showcase" element={<ShowcasePage />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/playground" element={<Playground />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
