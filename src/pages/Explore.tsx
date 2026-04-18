import { useEffect, useState } from "react";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaHotel,
  FaUtensils,
  FaFire,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import { useNavigate } from "react-router-dom";

const Explore = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  const hotels = [
    {
      title: "The Oberoi Udaivilas",
      img: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
    },
    {
      title: "Taj Lake Palace",
      img: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
    },
    {
      title: "Leela Palace",
      img: "https://images.pexels.com/photos/261102.jpg",
    },
  ];

  const restaurants = [
    {
      title: "Ambrai Restaurant",
      img: "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg",
    },
    {
      title: "Upre",
      img: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
    },
    {
      title: "Millets of Mewar",
      img: "https://images.pexels.com/photos/958545.jpg",
    },
  ];

  const cityRoutes = [
    "Udaipur → Nathdwara",
    "Udaipur → Kumbhalgarh",
    "Udaipur → Chittorgarh",
    "Jaipur → Ajmer",
  ];

  const trending = [
    "Weekend Lake View Trips",
    "Top Honeymoon Destinations",
    "Summer Escape Offers",
  ];

  const SectionTitle = ({ Icon, title }: { Icon: IconType; title: string }) => (
    <div className="mb-3 flex items-center gap-2">
      <Icon className="text-yellow-400" />
      <h3 className="text-lg font-bold">{title}</h3>
    </div>
  );

  const ScrollRow = ({ children }: { children: React.ReactNode }) => (
    <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory">
      {children}
    </div>
  );

  const Offer = () => (
    <div className="w-max px-3 py-1 mb-2 flex items-center border border-green-300 rounded-md">
      <p className="text-[11px] uppercase tracking-wide text-green-300 pr-2">
        Get 5% back on top reated hotels
      </p>
      {/* <p className="text-sm font-bold text-green-400">5% - 10% OFF</p> */}
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-950 p-4 pb-24 text-white space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-yellow-400">
          Explore Destinations
        </h2>

        <div className="flex items-center rounded-2xl border border-gray-700 bg-white/10 px-3 py-3">
          <FaSearch className="mr-2 text-gray-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search places..."
            className="w-full bg-transparent outline-none"
          />
        </div>
      </div>

      <section>
        <div className="flex items-center justify-between">
          <SectionTitle Icon={FaHotel} title="Top Hotels" />
          <div onClick={() => navigate(`/service/hotel`)} className="text-sm">
            View all
          </div>
        </div>
        <Offer />
        <ScrollRow>
          {hotels.map((item) => (
            <div
              key={item.title}
              className="min-w-[260px] rounded-2xl overflow-hidden bg-slate-900 border border-gray-800"
            >
              <img src={item.img} className="h-[180px] w-full object-cover" />
              <div className="p-3 font-semibold">{item.title}</div>
            </div>
          ))}
        </ScrollRow>
      </section>

      <section>
        <div className="flex items-center justify-between">
          <SectionTitle Icon={FaUtensils} title="Best Restaurants" />
          <div className="text-sm">View all</div>
        </div>
        <ScrollRow>
          {restaurants.map((item) => (
            <div
              key={item.title}
              className="min-w-[260px] rounded-2xl overflow-hidden bg-slate-900 border border-gray-800"
            >
              <img src={item.img} className="h-[180px] w-full object-cover" />
              <div className="p-3 font-semibold">{item.title}</div>
            </div>
          ))}
        </ScrollRow>
      </section>

      <section>
        <SectionTitle Icon={FaMapMarkerAlt} title="Nearby Travel Routes" />
        <div className="grid grid-cols-2 gap-3">
          {cityRoutes.map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-slate-900 p-4 border border-gray-800 text-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle Icon={FaFire} title="Trending Now" />
        <div className="space-y-3">
          {trending.map((item) => (
            <div
              key={item}
              className="rounded-2xl p-4 bg-yellow-500/10 border border-yellow-500/20"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {loading && <p className="text-center text-gray-400">Loading...</p>}
    </div>
  );
};

export default Explore;
