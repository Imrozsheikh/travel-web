import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaCompass,
  FaMapMarkedAlt,
  FaHeart,
  FaNewspaper,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const BottomNav = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const navItems = [
    { path: "/", icon: <FaHome />, key: "home" },
    { path: "/explore", icon: <FaCompass />, key: "explore" },
    { path: "/trips", icon: <FaMapMarkedAlt />, key: "trips" },
    { path: "/wishlist", icon: <FaHeart />, key: "wishlist" },
    { path: "/news", icon: <FaNewspaper />, key: "news" },
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
              {t(`nav.${item.key}`)}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default BottomNav;
