import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Home from "./components/pages/Home";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
