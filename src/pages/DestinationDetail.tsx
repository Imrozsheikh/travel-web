import { useParams } from "react-router-dom";
import { MapPin, Star } from "lucide-react";
import { destinationsData } from "../data/mockData";
import { useTranslation } from "react-i18next";

export default function DestinationDetail() {
  const { name } = useParams();
  const { t } = useTranslation();

  const data = destinationsData[name as keyof typeof destinationsData];

  if (!data) return <div className="p-4 text-white">No Data Found</div>;

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* HERO */}
      <div className="relative h-[320px]">
        <img src={data.hero} className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6">
          <h1 className="text-3xl font-bold">
            {t(`destination.${name}.name`)}
          </h1>

          <p className="text-sm text-gray-300">
            {t(`destination.${name}.about`)}
          </p>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* MAP */}
        <div>
          <h2 className="text-xl font-semibold mb-3">
            {t(`destination.${name}.map`)}
          </h2>

          <div className="h-64 rounded-2xl overflow-hidden">
            <iframe
              title="map"
              width="100%"
              height="100%"
              loading="lazy"
              src={`https://www.google.com/maps?q=${name}&output=embed`}
            />
          </div>
        </div>

        {/* PLACES */}
        <div>
          <h2 className="text-xl font-semibold mb-3">
            {t(`destination.${name}.places`)}
          </h2>

          <div className="flex gap-4 overflow-x-auto">
            {data.places.map((place: any) => (
              <div
                key={place.name}
                className="min-w-[180px] bg-slate-900 rounded-2xl overflow-hidden"
              >
                <img
                  src={place.img}
                  className="h-[120px] w-full object-cover"
                />

                <div className="p-3">
                  <p className="font-medium">{place.name}</p>

                  <div className="flex items-center gap-1 text-yellow-400 text-sm mt-1">
                    <Star size={14} /> {place.rating}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ABOUT */}
        <div>
          <h2 className="text-xl font-semibold mb-2">
            {t(`destination.${name}.name`)}
          </h2>

          <p className="text-gray-400 text-sm">
            {t(`destination.${name}.about`)}
          </p>
        </div>

        {/* GALLERY */}
        <div>
          <h2 className="text-xl font-semibold mb-3">
            {t(`destination.${name}.gallery`)}
          </h2>

          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <img
                key={i}
                src={`https://source.unsplash.com/300x300/?${name},travel`}
                className="rounded-xl h-[100px] w-full object-cover"
              />
            ))}
          </div>
        </div>

        {/* QUICK INFO */}
        <div className="bg-slate-900 rounded-2xl p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <MapPin className="text-yellow-400" size={18} />
            <span className="text-sm">{t(`destination.${name}.bestTime`)}</span>
          </div>

          <button className="bg-yellow-400 text-black px-4 py-2 rounded-xl text-sm">
            {t(`destination.${name}.explore`)}
          </button>
        </div>
      </div>
    </div>
  );
}
