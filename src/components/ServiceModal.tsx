// src/components/ServiceModal.tsx

import { useEffect, useState } from "react";
import {
  FaCheckCircle,
  FaMapMarkerAlt,
  FaClock,
  FaTimes,
  FaCar,
  FaMotorcycle,
  FaChevronLeft,
  FaChevronRight,
  FaShuttleVan,
} from "react-icons/fa";

type Props = {
  selected: any;
  type: string;
  onClose: () => void;
};

const ServiceModal = ({ selected, type, onClose }: Props) => {
  const [current, setCurrent] = useState(0);

  // modal open new item => slider reset
  useEffect(() => {
    setCurrent(0);
  }, [selected]);

  if (!selected) return null;

  const images = selected.images?.length ? selected.images : [selected.img];

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const isVehicle = type === "bike" || type === "car" || type === "tuktuk";

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-end md:items-center justify-center">
      <div className="bg-slate-900 w-full md:max-w-lg rounded-t-3xl md:rounded-3xl p-4 max-h-[90vh] overflow-y-auto">
        {/* Close */}
        <div className="flex justify-end mb-2">
          <button onClick={onClose}>
            <FaTimes className="text-white text-lg" />
          </button>
        </div>

        {/* Image Slider */}
        <div className="relative">
          <img
            src={images[current]}
            className="w-full h-[220px] object-cover rounded-2xl"
            alt={selected.name}
          />

          {images.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 p-2 rounded-full"
              >
                <FaChevronLeft className="text-white text-sm" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 p-2 rounded-full"
              >
                <FaChevronRight className="text-white text-sm" />
              </button>

              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                {images.map((_: any, i: number) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full ${
                      current === i ? "bg-yellow-400" : "bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="mt-4 pb-20 space-y-3">
          {/* Title */}
          <h2 className="text-2xl font-bold text-yellow-400">
            {selected.name}
          </h2>

          {/* Bike / Car / Tuktuk */}
          {isVehicle && (
            <>
              <div className="bg-slate-800 rounded-xl p-3 text-sm space-y-2">
                <p className="flex items-center gap-2">
                  {type === "bike" && (
                    <FaMotorcycle className="text-yellow-400" />
                  )}

                  {type === "car" && <FaCar className="text-yellow-400" />}

                  {type === "tuktuk" && (
                    <FaShuttleVan className="text-yellow-400" />
                  )}

                  {selected.bike || selected.car || selected.vehicle}
                </p>

                <p className="flex items-center gap-2">
                  <FaClock className="text-yellow-400" />
                  {selected.duration}
                </p>

                <p className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-yellow-400" />
                  {selected.route}
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Included:</h3>

                <div className="space-y-2">
                  {selected.includes?.map((inc: string, idx: number) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-300"
                    >
                      <FaCheckCircle className="text-green-400" />
                      {inc}
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Hotel / Guide */}
          {!isVehicle && (
            <>
              <p className="text-sm text-gray-300">{selected.desc}</p>

              <div className="space-y-2">
                {selected.features?.map((item: string, i: number) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm text-gray-300"
                  >
                    <FaCheckCircle className="text-green-400" />
                    {item}
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Price */}
          <div className="pt-3 border-t border-gray-700">
            <p className="text-3xl font-bold text-yellow-400">
              ₹{selected.price}
            </p>
            <p className="text-xs text-gray-400">Final Price</p>
          </div>

          {/* Button */}
          <button className="w-full bg-yellow-400 text-black py-3 rounded-xl font-bold">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
