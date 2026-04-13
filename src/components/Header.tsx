import { FaHeart, FaUserCircle, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-[9999] bg-slate-950/90 backdrop-blur-md border-b border-gray-800">
      {/* 🔥 MAIN BAR */}
      <div className="flex items-center justify-between px-4 py-2">
        {/* 💎 Logo */}
        <div
          onClick={() => navigate("/")}
          className="py-2 text-2xl font-semibold text-yellow-400 tracking-wide cursor-pointer"
        >
          Tour Travel
        </div>

        {/* 🔍 Search (Desktop only) */}
        <div className="hidden md:flex items-center bg-white/10 px-3 py-1.5 rounded-lg w-[40%] border border-gray-700">
          <FaSearch className="text-gray-400 mr-2 text-sm" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-xs w-full text-white placeholder-gray-400"
          />
        </div>

        {/* 🌐 Language + Icons */}
        <div className="flex items-center gap-2">
          {/* 🌐 Language Switch */}

          {/* ❤️ */}
          <button className="text-gray-400 hover:text-yellow-400 transition">
            <FaHeart size={16} />
          </button>

          {/* 👤 */}
          <button
            onClick={() => navigate("/login")}
            className="text-gray-400 hover:text-yellow-400 transition"
          >
            <FaUserCircle size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
