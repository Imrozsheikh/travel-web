import { useEffect, useState } from "react";
import { images } from "../data/images";
import Hero from "../components/homePage/Hero";
import Destinations from "../components/homePage/Destinations";
import Services from "../components/homePage/Services";
import AISection from "../components/homePage/AISection";
import BudgetSection from "../components/homePage/BudgetSection";
import LanguageSwitcher from "../components/LanguageSwitcher";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const imgs = Object.values(images);
    imgs.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-slate-950 text-white min-h-screen p-4 space-y-8">
      <Hero loading={loading} />
      <LanguageSwitcher />
      <Services loading={loading} />
      <Destinations loading={loading} />
      <AISection loading={loading} />
      <BudgetSection loading={loading} />
    </div>
  );
};

export default Home;
