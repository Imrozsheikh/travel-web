import { useState } from "react";
import {
  FaTimes,
  FaWhatsapp,
  FaUser,
  FaPhoneAlt,
} from "react-icons/fa";

type Props = {
  selected: any;
  type: string;
  onClose: () => void;
};

const ServiceModal = ({ selected, onClose }: Props) => {
  const [formData, setFormData] = useState({ name: "", phone: "" });

  if (!selected) return null;

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();

    const adminNumber = "919876543210"; // Apna number yahan dalein
    const message = `*Raahat Services - New Booking*%0A-----------------------%0A*Service:* ${selected.name}%0A*Price:* ₹${selected.price}%0A*Customer:* ${formData.name}%0A*Phone:* ${formData.phone}%0A-----------------------%0APlease confirm my slot.`;

    const appUrl = `whatsapp://send?phone=${adminNumber}&text=${message}`;
    const webUrl = `https://api.whatsapp.com/send?phone=${adminNumber}&text=${message}`;

    window.location.href = appUrl;

    setTimeout(() => {
      if (document.hasFocus()) {
        window.open(webUrl, "_blank");
      }
    }, 500);
  };

  return (
    <div className="fixed inset-0 bg-slate-900/80 z-[100] flex items-center justify-center backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-md rounded-[2.5rem] relative overflow-hidden shadow-2xl animate-in zoom-in duration-300">
        {/* Header Section */}
        <div className="bg-slate-900 p-8 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-slate-400 hover:text-white transition-all"
          >
            <FaTimes size={20} />
          </button>

          <div className="flex items-center gap-3 mb-2">
            <span className="bg-yellow-400 text-black text-[10px] font-black px-2 py-0.5 rounded-full uppercase">
              Selected Service
            </span>
          </div>
          <h2 className="text-2xl font-bold">{selected.name}</h2>
          <p className="text-slate-400 text-sm mt-1">
            Starting from{" "}
            <span className="text-yellow-400 font-bold">₹{selected.price}</span>
          </p>
        </div>

        {/* Form Section */}
        <div className="p-8">
          <form onSubmit={handleWhatsAppBooking} className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-500 uppercase ml-1">
                Your Name
              </label>
              <div className="relative">
                <FaUser
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300"
                  size={14}
                />
                <input
                  required
                  type="text"
                  placeholder="your name"
                  className="w-full bg-slate-50 border border-slate-200 py-4 pl-12 pr-4 rounded-2xl outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all text-slate-800 font-medium"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-500 uppercase ml-1">
                Phone Number
              </label>
              <div className="relative">
                <FaPhoneAlt
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300"
                  size={14}
                />
                <input
                  required
                  type="tel"
                  placeholder="mobile number"
                  className="w-full bg-slate-50 border border-slate-200 py-4 pl-12 pr-4 rounded-2xl outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all text-slate-800 font-medium"
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>
            </div>

            {/* <div className="flex items-center gap-2 text-[11px] text-slate-400 py-2">
              <FaCheckCircle className="text-green-500" />
              <span>Verified Service • 12+ Years Experience</span>
            </div> */}

            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-slate-900 hover:text-white text-black py-4 rounded-2xl font-black transition-all active:scale-95 flex items-center justify-center gap-3 shadow-xl shadow-yellow-400/20"
            >
              <FaWhatsapp size={22} />
              Book via WhatsApp
            </button>
          </form>

          <p className="text-center text-[10px] text-slate-400 mt-6 uppercase tracking-widest">
            We will contact you shortly after booking
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
