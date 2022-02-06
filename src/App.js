import { Routes, Route } from "react-router-dom";

import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Dashboard from "./components/Dashboard.js";
import Gallery from "./components/Gallery.js";
import About from "./components/About.js";

function App() {
  return (
    <div className="App">

      <Header />

      <main className="wrapper">

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path='*' element={<Dashboard />} />
        </Routes>

      </main>

      <Footer />

    </div>
  );
}

export default App;
