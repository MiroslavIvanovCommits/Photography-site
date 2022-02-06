import { Routes, Route } from "react-router-dom";

import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Dashboard from "./components/Dashboard.js";

function App() {
  return (
    <div className="App">

      {/* <Header /> */}

      <main className="wrapper">

        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>

      </main>

      {/* <Footer /> */}

    </div>
  );
}

export default App;
