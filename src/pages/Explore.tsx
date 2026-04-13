import { useEffect, useState } from "react";
import {
  FaSearch,
  FaStar,
  FaHeart,
  FaMapMarkerAlt,
  FaHotel,
  FaUtensils,
  FaFire,
  FaPlaneDeparture,
} from "react-icons/fa";
import type { IconType } from "react-icons";

const Explore = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [wishlist, setWishlist] = useState<string[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  const destinations = [
    {
      title: "Dubai",
      price: 20000,
      rating: 4.5,
      location: "UAE",
      img: "https://images.pexels.com/photos/823696/pexels-photo-823696.jpeg",
    },
    {
      title: "Paris",
      price: 40000,
      rating: 4.8,
      location: "France",
      img: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg",
    },
    {
      title: "Bali",
      price: 25000,
      rating: 4.6,
      location: "Indonesia",
      img: "https://images.pexels.com/photos/2474689/pexels-photo-2474689.jpeg",
    },
  ];

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

  const filtered = destinations.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  const toggleWishlist = (title: string) => {
    setWishlist((prev) =>
      prev.includes(title) ? prev.filter((x) => x !== title) : [...prev, title],
    );
  };

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
        <SectionTitle Icon={FaPlaneDeparture} title="Popular Destinations" />
        {/* <Offer /> */}
        <ScrollRow>
          {filtered.map((item) => (
            <div
              key={item.title}
              className="min-w-[260px] snap-start rounded-2xl overflow-hidden bg-slate-900 border border-gray-800"
            >
              <div className="relative">
                <img src={item.img} className="h-[180px] w-full object-cover" />
                <button
                  onClick={() => toggleWishlist(item.title)}
                  className="absolute top-2 right-2 bg-black/50 p-2 rounded-full"
                >
                  <FaHeart
                    className={
                      wishlist.includes(item.title)
                        ? "text-red-500"
                        : "text-white"
                    }
                  />
                </button>
              </div>
              <div className="p-3">
                <h4 className="font-semibold">{item.title}</h4>
                <div className="mt-1 flex items-center gap-1 text-xs text-gray-400">
                  <FaMapMarkerAlt /> {item.location}
                </div>
                <div className="mt-2 flex justify-between">
                  <span className="flex items-center gap-1 text-yellow-400 text-sm">
                    <FaStar /> {item.rating}
                  </span>
                  <span className="font-bold text-yellow-400">
                    ₹{item.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </ScrollRow>
      </section>

      <section>
        <div className="flex items-center justify-between">
          <SectionTitle Icon={FaHotel} title="Top Hotels" />
          <div className="text-sm">View all</div>
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
