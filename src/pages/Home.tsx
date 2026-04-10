import {
  FaPlane,
  FaHotel,
  FaBus,
  FaMapMarkedAlt,
  FaWallet,
  FaRobot,
} from "react-icons/fa";
import { MdExplore } from "react-icons/md";
import { images } from "../data/images";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Skeleton from "../components/Skeleton";

const Home = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const services = [
    { icon: <FaPlane />, label: "Flights", img: images.flights },
    { icon: <FaHotel />, label: "Hotels", img: images.hotels },
    { icon: <FaBus />, label: "Bus", img: images.bus },
    { icon: <FaMapMarkedAlt />, label: "Itinerary", img: images.itinerary },
    { icon: <MdExplore />, label: "Explore", img: images.explore },
    { icon: <FaWallet />, label: "Budget", img: images.budget },
  ];

  const destinations = [
    { name: "Udaipur", img: images.maldives },
    { name: "Jaipur", img: images.dubai },
    { name: "Jodhpur", img: images.bali },
  ];

  // 🚀 Preload images
  useEffect(() => {
    const imgs = Object.values(images);
    imgs.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    // simulate fast API
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-slate-950 text-white min-h-screen p-4 space-y-8">
      {/* 🔥 HERO */}
      {loading ? (
        <Skeleton className="w-full h-[200px] rounded-2xl" />
      ) : (
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src={images.hero}
            loading="lazy"
            className="w-full h-[200px] object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30 flex flex-col justify-center p-5">
            <h2 className="text-xl font-bold text-yellow-400">
              Plan Your Dream Trip ✨
            </h2>

            <input
              placeholder="Search destinations..."
              className="mt-3 p-2 rounded text-black outline-none"
            />
          </div>
        </div>
      )}

      {/* 🌍 DESTINATIONS */}
      <div>
        <h3 className="text-yellow-400 mb-3 font-semibold">
          Popular Destinations
        </h3>

        <div className="flex gap-3 overflow-x-auto">
          {loading
            ? Array(3)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="min-w-[160px]">
                    <Skeleton className="w-full h-[120px] rounded-xl" />
                    <Skeleton className="h-4 mt-2 w-20" />
                  </div>
                ))
            : destinations.map((item) => (
                <div
                  key={item.name}
                  className="min-w-[160px] rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition"
                  onClick={() => {
                    navigate(`/destination/${item.name.toLowerCase()}`);
                    window.scrollTo(0, 0);
                  }}
                >
                  <img
                    src={item.img}
                    loading="lazy"
                    className="w-full h-[120px] object-cover"
                  />
                  <div className="bg-slate-900 p-2">
                    <p className="text-sm">{item.name}</p>
                  </div>
                </div>
              ))}
        </div>
      </div>

      {/* 💎 SERVICES */}
      <div>
        <h3 className="text-yellow-400 mb-3 font-semibold">Services</h3>

        <div className="grid grid-cols-2 gap-3">
          {loading
            ? Array(6)
                .fill(0)
                .map((_, i) => (
                  <Skeleton key={i} className="w-full h-[100px] rounded-xl" />
                ))
            : services.map((item) => (
                <div
                  key={item.label}
                  className="relative rounded-xl overflow-hidden group"
                >
                  <img
                    src={item.img}
                    loading="lazy"
                    className="w-full h-[100px] object-cover group-hover:scale-110 transition duration-300"
                  />

                  <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
                    <div className="text-yellow-400 text-lg">{item.icon}</div>
                    <p className="text-sm">{item.label}</p>
                  </div>
                </div>
              ))}
        </div>
      </div>

      {/* 🤖 AI */}
      {loading ? (
        <Skeleton className="w-full h-[120px] rounded-xl" />
      ) : (
        <div className="relative rounded-xl overflow-hidden">
          <img
            src={images.ai}
            loading="lazy"
            className="w-full h-[120px] object-cover"
          />

          <div className="absolute inset-0 bg-black/60 flex items-center justify-between px-4">
            <div>
              <h3 className="font-bold">AI Travel Assistant</h3>
              <p className="text-xs text-gray-300">
                Plan smart trips instantly
              </p>
            </div>

            <FaRobot size={22} className="text-yellow-400" />
          </div>
        </div>
      )}

      {/* 💰 BUDGET */}
      {loading ? (
        <Skeleton className="w-full h-[120px] rounded-xl" />
      ) : (
        <div className="relative rounded-xl overflow-hidden">
          <img
            src={images.budget}
            loading="lazy"
            className="w-full h-[120px] object-cover"
          />

          <div className="absolute inset-0 bg-black/60 p-4">
            <h3 className="text-yellow-400 font-semibold">Budget Tracker</h3>
            <p className="text-sm text-gray-300">Track your expenses easily</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
