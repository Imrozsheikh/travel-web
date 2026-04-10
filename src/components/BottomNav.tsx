import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaCompass,
  FaMapMarkedAlt,
  FaHeart,
  FaNewspaper,
} from "react-icons/fa";

const BottomNav = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: <FaHome />, label: "Home" },
    { path: "/explore", icon: <FaCompass />, label: "Explore" },
    { path: "/trips", icon: <FaMapMarkedAlt />, label: "Trips" },
    { path: "/wishlist", icon: <FaHeart />, label: "Wishlist" },
    { path: "/news", icon: <FaNewspaper />, label: "News" },
  ];

  return (
    <div className="fixed bottom-3 left-3 right-3 bg-slate-900/90 backdrop-blur-lg border border-gray-800 rounded-2xl shadow-xl flex justify-around py-2 z-50">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;

        return (
          <Link
            key={item.path}
            to={item.path}
            className="flex flex-col items-center text-xs"
          >
            <div
              className={`text-lg p-2 rounded-xl transition ${
                isActive
                  ? "text-yellow-400 bg-white/10"
                  : "text-gray-400 hover:text-yellow-400"
              }`}
            >
              {item.icon}
            </div>

            <span
              className={`text-[10px] ${
                isActive ? "text-yellow-400" : "text-gray-500"
              }`}
            >
              {item.label}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default BottomNav;
