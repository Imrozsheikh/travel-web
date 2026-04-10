import { useEffect, useState } from "react";
import { FaSearch, FaStar, FaHeart, FaMapMarkerAlt } from "react-icons/fa";
import Skeleton from "../components/Skeleton";

const Explore = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("All");
  const [wishlist, setWishlist] = useState<string[]>([]);

  const data = [
    {
      title: "Dubai",
      price: 20000,
      rating: 4.5,
      location: "UAE",
      category: "Luxury",
      img: "https://images.pexels.com/photos/823696/pexels-photo-823696.jpeg",
    },
    {
      title: "Paris",
      price: 40000,
      rating: 4.8,
      location: "France",
      category: "Popular",
      img: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg",
    },
    {
      title: "Bali",
      price: 25000,
      rating: 4.6,
      location: "Indonesia",
      category: "Budget",
      img: "https://images.pexels.com/photos/2474689/pexels-photo-2474689.jpeg",
    },
  ];

  // ⏳ simulate fast loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  // 🔍 Filter Logic
  const filtered = data.filter((item) => {
    const matchSearch = item.title.toLowerCase().includes(search.toLowerCase());

    const matchFilter =
      activeFilter === "All" || item.category === activeFilter;

    return matchSearch && matchFilter;
  });

  // ❤️ Wishlist Toggle
  const toggleWishlist = (title: string) => {
    setWishlist((prev) =>
      prev.includes(title) ? prev.filter((i) => i !== title) : [...prev, title],
    );
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen p-4 space-y-5">
      {/* 🔥 HEADER */}
      <h2 className="text-xl font-bold text-yellow-400">
        Explore Destinations
      </h2>

      {/* 🔍 SEARCH */}
      <div className="flex items-center bg-white/10 px-3 py-2 rounded-xl border border-gray-700 focus-within:border-yellow-400 transition">
        <FaSearch className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search places..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-transparent outline-none w-full text-sm text-white placeholder-gray-400"
        />
      </div>

      {/* 🎛 FILTERS */}
      <div className="flex gap-2 overflow-x-auto">
        {["All", "Budget", "Luxury", "Popular"].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-3 py-1 rounded-full text-xs transition ${
              activeFilter === filter
                ? "bg-yellow-400 text-black"
                : "bg-slate-900 border border-gray-800 hover:bg-yellow-500 hover:text-black"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* 🖼 CARDS */}
      <div className="grid grid-cols-2 gap-3">
        {loading
          ? Array(4)
              .fill(0)
              .map((_, i) => (
                <div key={i}>
                  <Skeleton className="w-full h-[120px] rounded-xl" />
                  <Skeleton className="h-4 mt-2 w-24" />
                </div>
              ))
          : filtered.map((item) => (
              <div
                key={item.title}
                className="bg-slate-900 border border-gray-800 rounded-2xl overflow-hidden relative hover:scale-[1.03] transition duration-300"
              >
                {/* ❤️ Wishlist */}
                <button
                  onClick={() => toggleWishlist(item.title)}
                  className="absolute top-2 right-2 bg-black/50 p-2 rounded-full"
                >
                  <FaHeart
                    className={`text-sm ${
                      wishlist.includes(item.title)
                        ? "text-red-500"
                        : "text-white"
                    }`}
                  />
                </button>

                {/* 🖼 Image */}
                <div className="relative">
                  <img
                    src={item.img}
                    loading="lazy"
                    className="w-full h-[120px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* 📄 Content */}
                <div className="p-3 space-y-1">
                  <h3 className="font-semibold text-sm">{item.title}</h3>

                  {/* 📍 Location */}
                  <div className="flex items-center text-xs text-gray-400 gap-1">
                    <FaMapMarkerAlt />
                    {item.location}
                  </div>

                  {/* ⭐ Rating + 💰 Price */}
                  <div className="flex justify-between items-center mt-1">
                    <div className="flex items-center text-yellow-400 text-xs gap-1">
                      <FaStar />
                      {item.rating}
                    </div>

                    <p className="text-yellow-400 text-sm font-semibold">
                      ₹{item.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
      </div>

      {/* ❌ No Results */}
      {!loading && filtered.length === 0 && (
        <p className="text-center text-gray-400 text-sm mt-10">
          No destinations found 😔
        </p>
      )}
    </div>
  );
};

export default Explore;
