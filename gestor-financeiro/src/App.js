import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import Questions from "./components/pages/Questions";
import Result from "./components/pages/Result";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/result" element={<Result />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
