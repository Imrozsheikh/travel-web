import { useEffect, useState } from "react";
import Skeleton from "../Skeleton";
import { images } from "../../data/images";
import { useTranslation } from "react-i18next";

const Hero = ({ loading }: { loading: boolean }) => {
  const heroImages = [images.hero1, images.hero2, images.hero3, images.hero4];
  const [index, setIndex] = useState(0);
  const { t } = useTranslation();

  // 🔥 Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <Skeleton className="w-full h-[200px] rounded-2xl" />;
  }

  return (
    <div className="relative rounded-2xl overflow-hidden">
      {/* 🖼 Image */}
      <img
        src={heroImages[index]}
        className="w-full h-[200px] object-cover transition-all duration-700"
      />

      {/* 🌑 Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30 flex flex-col justify-center p-5">
        <h2 className="text-xl font-bold text-yellow-400">
          {t("welcome")}
          {/* Explore India Like Never Before 🇮🇳 */}
        </h2>

        <input
          placeholder="Search destinations..."
          className="mt-3 p-2 rounded text-black outline-none"
        />
      </div>

      {/* 🔘 Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {heroImages.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full ${
              index === i ? "bg-yellow-400" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
