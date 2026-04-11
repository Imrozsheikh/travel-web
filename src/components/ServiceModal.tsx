// src/components/ServiceModal.tsx

import {
    FaCheckCircle,
    FaMapMarkerAlt,
    FaClock,
    FaTimes,
    FaCar,
    FaMotorcycle,
  } from "react-icons/fa";
  
  type Props = {
    selected: any;
    type: string;
    onClose: () => void;
  };
  
  const ServiceModal = ({ selected, type, onClose }: Props) => {
    if (!selected) return null;
  
    return (
      <div className="fixed inset-0 bg-black/70 z-50 flex items-end md:items-center justify-center">
        <div className="bg-slate-900 w-full md:max-w-lg rounded-t-3xl md:rounded-3xl p-4 max-h-[90vh] overflow-y-auto">
          {/* Close */}
          <div className="flex justify-end">
            <button onClick={onClose}>
              <FaTimes className="text-white text-lg" />
            </button>
          </div>
  
          {/* Image */}
          <img
            src={selected.img}
            className="w-full h-[220px] object-cover rounded-2xl"
          />
  
          <div className="mt-4 pb-20 space-y-3">
            {/* Title */}
            <h2 className="text-2xl font-bold text-yellow-400">
              {selected.name}
            </h2>
  
            {/* Bike / Car */}
            {(type === "bike" || type === "car") && (
              <>
                <div className="bg-slate-800 rounded-xl p-3 text-sm space-y-2">
                  <p className="flex items-center gap-2">
                    {type === "bike" ? (
                      <FaMotorcycle className="text-yellow-400" />
                    ) : (
                      <FaCar className="text-yellow-400" />
                    )}
  
                    {selected.bike || selected.car}
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
            {type !== "bike" && type !== "car" && (
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
  