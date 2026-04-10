import { useParams } from "react-router-dom";
import { MapPin, Star } from "lucide-react";

const places = [
  {
    name: "Lake Pichola",
    img: "https://images.unsplash.com/photo-1580654712603-eb43273aff33",
    rating: 4.8,
  },
  {
    name: "City Palace",
    img: "https://images.unsplash.com/photo-1599661046827-dacde6976540",
    rating: 4.7,
  },
  {
    name: "Jag Mandir",
    img: "https://images.unsplash.com/photo-1627894483216-2138af692e32",
    rating: 4.6,
  },
];

export default function DestinationDetail() {
  const { name } = useParams();

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* HERO SECTION */}
      <div className="relative h-[320px]">
        <img
          src="https://images.unsplash.com/photo-1603262110263-fb0112e7cc33"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6">
          <h1 className="text-3xl font-bold capitalize">{name}</h1>
          <p className="text-sm text-gray-300">Explore the beauty and culture</p>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* MAP SECTION */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Location Map</h2>
          <div className="h-64 rounded-2xl overflow-hidden">
            <iframe
              title="map"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              src={`https://www.google.com/maps?q=${name}&output=embed`}
            ></iframe>
          </div>
        </div>

        {/* POPULAR PLACES */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Popular Places</h2>
          <div className="flex gap-4 overflow-x-auto">
            {places.map((place) => (
              <div
                key={place.name}
                className="min-w-[180px] bg-slate-900 rounded-2xl overflow-hidden shadow-lg"
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
          <h2 className="text-xl font-semibold mb-2">About {name}</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            {name} is one of the most beautiful destinations known for its rich
            culture, heritage, and scenic views. It attracts tourists from all
            over the world and offers a perfect mix of history and modern
            experiences.
          </p>
        </div>

        {/* GALLERY */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Gallery</h2>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <img
                key={i}
                src={`https://source.unsplash.com/300x300/?${name},travel,${i}`}
                className="rounded-xl h-[100px] w-full object-cover"
              />
            ))}
          </div>
        </div>

        {/* QUICK INFO */}
        <div className="bg-slate-900 rounded-2xl p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <MapPin className="text-yellow-400" size={18} />
            <span className="text-sm">Best Time: Oct - Mar</span>
          </div>
          <button className="bg-yellow-400 text-black px-4 py-2 rounded-xl text-sm font-medium">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
}
