import Skeleton from "../Skeleton";
import { FaMotorcycle, FaCar, FaHotel, FaMapMarkedAlt } from "react-icons/fa";
import { images } from "../../data/images";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Services = ({ loading }: { loading: boolean }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // 🔥 SERVICES DATA
  const services = [
    {
      icon: <FaMotorcycle />,
      key: "bike",
      img: images.bike,
    },
    {
      icon: <FaCar />,
      key: "car",
      img: images.car,
    },
    {
      icon: <FaHotel />,
      key: "hotel",
      img: images.hotels,
    },
    {
      icon: <FaMapMarkedAlt />,
      key: "guide",
      img: images.guide,
    },
  ];

  // 🔥 NAVIGATION HANDLER
  const handleClick = (type: string) => {
    // ✅ TYPE ROUTE READY
    navigate(`/service/${type}`);

    // optional smooth scroll top
    // window.scrollTo(0, 0);
  };

  return (
    <div className="space-y-4">
      {/* 💎 TITLE */}
      <h3 className="text-yellow-400 font-semibold text-lg">
        {t("services.title")}
      </h3>

      {/* 🧩 GRID */}
      <div className="grid grid-cols-2 gap-3">
        {loading
          ? Array(4)
              .fill(0)
              .map((_, i) => (
                <Skeleton key={i} className="w-full h-[110px] rounded-xl" />
              ))
          : services.map((item) => (
              <div
                key={item.key}
                onClick={() => handleClick(item.key)}
                className="relative rounded-xl overflow-hidden cursor-pointer group border border-gray-800"
              >
                {/* 🖼 IMAGE */}
                <img
                  src={item.img}
                  className="w-full h-[110px] object-cover group-hover:scale-110 transition duration-300"
                />

                {/* 🌑 OVERLAY */}
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
                  {/* ICON */}
                  <div className="text-yellow-400 text-xl">{item.icon}</div>

                  {/* LABEL */}
                  <p className="text-sm font-medium text-white">
                    {t(`services.${item.key}`)}
                  </p>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Services;
