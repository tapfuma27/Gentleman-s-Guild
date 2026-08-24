import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import Services from "./pages/Services";
import Articles from "./pages/Articles";
import FAQ from "./pages/FAQ";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/services" element={<Services />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;