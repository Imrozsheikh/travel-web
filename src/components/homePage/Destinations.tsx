import { useNavigate } from "react-router-dom";
import Skeleton from "../Skeleton";
import { images } from "../../data/images";
import { useTranslation } from "react-i18next";

const Destinations = ({ loading }: { loading: boolean }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const destinations = [
    { key: "ambrai_Ghat", img: images.maldives },
    { key: "pichola_lake", img: images.dubai },
    { key: "fateh_sagar", img: images.bali },
    { key: "city_palace", img: images.bali },
  ];

  return (
    <div>
      {/* 🌍 Title */}
      <h3 className="text-yellow-400 mb-3 font-semibold">
        {t("destinations.title")}
      </h3>

      <div className="flex gap-3 overflow-x-auto">
        {loading
          ? Array(3)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="min-w-[160px]">
                  <Skeleton className="w-full h-[120px] rounded-xl" />
                  <Skeleton className="h-4 mt-2 w-20" />
                </div>
              ))
          : destinations.map((item) => {
              const name = t(`destinations.${item.key}`);

              return (
                <div
                  key={item.key}
                  className="min-w-[160px] rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition"
                  onClick={() => {
                    navigate(`/destination/${item.key}`);
                    window.scrollTo(0, 0);
                  }}
                >
                  <img
                    src={item.img}
                    className="w-full h-[120px] object-cover"
                  />

                  <div className="bg-slate-900 p-2">
                    <p className="text-sm">{name}</p>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Destinations;
