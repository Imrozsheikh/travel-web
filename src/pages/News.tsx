import {
  FaClock,
  FaNewspaper,
  FaMapMarkerAlt,
  FaSearch,
  FaBolt,
} from "react-icons/fa";
import { useEffect, useMemo, useState } from "react";
import Skeleton from "../components/Skeleton";
import { newsData } from "../data/mockData";
import { useNavigate } from "react-router-dom";

const categories = ["All", "Events", "Weather", "Traffic", "Tourism", "Offers"];

const News = () => {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timer);
  }, []);

  // UPDATE useMemo filter
  const filteredNews = useMemo(() => {
    return newsData.filter((item: any) => {
      const matchSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.desc.toLowerCase().includes(search.toLowerCase());

      const matchCategory =
        activeCategory === "All" || item.category === activeCategory;

      return matchSearch && matchCategory;
    });
  }, [search, activeCategory]);

  const featured = filteredNews[0];

  return (
    <div className="min-h-screen bg-slate-950 p-4 pb-24 text-white space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-yellow-500/10 p-2">
          <FaNewspaper className="text-lg text-yellow-400" />
        </div>

        <div>
          <h2 className="text-xl font-bold text-yellow-400">Travel Updates</h2>
          <p className="text-sm text-gray-400">
            Latest city news & travel alerts
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="flex items-center rounded-2xl border border-gray-700 bg-white/10 px-3 py-3">
        <FaSearch className="mr-2 text-gray-400" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search updates..."
          className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
        />
      </div>

      {/* Breaking Alert */}
      <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-3">
        <div className="flex items-center gap-2 text-sm font-medium text-yellow-300">
          <FaBolt />
          Breaking:
          <span className="text-white">
            Heavy traffic near City Palace today
          </span>
        </div>
      </div>

      {/* Cities */}
      {/* <div className="flex gap-2 overflow-x-auto pb-1">
        {cities.map((city) => (
          <button
            key={city}
            onClick={() => setActiveCity(city)}
            className={`whitespace-nowrap rounded-full px-4 py-2 text-xs transition ${
              activeCity === city
                ? "bg-yellow-400 text-black"
                : "border border-gray-700 bg-slate-900 text-gray-300"
            }`}
          >
            {city}
          </button>
        ))}
      </div> */}

      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`whitespace-nowrap rounded-full px-4 py-2 text-xs transition ${
              activeCategory === cat
                ? "bg-white text-black"
                : "border border-gray-700 bg-slate-900 text-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured News */}
      {!loading && featured && (
        <div onClick={() => navigate(`/news/${featured.id}`)} className="overflow-hidden rounded-2xl border border-gray-800 bg-slate-900">
          <div className="relative">
            <img src={featured.img} className="h-[220px] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />

            <div className="absolute bottom-3 left-3 right-3">
              <span className="rounded-full bg-yellow-400 px-2 py-1 text-[10px] font-bold text-black">
                FEATURED
              </span>

              <h3 className="mt-2 text-lg font-bold">{featured.title}</h3>

              <div className="mt-1 flex items-center gap-3 text-xs text-gray-300">
                <span className="flex items-center gap-1">
                  <FaMapMarkerAlt />
                  {featured.city}
                </span>
                <span className="flex items-center gap-1">
                  <FaClock />
                  {featured.time}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* News List */}
      <div className="space-y-4">
        {loading
          ? Array(4)
              .fill(0)
              .map((_, i) => (
                <div key={i}>
                  <Skeleton className="h-[160px] w-full rounded-xl" />
                  <Skeleton className="mt-3 h-5 w-3/4" />
                  <Skeleton className="mt-2 h-4 w-full" />
                </div>
              ))
          : filteredNews.map((item: any, index: number) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-gray-800 bg-slate-900"
              >
                <img src={item.img} className="h-[160px] w-full object-cover" />

                <div className="space-y-2 p-4">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-white/10 px-2 py-1 text-[10px] text-gray-300">
                      {item.category}
                    </span>

                    <span className="text-xs text-gray-500">{item.time}</span>
                  </div>

                  <h3 className="text-lg font-semibold leading-snug">
                    {item.title}
                  </h3>

                  <p className="line-clamp-2 text-sm text-gray-400">
                    {item.desc}
                  </p>

                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <FaMapMarkerAlt />
                      {item.city}
                    </div>

                    <button className="text-xs text-yellow-400 hover:underline">
                      Read more →
                    </button>
                  </div>
                </div>
              </div>
            ))}
      </div>

      {/* Empty */}
      {!loading && filteredNews.length === 0 && (
        <p className="mt-10 text-center text-sm text-gray-400">
          No updates found 😔
        </p>
      )}
    </div>
  );
};

export default News;
