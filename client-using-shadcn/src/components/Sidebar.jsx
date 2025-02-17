import { Link } from "react-router-dom";
import { PiSignOutBold } from "react-icons/pi";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <Sheet open={isOpen} onOpenChange={toggleSidebar}>
      <SheetContent
        side="left"
        className="bg-gray-900 text-white w-64 p-6 space-y-6 shadow-lg"
      >
        <nav className="mt-4 space-y-8">
           
          <div className="space-y-4 border-b border-gray-700 pb-6">
            <SidebarLink to="/" label="Detail" onClick={toggleSidebar} />
            <SidebarLink
              to="/summary"
              label="Summary"
              onClick={toggleSidebar}
            />
          </div>

           
          <div className="space-y-4 pt-2">
            <SidebarLink to="/bar" label="Bar" onClick={toggleSidebar} />
            <SidebarLink to="/chart" label="Chart" onClick={toggleSidebar} />
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

 
const SidebarLink = ({ to, label, onClick }) => (
  <Link
    to={to}
    className={cn(
      "flex items-center justify-between px-4 py-3 rounded-lg transition-colors",
      "hover:bg-gray-800 group"
    )}
    onClick={onClick}
  >
    <span className="text-gray-200 group-hover:text-white font-medium">
      {label}
    </span>
    <PiSignOutBold className="text-gray-400 group-hover:text-white" />
  </Link>
);

export default Sidebar;
