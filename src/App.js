import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import pagesRoutes from "./routes/Routes";
import PrivateRoute from "./routes/PrivateRoute";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {pagesRoutes.map((item) => (
            <Route path={item.link} element={<item.element />} />
          ))}
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
