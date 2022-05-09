import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import pagesRoutes from "./routes/Routes";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {pagesRoutes.map((item) => (
            <Route path={item.link} element={<item.element />} />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
