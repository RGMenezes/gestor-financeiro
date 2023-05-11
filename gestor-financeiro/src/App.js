import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import {useState} from 'react'

import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Home from "./components/pages/Home";
import Questions from "./components/pages/Questions"
import Result from "./components/pages/Result"

function App() {

  const [header, setHeader] = useState(true)


  return (
    <Router>
      {header && <Header />}
      <Routes>
        <Route path="/" element={<Home showHeader={setHeader} />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/result" element={<Result />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
