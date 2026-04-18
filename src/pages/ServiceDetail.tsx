import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaClock,
  FaCar,
  FaMotorcycle,
  FaChevronRight,
} from "react-icons/fa";
import { serviceData } from "../data/mockData";
import ServiceModal from "../components/ServiceModal";

const ServiceDetail = () => {
  const { type = "" } = useParams();
  const [selected, setSelected] = useState<any>(null);
  const [activeChip, setActiveChip] = useState("All");

  const list = serviceData[type as keyof typeof serviceData] || [];

  // ✅ Chips by page type
  const chips = useMemo(() => {
    if (type === "bike") {
      return ["All", "Scooty", "Bike"];
    }

    if (type === "car") {
      return ["All", "Sedan", "SUV", "Innova", "Tour"];
    }

    if (type === "hotel") {
      return ["All", "Budget", "Deluxe", "Family", "Luxury"];
    }

    if (type === "tuktuk") {
      return ["All", "Local Ride", "Sightseeing", "Pickup", "Temple"];
    }

    return ["All"];
  }, [type]);

  // ✅ Filter Data
  const filteredList = useMemo(() => {
    if (activeChip === "All") return list;

    return list.filter((item: any) => item.category === activeChip);
  }, [list, activeChip]);

  return (
    <div className="bg-slate-950 text-white min-h-screen p-4 pb-24">
      {/* Header */}
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-yellow-400 capitalize">
          {type} Services
        </h2>

        <p className="text-sm text-gray-400 mt-1">
          Choose the best {type} for your trip
        </p>
      </div>

      {/* ✅ Chips */}
      <div className="flex gap-2 overflow-x-auto pb-3 mb-4 no-scrollbar">
        {chips.map((chip) => (
          <button
            key={chip}
            onClick={() => setActiveChip(chip)}
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap border transition ${
              activeChip === chip
                ? "bg-yellow-400 text-black border-yellow-400"
                : "bg-slate-900 text-gray-300 border-gray-700 hover:border-yellow-400"
            }`}
          >
            {chip}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="space-y-5">
        {filteredList.map((item: any) => (
          <div
            key={item.id}
            className="bg-slate-900 rounded-2xl border border-gray-800 overflow-hidden shadow-lg"
          >
            {/* Cover */}
            <div className="relative">
              <img
                src={item.img}
                className="w-full h-[190px] object-cover"
                alt={item.name}
              />

              <div className="absolute top-3 left-3 bg-black/70 px-3 py-1 rounded-full text-xs text-yellow-400 font-semibold">
                Best Choice
              </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-3">
              <div className="flex justify-between gap-3">
                <h3 className="font-bold text-lg">{item.name}</h3>

                <p className="text-yellow-400 font-bold">₹{item.price}</p>
              </div>

              {/* Bike */}
              {type === "bike" && (
                <>
                  <InfoRow icon={<FaMotorcycle />} text={item.bike} />
                  <InfoRow icon={<FaClock />} text={item.duration} />
                  <InfoRow icon={<FaMapMarkerAlt />} text={item.route} />
                </>
              )}

              {/* Car */}
              {type === "car" && (
                <>
                  <InfoRow icon={<FaCar />} text={item.car} />
                  <InfoRow icon={<FaClock />} text={item.duration} />
                  <InfoRow icon={<FaMapMarkerAlt />} text={item.route} />
                </>
              )}

              {/* Hotel / Guide */}
              {type !== "bike" && type !== "car" && (
                <p className="text-sm text-gray-400">{item.desc}</p>
              )}

              {/* Button */}
              <button
                onClick={() => setSelected(item)}
                className="w-full mt-2 bg-yellow-400 text-black py-2.5 rounded-xl font-semibold flex items-center justify-center gap-2"
              >
                Book Now
                <FaChevronRight size={12} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <ServiceModal
        selected={selected}
        type={type}
        onClose={() => setSelected(null)}
      />
    </div>
  );
};

export default ServiceDetail;

/* Reusable Row */
const InfoRow = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-2 text-sm text-gray-300">
    <span className="text-yellow-400">{icon}</span>
    <span>{text}</span>
  </div>
);
