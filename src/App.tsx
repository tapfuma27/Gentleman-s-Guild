import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import Services from "./pages/Services";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import FAQ from "./pages/FAQ";
import About from "./pages/About";

import NotFound from "./pages/NotFound";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/services" element={<Services />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/articles/:slug" element={<Article />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;