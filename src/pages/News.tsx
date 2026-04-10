import { FaClock, FaNewspaper } from "react-icons/fa";
import { newsData } from "../data/mockData";
import { useEffect, useState } from "react";
import Skeleton from "../components/Skeleton";

const News = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-slate-950 text-white min-h-screen p-4 space-y-6">
      {/* 🔥 HEADER */}
      <div className="flex items-center gap-3">
        <div className="bg-yellow-500/10 p-2 rounded-lg">
          <FaNewspaper className="text-yellow-400 text-lg" />
        </div>

        <div>
          <h2 className="text-xl font-bold text-yellow-400">News</h2>
          <p className="text-gray-400 text-sm">
            Latest updates & travel stories
          </p>
        </div>
      </div>

      {/* 📰 NEWS LIST */}
      <div className="space-y-4">
        {loading
          ? Array(3)
              .fill(0)
              .map((_, i) => (
                <div key={i}>
                  <Skeleton className="w-full h-[160px] rounded-xl" />
                  <Skeleton className="h-5 mt-3 w-3/4" />
                  <Skeleton className="h-4 mt-2 w-full" />
                </div>
              ))
          : newsData.map((item, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-gray-800 rounded-xl overflow-hidden hover:scale-[1.02] transition duration-300"
              >
                {/* 🖼 Image */}
                <div className="relative">
                  <img
                    src={item.img}
                    loading="lazy"
                    className="w-full h-[160px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>

                {/* 📄 Content */}
                <div className="p-4 space-y-2">
                  <h3 className="font-semibold text-lg leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-400 line-clamp-2">
                    {item.desc}
                  </p>

                  {/* ⏱ Time + CTA */}
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <FaClock />
                      {item.time}
                    </div>

                    <button className="text-yellow-400 text-xs hover:underline">
                      Read more →
                    </button>
                  </div>
                </div>
              </div>
            ))}
      </div>

      {/* ❌ Empty State */}
      {!loading && newsData.length === 0 && (
        <p className="text-center text-gray-400 text-sm mt-10">
          No news available 😔
        </p>
      )}
    </div>
  );
};

export default News;
