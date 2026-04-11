import { useEffect, useState } from "react";
import { FaCloudSun } from "react-icons/fa";

const Weather = () => {
  const [temp, setTemp] = useState<number | null>(null);
  const [city] = useState("Jodhpur");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`
        );
        const data = await res.json();

        setTemp(data.main.temp);
      } catch (err) {
        console.log("Weather error", err);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <div className="flex items-center gap-2 bg-black/30 px-3 py-1 rounded-lg">
      <FaCloudSun className="text-yellow-400 text-sm" />

      <div className="flex flex-col leading-tight">
        <span className="text-xs text-white font-medium">
          {temp ? `${temp}°C` : "Loading..."}
        </span>
        <span className="text-[10px] text-gray-400">{city}</span>
      </div>
    </div>
  );
};

export default Weather;
