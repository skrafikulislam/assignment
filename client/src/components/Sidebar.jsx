import { PiSignOutBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-screen bg-gray-900 text-white p-6 
        w-64 shadow-lg transform transition-transform duration-300 z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <nav className="space-y-8 mt-4">
        <div className="space-y-4 border-b border-gray-700 pb-6">
          <Link
            to="/"
            className="flex items-center justify-between px-4 py-3 rounded-lg
              hover:bg-gray-800 transition-colors group"
            onClick={toggleSidebar}
          >
            <span className="text-gray-200 group-hover:text-white font-medium">
              Detail
            </span>
            <PiSignOutBold className="text-gray-400 group-hover:text-white" />
          </Link>
          <Link
            to="/summary"
            className="flex items-center justify-between px-4 py-3 rounded-lg
              hover:bg-gray-800 transition-colors group"
            onClick={toggleSidebar}
          >
            <span className="text-gray-200 group-hover:text-white font-medium">
              Summary
            </span>
            <PiSignOutBold className="text-gray-400 group-hover:text-white" />
          </Link>
        </div>

        <div className="space-y-4 pt-2">
          <Link
            to="/bar"
            className="flex items-center justify-between px-4 py-3 rounded-lg
              hover:bg-gray-800 transition-colors group"
            onClick={toggleSidebar}
          >
            <span className="text-gray-200 group-hover:text-white font-medium">
              Bar
            </span>
            <PiSignOutBold className="text-gray-400 group-hover:text-white" />
          </Link>
          <Link
            to="/chart"
            className="flex items-center justify-between px-4 py-3 rounded-lg
              hover:bg-gray-800 transition-colors group"
            onClick={toggleSidebar}
          >
            <span className="text-gray-200 group-hover:text-white font-medium">
              Chart
            </span>
            <PiSignOutBold className="text-gray-400 group-hover:text-white" />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;