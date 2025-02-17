import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./pages/Detail";
import Sidebar from "./components/Sidebar";
import Summary from "./pages/Summary";
import Bar from "./pages/Bar";
import ChartComponent from "./pages/Chart";

const App = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <div className="flex-1 p-4 transition-all duration-300">
          <header
            className={`bg-white p-4 mb-4 shadow-md flex items-center sticky top-0 z-50 ${
              isOpen ? "w-2/3 mx-auto container" : ""
            }`}
          >
            <button onClick={toggleSidebar} className="mr-4">
              <FiMenu size={24} />
            </button>
            <h1 className="text-xl font-bold">Logo</h1>
          </header>
          <div className={`${isOpen ? "w-2/3 mx-auto container" : ""}`}>
            <Routes>
              <Route path="/" element={<Detail />} />
              <Route path="/summary" element={<Summary />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/chart" element={<ChartComponent />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
