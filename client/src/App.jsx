import "./pages/login.jsx";
import Home from "./pages/home.jsx";
import "./App.scss";
import LineChart from "../src/component/linechart";
import Visualize from "./pages/visualize.jsx";
import Login from "./pages/login.jsx";
import Signup from "./pages/signup.jsx";
import Email from "./pages/email.jsx";
import Dashboard from "./pages/dashboard.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/visualize" element={<Visualize />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/linechart" element={<LineChart />} />
          <Route path="/visualize" element={<Visualize />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
