import { useParams } from "react-router-dom";
import { MapPin, Star } from "lucide-react";
import { destinationsData } from "../data/mockData";
import { useTranslation } from "react-i18next";
import MapPage from "../components/MapPage";

const DestinationDetail = () => {
  const { name } = useParams<{ name: string }>();
  const { t } = useTranslation();

  const key = decodeURIComponent(name || "")
    .toLowerCase()
    .trim();

  const data = destinationsData[key as keyof typeof destinationsData];

  if (!data) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        No Data Found for: {key}
      </div>
    );
  }

  const title = t(`destination.${key}.name`, key);
  const about = t(`destination.${key}.about`, "Beautifull place to explore");
  const mapText = t(`destination.${key}.map`, "Location");
  const placesText = t(`destination.${key}.places`, "Top Places");
  const galleryText = t(`destination.${key}.gallery`, "Gallery");
  const bestTime = t(`destination.${key}.bestTime`, "Best Time: Oct - March");
  const explore = t(`destination.${key}.explore`, "Explore");

  return (
    <div className="bg-slate-950 text-white min-h-screen pb-10">
      {/* Hero */}
      <div className="relative h-[320px]">
        <img
          src={data.hero}
          alt={title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-5">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-sm text-gray-300 mt-2">{about}</p>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Map */}
        <section>
          <h2 className="text-xl font-semibold mb-3">{mapText}</h2>

          <div className="h-64 rounded-2xl overflow-hidden border border-slate-800">
            {/* <iframe
              title="map"
              width="100%"
              height="100%"
              loading="lazy"
              src={`https://www.google.com/maps?q=${key}&output=embed`}
            /> */}
            <MapPage />
          </div>
        </section>

        {/* Places */}
        <section>
          <h2 className="text-xl font-semibold mb-3">{placesText}</h2>

          <div className="flex gap-4 overflow-x-auto pb-1">
            {data.places?.map((place: any, index: number) => (
              <div
                key={index}
                className="min-w-[180px] bg-slate-900 rounded-2xl overflow-hidden border border-slate-800"
              >
                <img
                  src={place.img}
                  alt={place.name}
                  className="h-[120px] w-full object-cover"
                />

                <div className="p-3">
                  <p className="font-medium">{place.name}</p>

                  <div className="flex items-center gap-1 text-yellow-400 text-sm mt-1">
                    <Star size={14} fill="currentColor" />
                    {place.rating}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section>
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-sm text-gray-400 leading-6">{about}</p>
        </section>

        {/* Gallery */}
        <section>
          <h2 className="text-xl font-semibold mb-3">{galleryText}</h2>

          <div className="grid grid-cols-3 gap-2">
            {data.places?.map((item: any, i: number) => (
              <img
                key={i}
                src={item.img}
                alt={item.name}
                className="rounded-xl h-[100px] w-full object-cover"
              />
            ))}
          </div>
        </section>

        {/* Quick Info */}
        <section className="bg-slate-900 rounded-2xl p-4 border border-slate-800 flex justify-between items-center gap-3">
          <div className="flex items-center gap-2">
            <MapPin className="text-yellow-400" size={18} />
            <span className="text-sm">{bestTime}</span>
          </div>

          <button className="bg-yellow-400 text-black px-4 py-2 rounded-xl text-sm font-medium">
            {explore}
          </button>
        </section>
      </div>
    </div>
  );
};

export default DestinationDetail;
