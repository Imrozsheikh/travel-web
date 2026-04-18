import { useParams } from "react-router-dom";
import {
  MapPin,
  Star,
  Navigation,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"; // Navigation icon add kiya
import { destinationsData } from "../data/mockData";
import { useTranslation } from "react-i18next";
import MapPage from "../components/MapPage";
import { useState } from "react";

const ImageSlider = ({
  images,
  title,
}: {
  images: string[];
  title: string;
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <div className="relative h-[350px] overflow-hidden">
      <img
        src={images[currentImageIndex]}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out" // Smooth transition add karein
      />

      {/* Navigation Buttons (Agar images zyada hain) */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {/* Hero Content Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-6">
        <h1 className="text-4xl font-bold capitalize">{title}</h1>
        <div className="flex items-center gap-2 mt-2">
          <MapPin size={16} className="text-yellow-400" />
          <p className="text-sm text-gray-300">Best Time: Oct - March</p>
        </div>
      </div>
    </div>
  );
};

const DestinationDetail = () => {
  const { name } = useParams<{ name: string }>();
  const { t } = useTranslation();

  const key = decodeURIComponent(name || "").trim();

  const data = destinationsData[key as keyof typeof destinationsData];

  if (!data) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        No Data Found for: {key}
      </div>
    );
  }

  const title = t(`destination.${key}.name`, key.replace("_", " "));
  const about = t(
    `destination.${key}.about`,
    "Beautiful place to explore and experience the local culture.",
  );
  const mapText = t(`destination.${key}.map`, "Location");
  const placesText = t(`destination.${key}.places`, "Detailed View");
  const galleryText = t(`destination.${key}.gallery`, "Gallery");
  // const bestTime = t(`destination.${key}.bestTime`, "Best Time: Oct - March");
  const explore = t(`destination.${key}.explore`, "Book Now");
  // const nearbyText = t("Nearby Attractions"); // Translation for nearby heading

  return (
    <div className="bg-slate-950 text-white min-h-screen pb-10">
      {/* Hero Section */}
      {/* <div className="relative h-[350px]">
        <img
          src={data.hero}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-6">
          <h1 className="text-4xl font-bold capitalize">{title}</h1>
          <div className="flex items-center gap-2 mt-2">
            <MapPin size={16} className="text-yellow-400" />
            <p className="text-sm text-gray-300">{bestTime}</p>
          </div>
        </div>
      </div> */}
      <ImageSlider
        images={Array.isArray(data.hero) ? data.hero : [data.hero]}
        title={title}
      />

      <div className="p-4 space-y-8">
        {/* About Section */}
        <section>
          <p className="text-gray-400 leading-relaxed italic">"{about}"</p>
        </section>

        {/* Places & Nearby Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Star size={20} className="text-yellow-400" /> {placesText}
          </h2>

          <div className="space-y-6">
            {data.places?.map((place: any, index: number) => (
              <div
                key={index}
                className="bg-slate-900/50 rounded-3xl overflow-hidden border border-slate-800 p-4"
              >
                <div className="flex gap-4">
                  <img
                    src={place.img}
                    alt={place.name}
                    className="h-24 w-24 rounded-2xl object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-bold">{place.name}</h3>
                      <div className="flex items-center gap-1 text-yellow-400 bg-yellow-400/10 px-2 py-0.5 rounded-lg text-xs">
                        <Star size={12} fill="currentColor" />
                        {place.rating}
                      </div>
                    </div>

                    {/* Nearby Places Badges */}
                    <div className="mt-3">
                      <p className="text-[10px] uppercase tracking-wider text-gray-500 mb-2 flex items-center gap-1">
                        <Navigation size={10} /> Nearby
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {place.nearby?.map(
                          (nearbyItem: string, idx: number) => (
                            <span
                              key={idx}
                              className="text-[11px] bg-slate-800 text-gray-300 px-2 py-1 rounded-md border border-slate-700"
                            >
                              {nearbyItem}
                            </span>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Map Section */}
        <section>
          <h2 className="text-xl font-semibold mb-3">{mapText}</h2>
          <div className="h-64 rounded-3xl overflow-hidden border border-slate-800 grayscale-[0.3] hover:grayscale-0 transition-all">
            <MapPage />
          </div>
        </section>

        {/* Gallery Section */}
        <section>
          <h2 className="text-xl font-semibold mb-3">{galleryText}</h2>
          <div className="grid grid-cols-2 gap-3">
            {data.places?.map((item: any, i: number) => (
              <img
                key={i}
                src={item.img}
                alt={item.name}
                className={`rounded-2xl w-full object-cover ${i === 0 ? "h-40" : "h-40"}`}
              />
            ))}
          </div>
        </section>

        {/* Floating Action Bar */}
        <section className="sticky bottom-4 bg-yellow-400 text-black p-4 rounded-2xl flex justify-between items-center shadow-2xl shadow-yellow-400/20">
          <div>
            <p className="text-[10px] font-bold uppercase opacity-70">
              Ready to Visit?
            </p>
            <p className="font-bold">Plan Your Trip</p>
          </div>
          <button className="bg-black text-white px-6 py-2 rounded-xl text-sm font-bold active:scale-95 transition-transform">
            {explore}
          </button>
        </section>
      </div>
    </div>
  );
};

export default DestinationDetail;
