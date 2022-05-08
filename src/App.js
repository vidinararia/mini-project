import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Galang from "./pages/Galang";
import Riwayat from "./pages/Riwayat";
import NavbarComponent from "./components/NavbarComponent";
import Form from "./pages/Form";

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Galang" element={<Galang />} />
          <Route path="Riwayat" element={<Riwayat />} />
          <Route path="/Login" element={<Login />} />
          <Route path="Galang/Form" element={<Form />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
