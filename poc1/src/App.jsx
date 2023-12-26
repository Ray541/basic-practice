// import React from "react";
import Form from "./components/Form/Form";
import Admin from "./components/AdminPanel/Admin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Form" element={<Form />} />
        <Route path="/Admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
